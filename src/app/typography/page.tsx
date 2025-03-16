import { Button, Typography } from "@/components/atoms";
import { Variant } from "@/components/atoms/typography";

const TypographyShowcase = () => {
	const variants: Variant[] = [
		"heading-xl",
		"heading-lg",
		"heading-md",
		"heading-sm",
		"subheading",
		"subheading-sm",
		"body",
		"body-lg",
		"body-sm",
		"caption",
		"tiny",
		"micro",
		"button",
	];

	const getSampleText = (variant: Variant) => {
		switch (variant) {
			case "heading-xl":
				return "Heading XL (60px)";
			case "heading-lg":
				return "Heading LG (48px)";
			case "heading-md":
				return "Heading MD (36px)";
			case "heading-sm":
				return "Heading SM (30px)";
			case "subheading":
				return "Subheading (24px)";
			case "subheading-sm":
				return "Subheading SM (20px)";
			case "body":
				return "Body (16px) - Main text used for paragraphs and general content.";
			case "body-lg":
				return "Body LG (18px) - Larger body text used for lead paragraphs or emphasized content.";
			case "body-sm":
				return "Body SM (14px) - Compact text used where space is limited but readability is still important.";
			case "caption":
				return "Caption (12px) - Used for image captions, small descriptions, and supplementary information.";
			case "tiny":
				return "Tiny (10px) - Very small text used for badges and compact UI elements.";
			case "micro":
				return "Micro (8px) - The smallest text, used sparingly for copyright notices or UI hints.";
			case "button":
				return "Button (14px) - Text style used for interactive elements like buttons.";
			default:
				return "Sample Text";
		}
	};

	return (
		<div className="mx-auto max-w-4xl p-8">
			<Typography variant="heading-xl" className="mb-8">
				Typography Showcase
			</Typography>

			<div className="space-y-12">
				<section>
					<Typography variant="heading-md" className="mb-6 border-b pb-2">
						Standard Variants
					</Typography>
					<div className="space-y-6">
						{variants.map((variant) => (
							<div key={variant} className="rounded-lg border p-4">
								<div className="mb-2 flex flex-col md:flex-row md:items-center">
									<Typography
										variant="caption"
										className="bg-primary text-primary-foreground mb-2 rounded px-2 py-1 md:mr-4 md:mb-0"
									>
										variant={variant}
									</Typography>
									<Typography variant="tiny" className="text-muted-foreground">
										{variant}{" "}
										{getSampleText(variant)
											.split(" - ")[0]
											.split(" (")[1]
											?.replace(")", "")}
									</Typography>
								</div>
								<Typography variant={variant}>
									{getSampleText(variant)}
								</Typography>
							</div>
						))}
					</div>
				</section>

				<section>
					<Typography variant="heading-md" className="mb-6 border-b pb-2">
						Custom Size & Weight Examples
					</Typography>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="flex flex-col gap-2 rounded-lg border p-4">
							<Typography
								variant="caption"
								className="w-fit rounded bg-green-100 px-2 py-1 text-green-800"
							>
								Custom Size
							</Typography>
							<Typography variant="body" size="2xl">
								Body text with 2xl size override
							</Typography>
						</div>

						<div className="flex flex-col gap-2 rounded-lg border p-4">
							<Typography
								variant="caption"
								className="w-fit rounded bg-purple-100 px-2 py-1 text-purple-800"
							>
								Custom Weight
							</Typography>
							<Typography variant="body" weight="bold">
								Body text with bold weight override
							</Typography>
						</div>

						<div className="flex flex-col gap-2 rounded-lg border p-4">
							<Typography
								variant="caption"
								className="w-fit rounded bg-amber-100 px-2 py-1 text-amber-800"
							>
								Custom Element
							</Typography>
							<Typography
								variant="body"
								as="blockquote"
								className="border-l-4 border-gray-300 pl-4 italic"
							>
								Body text as a blockquote element
							</Typography>
						</div>

						<div className="flex flex-col gap-2 rounded-lg border p-4">
							<Typography
								variant="caption"
								className="w-fit rounded bg-rose-100 px-2 py-1 text-rose-800"
							>
								Multiple Overrides
							</Typography>
							<Typography
								variant="body"
								size="xl"
								weight="light"
								as="address"
								className="text-gray-600"
							>
								Body text with multiple overrides (size, weight, element)
							</Typography>
						</div>
					</div>
				</section>

				<section>
					<Typography variant="heading-md" className="mb-6 border-b pb-2">
						Real-world Examples
					</Typography>

					<div className="space-y-8">
						<div className="rounded-lg border p-6">
							<Typography variant="heading-sm" className="mb-2">
								Blog Post Example
							</Typography>
							<div className="space-y-4">
								<Typography variant="heading-lg">
									The Future of Web Typography
								</Typography>
								<Typography variant="body-sm" className="text-muted-foreground">
									Published on March 16, 2025 • 5 min read
								</Typography>
								<Typography variant="body-lg">
									Typography remains one of the most important aspects of web
									design, affecting readability, user experience, and brand
									perception.
								</Typography>
								<Typography variant="body">
									With the rise of variable fonts and improved browser support,
									designers now have unprecedented control over typographic
									details. This allows for more expressive, responsive, and
									accessible text across all devices.
								</Typography>
								<Typography
									variant="caption"
									className="text-muted-foreground mt-4 block"
								>
									Tags: <span className="text-link">Design</span>,{" "}
									<span className="text-link">Typography</span>,{" "}
									<span className="text-link">Web Development</span>
								</Typography>
							</div>
						</div>

						<div className="rounded-lg border p-6">
							<Typography variant="heading-sm" className="mb-2">
								Product Card Example
							</Typography>
							<div className="bg-muted rounded-md p-4">
								<Typography variant="subheading-sm" className="text-link">
									New Release
								</Typography>
								<Typography variant="subheading">
									Ergonomic Office Chair
								</Typography>
								<Typography variant="body-sm" className="mt-2">
									Designed for all-day comfort with adjustable lumbar support
									and breathable mesh back.
								</Typography>
								<div className="mt-4 flex items-center justify-between">
									<Typography variant="heading-sm">$299.99</Typography>
									<Button>
										<Typography variant="button" className="px-4 py-2">
											Add to Cart
										</Typography>
									</Button>
								</div>
								<Typography
									variant="micro"
									className="text-muted-foreground mt-4"
								>
									*Free shipping on orders over $100. Terms apply.
								</Typography>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default TypographyShowcase;
