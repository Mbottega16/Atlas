def _add(client, link, **kw):
    payload = {"link": link, "category": kw.get("category", "misc"), "tags": kw.get("tags", [])}
    payload.update({k: v for k, v in kw.items() if k in ("title", "description", "use_case")})
    return client.post("/api/entries", json=payload).json()


def test_export_round_trips_through_import(client):
    a = _add(client, "https://keep.com", title="Keep", tags=["x"])
    client.post(f"/api/entries/{a['id']}/favorite?favorite=true")
    _add(client, "https://two.com")

    dump = client.get("/api/export").json()
    assert dump["count"] == 2
    assert {e["link"] for e in dump["entries"]} == {"https://keep.com", "https://two.com"}
    assert any(e["is_favorite"] for e in dump["entries"])

    # Re-importing the same dump updates in place, and restores favorite state.
    res = client.post("/api/import", json=dump)
    assert res.status_code == 200
    assert res.json() == {"created": 0, "updated": 2}

    reloaded = client.get("/api/entries?favorite=true").json()
    assert reloaded["total"] == 1
    assert reloaded["items"][0]["link"] == "https://keep.com"


def test_import_creates_missing_entries(client):
    dump = {
        "version": 1,
        "exported_at": "2026-08-30T00:00:00",
        "count": 1,
        "entries": [{"link": "https://new.com", "category": "fresh", "tags": ["t"]}],
    }
    res = client.post("/api/import", json=dump)
    assert res.json() == {"created": 1, "updated": 0}
    assert client.get("/api/entries?q=new.com").json()["total"] == 1
