"use client";

import { useGetProductById } from "@/hooks";

interface ProductPageProps {
	params: { productId: number };
}

export default function ProductPage({ params }: ProductPageProps) {
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
