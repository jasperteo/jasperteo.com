import type { ReactNode } from "react";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import type { BentoGridItemProps } from "@/components/ui/bento-grid";

const BentoIntro = () => {
  const cards: BentoGridItemProps[] = [
    {
      className: "md:col-span-16 md:row-span-4",
      title: "About Me",
      header: <Introduction />,
      icon: <Icon icon="carbon:machine-learning" />,
    },
    {
      className: "md:col-span-9 md:row-span-2",
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
      icon: <Icon icon="carbon:at" />,
    },
    {
      className: "md:col-span-9 md:row-span-2",
      title: "Tech I Love",
      header: <Skills />,
      icon: <Icon icon="carbon:terminal" />,
    },
  ];

  return (
    <BentoGrid className="mx-auto max-w-4xl md:auto-rows-fr md:grid-cols-25">
      {cards.map((card) => (
        <BentoGridItem key={card.title} {...card} />
      ))}
    </BentoGrid>
  );
};

const Introduction = () => (
  <div className="m-auto p-4 leading-7 transition-colors space-y-6">
    <p>
      My name is{" "}
      <span className="from-blue-200 to-indigo-200 bg-gradient-to-r font-semibold transition-colors dark:from-blue-500 dark:to-indigo-500">
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
  icon?: ReactNode;
};

const ContactInfo = () => {
  const contactInfoItems: ContactInfoitemProps[] = [
    {
      name: "GitHub",
      url: "https://github.com/jasperteo",
      icon: <Icon icon="line-md:github-loop" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaspertzj/",
      icon: <Icon icon="line-md:linkedin" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jasper_teo",
      icon: <Icon icon="line-md:twitter-x-alt" />,
    },
  ];

  return (
    <ul className="m-auto p-4 font-title space-y-2.5">
      {contactInfoItems.map(({ name, url, icon }) => (
        <li key={name}>
          <Button
            asChild
            variant="link"
            className="gap-x-2 text-lg text-inherit hover:text-primary"
          >
            <a href={url} target="_blank" rel="noreferrer">
              {icon}
              {name}
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};

const Skills = () => (
  <ul className="m-auto p-4 font-mono transition-colors space-y-2">
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

export { BentoIntro };
