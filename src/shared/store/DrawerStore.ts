import { create } from "zustand";

interface IDrawerStore {
  drawerState: boolean;
  handleDrawerState: () => void;
}

export const useDrawerStore = create<IDrawerStore>((set) => ({
  drawerState: false,
  handleDrawerState: () =>
    set((state) => ({ drawerState: !state.drawerState })),
}));
