"use client";

import React from "react";

import { ProductListSkeletons } from "@/skeletons";
import { useProducts } from "@/hooks";

import { ProductItem } from "./product-item";

export const Query = () => {
	const {
		data: productListData = [],
		isLoading,
		error,
	} = useProducts() as {
		data: { title: string; thumbnail: string; price: number }[];
		isLoading: boolean;
		error: Error;
	};

	return (
		<section className="flex w-full flex-col gap-2 pt-6">
			<h2 className="font-medium">TanStack Query</h2>
			<div className="flex flex-col gap-2">
				{isLoading && <ProductListSkeletons />}
				{error && <p>Error: {error.message}</p>}
				{productListData.map((product, index: number) => (
					<ProductItem key={index} product={product} />
				))}
			</div>
		</section>
	);
};
