import { create } from "zustand";

export const useStore = create((set) => ({
  theme: false,
  toggleTheme: () => set((state) => ({ theme: !state.theme })),
}));
