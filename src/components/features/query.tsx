"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { ProductListSkeletons } from "@/skeletons";
import { useGetAllProducts } from "@/hooks";

import { ProductItem } from "./product-item";

export const Query = () => {
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
				{isPending && <ProductListSkeletons />}
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