import { productAPI } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function useProducts(enabled = true) {
	return useQuery({
		queryKey: ["productList"],
		queryFn: productAPI.getAll,
		enabled,
	});
}
