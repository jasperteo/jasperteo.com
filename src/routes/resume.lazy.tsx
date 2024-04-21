import { createLazyFileRoute } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";
import { useWidth } from "@/hooks/useWidth";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export const Route = createLazyFileRoute("/resume")({
  component: () => (
    <Resume>
      <Docs />
    </Resume>
  ),
});

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const resumePDF =
  "https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/resumePDF/jasperCV.pdf";

function Resume({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto w-fit p-6">
        <a href={`${resumePDF}?download=`}>
          <Button variant="outline">
            <div className="font-mono text-xl">
              <Icon inline icon="carbon:generate-pdf" /> Download
            </div>
          </Button>
        </a>
      </div>
      <article>{children}</article>
    </>
  );
}

function Docs() {
  const { ref, width } = useWidth();

  return (
    <div ref={ref} className="w-full">
      <Document
        className="mx-auto w-fit font-mono"
        file={resumePDF}
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
}
