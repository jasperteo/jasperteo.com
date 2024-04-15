import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
      className,
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <div
    className={cn(
      "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-zinc-900/20 bg-zinc-50 p-4 shadow-zinc-600/50 transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:border-zinc-100/20 dark:bg-zinc-950",
      className,
    )}
  >
    {header}
    <div className="transition-transform duration-300 ease-in-out group-hover/bento:translate-x-2">
      {icon}
      <div className="mb-2 mt-2 font-bold text-zinc-600 dark:text-zinc-200">
        {title}
      </div>
      <div className="text-xs text-zinc-600 dark:text-zinc-300">
        {description}
      </div>
    </div>
  </div>
);
