"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { navConfig } from "@/config";

interface NavLinksProp {
	showVertical?: boolean;
	onLinkClick?: () => void;
}

export const NavLinks = ({
	showVertical = false,
	onLinkClick,
}: NavLinksProp) => {
	const pathname = usePathname();

	if (!navConfig) return null;

	return (
		<nav
			className={clsx(
				"flex gap-4 text-sm lg:gap-6",
				showVertical ? "flex-col items-start" : "flex-row items-center"
			)}
		>
			{navConfig?.map(({ title, href = "/" }: any) => (
				<Link
					key={href}
					href={href}
					className={clsx(
						"hover:text-foreground/80 transition-colors",
						pathname === href ? "text-foreground" : "text-foreground/60"
					)}
					onClick={onLinkClick}
				>
					{title}
				</Link>
			))}
		</nav>
	);
};
