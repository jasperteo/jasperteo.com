import type { ComponentProps } from "react";
import { Fragment } from "react";

type Current = { company: string; role: string; isCurrent: true };
type Past = { company: string; role: string; isCurrent: false };
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

function Experience({ ref }: Pick<ComponentProps<"div">, "ref">) {
	return (
		<div ref={ref} className="flex flex-col gap-y-2">
			<h3 className="text-lg font-semibold">Experience</h3>
			<div className="grid max-w-md grid-cols-12 gap-y-1">
				{EXPERIENCES.map(({ company, role }) => (
					<Fragment key={`${company}${role}`}>
						<span className="text-primary-highlight col-span-4 font-semibold tracking-wide">
							{company}
						</span>
						<span className="text-muted-foreground col-span-8">{role}</span>
					</Fragment>
				))}
			</div>
		</div>
	);
}

export { Experience };
