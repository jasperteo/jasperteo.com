import type { IconProps } from "@/utils/utils";

function EnvelopeOpenHeart({
	fill = "currentColor",
	secondaryfill,
	title = "Envelope Open Heart Icon",
	...props
}: IconProps) {
	secondaryfill = secondaryfill ?? fill;

	return (
		<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>{title}</title>
			<g fill={fill} className="transition-colors">
				<path
					d="m16.728,8.155l-6.232,3.561c-.307.176-.685.176-.992,0l-6.232-3.561"
					fill="none"
					stroke={fill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<path
					d="m4.346,7.231l-.338.193c-.623.356-1.008,1.019-1.008,1.737v4.839c0,1.657,1.343,3,3,3h8c1.657,0,3-1.343,3-3v-4.839c0-.718-.385-1.38-1.008-1.737l-.353-.202"
					fill="none"
					stroke={fill}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="transition-colors"
				/>
				<path
					d="m13.98,3.863c-.141-1.133-1.059-1.883-2.201-1.863-.71.013-1.304.374-1.78.969-.364-.606-1.091-.97-1.818-.97-1.212,0-2.182.97-2.182,2.182.1,2.211,2.201,4.078,3.399,4.928.355.252.827.24,1.172-.024,1.163-.892,3.675-3.086,3.409-5.222Z"
					fill={secondaryfill}
					strokeWidth="0"
					className="transition-colors"
				/>
			</g>
		</svg>
	);
}

export { EnvelopeOpenHeart };
