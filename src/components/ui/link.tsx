import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Root } from "@kobalte/core/link";
import type { LinkRootProps } from "@kobalte/core/link";

type LinkProps = LinkRootProps & { class?: string };

const Link = <T extends ValidComponent = "a">(
  props: PolymorphicProps<T, LinkProps>
) => {
  const [local, rest] = splitProps(props as LinkProps, ["class"]);

  return <Root class={local.class} {...rest} />;
};

export { Link };
