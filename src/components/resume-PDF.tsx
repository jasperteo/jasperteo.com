import { Icon } from "@iconify-icon/react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { useWidth } from "@/hooks/useWidth";
import { linkPDF } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

/**
 * Renders a PDF document containing a resume.
 */
const ResumePDF = () => {
  const { ref, width } = useWidth();

  return (
    <div ref={ref} role="document" className="w-full">
      <Document
        className="mx-auto w-fit font-mono"
        file={linkPDF}
        loading={
          <>
            <Icon inline icon="line-md:loading-twotone-loop" /> Loading...
          </>
        }
        error={
          <>
            <Icon inline icon="carbon:cloud-offline" /> Unable to load
          </>
        }
      >
        <Page
          className="invert-0 transition dark:invert "
          width={width}
          pageNumber={1}
        />
      </Document>
    </div>
  );
};

export { ResumePDF };
