import { useEffect, useState } from "react";

export const useTextColorTransition = ({
  color,
  delay,
}: {
  color: string;
  delay: number;
}) => {
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextColor(color);
    }, delay);
    return () => clearTimeout(timeout);
  }, [color, delay]);

  return textColor;
};
