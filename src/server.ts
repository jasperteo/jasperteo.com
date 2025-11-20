import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

const server = createServerEntry({ fetch: handler.fetch });

export default server;
