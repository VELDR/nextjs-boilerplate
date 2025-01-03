import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function Dashboard() {
	return (
		<React.Fragment>
			<div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
				<h1 className="text-2xl font-medium">Dashboard</h1>
			</div>
		</React.Fragment>
	);
}
