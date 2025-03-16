import React from "react";
import Link from "next/link";

import { Github } from "lucide-react";

import { siteConfig } from "@/config";

export const Social = () => {
	return (
		<React.Fragment>
			<Link
				href={siteConfig.links.github}
				rel="noopener noreferrer"
				target="_blank"
			>
				<div className="hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 w-10 items-center justify-center rounded-md px-0 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50">
					<Github className="h-5 w-5" aria-label="GitHub" />
				</div>
			</Link>
		</React.Fragment>
	);
};
