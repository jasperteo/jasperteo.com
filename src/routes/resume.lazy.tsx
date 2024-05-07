import { createLazyFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { ResumePDF } from "@/components/resume-PDF";
import { Button } from "@/components/ui/button";
import { linkPDF } from "@/lib/utils";

export const Route = createLazyFileRoute("/resume")({
  component: Resume,
});

function Resume() {
  return (
    <>
      <div className="mx-auto my-4 w-fit p-4">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="hover:animate-rubber-band"
        >
          <a
            download="jasperCV.pdf"
            href={`${linkPDF}?download=`}
            className="text-xl"
          >
            <Icon inline icon="carbon:generate-pdf" className="mr-3" />
            Download
          </a>
        </Button>
      </div>
      <article>
        <ResumePDF />
      </article>
    </>
  );
}
