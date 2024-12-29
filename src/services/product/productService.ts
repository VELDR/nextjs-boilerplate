import { api } from "@/helpers";
import { delay } from "@/utils/general";

export const productAPI = {
	get: async (id: number) => {
		const response = await api.get(`/products/${id}`);
		return response.data;
	},
	getAll: async () => {
		const response = await api.get(`/products`);
		await delay(2000);
		return response.data.products;
	},
	add: async (product: object) => {
		return await api.post(`/products/add`, product);
	},
};
