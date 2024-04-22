import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const footerLinksList: FooterLinksProps[] = [
    {
      url: "https://pages.cloudflare.com/",
      icon: <Icon icon="simple-icons:cloudflarepages" />,
    },
    {
      url: "https://vitejs.dev/",
      icon: <Icon icon="simple-icons:vite" />,
    },
    {
      url: "https://supabase.com/",
      icon: <Icon icon="simple-icons:supabase" />,
    },
    {
      url: "https://bun.sh/",
      icon: <Icon icon="simple-icons:bun" />,
    },
    {
      url: "https://react.dev/",
      icon: <Icon icon="simple-icons:react" />,
    },
    {
      url: "https://unocss.dev/",
      icon: <Icon icon="simple-icons:unocss" />,
    },
    {
      url: "https://www.radix-ui.com/",
      icon: <Icon icon="simple-icons:radixui" />,
    },
    {
      url: "https://ui.shadcn.com/",
      icon: <Icon icon="simple-icons:shadcnui" />,
    },
    {
      url: "https://iconify.design/",
      icon: <Icon icon="simple-icons:iconify" />,
    },
    {
      url: "https://www.framer.com/motion/",
      icon: <Icon icon="simple-icons:framer" />,
    },
  ];

  return (
    <div className="min-w-dvw relative min-h-dvh bg-zinc-100 p-8 font-sans text-zinc-900 antialiased transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="mx-auto min-w-80 lg:max-w-5xl">
        <header>
          <nav className="m-10 flex h-11 place-content-evenly items-center gap-5 text-center sm:place-content-end">
            <Link to="/" className="[&.active]:font-bold">
              <Icon inline icon="carbon:home" /> Home
            </Link>
            <Separator orientation="vertical" />
            <Link to="/resume" className="[&.active]:font-bold">
              <Icon inline icon="carbon:document-pdf" /> Resume
            </Link>
            <Separator orientation="vertical" />
            <DarkModeToggle />
          </nav>
        </header>

        <Separator className="my-4" />

        <main className="mb-40">
          <Outlet />
        </main>

        <footer className="absolute inset-x-8 bottom-8 mx-auto min-w-80 lg:max-w-5xl">
          <h3 className="my-4 text-center font-medium">Made With:</h3>
          <nav className="mx-auto grid w-fit grid-cols-5 gap-5 text-base sm:flex sm:gap-6 sm:text-xl">
            {footerLinksList.map((link, i) => (
              <FooterLinks key={i} {...link} />
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
}

type FooterLinksProps = { url?: string; icon?: React.ReactNode | string };

const FooterLinks = ({ url, icon }: FooterLinksProps) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="transition-all hover:scale-150"
  >
    {icon}
  </a>
);
