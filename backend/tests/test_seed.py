"""The committed seed is the library. These checks keep it loadable and tidy."""

import pathlib
import re
from datetime import date

from app.db.seed import load_seed_rows, read_seed
from app.models.entry import PROFILE_FIELDS, Entry
from app.services.links import canonical_link
from app.taxonomy import ACCESS, CATEGORIES, COSTS

PUBLIC = pathlib.Path(__file__).resolve().parent.parent.parent / "frontend" / "public"
BASE_FIELDS = {"link", "title", "category", "description", "use_case", "tags", "source", "added"}
PROFILE_TEXT = ("price_note", "best_for", "limits", "warning", "verification")


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
        assert set(r) <= BASE_FIELDS | set(PROFILE_FIELDS), (r["link"], set(r) - BASE_FIELDS)


def test_seed_profiles_are_dated_and_use_known_words():
    """A profile is a person's check of the tool's own pages: it always says
    when, and what was checked."""
    profiled = [r for r in read_seed() if set(r) & set(PROFILE_FIELDS)]
    for r in profiled:
        assert r.get("last_verified") and r.get("verification"), r["link"]
        assert date.fromisoformat(r["last_verified"]) <= date.today(), r["link"]
        assert r.get("cost", "free") in COSTS, (r["link"], r["cost"])
        assert r.get("access", "no sign-up") in ACCESS, (r["link"], r["access"])
        for f in PROFILE_TEXT:
            if f in r:
                assert isinstance(r[f], str) and 0 < len(r[f].strip()) <= 320, (r["link"], f)
        if "screenshot" in r:
            assert re.fullmatch(r"shots/[a-z0-9.-]+\.jpg", r["screenshot"]), r["link"]
            assert (PUBLIC / r["screenshot"]).is_file(), (r["link"], r["screenshot"])


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
