import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => (
  <motion.div
    className={cn(className)}
    animate={{ color: "rgba(0, 0, 0, 0)" }}
    transition={{ duration: 1.69, delay: 4.2 }}
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
