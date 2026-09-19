"""The committed seed is the library. These checks keep it loadable and tidy."""

from app.db.seed import load_seed_rows, read_seed
from app.models.entry import Entry
from app.services.links import canonical_link
from app.taxonomy import CATEGORIES


def test_seed_entries_are_well_formed():
    rows = read_seed()
    assert len(rows) > 900
    links = [r["link"] for r in rows]
    assert len(links) == len(set(links)), "duplicate links in the seed"
    for r in rows:
        assert r["link"] == canonical_link(r["link"]), r["link"]
        assert r["category"] in CATEGORIES, (r["link"], r["category"])
        assert r["tags"] == sorted(set(r["tags"])), r["link"]
        assert r["category"] not in r["tags"], r["link"]
        assert r.get("added"), r["link"]


def test_seed_loads_into_a_fresh_db(db_session):
    n = load_seed_rows(db_session)
    assert db_session.query(Entry).count() == n


def test_batch_reports_new_categories_and_tags(client):
    client.post("/api/entries/batch", json=[{"link": "https://a.com", "category": "education", "tags": ["math"]}])
    res = client.post(
        "/api/entries/batch",
        json=[{"link": "https://b.com", "category": "brand new", "tags": ["math", "Fresh "]}],
    ).json()
    assert res["new_categories"] == ["brand new"]
    assert res["new_tags"] == ["fresh"]
