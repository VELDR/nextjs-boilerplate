import React from "react";
import Image from "next/image";

import { Product } from "@/services";

interface ProductItemProps {
	product: Product;
	onClick: () => void;
}

export const ProductItem = ({ product, onClick }: ProductItemProps) => {
	return (
		<div
			className="flex cursor-pointer flex-row gap-4 border p-2"
			onClick={onClick}
		>
			<div className="relative h-20 w-40">
				<Image
					src={product.thumbnail}
					alt={product.title}
					fill
					sizes="10rem, (min-width: 768px) 20rem"
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
