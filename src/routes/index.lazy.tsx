import { createLazyFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTextColorTransition } from "@/hooks/useTextColorTransition";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const textTransparent = useTextColorTransition({
    initial: "text-inherit",
    color: "text-transparent",
    delay: 4200,
  });

  const openingMessage = "Welcome! 你 好!";

  const cards = [
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
      <h1
        className={`font-welcome mx-auto my-8 w-fit bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text p-4 text-center text-3xl font-bold tracking-wide transition-colors duration-1000 ease-in sm:text-5xl dark:from-indigo-400 dark:to-purple-400 ${textTransparent}`}
      >
        <TextGenerateEffect words={openingMessage} />
        <span className="sr-only">{openingMessage}</span>
      </h1>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {cards.map((card, i) => (
          <BentoGridItem
            key={i}
            title={card.title}
            description={card?.description}
            header={card.header}
            className={card.className}
            icon={card.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const Introduction = () => (
  <div className="m-auto p-4 leading-relaxed">
    <p>
      My name is{" "}
      <span className="bg-gradient-to-r from-blue-200 to-indigo-200 font-bold dark:from-blue-500 dark:to-indigo-500">
        Jasper Teo
      </span>
      , and I focus on full stack development and web technologies. I am mainly
      interested building products with that deliver a good user experience,
      leveraging on modern tools and technologies to improve productivity and
      developer experience. Always looking for opportunities to learn and grow.
    </p>
    <br />
    <p>
      I am currently looking for a full-time position as a software engineer.
    </p>
  </div>
);

const ContactInfo = () => (
  <div className="m-auto p-4 font-mono text-lg leading-loose">
    <ul>
      <li>
        <Icon inline icon="line-md:github-loop" />{" "}
        <a
          href="https://github.com/jasperteo"
          target="_blank"
          rel="noreferrer"
          className="hover:font-semibold hover:underline"
        >
          GitHub
        </a>
      </li>
      <li>
        <Icon inline icon="line-md:linkedin" />{" "}
        <a
          href="https://www.linkedin.com/in/jaspertzj/"
          target="_blank"
          rel="noreferrer"
          className="hover:font-semibold hover:underline"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
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
        <Icon inline icon="skill-icons:expressjs-dark" />{" "}
        <Icon inline icon="logos:hono" /> Express/Hono
      </li>
      <li>
        <Icon inline icon="logos:postgresql" /> Postgres
      </li>
    </ul>
  </div>
);
