import { create } from "zustand";
// Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: (name) => set({ bears: name }),
}));

export default useStore;

// Whatever the state function returns becomes the new state an is reflected in the application via re-rendering
