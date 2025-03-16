"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { LoaderCircle, Moon, Sun } from "lucide-react";

import { Button } from "@/components/atoms";

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
			<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
