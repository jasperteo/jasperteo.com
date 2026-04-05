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
			<h2 className="text-lg font-semibold">Experience</h2>
			<dl className="grid max-w-md grid-cols-12 gap-y-1">
				{EXPERIENCES.map(({ company, role }) => (
					<Fragment key={`${company}${role}`}>
						<dt className="col-span-4 font-semibold tracking-wide text-primary-highlight">
							{company}
						</dt>
						<dd className="col-span-8 text-muted-foreground">{role}</dd>
					</Fragment>
				))}
			</dl>
		</div>
	);
}

export { Experience };
