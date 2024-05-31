import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Root } from "@kobalte/core/separator";
import type { SeparatorRootProps } from "@kobalte/core/separator";

import { cn } from "@/lib/utils";

type SeparatorProps = SeparatorRootProps & { class?: string };

const Separator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, SeparatorProps>
) => {
  const [local, rest] = splitProps(props as SeparatorProps, ["class"]);

  return (
    <Root
      class={cn(
        "shrink-0 border-none bg-zinc-300 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px dark:bg-zinc-700",
        local.class
      )}
      {...rest}
    />
  );
};

export { Separator };
