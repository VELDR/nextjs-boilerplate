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
		<html lang="en" className="h-full">
			<body className="flex h-full items-center justify-center bg-gray-100">
				<div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-xl">
					<div className="text-center">
						<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
							Oops! Something went wrong
						</h2>
						<p className="mt-2 text-sm text-gray-600">
							Don&apos;t worry, we&apos;re on it. In the meantime, you can try
							again or view more details.
						</p>
					</div>
					<div className="mt-8 space-y-6">
						<Button
							onClick={() => reset()}
							className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Try again
						</Button>
						<Button
							onClick={() => setShowDetails(!showDetails)}
							className="flex w-full justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							{showDetails ? "Hide details" : "See more details"}
						</Button>
						{showDetails && (
							<div className="mt-4 rounded-md bg-gray-50 p-4">
								<p className="text-sm text-gray-700">{error.message}</p>
							</div>
						)}
					</div>
				</div>
			</body>
		</html>
	);
}
