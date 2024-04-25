import { createLazyFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import {
  BentoGrid,
  BentoGridItem,
  type BentoGridItemProps,
} from "@/components/bento-grid";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const openingMessage = "Welcome! 你 好!";

  const cards: BentoGridItemProps[] = [
    {
      className: "md:col-span-2 md:row-span-2",
      title: "About Me",
      header: <Introduction />,
      icon: <Icon icon="carbon:machine-learning" className="text-zinc-500" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "Contact",
      header: <ContactInfo />,
      description: "Drop me an email at jaspertzj@outlook.sg",
      icon: <Icon icon="carbon:phone-ip" className="text-zinc-500" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "Primary Tools",
      header: <Skills />,
      icon: <Icon icon="carbon:code" className="text-zinc-500" />,
    },
  ];

  return (
    <>
      <h1 className="font-welcome mx-auto my-8 w-fit bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text p-4 text-center text-3xl font-bold tracking-wide ease-in sm:text-5xl dark:from-indigo-400 dark:to-purple-400">
        <TextGenerateEffect words={openingMessage} />
        <span className="sr-only">{openingMessage}</span>
      </h1>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {cards.map((card) => (
          <BentoGridItem key={card.title} {...card} />
        ))}
      </BentoGrid>
    </>
  );
}

const Introduction = () => (
  <div className="m-auto space-y-4 p-4 leading-relaxed">
    <p>
      My name is{" "}
      <span className="bg-gradient-to-r from-blue-200 to-indigo-200 font-bold dark:from-blue-500 dark:to-indigo-500">
        Jasper Teo
      </span>
      , and I focus on full stack development and web technologies. I am mainly
      interested building products that deliver a good user experience,
      leveraging on modern tools and technologies to improve productivity and
      developer experience. Always looking for opportunities to learn and grow.
    </p>
    <p>
      I am currently looking for a full-time position as a software engineer.
    </p>
  </div>
);

type ContactInfoitemProps = {
  name?: string;
  url?: string;
  icon?: React.ReactNode | string;
};

const ContactInfo = () => {
  const contactInfoItems: ContactInfoitemProps[] = [
    {
      name: "GitHub",
      url: "https://github.com/jasperteo",
      icon: <Icon inline icon="line-md:github-loop" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaspertzj/",
      icon: <Icon inline icon="line-md:linkedin" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jasper_teo",
      icon: <Icon inline icon="line-md:twitter-x-alt" />,
    },
  ];

  return (
    <div className="m-auto font-mono text-lg leading-loose">
      <ul>
        {contactInfoItems.map((item) => (
          <ContactInfoitem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
};

const ContactInfoitem = ({ name, url, icon }: ContactInfoitemProps) => (
  <li>
    {icon}{" "}
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="hover:font-semibold hover:underline"
    >
      {name}
    </a>
  </li>
);

const Skills = () => (
  <div className="m-auto font-mono leading-loose">
    <ul>
      <li>
        <Icon inline icon="logos:javascript" />{" "}
        <Icon inline icon="logos:typescript-icon" /> JS/TS
      </li>
      <li>
        <Icon inline icon="logos:nodejs-icon" />{" "}
        <Icon inline icon="logos:bun" /> Node.js/Bun
      </li>
      <li>
        <Icon inline icon="logos:react" />{" "}
        <Icon inline icon="logos:nextjs-icon" /> Next.js
      </li>

      <li>
        <Icon inline icon="logos:postgresql" />{" "}
        <Icon inline icon="logos:supabase-icon" /> Supabase
      </li>
      <li>
        <Icon inline icon="logos:hono" /> Hono
      </li>
    </ul>
  </div>
);
