"""Auth gate: off when no ADMIN_PASSWORD, enforced on every data route when set."""

import pytest

from app.config import settings
from app.services import ratelimit


@pytest.fixture(autouse=True)
def _clear_ratelimit():
    ratelimit._failures.clear()
    yield
    ratelimit._failures.clear()


def test_gate_off_by_default(client):
    status = client.get("/api/auth/status").json()
    assert status == {"required": False, "authenticated": True}
    # Data routes are open with the gate off.
    assert client.get("/api/entries").status_code == 200


@pytest.fixture()
def gated(monkeypatch):
    monkeypatch.setattr(settings, "admin_password", "hunter2")
    monkeypatch.setattr(settings, "admin_session_secret", "test-secret")
    yield


def test_gate_blocks_without_session(client, gated):
    assert client.get("/api/auth/status").json() == {"required": True, "authenticated": False}
    assert client.get("/api/entries").status_code == 401
    assert client.post("/api/entries/batch", json=[]).status_code == 401


def test_wrong_password_rejected(client, gated):
    assert client.post("/api/auth/login", json={"password": "nope"}).status_code == 401
    assert client.get("/api/entries").status_code == 401


def test_login_then_access_then_logout(client, gated):
    resp = client.post("/api/auth/login", json={"password": "hunter2"})
    assert resp.status_code == 200
    assert resp.json() == {"required": True, "authenticated": True}
    # TestClient keeps the Set-Cookie for subsequent calls.
    assert client.get("/api/entries").status_code == 200
    assert client.get("/api/auth/status").json()["authenticated"] is True

    assert client.post("/api/auth/logout").status_code == 200
    assert client.get("/api/entries").status_code == 401


def test_lockout_after_repeated_failures(client, gated):
    for _ in range(5):
        assert client.post("/api/auth/login", json={"password": "x"}).status_code == 401
    # 6th attempt is throttled even though the password is now correct.
    resp = client.post("/api/auth/login", json={"password": "hunter2"})
    assert resp.status_code == 429
    assert "Retry-After" in resp.headers
