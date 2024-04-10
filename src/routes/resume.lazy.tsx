import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/resume")({
  component: About,
});

function About() {
  return (
    <>
      <h1 className="p-2 text-4xl">this is my resume</h1>
      <div className="p-2 font-mono text-4xl">eating</div>
    </>
  );
}
