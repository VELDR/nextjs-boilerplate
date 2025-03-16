import React from "react";
import type { Metadata } from "next";

import { Typography } from "@/components/atoms";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function Dashboard() {
	type Payment = {
		id: string;
		amount: number;
		status: "pending" | "processing" | "success" | "failed";
		email: string;
	};

	const payments: Payment[] = [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "489e1d42",
			amount: 125,
			status: "processing",
			email: "example@gmail.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "489e1d42",
			amount: 125,
			status: "processing",
			email: "example@gmail.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "489e1d42",
			amount: 125,
			status: "processing",
			email: "example@gmail.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "489e1d42",
			amount: 125,
			status: "processing",
			email: "example@gmail.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "489e1d42",
			amount: 125,
			status: "processing",
			email: "example@gmail.com",
		},
	];
	return (
		<React.Fragment>
			<div className="container flex min-h-screen flex-col items-center gap-8 pt-10 pb-96">
				<Typography variant="heading-md">Dashboard</Typography>

				<DataTable columns={columns} data={payments} />
			</div>
		</React.Fragment>
	);
}
