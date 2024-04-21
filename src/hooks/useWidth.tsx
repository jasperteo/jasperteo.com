import { useRef, useState, useLayoutEffect } from "react";

export const useWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const throttledWidth = useRef(width);
  const throttleGate = useRef(false);
  const timeout = useRef<Timer>();

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!throttleGate.current) {
        if (ref.current) {
          throttledWidth.current =
            ref.current.offsetWidth > 595 ? 595 : ref.current.offsetWidth;
        }
        setWidth(throttledWidth.current);
        timeout.current = setTimeout(() => {
          throttleGate.current = false;
        }, 100);
        throttleGate.current = true;
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeout.current);
    };
  }, []);

  return { ref: ref, width: width };
};
