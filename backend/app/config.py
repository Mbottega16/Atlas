from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """App configuration, loaded from backend/.env (see .env.example)."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str = "sqlite:///./data/atlas.db"

    # Origins allowed to call the API cross-origin *with credentials*. The
    # Vite dev server runs on 5173; the deployed app is same-origin so it
    # doesn't need an entry here. Comma-separated in .env.
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    # Auth gate (Phase 5). When admin_password is empty the gate is OFF —
    # every route is open (local dev + tests). Set both in .env before
    # deploying anywhere public.
    admin_password: str = ""
    admin_session_secret: str = ""
    # Set true when served over HTTPS (i.e. on Render) so the session
    # cookie carries the Secure flag. Left false for local http dev.
    cookie_secure: bool = False
    # How long a login lasts, in seconds (default 30 days).
    session_max_age: int = 60 * 60 * 24 * 30

    @property
    def auth_enabled(self) -> bool:
        return bool(self.admin_password)

    # Live Claude-assisted capture (Phase 7) — left empty on purpose until
    # explicitly approved, same pattern as Chegga's coaching feature.
    anthropic_api_key: str = ""


settings = Settings()
