import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <React.Fragment>{children}</React.Fragment>;
}
