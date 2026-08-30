"""Dead-simple in-memory failed-login throttle. Enough to make brute-forcing
the single shared password impractical; not a distributed limiter (on a
multi-instance host each process keeps its own count — still a real speed
bump, and this is a one-user tool)."""

import time

_MAX_FAILURES = 5
_WINDOW_SECONDS = 15 * 60

# key -> list[timestamp] of recent failures
_failures: dict[str, list[float]] = {}


def _recent(key: str) -> list[float]:
    cutoff = time.time() - _WINDOW_SECONDS
    hits = [t for t in _failures.get(key, []) if t > cutoff]
    _failures[key] = hits
    return hits


def is_locked(key: str) -> bool:
    return len(_recent(key)) >= _MAX_FAILURES


def record_failure(key: str) -> None:
    _recent(key).append(time.time())


def reset(key: str) -> None:
    _failures.pop(key, None)


def retry_after_seconds(key: str) -> int:
    hits = _recent(key)
    if len(hits) < _MAX_FAILURES:
        return 0
    return max(1, int(hits[0] + _WINDOW_SECONDS - time.time()))
