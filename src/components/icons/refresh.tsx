import type { IconProps } from "@/utils/utils";

function Refresh({
	fill = "currentColor",
	secondaryfill,
	title = "Refresh Icon",
	...props
}: IconProps) {
	secondaryfill = secondaryfill ?? fill;

	return (
		<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>{title}</title>
			<g fill={fill} className="transition-colors">
				<path
					d="m4,10c0,3.314,2.686,6,6,6,1.227,0,2.367-.368,3.317-1"
					fill="none"
					stroke={secondaryfill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<path
					d="m16,10c0-3.314-2.686-6-6-6-1.227,0-2.367.368-3.317,1"
					fill="none"
					stroke={fill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<polygon
					fill={fill}
					points="14.25 10 16 12 17.75 10 14.25 10"
					stroke={fill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<polygon
					fill={secondaryfill}
					points="5.75 10 4 8 2.25 10 5.75 10"
					stroke={secondaryfill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
			</g>
		</svg>
	);
}

export { Refresh };
