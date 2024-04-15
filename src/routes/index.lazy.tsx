import { createLazyFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const openingMessage = "Welcome! 你 好!";

  return (
    <>
      <h1 className="font-welcome m-auto mb-8 w-fit bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text p-4 text-4xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400">
        <TextGenerateEffect words={openingMessage} />
      </h1>
      <BentoGridLayout />
    </>
  );
}

function BentoGridLayout() {
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
  );
}

const Introduction = () => (
  <div className="line-height-relaxed m-auto p-4">
    <div>
      My name is{" "}
      <span className="bg-gradient-to-r from-blue-200 to-indigo-200 font-bold dark:from-blue-500 dark:to-indigo-500">
        Jasper Teo
      </span>
      , and I focus on full stack development and web technologies. I am mainly
      interested building products with that deliver a good user experience,
      leveraging on modern tools and technologies to improve productivity and
      developer experience. Always looking for opportunities to learn and grow.
    </div>
    <br />
    <div>
      I am currently looking for a full-time position as a software engineer.
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="line-height-loose m-auto p-4 font-mono text-lg">
    <div>
      <Icon inline icon="line-md:github-loop" />{" "}
      <a
        href="https://github.com/jasperteo"
        target="_blank"
        rel="noreferrer"
        className="hover:font-semibold hover:underline"
      >
        GitHub
      </a>
    </div>
    <div>
      <Icon inline icon="line-md:linkedin" />{" "}
      <a
        href="https://www.linkedin.com/in/jaspertzj/"
        target="_blank"
        rel="noreferrer"
        className="hover:font-semibold hover:underline"
      >
        LinkedIn
      </a>
    </div>
  </div>
);

const Skills = () => (
  <div className="line-height-loose m-auto font-mono">
    <div>
      <Icon inline icon="logos:javascript" />{" "}
      <Icon inline icon="logos:typescript-icon" /> JS/TS
    </div>
    <div>
      <Icon inline icon="logos:nodejs-icon" /> <Icon inline icon="logos:bun" />{" "}
      Node.js/Bun
    </div>
    <div>
      <Icon inline icon="logos:react" />{" "}
      <Icon inline icon="logos:nextjs-icon" /> React
    </div>
    <div>
      <Icon inline icon="skill-icons:expressjs-dark" />{" "}
      <Icon inline icon="logos:hono" /> Express/Hono
    </div>
    <div>
      <Icon inline icon="logos:postgresql" /> Postgres
    </div>
  </div>
);
