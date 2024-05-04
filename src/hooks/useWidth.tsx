import { useLayoutEffect, useRef, useState } from "react";

/**
 * Custom hook that returns the width of a DOM element.
 * Uses the ResizeObserver API to track changes in the element's width.
 *
 * @returns An object containing a ref to the DOM element and the current width.
 */
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

  return { ref, width };
};

export { useWidth };
