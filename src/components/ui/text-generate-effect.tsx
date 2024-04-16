import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  return (
    <motion.div className={cn(className)}>
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
};
