import React from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

import { Github } from "lucide-react";

import { Button, Typography } from "@/components/atoms";

export default function Home() {
	return (
		<React.Fragment>
			<section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
				<Typography
					variant="heading-lg"
					className="text-center leading-tight tracking-tighter lg:leading-[1.1]"
				>
					Next.js Boilerplate
				</Typography>

				<Typography
					variant="body-lg"
					className="text-foreground text-center"
					weight="light"
				>
					<Balancer>
						An open source boilerplate built using Next.js 15, TypeScript, and
						Tailwind CSS
					</Balancer>
				</Typography>

				<nav className="flex items-center gap-4 py-4">
					<Link href="/dashboard">
						<Button size="sm" className="text-sm">
							Get Started
						</Button>
					</Link>

					<Link
						href="https://github.com/VELDR/nextjs-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="sm">
							<Github className="mr-2 h-4 w-4" aria-label="GitHub" />
							GitHub
						</Button>
					</Link>
				</nav>
			</section>
		</React.Fragment>
	);
}
