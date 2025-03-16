"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "@/utils/general";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"peer border-primary bg-background hover:bg-muted focus-visible:outline-ring data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground flex h-4 w-4 shrink-0 rounded-sm border focus-visible:outline disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn("flex w-full items-center justify-center text-current")}
		>
			{props.checked === "indeterminate" ? (
				<Minus className="h-4 w-4" />
			) : (
				<Check className="h-4 w-4" />
			)}
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
