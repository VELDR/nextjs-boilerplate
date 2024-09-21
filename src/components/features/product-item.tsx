import React from "react";
import Image from "next/image";

interface Product {
	title: string;
	thumbnail: string;
	price: number;
}

interface ProductItemProps {
	product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<div className="flex flex-row gap-4 border p-2">
			<div className="relative h-20 w-40">
				<Image
					src={product.thumbnail}
					alt={product.title}
					fill
					className="object-cover"
					priority
				/>
			</div>
			<div>
				<h3>{product.title}</h3>
				<p>${product.price}</p>
			</div>
		</div>
	);
};
