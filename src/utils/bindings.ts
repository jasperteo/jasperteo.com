let cachedEnv: Env | undefined;

/**
 * Initializes the development environment by setting up a platform proxy.
 *
 * This function dynamically imports Wrangler's getPlatformProxy utility and uses it
 * to create a proxy that provides access to the Cloudflare Workers runtime environment.
 * The proxy's environment is then cached globally for use throughout the application.
 *
 * @async
 * @function initDevEnv
 * @returns {Promise<void>} A promise that resolves when the development environment is initialized
 * @throws {Error} Throws an error if the platform proxy cannot be created or if Wrangler import fails
 */
async function initDevEnv() {
	const { getPlatformProxy } = await import("wrangler");
	const proxy = await getPlatformProxy();
	cachedEnv = proxy.env as unknown as Env;
}

if (import.meta.env.DEV) {
	await initDevEnv();
}

/**
 * Will only work when being accessed on the server. Obviously, CF bindings are not available in the browser.
 * @returns
 */
export function getBindings(): Env {
	if (import.meta.env.DEV) {
		if (!cachedEnv) {
			throw new Error(
				"Dev bindings not initialized yet. Call initDevEnv() first."
			);
		}
		return cachedEnv;
	}

	return process.env as unknown as Env;
}
