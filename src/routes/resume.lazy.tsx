import { createLazyFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";
import { ResumePDF } from "@/components/resume-PDF";
import { linkPDF } from "@/lib/utils";

export const Route = createLazyFileRoute("/resume")({
  component: () => (
    <Resume>
      <ResumePDF />
    </Resume>
  ),
});

function Resume({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto my-4 w-fit p-4">
        <Button asChild variant="outline">
          <a href={`${linkPDF}?download=`} className="font-mono text-xl">
            <Icon inline icon="carbon:generate-pdf" className="mr-3" /> Download
          </a>
        </Button>
      </div>
      <article>{children}</article>
    </>
  );
}
