import { ElementType, ReactNode } from "react";

import { cn } from "@/utils/general";

export type FontSize =
	| "3xs"
	| "2xs"
	| "xs"
	| "sm"
	| "base"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl";

export type FontWeight = "light" | "normal" | "medium" | "bold";

export type Variant =
	| "heading-xl"
	| "heading-lg"
	| "heading-md"
	| "heading-sm"
	| "subheading"
	| "subheading-sm"
	| "body"
	| "body-lg"
	| "body-sm"
	| "caption"
	| "tiny"
	| "micro"
	| "button";
interface TypographyProps {
	variant?: Variant;
	size?: FontSize;
	weight?: FontWeight;
	className?: string;
	children: ReactNode;
	as?: ElementType;
}

const variantDefaults: Record<
	Variant,
	{ size: FontSize; weight: FontWeight; tag: ElementType }
> = {
	"heading-xl": { size: "6xl", weight: "bold", tag: "h1" }, // 60px
	"heading-lg": { size: "5xl", weight: "bold", tag: "h2" }, // 48px
	"heading-md": { size: "4xl", weight: "bold", tag: "h3" }, // 36px
	"heading-sm": { size: "3xl", weight: "bold", tag: "h4" }, // 30px
	subheading: { size: "2xl", weight: "medium", tag: "h5" }, // 24px
	"subheading-sm": { size: "xl", weight: "medium", tag: "h6" }, // 20px
	body: { size: "base", weight: "normal", tag: "p" }, // 16px, main text
	"body-lg": { size: "lg", weight: "normal", tag: "p" }, // 18px, lead/emphasis
	"body-sm": { size: "sm", weight: "normal", tag: "p" }, // 14px, compact text
	caption: { size: "xs", weight: "normal", tag: "span" }, // 12px, small descriptions
	tiny: { size: "2xs", weight: "normal", tag: "span" }, // 10px, badges
	micro: { size: "3xs", weight: "normal", tag: "span" }, // 8px, copyright, UI hints
	button: { size: "sm", weight: "medium", tag: "span" }, // 14px, interactive
};

export const Typography = ({
	variant = "body",
	size,
	weight,
	className,
	children,
	as,
}: TypographyProps) => {
	const defaults = variantDefaults[variant];

	const fontSize = size || defaults.size;
	const fontWeight = weight || defaults.weight;

	const Tag = as || defaults.tag;

	const fontSizeClasses = {
		"3xs": "text-3xs",
		"2xs": "text-2xs",
		xs: "text-xs",
		sm: "text-sm",
		base: "text-base",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
		"4xl": "text-4xl",
		"5xl": "text-5xl",
		"6xl": "text-6xl",
	};

	const fontWeightClasses = {
		light: "font-light",
		normal: "font-normal",
		medium: "font-medium",
		bold: "font-bold",
	};

	return (
		<Tag
			className={cn(
				fontSizeClasses[fontSize],
				fontWeightClasses[fontWeight],
				className
			)}
		>
			{children}
		</Tag>
	);
};
