import { Icon } from "@iconify-icon/react";

/**
 * Renders a list of footer links with icons.
 * @returns The rendered footer items component.
 */
const FooterItems = () => {
  const footerLinksList: FooterLinksProps[] = [
    {
      url: "https://pages.cloudflare.com/",
      icon: <Icon icon="simple-icons:cloudflarepages" />,
      label: "Cloudflare Pages",
    },
    {
      url: "https://supabase.com/",
      icon: <Icon icon="simple-icons:supabase" />,
      label: "Supabase",
    },
    {
      url: "https://astro.build/",
      icon: <Icon icon="simple-icons:astro" />,
      label: "Astro",
    },
    {
      url: "https://react.dev/",
      icon: <Icon icon="simple-icons:react" />,
      label: "React",
    },
    {
      url: "https://bun.sh/",
      icon: <Icon icon="simple-icons:bun" />,
      label: "Bun",
    },
    {
      url: "https://www.radix-ui.com/",
      icon: <Icon icon="simple-icons:radixui" />,
      label: "Radix UI",
    },
    {
      url: "https://unocss.dev/",
      icon: <Icon icon="simple-icons:unocss" />,
      label: "UnoCSS",
    },
    {
      url: "https://ui.shadcn.com/",
      icon: <Icon icon="simple-icons:shadcnui" />,
      label: "Shadcn UI",
    },
  ];

  return (
    <>
      <h2 className="mx-auto my-4 w-fit text-center font-medium transition-colors">
        Made With:
      </h2>
      <div className="shadow-primary/69 mx-auto grid w-fit grid-cols-4 gap-x-5 gap-y-3 rounded-2xl border border-transparent px-5 py-3 sm:flex sm:gap-6 sm:bg-stone-900/10 sm:text-xl sm:shadow-sm sm:backdrop-blur-sm sm:backdrop-opacity-90 sm:dark:bg-stone-50/10">
        {footerLinksList.map((link) => (
          <FooterLinks key={link.label} {...link} />
        ))}
      </div>
    </>
  );
};

type FooterLinksProps = {
  url: string;
  icon: React.ReactNode | string;
  label: string;
};

const FooterLinks = ({ url, icon, label }: FooterLinksProps) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="place-self-center transition-all duration-300 hover:scale-150 sm:hover:mx-2"
  >
    {icon}
  </a>
);

export { FooterItems };
