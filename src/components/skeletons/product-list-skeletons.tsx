import React from "react";

import { Skeleton } from "@/ui";

export function ProductListSkeletons() {
	return (
		<React.Fragment>
			{new Array(10).fill(null).map((_, index) => (
				<div key={index} className="flex flex-row gap-4 border p-2">
					<div className="relative h-20 w-40 flex-shrink-0">
						<Skeleton className="h-full w-full" />
					</div>
					<div className="flex w-full flex-col gap-2">
						<Skeleton className="h-6 w-1/2" />
						<Skeleton className="h-4 w-16" />
					</div>
				</div>
			))}
		</React.Fragment>
	);
}
