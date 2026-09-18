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


def test_search_by_query_and_category_combined(client):
    client.post(
        "/api/entries",
        json={
            "link": "https://deploy-a.com",
            "category": "hosting & ops",
            "description": "Deploy a frontend with preview builds",
            "tags": [],
        },
    )
    client.post(
        "/api/entries",
        json={
            "link": "https://deploy-b.com",
            "category": "developer tools",
            "description": "Deploy previews for pull requests",
            "tags": [],
        },
    )

    # q alone matches both; q + category narrows to one (the Find tree relies
    # on category AND q being applied together server-side)
    assert client.get("/api/entries", params={"q": "deploy"}).json()["total"] == 2
    resp = client.get(
        "/api/entries", params={"q": "deploy", "category": "hosting & ops"}
    )
    assert resp.json()["total"] == 1
    assert resp.json()["items"][0]["link"] == "https://deploy-a.com"


def test_link_is_canonicalized_on_create():
    from app.services.links import canonical_link

    assert canonical_link("http://www.Example.com/") == "https://example.com"
    assert canonical_link("https://example.com/path/") == "https://example.com/path"
    assert canonical_link("example.com") == "https://example.com"
    assert (
        canonical_link("https://example.com/a?b=2#frag") == "https://example.com/a?b=2"
    )


def test_duplicate_link_variants_rejected(client):
    payload = {"link": "https://www.canon-test.com/", "category": "x", "tags": []}
    assert client.post("/api/entries", json=payload).status_code == 201

    # same site, different surface form -> treated as the existing entry
    for variant in (
        "http://canon-test.com",
        "https://canon-test.com/",
        "https://www.canon-test.com",
    ):
        resp = client.post(
            "/api/entries", json={"link": variant, "category": "x", "tags": []}
        )
        assert resp.status_code == 409

    assert client.get("/api/entries").json()["total"] == 1


def test_batch_import_dedupes_link_variants(client):
    client.post(
        "/api/entries/batch",
        json=[
            {"link": "https://variant.com", "category": "a", "tags": []},
            {"link": "http://www.variant.com/", "category": "a-updated", "tags": []},
        ],
    )
    resp = client.get("/api/entries")
    assert resp.json()["total"] == 1
    assert resp.json()["items"][0]["category"] == "a-updated"


def _add(client, link, **fields):
    body = {"link": link, "category": "misc", "tags": [], **fields}
    assert client.post("/api/entries", json=body).status_code == 201


def _links(resp):
    return [item["link"] for item in resp.json()["items"]]


def test_search_matches_a_word_that_only_lives_in_a_tag(client):
    _add(client, "https://splat.com", title="Splat viewer", tags=["gaussian splatting"])
    _add(client, "https://other.com", title="Unrelated")

    resp = client.get("/api/entries", params={"q": "gaussian"})
    assert _links(resp) == ["https://splat.com"]


def test_search_ranks_a_title_match_above_a_description_match(client):
    # Created first, so plain newest-first ordering would put it last.
    _add(client, "https://title-hit.com", title="Regex tester")
    _add(client, "https://desc-hit.com", title="Toolbox", description="Includes a regex helper")

    resp = client.get("/api/entries", params={"q": "regex"})
    assert _links(resp) == ["https://title-hit.com", "https://desc-hit.com"]


def test_essential_entries_rank_first_without_a_query(client):
    _add(client, "https://older-essential.com", tags=["essential"])
    _add(client, "https://newer-plain.com")

    resp = client.get("/api/entries")
    assert _links(resp)[0] == "https://older-essential.com"


def test_categories_filter_matches_any_listed_category(client):
    _add(client, "https://a.com", category="game dev")
    _add(client, "https://b.com", category="vfx & 3d")
    _add(client, "https://c.com", category="cooking")

    resp = client.get(
        "/api/entries", params=[("categories", "game dev"), ("categories", "vfx & 3d")]
    )
    assert sorted(_links(resp)) == ["https://a.com", "https://b.com"]


def test_offset_paging_never_repeats_or_skips_a_row(client):
    links = [f"https://page-{i}.com" for i in range(7)]
    for i, link in enumerate(links):
        _add(client, link, tags=["essential"] if i % 3 == 0 else [])

    seen = []
    for offset in range(0, 7, 3):
        resp = client.get("/api/entries", params={"limit": 3, "offset": offset})
        seen += _links(resp)
    assert sorted(seen) == sorted(links)
