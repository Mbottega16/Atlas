def test_health(client):
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


def test_create_and_get_entry(client):
    payload = {
        "link": "https://example.com/tool",
        "title": "Example Tool",
        "category": "productivity",
        "description": "A tool for testing",
        "use_case": "quick lookups",
        "tags": ["Testing", "cli"],
    }
    resp = client.post("/api/entries", json=payload)
    assert resp.status_code == 201
    body = resp.json()
    assert body["link"] == payload["link"]
    assert sorted(body["tags"]) == ["cli", "testing"]  # tags normalized lowercase

    resp = client.get(f"/api/entries/{body['id']}")
    assert resp.status_code == 200
    assert resp.json()["title"] == "Example Tool"


def test_create_duplicate_link_rejected(client):
    payload = {"link": "https://example.com/dup", "category": "misc", "tags": []}
    assert client.post("/api/entries", json=payload).status_code == 201
    resp = client.post("/api/entries", json=payload)
    assert resp.status_code == 409


def test_search_filters_by_tag_and_category(client):
    client.post(
        "/api/entries",
        json={"link": "https://a.com", "category": "design", "tags": ["figma"]},
    )
    client.post(
        "/api/entries",
        json={"link": "https://b.com", "category": "code", "tags": ["figma"]},
    )
    client.post(
        "/api/entries",
        json={"link": "https://c.com", "category": "code", "tags": ["vscode"]},
    )

    resp = client.get("/api/entries", params={"tag": "figma"})
    assert resp.json()["total"] == 2

    resp = client.get("/api/entries", params={"category": "code", "tag": "figma"})
    assert resp.json()["total"] == 1
    assert resp.json()["items"][0]["link"] == "https://b.com"


def test_update_entry(client):
    resp = client.post(
        "/api/entries", json={"link": "https://update.com", "category": "old", "tags": []}
    )
    entry_id = resp.json()["id"]

    resp = client.put(f"/api/entries/{entry_id}", json={"category": "new"})
    assert resp.status_code == 200
    assert resp.json()["category"] == "new"


def test_delete_entry(client):
    resp = client.post(
        "/api/entries", json={"link": "https://delete.com", "category": "x", "tags": []}
    )
    entry_id = resp.json()["id"]

    assert client.delete(f"/api/entries/{entry_id}").status_code == 204
    assert client.get(f"/api/entries/{entry_id}").status_code == 404


def test_tags_and_categories_endpoints(client):
    client.post(
        "/api/entries",
        json={"link": "https://x.com", "category": "design", "tags": ["figma", "ui"]},
    )
    resp = client.get("/api/tags")
    names = {t["name"] for t in resp.json()}
    assert {"figma", "ui"} <= names

    resp = client.get("/api/categories")
    assert any(c["name"] == "design" for c in resp.json())


def test_visit_marks_visited_at(client):
    resp = client.post(
        "/api/entries", json={"link": "https://visit-me.com", "category": "x", "tags": []}
    )
    entry_id = resp.json()["id"]
    assert resp.json()["visited_at"] is None

    resp = client.post(f"/api/entries/{entry_id}/visit")
    assert resp.status_code == 200
    assert resp.json()["visited_at"] is not None


def test_favorite_toggle(client):
    resp = client.post(
        "/api/entries", json={"link": "https://fav-me.com", "category": "x", "tags": []}
    )
    entry_id = resp.json()["id"]
    assert resp.json()["is_favorite"] is False

    resp = client.post(f"/api/entries/{entry_id}/favorite")
    assert resp.json()["is_favorite"] is True

    resp = client.post(f"/api/entries/{entry_id}/favorite", params={"favorite": False})
    assert resp.json()["is_favorite"] is False


def test_favorite_filter(client):
    a = client.post(
        "/api/entries", json={"link": "https://fa.com", "category": "x", "tags": []}
    ).json()
    client.post(
        "/api/entries", json={"link": "https://fb.com", "category": "x", "tags": []}
    )
    client.post(f"/api/entries/{a['id']}/favorite")

    resp = client.get("/api/entries", params={"favorite": True})
    assert resp.json()["total"] == 1
    assert resp.json()["items"][0]["link"] == "https://fa.com"


def test_batch_import_upserts_on_link(client):
    batch = [
        {"link": "https://batch1.com", "category": "cat1", "tags": ["a"]},
        {"link": "https://batch2.com", "category": "cat2", "tags": ["b"]},
    ]
    resp = client.post("/api/entries/batch", json=batch)
    assert resp.status_code == 200
    body = resp.json()
    assert len(body["created"]) == 2
    assert len(body["updated"]) == 0

    # re-importing the same link updates instead of duplicating
    resp = client.post(
        "/api/entries/batch",
        json=[{"link": "https://batch1.com", "category": "cat1-updated", "tags": ["a"]}],
    )
    body = resp.json()
    assert len(body["created"]) == 0
    assert len(body["updated"]) == 1
    assert body["updated"][0]["category"] == "cat1-updated"

    resp = client.get("/api/entries")
    assert resp.json()["total"] == 2  # still just 2 rows, not 3
