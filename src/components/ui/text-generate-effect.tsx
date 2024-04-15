import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    void animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [animate]);

  return (
    <div className={cn(className)}>
      <div className="tracking-wide">
        <motion.div ref={scope}>
          <div>
            {words.split("").map((letter, i) => (
              <motion.span key={letter + i} className="opacity-0">
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
