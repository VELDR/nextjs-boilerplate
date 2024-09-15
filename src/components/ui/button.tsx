import * as React from "react";
import Link from "next/link";

import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:opacity-75",
				destructive:
					"hover:bg-destructive/90 bg-destructive text-destructive-foreground",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"hover:bg-secondary/80 bg-secondary text-secondary-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	href?: string;
	prefetch?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, asChild = false, href, prefetch, ...props },
		ref
	) => {
		const Comp = asChild ? Slot : "button";
		const buttonClasses = cn(buttonVariants({ variant, size, className }));

		if (href) {
			return (
				<Link href={href} passHref legacyBehavior prefetch={prefetch}>
					<Comp className={buttonClasses} ref={ref} {...props} />
				</Link>
			);
		}

		return <Comp className={buttonClasses} ref={ref} {...props} />;
	}
);
Button.displayName = "Button";
