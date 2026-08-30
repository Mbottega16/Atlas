"""Tag rename (a plain rename, or a merge when the target already exists) and
explicit multi-tag merge."""


def _add(client, link, tags):
    return client.post(
        "/api/entries", json={"link": link, "category": "misc", "tags": tags}
    ).json()


def _tags(client):
    return {t["name"]: t["count"] for t in client.get("/api/tags").json()}


def test_plain_rename(client):
    _add(client, "https://a.com", ["figma"])
    resp = client.put("/api/tags/figma", json={"new_name": "Figma Design"})
    assert resp.status_code == 200
    assert resp.json() == {"tag": "figma design", "entries_touched": 0, "merged": False}
    assert _tags(client) == {"figma design": 1}


def test_rename_onto_existing_merges(client):
    _add(client, "https://a.com", ["js", "frontend"])
    _add(client, "https://b.com", ["javascript"])
    resp = client.put("/api/tags/js", json={"new_name": "javascript"})
    body = resp.json()
    assert body["merged"] is True
    assert body["tag"] == "javascript"
    assert body["entries_touched"] == 1
    tags = _tags(client)
    assert "js" not in tags
    assert tags["javascript"] == 2  # a.com moved onto b.com's tag, no dupes


def test_merge_multiple_into_new_tag(client):
    _add(client, "https://a.com", ["ml"])
    _add(client, "https://b.com", ["ai", "llm"])
    resp = client.post("/api/tags/merge", json={"sources": ["ml", "llm"], "into": "ai"})
    assert resp.status_code == 200
    assert resp.json()["tag"] == "ai"
    tags = _tags(client)
    assert set(tags) == {"ai"}
    assert tags["ai"] == 2


def test_rename_missing_tag_404(client):
    assert client.put("/api/tags/ghost", json={"new_name": "x"}).status_code == 404


def test_rename_to_blank_422(client):
    _add(client, "https://a.com", ["keep"])
    assert client.put("/api/tags/keep", json={"new_name": "  "}).status_code == 422
