"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Icon } from "@iconify-icon/react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { Skeleton } from "@/components/ui/skeleton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

/**
 * Renders a PDF document containing a resume.
 */
const ResumePDF = ({ PDF }: { PDF: string }) => {
  const { ref, width } = useWidth();

  return (
    <Document
      className="mx-auto max-w-[595px] text-center font-mono"
      inputRef={ref}
      file={PDF}
      loading={<Skeleton className="mx-auto aspect-[1/sqrt(2)] rounded-lg" />}
      error={
        <>
          <Icon inline icon="carbon:cloud-offline" /> Unable to load
        </>
      }
    >
      <Page
        className="invert-0 transition dark:invert"
        width={width}
        pageNumber={1}
      />
    </Document>
  );
};

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
      setWidth(ref.current!.offsetWidth);
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

export { ResumePDF };
