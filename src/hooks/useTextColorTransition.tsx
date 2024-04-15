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
    setTimeout(() => {
      setTextColor(color);
    }, delay);
  }, [color, delay]);

  return textColor;
};
