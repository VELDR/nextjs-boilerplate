import Link from "next/link";

import { Button } from "@/components/ui";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[100dvh] text-gray-50 p-4">
			<div className="flex flex-col gap-4 max-w-md w-full text-center">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl font-bold">Oops! Page not found.</h1>
					<p className="text-gray-400">
						The page you&apos;re looking for doesn&apos;t exist or has been
						moved.
					</p>
				</div>
				<Link href="/" prefetch={false}>
					<Button>Go back home</Button>
				</Link>
			</div>
		</div>
	);
}
