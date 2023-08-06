import { create } from "zustand";
import { getProducts, getProductById } from "../services/products";

const useProducts = create((set, get) => ({
  products: [],
  product: null,
  loading: false,
  setProducts: (products) =>
    set((state) => {
      return {
        products,
      };
    }),
  loadPdts: async () => {
    let storeData = get();
    if (storeData.products.length < 1) {
      set({ loading: true });
      const response = await getProducts();
      set({ products: response.data, loading: false });
    }
  },
  getPdtsById: async (id) => {
    let storeData = get();

    if (storeData.products.length) {
      let product = storeData.products.find((p) => p.id == id);
      set({ product });
    } else {
      const response = await getProductById(id);
      set({ product: response.data });
    }
  },
}));

export default useProducts;
