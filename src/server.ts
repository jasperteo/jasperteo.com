import type { ServerEntry } from "@tanstack/react-start/server-entry";
import handler from "@tanstack/react-start/server-entry";

const server: ServerEntry = { fetch: handler.fetch };

export default server;
