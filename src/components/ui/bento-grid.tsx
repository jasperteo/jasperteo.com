import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children?: ReactNode;
};

/**
 * A grid component for displaying BentoGridItems.
 */
const BentoGrid = ({ className, children }: BentoGridProps) => (
  <div
    className={cn(
      "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
      className
    )}
  >
    {children}
  </div>
);

type BentoGridItemProps = {
  className?: string;
  title?: string;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
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
      "group/bento bg-card text-card-foreground border-border row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 shadow transition-all duration-200 hover:shadow-2xl dark:shadow-zinc-500",
      className
    )}
  >
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-2">
      <span className="text-xl text-zinc-400 dark:text-zinc-500 group-hover/bento:text-primary/69">
        {icon}
      </span>
      <h2 className="mb-3 text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  </section>
);

export { BentoGrid, BentoGridItem };
export type { BentoGridItemProps };
