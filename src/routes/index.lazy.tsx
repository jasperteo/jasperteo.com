import { createLazyFileRoute } from "@tanstack/react-router";
import InfoCard from "@/components/info-card";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="font-playpen p-2 text-4xl">
        Hello!
        <br />I am Jasper!
      </h1>
      <InfoCard />
    </>
  );
}
