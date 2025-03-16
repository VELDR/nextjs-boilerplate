"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Brand, Button } from "@/components/atoms";
import { NavLinks, Social, ThemeToggle } from "@/components/molecules";
import { Sidebar } from "@/components/organisms";

export const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<React.Fragment>
			<header className="border-border/40 bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
				<div className="container flex h-14 max-w-(--breakpoint-lg) items-center justify-between">
					<div className="flex items-center gap-4 lg:gap-6">
						<Button
							variant="ghost"
							size="icon"
							className="sm:hidden"
							onClick={() => setSidebarOpen(true)}
						>
							<Menu className="h-6 w-6" />
						</Button>
						<div className="hidden items-center gap-4 sm:flex">
							<Brand />
							<NavLinks />
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Social />
						<ThemeToggle />
						<Link href="/login">
							<Button variant="link">Login</Button>
						</Link>
						<Link href="/register">
							<Button>Register</Button>
						</Link>
					</div>
				</div>
			</header>
			<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
		</React.Fragment>
	);
};
