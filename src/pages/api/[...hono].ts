import { Hono } from "@hono/hono";
import type { APIContext, APIRoute } from "astro";

type Bindings = { runtime: Runtime["runtime"] };

/**
 * Astro Endpoint routes defined in a Hono instance
 *  - `c.env.BINDING_KEY` becomes `c.env.runtime.env.BINDING_KEY` instead
 *  - `c.req.raw.cf` becomes `c.env.runtime.cf` instead
 */
const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.get("/hello", (c) => c.json({ hello: "world" }));

app.get("/city", (c) => {
	const city = c.env.runtime.cf?.city;

	return c.json({ city });
});

/**
 * A Server Endpoint that matches any request method
 * @param {APIContext} c - Context Object that mirrors Astro's global properties
 * - `c.request` binded to `fetch()` first argument (request).
 * - `c.locals` binded to `fetch()` second argument (env).
 * @returns Entry point for Hono
 *  ```ts
 * app.fetch(request: Request, env: Env, ctx: ExecutionContext)
 * ```
 */
const ALL: APIRoute = (c: APIContext) => app.fetch(c.request, c.locals);
type AppType = typeof app;

export { ALL };
export type { AppType };
