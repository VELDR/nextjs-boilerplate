import { Button, Separator, ThemedImage } from "@/components/ui";
import notFoundIllustrationDark from "@/images/404-dark.svg";
import notFoundIllustrationLight from "@/images/404-light.svg";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center min-h-[90dvh] p-4">
			<div className="flex flex-col max-w-md w-full gap-6 text-center">
				<ThemedImage
					lightSrc={notFoundIllustrationLight}
					darkSrc={notFoundIllustrationDark}
					alt="404"
					className="mx-auto object-cover w-80 h-56"
					priority
				/>
				<Separator />
				<div>
					<h1 className="~text-2xl/4xl font-bold">Oops! Page not found.</h1>
					<p>
						The page you&apos;re looking for doesn&apos;t exist or has been
						moved.
					</p>
				</div>
				<Button
					href="/"
					className="inline-flex mx-auto w-fit h-10 items-center justify-center rounded-md px-6 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300"
					prefetch={false}
				>
					Go back home
				</Button>
			</div>
		</div>
	);
}
