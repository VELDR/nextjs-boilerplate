import { ThemeToggle } from "@/widgets";

export const DarkTheme = () => {
	return (
		<section className="flex w-full flex-col gap-2 pt-6">
			<h2 className="font-medium">Dark Theme</h2>

			<ThemeToggle />
		</section>
	);
};
