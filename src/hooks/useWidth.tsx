import { useRef, useState, useLayoutEffect } from "react";

export const useWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
      setWidth(ref.current.offsetWidth);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return { ref, width };
};
