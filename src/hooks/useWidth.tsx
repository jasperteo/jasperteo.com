import { useRef, useState, useLayoutEffect } from "react";

const useWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const throttleGate = useRef(false);
  const timeout = useRef<Timer>();

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!throttleGate.current) {
        setWidth(Math.min(595, ref.current!.offsetWidth));

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

export { useWidth };
