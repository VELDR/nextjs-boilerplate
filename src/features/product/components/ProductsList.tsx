"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { ProductItem } from "@/features/product/components/ProductItem";
import { useGetAllProducts } from "@/hooks/useProducts";

export const ProductsList = () => {
	const {
		data: products = [],
		isError,
		error,
		isPending,
	} = useGetAllProducts();
	const router = useRouter();
	return (
		<section className="flex w-full flex-col gap-2 pt-6">
			<h2 className="font-medium">TanStack Query</h2>
			<div className="flex flex-col gap-2">
				{isPending && <div>Loading...</div>}
				{isError && <p>Error: {error.message}</p>}
				{products.map((product, index: number) => (
					<ProductItem
						key={index}
						product={product}
						onClick={() => router.push(`dashboard/${product.id}`)}
					/>
				))}
			</div>
		</section>
	);
};
