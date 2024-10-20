import { ButtonHTMLAttributes } from "react";

import { X } from "lucide-react";

import { Button } from "../ui";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const CloseButton = ({ className = "", ...props }: CloseButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			className={`rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ${className}`}
			{...props}
		>
			<X className="h-6 w-6 text-foreground" />
			<span className="sr-only">Close</span>
		</Button>
	);
};
