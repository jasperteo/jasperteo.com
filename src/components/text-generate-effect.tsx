import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type TextGenerateEffectProps = { words: string; className?: string };

/**
 * Renders a text effect that generates each letter of the given words one by one.
 *
 * @param words - The words to be displayed with the text effect.
 * @param className - Optional class name for the component.
 * @returns The JSX element representing the text effect.
 */
const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => (
  <motion.div
    className={cn(className)}
    animate={{ color: "rgba(0, 0, 0, 0)" }}
    transition={{ ease: "anticipate", duration: 1.69, delay: 4.2 }}
  >
    {[...words].map((letter, i) => (
      <motion.span
        aria-hidden="true"
        key={letter + i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: i * 0.2 }}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>
);

export { TextGenerateEffect };
