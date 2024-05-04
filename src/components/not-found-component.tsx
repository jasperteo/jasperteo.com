import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";
import notFound from "@/images/404NotFound.avif";

/**
 * Renders the NotFoundComponent, which displays a 404 Not Found page.
 * @returns The JSX element representing the NotFoundComponent.
 */
const NotFoundComponent = () => (
  <div className="m-auto w-full place-content-center text-center space-y-8">
    <h1 className="text-2xl font-mono sm:text-3xl">
      <span className="text-3xl sm:text-5xl">
        <Icon icon="carbon:number-4" />
        <Icon icon="carbon:number-0" />
        <Icon icon="carbon:number-4" />
      </span>
      <br />
      Not Found
    </h1>
    <img
      className="mx-auto w-96 sm:w-md"
      src={notFound.src}
      alt="404 Not Found"
      title="Logo by @sawaratsuki1004"
    />
    <Button asChild className="font-welcome">
      <Link to="/">cd ~</Link>
    </Button>
  </div>
);

export { NotFoundComponent };
