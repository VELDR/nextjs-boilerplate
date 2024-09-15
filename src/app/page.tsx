import Balancer from "react-wrap-balancer";
import Link from "next/link";

import { Github } from "lucide-react";

import { Button } from "@/ui";

export default function Home() {
	return (
		<>
			<section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
				<h1 className="~text-3xl/5xl text-center font-bold leading-tight tracking-tighter lg:leading-[1.1]">
					Next.js Boilerplate
				</h1>

				<p className="text-center text-lg font-light text-foreground">
					<Balancer>
						An open source boilerplate built using Next.js 14, TypeScript, and
						Tailwind CSS
					</Balancer>
				</p>

				<nav className="flex items-center gap-4 py-4">
					<Link href="/dashboard">
						<Button size="sm" className="text-sm">
							<span>Get Started</span>
						</Button>
					</Link>

					<Link
						href="https://github.com/VELDR/nextjs-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="sm">
							<Github className="mr-2 h-4 w-4" aria-label="GitHub" />
							<span>GitHub</span>
						</Button>
					</Link>
				</nav>
			</section>
		</>
	);
}
