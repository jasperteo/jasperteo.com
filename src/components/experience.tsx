import { cn } from "@/utils/utils";

const COMPANY_WIDTH = "w-28";

type Current = { company: string; role: string; isCurrent: true };
type Past = { company: string; role: string; isCurrent?: false };
type ExperienceType = [Current, ...Past[]] | Past[];

const EXPERIENCES: ExperienceType = [
	{
		company: "Mobbin",
		role: "Product Engineer",
		isCurrent: false,
	},
	{
		company: "CYS",
		role: "Software Engineer",
		isCurrent: false,
	},
];

function Experience() {
	const [first, ...rest] = EXPERIENCES;

	const currently = first.isCurrent ? first : undefined;
	const previously = first.isCurrent ? rest : EXPERIENCES;

	return (
		<aside className="flex w-xs flex-col gap-y-6 py-4">
			<div className="flex flex-col gap-y-1">
				<p className="text-primary-highlight text-lg font-bold">CURRENTLY</p>
				{currently ? (
					<div className="flex gap-x-4">
						<span className={cn("font-semibold tracking-wider", COMPANY_WIDTH)}>
							{currently.company}
						</span>
						<span className="tracking-wide">{currently.role}</span>
					</div>
				) : (
					<span className="tracking-wide">Looking for a new opportunity</span>
				)}
			</div>

			<div className="flex flex-col gap-y-1">
				<p className="text-primary-highlight text-lg font-bold">PREVIOUSLY</p>
				{previously.map(({ company, role }) => (
					<div key={`${company}${role}`} className="flex gap-x-4">
						<span className={cn("font-semibold tracking-wider", COMPANY_WIDTH)}>
							{company}
						</span>
						<span className="tracking-wide">{role}</span>
					</div>
				))}
			</div>
		</aside>
	);
}

export { Experience };
