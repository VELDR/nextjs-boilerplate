import { Button, Separator, ThemedImage, Typography } from "@/components/atoms";
import notFoundIllustrationDark from "@/images/404-dark.svg";
import notFoundIllustrationLight from "@/images/404-light.svg";

export default function NotFound() {
	return (
		<div className="flex min-h-[90dvh] flex-col items-center p-4">
			<div className="flex w-full max-w-md flex-col gap-6 text-center">
				<ThemedImage
					lightSrc={notFoundIllustrationLight}
					darkSrc={notFoundIllustrationDark}
					alt="404"
					className="mx-auto h-56 w-80 object-cover"
					priority
				/>
				<Separator />
				<div>
					<Typography variant="heading-lg" className="~text-2xl/4xl">
						Oops! Page not found.
					</Typography>
					<Typography variant="body">
						The page you&apos;re looking for doesn&apos;t exist or has been
						moved.
					</Typography>
				</div>
				<Button
					href="/"
					className="mx-auto inline-flex h-10 w-fit items-center justify-center rounded-md px-6 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300"
					prefetch={false}
				>
					Go back home
				</Button>
			</div>
		</div>
	);
}
