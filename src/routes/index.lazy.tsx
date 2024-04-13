import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="font-playpen line-height-relaxed p-2 text-center text-4xl">
        Hello!
        <br />I am Jasper!
      </h1>
    </>
  );
}
