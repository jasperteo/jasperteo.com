/* eslint-disable @eslint-react/naming-convention/filename */

/// <reference types="vite/client" />

import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";

import { Devtools } from "@/components/devtools";
import { Navbar } from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import globalsCss from "@/styles/globals.css?url";

const NAME = "Jasper Teo ‧ 張";
const DESCRIPTION =
	"Software Engineer crafting intuitive and delightful interfaces";
const URL = "https://jasperteo.com";
const OG_IMAGE = "/opengraph-image.png";
const TWITTER_HANDLE = "@jasper_teo";
const WIDTH = "1200";
const HEIGHT = "630";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			/* Standard Meta Tags */
			{ charSet: "utf-8" }, // oxlint-disable-line text-encoding-identifier-case
			{ name: "viewport", content: "width=device-width, initial-scale=1.0" },
			/* Primary Meta Tags */
			{ title: NAME },
			{ name: "description", content: DESCRIPTION },
			/* SEO Meta Tags */
			{ name: "robots", content: "index, follow" },
			/* Open Graph Meta Tags */
			{ property: "og:title", content: NAME },
			{ property: "og:description", content: DESCRIPTION },
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: URL },
			{ property: "og:site_name", content: NAME },
			{ property: "og:image", content: OG_IMAGE },
			{ property: "og:image:alt", content: NAME },
			{ property: "og:image:width", content: WIDTH },
			{ property: "og:image:height", content: HEIGHT },
			/* Twitter Meta Tags */
			{ name: "twitter:title", content: NAME },
			{ name: "twitter:description", content: DESCRIPTION },
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
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "48x48",
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	}),

	shellComponent: ({ children }) => (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="bg-background text-foreground scroll-smooth antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					scriptProps={{ "data-cfasync": "false" }}
				>
					<ScrollArea className="min-h-dvh min-w-dvw">
						<div className="mx-auto max-w-3xl min-w-xs px-6 py-12 sm:mb-24">
							{children}
							<Navbar />
						</div>
					</ScrollArea>
				</ThemeProvider>
				<Scripts />
				<Devtools />
			</body>
		</html>
	),
});
