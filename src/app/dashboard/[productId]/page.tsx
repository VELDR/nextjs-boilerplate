"use client";

import { use } from "react";

import { useGetProductById } from "@/hooks";

interface ProductPageProps {
	params: Promise<{ productId: number }>;
}

export default function ProductPage(props: ProductPageProps) {
	const params = use(props.params);
	const { productId } = params;
	const {
		data: product,
		isError,
		error,
		isPending,
	} = useGetProductById(productId);
	return (
		<div>
			{isPending && <div>Loading...</div>}
			{isError && <div>Error: {error.message}</div>}
			{product && <h1>{product.title}</h1>}
		</div>
	);
}
