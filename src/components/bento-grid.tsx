import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * A grid component for displaying BentoGridItems.
 */
const BentoGrid = ({ className, children }: BentoGridProps) => (
  <div
    className={cn(
      "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
      className,
    )}
  >
    {children}
  </div>
);

type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
};

/**
 * A grid item component for displaying content within the BentoGrid.
 */
const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => (
  <section
    className={cn(
      "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-zinc-900/20 bg-zinc-50 p-4 shadow-zinc-600/50 transition-shadow duration-300 hover:shadow-2xl dark:border-zinc-100/20 dark:bg-zinc-950",
      className,
    )}
  >
    {header}
    <div className="transition-transform duration-300 ease-in-out group-hover/bento:translate-x-2">
      {icon}
      <h2 className="mb-2 mt-2 font-bold text-zinc-600 transition-colors duration-300 dark:text-zinc-200">
        {title}
      </h2>
      <p className="text-xs text-zinc-600 dark:text-zinc-300">{description}</p>
    </div>
  </section>
);

export { BentoGrid, BentoGridItem, type BentoGridItemProps };
