"""The link checker's redirect handling, against a local server (no internet)."""

import importlib.util
import pathlib
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer

import pytest

_SCRIPT = pathlib.Path(__file__).resolve().parents[1] / "scripts" / "check_links.py"
_spec = importlib.util.spec_from_file_location("check_links", _SCRIPT)
check_links = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(check_links)


class _Site(BaseHTTPRequestHandler):
    routes = {
        "/old": (301, "/new"),
        "/temp": (302, "/new"),
        "/new": (200, None),
        "/gone": (404, None),
    }

    def do_GET(self):  # noqa: N802 — http.server's method name
        code, location = self.routes.get(self.path, (404, None))
        self.send_response(code)
        if location:
            self.send_header("Location", location)
        self.end_headers()

    def log_message(self, *args):  # keep pytest output quiet
        pass


@pytest.fixture(scope="module")
def base_url():
    try:
        server = HTTPServer(("127.0.0.1", 0), _Site)
    except OSError as e:  # some sandboxes forbid local port binding
        pytest.skip(f"cannot bind a local test server: {e}")
    threading.Thread(target=server.serve_forever, daemon=True).start()
    yield f"http://127.0.0.1:{server.server_address[1]}"
    server.shutdown()


def test_permanent_redirect_reports_new_address(base_url):
    status, _, moved = check_links.classify(f"{base_url}/old", timeout=5)
    assert status == "ok"
    assert moved == f"{base_url}/new"


def test_temporary_redirect_is_not_repointed(base_url):
    status, _, moved = check_links.classify(f"{base_url}/temp", timeout=5)
    assert status == "ok"
    assert moved == ""


def test_plain_page_and_dead_page(base_url):
    assert check_links.classify(f"{base_url}/new", timeout=5) == ("ok", "", "")
    assert check_links.classify(f"{base_url}/gone", timeout=5) == ("dead", "HTTP 404", "")


def test_repoint_swaps_link_and_skips_duplicates():
    rows = [
        {"link": "https://old.example.com/a", "title": "A"},
        {"link": "https://b.example.com", "title": "B"},
        {"link": "https://dup.example.com/x", "title": "C"},
        {"link": "https://dup-new.example.com/x", "title": "D"},
    ]
    moves = {
        "https://old.example.com/a": "https://new.example.com/a/",
        "https://dup.example.com/x": "https://dup-new.example.com/x",
    }
    done, skipped = check_links.repoint(rows, moves)
    assert rows[0]["link"] == "https://new.example.com/a"
    assert rows[2]["link"] == "https://dup.example.com/x"  # target already present
    assert len(done) == 1 and len(skipped) == 1
