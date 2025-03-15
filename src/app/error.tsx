"use client";

import React, { useState } from "react";

import { Button } from "@/components/atoms";

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="flex h-full items-center justify-center">
			<div className="w-full max-w-md space-y-8 rounded-xl p-10 shadow-xl">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold">
						Oops! Something went wrong
					</h2>
					<p className="mt-2 text-sm">
						Don&apos;t worry, we&apos;re on it. In the meantime, you can try
						again or view more details.
					</p>
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
							<p className="text-sm text-primary-foreground dark:text-primary-foreground">
								{error.message}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
