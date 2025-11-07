import { createFileRoute } from "@tanstack/react-router";

import { PlaygroundLayout } from "@/components/playground-layout";

const TITLE = "Liquid Glass";
const DESCRIPTION = "Recreate the liquid glass effect using CSS";

export const Route = createFileRoute("/playground/liquid-glass")({
	head: () => ({
		meta: [
			/* Primary Meta Tags */
			{ title: TITLE },
			{ name: "description", content: DESCRIPTION },
			/* Open Graph Meta Tags */
			{ property: "og:title", content: TITLE },
			{ property: "og:description", content: DESCRIPTION },
			/* Twitter Meta Tags */
			{ name: "twitter:title", content: TITLE },
			{ name: "twitter:description", content: DESCRIPTION },
		],
	}),

	component: Page,
});

function Page() {
	return (
		<PlaygroundLayout title={TITLE} description={DESCRIPTION}>
			<p>
				On 10th June 2025, Apple introduced an update to their design system,
				featuring a new liquid glass effect. It is one of the biggest design
				language changes from Apple since the transition from skeuomorphism to
				flat design in 2013 with iOS 7.
			</p>

			<p>
				This isn't the first glass effect in modern UI design. Microsoft's
				Windows Aero featured a similar aesthetic in Windows Vista, though it
				was later phased out in favor of Metro and then Fluent Design.
			</p>

			<p>
				The liquid glass effect is characterized by its heavy emphasis on
				replicating the look of real-world glass materials. This means
				refracting the background behind the glass, as well as simulating light
				scattering and reflections, while also adapting its color based on the
				surrounding environment.
			</p>

			<p>
				One might assume that replicating the effect on the web requires complex
				shaders and GPU-accelerated rendering through WebGL or WebGPU. However,
				we can use a simpler approach to approximate a similar effect.
			</p>

			<p>
				Let us explore how to approximate the liquid glass effect using just CSS
				and SVG instead.
			</p>
		</PlaygroundLayout>
	);
}

// const GLASS_REFRACTIVE_INDEX = 1.458;
// const AIR_REFRACTIVE_INDEX = 1.000_273;

// type RefractedAngleParameters = {
// 	incidentAngle: number;
// 	n1: number;
// 	n2: number;
// };

// /**
//  * Calculates the refracted angle of light passing through two media with different refractive indices
//  * using Snell's Law. Returns undefined if total internal reflection occurs.
//  *
//  * @param params - The parameters for calculating the refracted angle
//  * @param params.incidentAngle - The angle of incidence in radians
//  * @param params.n1 - The refractive index of the first medium (incident medium)
//  * @param params.n2 - The refractive index of the second medium (refracting medium)
//  * @returns The refracted angle in radians, or undefined if total internal reflection occurs
//  *
//  * @example
//  * ```ts
//  * // Light passing from water (n=1.33) to air (n=1.00) at 30 degrees
//  * const refracted = calculateRefractedAngle({
//  *   incidentAngle: Math.PI / 6,
//  *   n1: 1.33,
//  *   n2: 1.00
//  * });
//  * ```
//  */
// function calculateRefractedAngle({
// 	incidentAngle,
// 	n1,
// 	n2,
// }: RefractedAngleParameters) {
// 	const criticalAngle = calculateCriticalAngle({ n1, n2 });

// 	// Check if incident angle exceeds critical angle
// 	if (criticalAngle !== undefined && incidentAngle > criticalAngle) {
// 		// Total internal reflection
// 		return;
// 	}

// 	const sinRefractedAngle = (n1 / n2) * Math.sin(incidentAngle);
// 	const refractedAngle = Math.asin(sinRefractedAngle);

// 	return refractedAngle;
// }

// type CriticalAngleParameters = { n1: number; n2: number };

// /**
//  * Calculates the critical angle for total internal reflection between two media.
//  *
//  * The critical angle is the angle of incidence above which total internal reflection occurs
//  * when light travels from a denser medium (higher refractive index) to a less dense medium
//  * (lower refractive index).
//  *
//  * @param params - The parameters for calculating the critical angle
//  * @param params.n1 - The refractive index of the first medium (incident medium)
//  * @param params.n2 - The refractive index of the second medium (refracting medium)
//  * @returns The critical angle in radians, or undefined if total internal reflection cannot occur (n1 <= n2)
//  *
//  * @example
//  * ```ts
//  * // Calculate critical angle for water-air interface
//  * const angle = calculateCriticalAngle({ n1: 1.33, n2: 1.00 });
//  * // Returns approximately 0.8502 radians (48.75 degrees)
//  * ```
//  */
// function calculateCriticalAngle({ n1, n2 }: CriticalAngleParameters) {
// 	/* Total internal reflection cannot occur */
// 	if (n1 <= n2) {
// 		return;
// 	}

// 	const criticalAngle = Math.asin(n2 / n1);
// 	return criticalAngle;
// }

// /**
//  * Calculates the y-coordinate of a squircle curve at a given x-coordinate.
//  *
//  * A squircle is a mathematical shape that interpolates between a circle and a square.
//  * This function uses the superellipse formula with n=4: y = (1 - x^n)^(1/n)
//  *
//  * @param params - The parameters object
//  * @param params.x - The x-coordinate on the squircle curve (typically between -1 and 1)
//  * @returns The corresponding y-coordinate on the squircle curve
//  *
//  * @example
//  * ```ts
//  * const height = squircleHeight({ x: 0 }); // Returns 1 (top of squircle)
//  * const height = squircleHeight({ x: 1 }); // Returns 0 (edge of squircle)
//  * ```
//  */
// function squircleHeight({ x }: { x: number }) {
// 	const n = 4;
// 	const y = Math.pow(1 - Math.pow(x, n), 1 / n);

// 	return y;
// }
