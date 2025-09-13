import type { IconProps } from "@/utils/utils";

function FileDownload({
	fill = "currentColor",
	secondaryfill,
	title = "File Download Icon",
	...props
}: IconProps) {
	secondaryfill = secondaryfill ?? fill;

	return (
		<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>{title}</title>
			<g fill={fill} className="transition-colors">
				<path
					d="m4,7h3c.552,0,1-.448,1-1v-3"
					fill={fill}
					stroke={fill}
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<path
					d="m16,7.663v-1.663c0-1.657-1.343-3-3-3h-4.586c-.265,0-.52.105-.707.293l-3.414,3.414c-.188.188-.293.442-.293.707v6.586c0,1.657,1.343,3,3,3h3.05l-.025-.025"
					fill="none"
					stroke={fill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<line
					fill="none"
					stroke={secondaryfill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					x1="15"
					x2="15"
					y1="17"
					y2="11"
					className="transition-colors"
				/>
				<polyline
					fill="none"
					points="12.5 14.5 15 17 17.5 14.5"
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

export { FileDownload };
