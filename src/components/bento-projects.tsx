import { Icon } from "@iconify-icon/react";

import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import type { BentoGridItemProps } from "@/components/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";

const BentoProjects = () => {
  const cards: BentoGridItemProps[] = [
    {
      className: "md:col-span-1 md:row-span-1",
      title: "SheTreks",
      description: <BadgeSheTreks />,
      header: <Test />,
      icon: <Icon icon="carbon:mountain" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "Watch Out",
      description: <BadgeWatchOut />,
      header: <Test />,
      icon: <Icon icon="carbon:time" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "SG Buddy",
      description: <BadgeSGBuddy />,
      header: <Test />,
      icon: <Icon icon="carbon:earth-southeast-asia" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "priceQuery",
      description: <BadgePriceQuery />,
      header: <Test />,
      icon: <Icon icon="carbon:analytics" />,
    },
  ];

  return (
    <BentoGrid className="mx-auto max-w-4xl md:auto-rows-fr md:grid-cols-2">
      {cards.map((card, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <BentoGridItem key={i} {...card} />
      ))}
    </BentoGrid>
  );
};

const Test = () => (
  <div className="m-auto p-4 leading-7 transition-colors space-y-6">
    <p>This is a short description of the projects I have worked on.</p>
    <p>One two</p>
  </div>
);

type BadgeProps = { icon: React.ReactNode; name: string };

const BadgeSheTreks = () => {
  const badges: BadgeProps[] = [
    { icon: <Icon icon="simple-icons:reactrouter" />, name: "React Router" },
    { icon: <Icon icon="simple-icons:react" />, name: "React" },
    { icon: <Icon icon="simple-icons:vite" />, name: "Vite" },
    { icon: <Icon icon="simple-icons:reactquery" />, name: "TanStack Query" },
    {
      icon: <Icon icon="simple-icons:reacthookform" />,
      name: "React Hook Form",
    },
    { icon: <Icon icon="simple-icons:tailwindcss" />, name: "Tailwind CSS" },
    { icon: <Icon icon="simple-icons:daisyui" />, name: "daisyUI" },
    { icon: <Icon icon="simple-icons:googlemaps" />, name: "Vis.gl" },
    { icon: <Icon icon="simple-icons:supabase" />, name: "Supabase" },
    { icon: <Icon icon="simple-icons:clerk" />, name: "Clerk" },
    { icon: <Icon icon="simple-icons:bun" />, name: "Bun" },
    { icon: <Icon icon="simple-icons:hono" />, name: "Hono" },
    { icon: <Icon icon="simple-icons:sequelize" />, name: "Sequelize" },
    { icon: <Icon icon="simple-icons:postgresql" />, name: "Postgres" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-1.5 gap-y-2 transition-colors">
      {badges.map(({ icon, name }, i) => (
        <li key={name}>
          <Badge
            variant={i > 7 ? "secondary" : "default"}
            className="gap-1 text-nowrap"
          >
            {icon}
            {name}
          </Badge>
        </li>
      ))}
    </ul>
  );
};

const BadgeWatchOut = () => {
  const badges: BadgeProps[] = [
    { icon: <Icon icon="simple-icons:reactrouter" />, name: "React Router" },
    { icon: <Icon icon="simple-icons:react" />, name: "React" },
    { icon: <Icon icon="simple-icons:vite" />, name: "Vite" },
    { icon: <Icon icon="simple-icons:reactquery" />, name: "TanStack Query" },
    {
      icon: <Icon icon="simple-icons:reacthookform" />,
      name: "React Hook Form",
    },
    { icon: <Icon icon="simple-icons:mui" />, name: "MUI" },
    { icon: <Icon icon="simple-icons:firebase" />, name: "Firebase" },
    { icon: <Icon icon="simple-icons:auth0" />, name: "Auth0" },
    { icon: <Icon icon="simple-icons:stripe" />, name: "Stripe" },
    { icon: <Icon icon="simple-icons:nodedotjs" />, name: "Node" },
    { icon: <Icon icon="simple-icons:express" />, name: "Express" },
    { icon: <Icon icon="simple-icons:socketdotio" />, name: "Socket.IO" },
    { icon: <Icon icon="simple-icons:sequelize" />, name: "Sequelize" },
    { icon: <Icon icon="simple-icons:postgresql" />, name: "Postgres" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-1.5 gap-y-2 transition-colors">
      {badges.map(({ icon, name }, i) => (
        <li key={name}>
          <Badge
            variant={i > 5 ? "secondary" : "default"}
            className="gap-1 text-nowrap"
          >
            {icon}
            {name}
          </Badge>
        </li>
      ))}
    </ul>
  );
};

const BadgeSGBuddy = () => {
  const badges: BadgeProps[] = [
    { icon: <Icon icon="simple-icons:reactrouter" />, name: "React Router" },
    { icon: <Icon icon="simple-icons:react" />, name: "React" },
    { icon: <Icon icon="simple-icons:vite" />, name: "Vite" },
    { icon: <Icon icon="simple-icons:swr" />, name: "SWR" },
    {
      icon: <Icon icon="simple-icons:reacthookform" />,
      name: "React Hook Form",
    },
    { icon: <Icon icon="simple-icons:mui" />, name: "MUI" },
    { icon: <Icon icon="simple-icons:googlemaps" />, name: "Vis.gl" },
    { icon: <Icon icon="simple-icons:firebase" />, name: "Firebase" },
    { icon: <Icon icon="simple-icons:nodedotjs" />, name: "Node" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-1.5 gap-y-2 transition-colors">
      {badges.map(({ icon, name }, i) => (
        <li key={name}>
          <Badge
            variant={i > 6 ? "secondary" : "default"}
            className="gap-1 text-nowrap"
          >
            {icon}
            {name}
          </Badge>
        </li>
      ))}
    </ul>
  );
};

const BadgePriceQuery = () => {
  const badges: BadgeProps[] = [
    { icon: <Icon icon="simple-icons:react" />, name: "React" },
    { icon: <Icon icon="simple-icons:vite" />, name: "Vite" },
    { icon: <Icon icon="simple-icons:swr" />, name: "SWR" },
    { icon: <Icon icon="simple-icons:mui" />, name: "MUI" },
    { icon: <Icon icon="simple-icons:bun" />, name: "Bun" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-1.5 gap-y-2 transition-colors">
      {badges.map(({ icon, name }, i) => (
        <li key={name}>
          <Badge
            variant={i > 3 ? "secondary" : "default"}
            className="gap-1 text-nowrap"
          >
            {icon}
            {name}
          </Badge>
        </li>
      ))}
    </ul>
  );
};

export { BentoProjects };
