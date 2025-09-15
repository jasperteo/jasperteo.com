import { Button } from "@/components/ui/button";

function ThemeToggleFallback() {
	return (
		<Button
			variant="default"
			size="icon"
			className="bg-foreground hover:bg-foreground"
			render={<div />}
		/>
	);
}

export { ThemeToggleFallback };
