"""Canonicalize URLs before they're stored or looked up, so the same site
entered as http/https, with/without `www.`, or with a trailing slash can't
create duplicate entries. (A one-off dedupe pass in Aug 2026 cleaned ~50
pre-existing dupes from the bulk imports; this keeps new ones out.)"""
from urllib.parse import urlsplit, urlunsplit

_DEFAULT_PORTS = {"http": "80", "https": "443"}


def canonical_link(raw: str) -> str:
    raw = (raw or "").strip()
    if not raw:
        return raw
    if "://" not in raw:
        raw = "https://" + raw

    parts = urlsplit(raw)
    # http/https are treated as the same resource for dedup purposes — almost
    # every site redirects http->https, and collapsing them kills a whole
    # class of duplicates. Non-web schemes are left alone.
    scheme = parts.scheme.lower()
    if scheme == "http":
        scheme = "https"
    host = (parts.hostname or "").lower()
    if host.startswith("www."):
        host = host[4:]

    netloc = host
    if parts.port and str(parts.port) != _DEFAULT_PORTS.get(scheme):
        netloc = f"{host}:{parts.port}"

    path = parts.path
    if path in ("", "/"):
        path = ""
    else:
        path = path.rstrip("/")

    # query kept as-is (case- and order-sensitive); fragment dropped
    return urlunsplit((scheme, netloc, path, parts.query, ""))
