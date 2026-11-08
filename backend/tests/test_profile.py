"""The optional entry profile (app.models.entry.PROFILE_FIELDS): stored, kept
through re-imports, exported only when set, and migrated onto old databases."""

import importlib.util
import pathlib

import sqlalchemy as sa
from alembic import command
from alembic.config import Config

from app.config import settings
from app.models.entry import PROFILE_FIELDS, Entry

BACKEND = pathlib.Path(__file__).resolve().parent.parent

PROFILE = {
    "cost": "freemium",
    "price_note": "Free account; paid plans",
    "access": "free account",
    "best_for": "First look at a host",
    "limits": "Results can be stale",
    "warning": "Ran attack code in 2026",
    "last_verified": "2026-10-25",
    "verification": "Read the pricing page",
    "screenshot": "shots/example.com.jpg",
}


def _export_seed():
    spec = importlib.util.spec_from_file_location("export_seed", BACKEND / "scripts" / "export_seed.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def test_profile_round_trips_through_the_api(client):
    body = client.post(
        "/api/entries",
        json={"link": "https://example.com", "category": "productivity", "tags": [], **PROFILE},
    ).json()
    got = client.get(f"/api/entries/{body['id']}").json()
    assert {f: got[f] for f in PROFILE_FIELDS} == PROFILE


def test_batch_reimport_without_profile_keeps_it(client):
    client.post("/api/entries/batch", json=[{"link": "https://a.com", "category": "x", **PROFILE}])
    res = client.post(
        "/api/entries/batch", json=[{"link": "https://a.com", "category": "x", "title": "Renamed"}]
    ).json()
    entry = res["updated"][0]
    assert entry["title"] == "Renamed"
    assert {f: entry[f] for f in PROFILE_FIELDS} == PROFILE


def test_batch_clears_a_profile_field_sent_as_null(client):
    client.post("/api/entries/batch", json=[{"link": "https://a.com", "category": "x", **PROFILE}])
    res = client.post(
        "/api/entries/batch", json=[{"link": "https://a.com", "category": "x", "warning": None}]
    ).json()
    assert res["updated"][0]["warning"] is None
    assert res["updated"][0]["cost"] == "freemium"


def test_update_changes_one_profile_field(client):
    entry_id = client.post(
        "/api/entries", json={"link": "https://a.com", "category": "x", **PROFILE}
    ).json()["id"]
    got = client.put(f"/api/entries/{entry_id}", json={"cost": "paid"}).json()
    assert got["cost"] == "paid"
    assert got["best_for"] == PROFILE["best_for"]


def test_capture_draft_shape_has_no_profile(client):
    from app.api.routes.capture import ResearchResponse
    from app.schemas.entry import EntryCreate

    draft = EntryCreate(link="https://a.com", category="x", **PROFILE)
    assert set(ResearchResponse(drafts=[draft]).model_dump()["drafts"][0]) == {
        "link", "title", "category", "description", "use_case", "tags"
    }


def test_backup_export_includes_profile(client):
    client.post("/api/entries", json={"link": "https://a.com", "category": "x", **PROFILE})
    exported = client.get("/api/export").json()["entries"][0]
    assert {f: exported[f] for f in PROFILE_FIELDS} == PROFILE


def test_seed_record_writes_profile_fields_only_when_set(db_session):
    from app.schemas.entry import EntryCreate
    from app.services import entry_service

    plain = entry_service.create_entry(db_session, EntryCreate(link="https://plain.com", category="x"))
    profiled = entry_service.create_entry(
        db_session, EntryCreate(link="https://profiled.com", category="x", **PROFILE)
    )
    export_seed = _export_seed()
    assert list(export_seed.seed_record(plain)) == [
        "link", "title", "category", "description", "use_case", "tags", "source", "added"
    ]
    record = export_seed.seed_record(profiled)
    assert list(record)[8:] == list(PROFILE_FIELDS)
    assert {f: record[f] for f in PROFILE_FIELDS} == PROFILE


def test_export_refuses_words_outside_the_taxonomy():
    export_seed = _export_seed()
    ok = {"category": "productivity", "cost": "free", "access": "no sign-up"}
    assert export_seed.problems([ok]) == []
    found = export_seed.problems([{**ok, "cost": "cheap"}, {**ok, "access": "login"}])
    assert found == [
        "cost values outside app/taxonomy.py: ['cheap']",
        "access values outside app/taxonomy.py: ['login']",
    ]


def test_migration_adds_and_removes_the_profile_columns(tmp_path, monkeypatch):
    url = f"sqlite:///{(tmp_path / 'old.db').as_posix()}"
    monkeypatch.setattr(settings, "database_url", url)
    # No config file: env.py's fileConfig would reset pytest's loggers.
    cfg = Config()
    cfg.set_main_option("script_location", str(BACKEND / "alembic"))

    command.upgrade(cfg, "0001")
    engine = sa.create_engine(url)
    with engine.begin() as conn:
        conn.execute(sa.text(
            "INSERT INTO entries (link, category, source, is_favorite, created_at, updated_at) "
            "VALUES ('https://old.com', 'x', 'manual', 0, '2026-08-26', '2026-08-26')"
        ))
    columns = lambda: {c["name"] for c in sa.inspect(engine).get_columns("entries")}  # noqa: E731

    command.upgrade(cfg, "head")
    assert set(PROFILE_FIELDS) <= columns()
    assert set(PROFILE_FIELDS) <= set(Entry.__table__.columns.keys())
    with engine.connect() as conn:
        assert conn.execute(sa.text("SELECT link, cost FROM entries")).all() == [("https://old.com", None)]

    command.downgrade(cfg, "0001")
    assert not set(PROFILE_FIELDS) & columns()
    with engine.connect() as conn:
        assert conn.execute(sa.text("SELECT link FROM entries")).all() == [("https://old.com",)]
    engine.dispose()
