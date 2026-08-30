"""StaticFiles that serves index.html for unmatched *routes* (e.g. /browse),
so client-side deep links load the app instead of 404ing — while a genuinely
missing file (has a file extension, like /assets/x.js) still 404s."""

from starlette.exceptions import HTTPException
from starlette.responses import Response
from starlette.staticfiles import StaticFiles


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope) -> Response:
        try:
            return await super().get_response(path, scope)
        except HTTPException as exc:
            # `path` uses the OS separator here; only the last segment matters.
            last = path.replace("\\", "/").rsplit("/", 1)[-1]
            if exc.status_code == 404 and "." not in last:
                return await super().get_response("index.html", scope)
            raise
