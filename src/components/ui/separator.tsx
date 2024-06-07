import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";
import { Root } from "@kobalte/core/separator";
import type { SeparatorRootProps } from "@kobalte/core/separator";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@/utils/utils";

type SeparatorProps<T extends ValidComponent = "hr"> = SeparatorRootProps<T> & {
  class?: string;
};

const Separator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, SeparatorProps<T>>
) => {
  const [local, rest] = splitProps(props as SeparatorProps, [
    "class",
    "orientation",
  ]);

  return (
    <Root
      class={cn(
        "shrink-0 border-none bg-border data-[orientation=horizontal]:(h-0.25 w-full) data-[orientation=vertical]:(h-full w-0.25)",
        local.class
      )}
      orientation={local.orientation ?? "horizontal"}
      {...rest}
    />
  );
};

export { Separator };
