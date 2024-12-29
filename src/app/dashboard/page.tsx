import React from "react";
import type { Metadata } from "next";

import { productAPI } from "@/services";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";

import { ProductsList } from "@/features/product/components/ProductsList";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default async function Dashboard() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["productList"],
		queryFn: productAPI.getAll,
	});
	return (
		<React.Fragment>
			<div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
				<h1 className="text-2xl font-medium">Dashboard</h1>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<ProductsList />
				</HydrationBoundary>
			</div>
		</React.Fragment>
	);
}
