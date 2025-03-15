import React from "react";
import type { Metadata } from "next";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function Dashboard() {
	return (
		<React.Fragment>
			<div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
				<h1 className="text-2xl font-medium">Dashboard</h1>
				<div>
					<Table>
						<TableCaption>A list of your recent invoices.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>Paid</TableCell>
								<TableCell>Credit Card</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</React.Fragment>
	);
}
