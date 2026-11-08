"""Stacks and comparisons (seed/atlas-collections.json) point at real entries.

The site drops a member it can't find, so this is the check that notices."""

import json
import re
from datetime import date

from app.db.seed import SEED_JSON, read_seed

COLLECTIONS = SEED_JSON.with_name("atlas-collections.json")
# A comparison table shows these for every member, so none may be missing.
COMPARED = ("cost", "access", "best_for", "limits", "last_verified")


def _collections() -> dict:
    return json.loads(COLLECTIONS.read_text(encoding="utf-8"))


def _check_common(c: dict) -> None:
    assert re.fullmatch(r"[a-z0-9-]+", c["id"]), c["id"]
    assert c["title"].strip(), c["id"]
    assert date.fromisoformat(c["last_verified"]) <= date.today(), c["id"]
    assert all(n.strip() for n in c.get("notes", [])), c["id"]
    if "source" in c:
        assert c["source"]["label"].strip() and c["source"]["link"].startswith("https://"), c["id"]


def test_collection_ids_are_unique():
    data = _collections()
    ids = [c["id"] for kind in ("stacks", "comparisons") for c in data[kind]]
    assert len(ids) == len(set(ids))


def test_stacks_use_real_entries_without_trust_warnings():
    seed = {r["link"]: r for r in read_seed()}
    for stack in _collections()["stacks"]:
        _check_common(stack)
        assert stack["summary"].strip(), stack["id"]
        assert len(stack["steps"]) >= 2, stack["id"]
        for step in stack["steps"]:
            assert step["link"] in seed, (stack["id"], step["link"])
            assert step["do"].strip(), (stack["id"], step["link"])
            # A stack recommends its tools; one with a trust warning can't be in it.
            assert "warning" not in seed[step["link"]], (stack["id"], step["link"])


def test_comparisons_compare_fully_checked_profiles():
    seed = {r["link"]: r for r in read_seed()}
    for comparison in _collections()["comparisons"]:
        _check_common(comparison)
        assert comparison["question"].strip() and comparison["framing"].strip(), comparison["id"]
        links = [m["link"] for m in comparison["members"]]
        assert 2 <= len(links) <= 4 and len(set(links)) == len(links), comparison["id"]
        for member in comparison["members"]:
            row = seed.get(member["link"])
            assert row, (comparison["id"], member["link"])
            assert member["role"].strip(), (comparison["id"], member["link"])
            for field in COMPARED:
                assert row.get(field), (comparison["id"], member["link"], field)
        assert {p["link"] for p in comparison["pick"]} <= set(links), comparison["id"]
        assert all(p["when"].strip() for p in comparison["pick"]), comparison["id"]
        assert all(s.strip() for s in comparison.get("steps", [])), comparison["id"]
