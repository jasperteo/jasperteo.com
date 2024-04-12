import { createLazyFileRoute } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export const Route = createLazyFileRoute("/resume")({
  component: Resume,
});

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const resumePDF =
  "https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/resumePDF/jasperCV.pdf";

function Resume() {
  return (
    <>
      <div className="p-6 text-center">
        <a href={`${resumePDF}?download=`}>
          <Button variant="outline">
            <div className="font-mono text-xl">
              <Icon inline icon="carbon:generate-pdf" /> Download
            </div>
          </Button>
        </a>
      </div>
      <Document className="mx-auto w-fit" file={resumePDF}>
        <Page pageNumber={1} />
      </Document>
    </>
  );
}
