from fastapi import HTTPException, Request

from app.config import settings
from app.db.session import get_db
from app.services import auth

__all__ = ["get_db", "require_auth"]


def require_auth(request: Request) -> None:
    """Gate dependency for every data route. No-op when the auth gate is
    disabled (no ADMIN_PASSWORD set) so local dev and tests run unchanged;
    otherwise a valid signed session cookie is required."""
    if not settings.auth_enabled:
        return
    token = request.cookies.get(auth.COOKIE_NAME)
    if not auth.token_is_valid(token):
        raise HTTPException(status_code=401, detail="Not authenticated")
