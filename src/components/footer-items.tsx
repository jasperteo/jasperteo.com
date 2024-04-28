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
      url: "https://vitejs.dev/",
      icon: <Icon icon="simple-icons:vite" />,
      label: "Vite",
    },
    {
      url: "https://supabase.com/",
      icon: <Icon icon="simple-icons:supabase" />,
      label: "Supabase",
    },
    {
      url: "https://bun.sh/",
      icon: <Icon icon="simple-icons:bun" />,
      label: "Bun",
    },
    {
      url: "https://react.dev/",
      icon: <Icon icon="simple-icons:react" />,
      label: "React",
    },
    {
      url: "https://unocss.dev/",
      icon: <Icon icon="simple-icons:unocss" />,
      label: "UnoCSS",
    },
    {
      url: "https://www.radix-ui.com/",
      icon: <Icon icon="simple-icons:radixui" />,
      label: "Radix UI",
    },
    {
      url: "https://ui.shadcn.com/",
      icon: <Icon icon="simple-icons:shadcnui" />,
      label: "Shadcn UI",
    },
    {
      url: "https://iconify.design/",
      icon: <Icon icon="simple-icons:iconify" />,
      label: "Iconify",
    },
    {
      url: "https://www.framer.com/motion/",
      icon: <Icon icon="simple-icons:framer" />,
      label: "Framer Motion",
    },
  ];

  return (
    <>
      <h2 className="mx-auto my-4 w-fit text-center font-medium">Made With:</h2>
      <div className="mx-auto grid w-fit grid-cols-5 gap-x-5 gap-y-3 rounded-2xl border border-transparent px-5 py-3 sm:flex sm:gap-6 sm:bg-zinc-900/[0.1] sm:text-xl sm:backdrop-blur-sm sm:backdrop-opacity-90 sm:dark:bg-zinc-100/[0.1]">
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
    className="transition-transform duration-300 hover:scale-150"
    aria-label={label}
  >
    {icon}
  </a>
);

export { FooterItems };
