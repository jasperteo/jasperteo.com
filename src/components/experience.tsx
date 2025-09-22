import { Fragment } from "react";

type Current = { company: string; role: string; isCurrent: true };
type Past = { company: string; role: string; isCurrent?: false };
type ExperienceType = [Current, ...Past[]] | Past[];

const EXPERIENCES: ExperienceType = [
	{
		company: "Mobbin",
		role: "Product Engineer",
	},
	{
		company: "CYS",
		role: "Software Engineer",
	},
];

function Experience() {
	return (
		<div className="flex flex-col gap-y-2">
			<h2 className="text-lg font-semibold">Experience</h2>
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
