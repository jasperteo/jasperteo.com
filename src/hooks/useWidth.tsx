import { useRef, useState, useLayoutEffect } from "react";

const useWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setWidth(Math.min(595, ref.current!.offsetWidth));
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { ref: ref, width: width };
};

export { useWidth };
