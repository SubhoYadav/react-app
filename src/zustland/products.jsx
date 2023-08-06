import { create } from "zustand";
import axios from "axios";
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
    set({ loading: true });
    const api = "https://fakestoreapi.com/products";
    const response = await axios.get(api);
    set({ products: response.data, loading: false });
  },
  getPdtsById: (id) => {
    let product = get();
    console.log("What the get function returns, ", product);
    product = product.products.find((p) => p.id == id);
    set({ product });
  },
}));

export default useProducts;
