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

const ResumePDF = () => {
  const { ref, width } = useWidth();

  return (
    <div ref={ref} className="w-full">
      <Document
        className="mx-auto w-fit font-mono"
        file={linkPDF}
        loading={
          <p>
            <Icon inline icon="line-md:loading-twotone-loop" /> Loading
          </p>
        }
        error={
          <p>
            <Icon inline icon="carbon:cloud-offline" /> Unable to load
          </p>
        }
      >
        <Page className="invert-0 dark:invert" width={width} pageNumber={1} />
      </Document>
    </div>
  );
};

export { ResumePDF };
