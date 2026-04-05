import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { Devtools } from "@/components/devtools";
import { NAME, OG_IMAGE, TWITTER_HANDLE, URL, WIDTH, HEIGHT } from "@/utils/utils";

import globalsCss from "@/styles/globals.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			/* Standard Meta Tags */
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1.0" },
			/* Open Graph Meta Tags */
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: URL },
			{ property: "og:site_name", content: NAME },
			{ property: "og:image", content: OG_IMAGE },
			{ property: "og:image:alt", content: NAME },
			{ property: "og:image:width", content: WIDTH },
			{ property: "og:image:height", content: HEIGHT },
			/* Twitter Meta Tags */
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:url", content: URL },
			{ name: "twitter:creator", content: TWITTER_HANDLE },
			{ name: "twitter:site", content: TWITTER_HANDLE },
			{ name: "twitter:image", content: OG_IMAGE },
			{ name: "twitter:image:alt", content: NAME },
			/* Other Meta Tags */
			{ name: "theme-color", content: "var(--background)" },
		],
		links: [
			{ rel: "preload", href: globalsCss, as: "style" },
			{ rel: "stylesheet", href: globalsCss },
			{ rel: "canonical", href: URL },
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
			{ rel: "icon", href: "/favicon.ico", sizes: "48x48" },
			{ rel: "icon", href: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
		],
	}),

	shellComponent: ({ children }) => (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="relative grid scroll-smooth bg-background bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_oklch,var(--select)_20%,transparent),transparent_65%)] bg-fixed text-foreground antialiased">
				{children}
				<Scripts />
				<Devtools enabled />
			</body>
		</html>
	),
});
