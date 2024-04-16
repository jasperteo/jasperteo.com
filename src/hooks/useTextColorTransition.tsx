import { useEffect, useState } from "react";

export const useTextColorTransition = ({
  initial,
  color,
  delay,
}: {
  initial?: string;
  color?: string;
  delay: number;
}) => {
  const [textColor, setTextColor] = useState(initial);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextColor(color);
    }, delay);
    return () => clearTimeout(timeout);
  }, [color, delay]);

  return textColor;
};
