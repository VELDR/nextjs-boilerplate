"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { LoaderCircle, Moon, Sun } from "lucide-react";

import { Button } from "@/ui";

export const ThemeToggle = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
	};

	if (!mounted) {
		return (
			<Button variant="outline" size="icon">
				<LoaderCircle className="animate-spin" size={16} />
			</Button>
		);
	}

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
