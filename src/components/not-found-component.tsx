import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";

const NotFoundComponent = () => (
  <div className="m-auto w-fit place-content-center text-center">
    <h1 className="my-8 font-mono text-2xl sm:text-4xl">
      <span className="text-3xl sm:text-5xl">
        <Icon icon="carbon:number-4" />
        <Icon icon="carbon:number-0" />
        <Icon icon="carbon:number-4" />
      </span>
      <br />
      Not Found
    </h1>
    <Button asChild variant="default">
      <Link to="/">Home</Link>
    </Button>
  </div>
);

export { NotFoundComponent };
