import { Product, productAPI } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function useGetAllProducts() {
	return useQuery<Product[], Error>({
		queryKey: ["productList"],
		queryFn: productAPI.getAll,
	});
}

export function useGetProductById(id: number, enabled = true) {
	return useQuery({
		queryKey: ["productItem", id],
		queryFn: () => productAPI.get(id),
		enabled,
	});
}
