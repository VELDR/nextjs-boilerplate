import { ButtonHTMLAttributes } from "react";

import { X } from "lucide-react";

import { Button } from "@/components/atoms";
import { cn } from "@/utils/general";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const CloseButton = ({ className = "", ...props }: CloseButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn(
				"ring-offset-background focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
				className
			)}
			{...props}
		>
			<X className="text-foreground h-6 w-6" />
			<span className="sr-only">Close</span>
		</Button>
	);
};
