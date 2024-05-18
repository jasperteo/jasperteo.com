import { Icon } from "@iconify-icon/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import type { BentoGridItemProps } from "@/components/ui/bento-grid";

const BentoProjects = () => {
  const cards: BentoGridItemProps[] = [
    {
      className: "md:col-span-1 md:row-span-1",
      title: "SheTreks",
      description: <BadgeSheTreks />,
      header: <SheTreks />,
      icon: <Icon icon="carbon:mountain" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "Watch Out",
      description: <BadgeWatchOut />,
      header: <WatchOut />,
      icon: <Icon icon="carbon:time" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "SG Buddy",
      description: <BadgeSGBuddy />,
      header: <SGBuddy />,
      icon: <Icon icon="carbon:earth-southeast-asia" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "priceQuery",
      description: <BadgePriceQuery />,
      header: <PriceQuery />,
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

type LinkButtonProps = { repo: string; app: string };

const LinkButton = ({ repo, app }: LinkButtonProps) => (
  <div className="justify-self-end p-4 pb-0">
    <Button asChild variant="link" className="mr-2 pl-0">
      <a href={repo} target="_blank" rel="noopener">
        <Icon className="mr-1.5 text-lg" icon="carbon:repo-source-code" />
        Browse the Repository
      </a>
    </Button>
    <Button asChild variant="link" className="pl-0">
      <a href={app} target="_blank" rel="noopener">
        <Icon className="mr-1.5 text-lg" icon="carbon:application" />
        Explore the App
      </a>
    </Button>
  </div>
);

const HeaderWrapper = ({
  children,
  links,
}: {
  children: React.ReactNode;
  links: LinkButtonProps;
}) => (
  <div className="h-full flex flex-col transition-colors">
    <div className="m-auto p-4 text-sm leading-6 space-y-5">{children}</div>
    <LinkButton {...links} />
  </div>
);

const SheTreks = () => {
  const links: LinkButtonProps = {
    repo: "https://github.com/jasperteo/SheTreks-frontend",
    app: "https://shetreks.netlify.app",
  };

  return (
    <HeaderWrapper links={links}>
      <p>
        A social media app for solo female travelers to connect and share
        experiences. Users can filter activities by interests, view activity
        locations on a map, and receive notifications for new or updated
        activities. They can also create and invite others to activities, and
        follow other users.
      </p>
      <p>
        As a PWA, it is installable as a native-like app with access to certain
        native features.
      </p>
      {/* <p>
        The front-end is built as a React SPA using Vite as the bundler and
        React Router as the router, TanStack Query for asyncronous state
        management such as data fetching. <br />
        The back-end is a Bun server using the Hono web framework, serving
        RESTful APIs with authentication and querying the Postgres database.
      </p> */}
    </HeaderWrapper>
  );
};

const WatchOut = () => {
  const links: LinkButtonProps = {
    repo: "https://github.com/jasperteo/watch-out-frontend",
    app: "https://watch-outt.netlify.app",
  };

  return (
    <HeaderWrapper links={links}>
      <p>
        A bidding platform where users can bid and buy Rolex watches. Users can
        also list their own watches for sale. The app features a chart to show
        the past few months of watch prices, giving users an idea of the market
        price.
      </p>
      <p>
        Bids are made in real-time by leveraging Socket.IO, and a Stripe
        integration is used for payments.
      </p>
      {/* <p>
        The front-end is built as a React SPA using Vite as the bundler and
        React Router as the router, and TanStack Query for asyncronous state
        management such as data fetching. <br />
        The back-end is a Node server using the Express web framework, serving
        RESTful APIs with authentication and querying the Postgres database.
      </p> */}
    </HeaderWrapper>
  );
};

const SGBuddy = () => {
  const links: LinkButtonProps = {
    repo: "https://github.com/jasperteo/SG_Buddy",
    app: "https://ra-project2-b8ed4.web.app/",
  };

  return (
    <HeaderWrapper links={links}>
      <p>
        An informational travellers app for travellers to Singapore. Users can
        search for food, attractions, and hotels, and view the location on a
        map. Users can also save their favourite places and view them later. The
        app also help users to plan their itinerary with flight and hotel
        details.
      </p>
      {/* <p>
        It is a pure front-end React SPA using Vite as the bundler and React
        Router as the router, SWR for asyncronous state management such as data
        fetching. The database is Firebase Real-Time Database.
      </p> */}
    </HeaderWrapper>
  );
};

const PriceQuery = () => {
  const links: LinkButtonProps = {
    repo: "https://github.com/jasperteo/priceQuery",
    app: "https://jasperteo.github.io/priceQuery/",
  };

  return (
    <HeaderWrapper links={links}>
      <p>
        A simple app to check up the latest prices of different assets in the
        market. Users can search for the price and details of a stock,
        cryptocurrency, or foreign exchange currencies. The data is displayed in
        cards and the number of cards can be adjusted.
      </p>
      <p>Market data is from Polygon.io.</p>
      {/* <p>
        It is a pure front-end React SPA using Vite as the bundler and SWR for
        asyncronous state management such as data fetching.
      </p> */}
    </HeaderWrapper>
  );
};

type BadgeProps = { icon: React.ReactNode; name: string };

const BadgeGenerator = ({ badges, i }: { badges: BadgeProps[]; i: number }) => (
  <ul className="flex flex-wrap gap-x-1.5 gap-y-2 transition-colors">
    {badges.map(({ icon, name }, index) => (
      <li key={name}>
        <Badge
          variant={index > i ? "secondary" : "default"}
          className="gap-1 text-nowrap"
        >
          {icon}
          {name}
        </Badge>
      </li>
    ))}
  </ul>
);

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
    { icon: <Icon icon="simple-icons:pwa" />, name: "PWA" },
    { icon: <Icon icon="simple-icons:supabase" />, name: "Supabase" },
    { icon: <Icon icon="simple-icons:clerk" />, name: "Clerk" },
    { icon: <Icon icon="simple-icons:bun" />, name: "Bun" },
    { icon: <Icon icon="simple-icons:hono" />, name: "Hono" },
    { icon: <Icon icon="simple-icons:sequelize" />, name: "Sequelize" },
    { icon: <Icon icon="simple-icons:postgresql" />, name: "Postgres" },
  ];
  const cutoffIndex = 8;
  return <BadgeGenerator badges={badges} i={cutoffIndex} />;
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
  const cutoffIndex = 5;
  return <BadgeGenerator badges={badges} i={cutoffIndex} />;
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
  const cutoffIndex = 6;
  return <BadgeGenerator badges={badges} i={cutoffIndex} />;
};

const BadgePriceQuery = () => {
  const badges: BadgeProps[] = [
    { icon: <Icon icon="simple-icons:react" />, name: "React" },
    { icon: <Icon icon="simple-icons:vite" />, name: "Vite" },
    { icon: <Icon icon="simple-icons:swr" />, name: "SWR" },
    { icon: <Icon icon="simple-icons:mui" />, name: "MUI" },
    { icon: <Icon icon="simple-icons:bun" />, name: "Bun" },
  ];
  const cutoffIndex = 3;
  return <BadgeGenerator badges={badges} i={cutoffIndex} />;
};

export { BentoProjects };
