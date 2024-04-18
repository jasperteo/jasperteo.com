import { createLazyFileRoute } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";
import { useWidth } from "@/hooks/useWidth";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export const Route = createLazyFileRoute("/resume")({
  component: Resume,
});

function Resume() {
  const { ref, width } = useWidth();

  const scaledWidth = width < 595 ? width : 595;
  const resumePDF =
    "https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/resumePDF/jasperCV.pdf";

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url,
  ).toString();

  return (
    <>
      <div ref={ref} className="w-full p-6 text-center">
        <a href={`${resumePDF}?download=`}>
          <Button variant="outline">
            <div className="font-mono text-xl">
              <Icon inline icon="carbon:generate-pdf" /> Download
            </div>
          </Button>
        </a>
      </div>
      <Document
        className="mx-auto w-fit font-mono invert-0 dark:invert"
        file={resumePDF}
        loading={
          <>
            <Icon inline icon="line-md:loading-twotone-loop" /> Loading
          </>
        }
        error={
          <>
            <Icon inline icon="carbon:cloud-offline" /> Unable to load
          </>
        }
      >
        <Page width={scaledWidth} pageNumber={1} />
      </Document>
    </>
  );
}
