from pydantic import BaseModel


class LoginRequest(BaseModel):
    password: str


class AuthStatus(BaseModel):
    required: bool  # is the auth gate switched on at all (ADMIN_PASSWORD set)?
    authenticated: bool  # does this caller currently hold a valid session?
