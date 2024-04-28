import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";
import notFound from "@/assets/not-found.avif";

/**
 * Renders the NotFoundComponent, which displays a 404 Not Found page.
 * @returns The JSX element representing the NotFoundComponent.
 */
const NotFoundComponent = () => (
  <div className="m-auto w-fit place-content-center space-y-8 text-center">
    <h1 className="font-mono text-2xl sm:text-3xl">
      <span className="text-3xl sm:text-5xl">
        <Icon icon="carbon:number-4" />
        <Icon icon="carbon:number-0" />
        <Icon icon="carbon:number-4" />
      </span>
      <br />
      Not Found
    </h1>
    <img
      src={notFound}
      className="sm:w-md animate-rubber-band animate-count-infinite animate-duration-1690 w-96"
      alt="404 Not Found"
    />
    <Button asChild variant="default">
      <Link to="/">Home</Link>
    </Button>
  </div>
);

export { NotFoundComponent };
