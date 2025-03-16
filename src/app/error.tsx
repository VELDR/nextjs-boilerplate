"use client";

import React, { useState } from "react";

import { Button, Typography } from "@/components/atoms";

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="flex h-[calc(100dvh-60px)] items-center justify-center">
			<div className="w-full max-w-md space-y-8 rounded-xl p-10 shadow-xl">
				<div className="text-center">
					<Typography variant="heading-sm" className="mt-6">
						Oops! Something went wrong
					</Typography>
					<Typography variant="caption" className="mt-2">
						Don&apos;t worry, we&apos;re on it. In the meantime, you can try
						again or view more details.
					</Typography>
				</div>
				<div className="mt-8 space-y-6">
					<Button
						onClick={() => reset()}
						className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						Try again
					</Button>
					<Button
						onClick={() => setShowDetails(!showDetails)}
						variant="outline"
						className="flex w-full justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						{showDetails ? "Hide details" : "See more details"}
					</Button>
					{showDetails && (
						<div className="mt-4 rounded-md bg-primary p-4 dark:bg-primary">
							<Typography
								variant="caption"
								className="text-primary-foreground dark:text-primary-foreground"
							>
								{error.message}
							</Typography>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
