import { Hono } from "@hono/hono";
import type { APIContext, APIRoute } from "astro";

const api = new Hono().basePath("/api");

api.get("/hello", (c) => c.json({ hello: "world" }));

const ALL: APIRoute = (ctx: APIContext) => api.fetch(ctx.request, ctx.locals);
type AppType = typeof api;

export { ALL };
export type { AppType };
