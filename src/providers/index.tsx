"use client";

import { useEffect, useState } from "react";

import { QueryProvider } from "@/providers/queryProvider";
import { ThemeProvider } from "@/providers/themeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <QueryProvider>{children}</QueryProvider>;
	}

	return (
		<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
			<QueryProvider>{children}</QueryProvider>
		</ThemeProvider>
	);
};
