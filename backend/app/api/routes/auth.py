from fastapi import APIRouter, HTTPException, Request, Response

from app.config import settings
from app.schemas.auth import AuthStatus, LoginRequest
from app.services import auth, ratelimit

router = APIRouter()


def _client_key(request: Request) -> str:
    return request.client.host if request.client else "unknown"


def _set_session_cookie(response: Response) -> None:
    response.set_cookie(
        key=auth.COOKIE_NAME,
        value=auth.issue_token(),
        max_age=settings.session_max_age,
        httponly=True,
        samesite="lax",
        secure=settings.cookie_secure,
        path="/",
    )


@router.get("/auth/status", response_model=AuthStatus)
def auth_status(request: Request):
    # Kept out of the require_auth gate on purpose: the frontend calls this
    # before it knows whether it's logged in. `required` tells the UI whether
    # to show the gate at all; `authenticated` lets it skip the gate on reload
    # when the cookie is still good.
    if not settings.auth_enabled:
        return AuthStatus(required=False, authenticated=True)
    token = request.cookies.get(auth.COOKIE_NAME)
    return AuthStatus(required=True, authenticated=auth.token_is_valid(token))


@router.post("/auth/login", response_model=AuthStatus)
def login(data: LoginRequest, request: Request, response: Response):
    if not settings.auth_enabled:
        # Gate disabled — nothing to log into, report success so the UI proceeds.
        return AuthStatus(required=False, authenticated=True)

    key = _client_key(request)
    if ratelimit.is_locked(key):
        raise HTTPException(
            status_code=429,
            detail="Too many attempts. Wait a bit and try again.",
            headers={"Retry-After": str(ratelimit.retry_after_seconds(key))},
        )
    if not auth.password_matches(data.password):
        ratelimit.record_failure(key)
        raise HTTPException(status_code=401, detail="Wrong password")

    ratelimit.reset(key)
    _set_session_cookie(response)
    return AuthStatus(required=True, authenticated=True)


@router.post("/auth/logout", response_model=AuthStatus)
def logout(response: Response):
    response.delete_cookie(auth.COOKIE_NAME, path="/")
    return AuthStatus(required=settings.auth_enabled, authenticated=False)
