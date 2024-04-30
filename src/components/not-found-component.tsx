import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";

/**
 * Renders the NotFoundComponent, which displays a 404 Not Found page.
 * @returns The JSX element representing the NotFoundComponent.
 */
const NotFoundComponent = () => (
  <div className="m-auto w-full place-content-center space-y-8 text-center">
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
      className="sm:w-md mx-auto w-96"
      src="https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/blob/404NotFound.png"
      alt="404 Not Found"
      title="Logo by @sawaratsuki1004"
    />
    <Button asChild>
      <Link to="/">Home</Link>
    </Button>
  </div>
);

export { NotFoundComponent };
