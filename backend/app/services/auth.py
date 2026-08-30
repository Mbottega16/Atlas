"""Auth gate helpers — a single shared password plus an itsdangerous-signed
session cookie, mirroring LittleSprout-Rewards. No user accounts: this is a
solo tool, the gate just stops anyone with the public URL from reading or
writing the library."""

from itsdangerous import BadSignature, SignatureExpired, URLSafeTimedSerializer

from app.config import settings

COOKIE_NAME = "atlas_session"
_COOKIE_VALUE = "atlas-admin"  # constant payload — presence of a valid signature is the whole check


def _serializer() -> URLSafeTimedSerializer:
    # admin_session_secret should be set in .env before deploy; fall back to
    # the password so a misconfigured deploy still signs *something* rather
    # than crashing. Both empty only when the gate is disabled anyway.
    secret = settings.admin_session_secret or settings.admin_password or "atlas-dev-unsafe"
    return URLSafeTimedSerializer(secret, salt="atlas-auth")


def issue_token() -> str:
    return _serializer().dumps(_COOKIE_VALUE)


def token_is_valid(token: str | None) -> bool:
    if not token:
        return False
    try:
        _serializer().loads(token, max_age=settings.session_max_age)
        return True
    except (BadSignature, SignatureExpired):
        return False


def password_matches(candidate: str) -> bool:
    # Plain comparison is fine for a single static secret; no user enumeration
    # surface here. Kept as a function so it's the one place to harden later.
    return bool(settings.admin_password) and candidate == settings.admin_password
