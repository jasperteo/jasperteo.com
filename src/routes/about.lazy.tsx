import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <h1 className="p-2 text-4xl font-playpen">
      Hello!
      <br />I am Jasper!
    </h1>
  );
}
