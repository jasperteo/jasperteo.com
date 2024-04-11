import { createLazyFileRoute } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export const Route = createLazyFileRoute("/resume")({
  component: Resume,
});

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

function Resume() {
  return (
    <>
      <h1 className="p-2 text-4xl">this is my resumea</h1>
      <div className="p-2 font-mono text-4xl">eating</div>
      <Document
        className="w-fit"
        file="https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/resumePDF/jasperCV.pdf"
      >
        <Page pageNumber={1} />
      </Document>
    </>
  );
}
