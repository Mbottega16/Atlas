"""Live-capture route: dormant without a key, wired correctly with one mocked."""

import pytest

from app.config import settings


def test_capture_disabled_without_key(client):
    assert client.get("/api/capture/enabled").json() == {"enabled": False}
    resp = client.post("/api/capture/research", json={"links": ["https://a.com"]})
    assert resp.status_code == 503


def test_capture_research_empty_links_422(client):
    resp = client.post("/api/capture/research", json={"links": []})
    assert resp.status_code == 422


def test_capture_research_with_key_mocked(client, monkeypatch):
    monkeypatch.setattr(settings, "anthropic_api_key", "sk-test")

    def fake_research(links, notes=None):
        from app.schemas.entry import EntryCreate

        return [EntryCreate(link=links[0], title="Mocked", category="misc", tags=["m"])]

    monkeypatch.setattr("app.services.capture_service.research_links", fake_research)

    assert client.get("/api/capture/enabled").json() == {"enabled": True}
    resp = client.post("/api/capture/research", json={"links": ["https://a.com"]})
    assert resp.status_code == 200
    drafts = resp.json()["drafts"]
    assert drafts == [
        {
            "link": "https://a.com",
            "title": "Mocked",
            "category": "misc",
            "description": None,
            "use_case": None,
            "tags": ["m"],
        }
    ]
    # Drafts are not persisted.
    assert client.get("/api/entries").json()["total"] == 0
