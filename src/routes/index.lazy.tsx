import { createLazyFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import {
  BentoGrid,
  BentoGridItem,
  type BentoGridItemProps,
} from "@/components/bento-grid";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/ui/button";

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
      icon: <Icon icon="carbon:machine-learning" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: "Contact",
      header: <ContactInfo />,
      description: (
        <>
          Drop me an email at{" "}
          <a
            className="decoration-dashed hover:underline"
            href="mailto:jaspertzj@outlook.sg"
          >
            jaspertzj@outlook.sg
          </a>
        </>
      ),
      icon: <Icon icon="carbon:phone-ip" />,
    },
    {
      className: "md:col-span-1 md:row-span-1",
      title: (
        <>
          <Icon inline icon="carbon:favorite" /> Tech I love
        </>
      ),
      header: <Skills />,
      icon: <Icon icon="carbon:code" />,
    },
  ];

  return (
    <>
      <h1 className="font-welcome mx-auto my-8 w-fit bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text p-4 text-center text-3xl font-bold tracking-wide transition-colors sm:text-5xl dark:from-indigo-400 dark:to-purple-400">
        <TextGenerateEffect words={openingMessage} />
        <span className="sr-only">{openingMessage}</span>
      </h1>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {cards.map((card, i) => (
          <BentoGridItem key={i} {...card} />
        ))}
      </BentoGrid>
    </>
  );
}

const Introduction = () => (
  <div className="m-auto space-y-6 p-4 leading-7 transition-colors">
    <p>
      My name is{" "}
      <span className="bg-gradient-to-r from-blue-200 to-indigo-200 font-bold transition-colors dark:from-blue-500 dark:to-indigo-500">
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
      icon: <Icon inline icon="line-md:github-loop" className="mr-2" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaspertzj/",
      icon: <Icon inline icon="line-md:linkedin" className="mr-2" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jasper_teo",
      icon: <Icon inline icon="line-md:twitter-x-alt" className="mr-2" />,
    },
  ];

  return (
    <ul className="font-welcome m-auto space-y-2.5">
      {contactInfoItems.map((item) => (
        <ContactInfoitem key={item.name} {...item} />
      ))}
    </ul>
  );
};

const ContactInfoitem = ({ name, url, icon }: ContactInfoitemProps) => (
  <li>
    <Button
      asChild
      variant="link"
      className="hover:text-primary text-lg text-inherit"
    >
      <a href={url} target="_blank" rel="noreferrer">
        {icon} {name}
      </a>
    </Button>
  </li>
);

const Skills = () => (
  <ul className="m-auto space-y-2 font-mono transition-colors">
    <li>
      <Icon inline icon="logos:javascript" />{" "}
      <Icon inline icon="logos:typescript-icon" /> TypeScript
    </li>
    <li>
      <Icon inline icon="logos:nodejs-icon" /> <Icon inline icon="logos:bun" />{" "}
      Node.js/Bun
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
    <li>
      <Icon inline icon="logos:vitejs" /> Vite
    </li>
  </ul>
);
