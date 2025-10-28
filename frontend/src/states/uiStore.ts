import { create } from 'zustand';

interface UIState {
  isLoginPopupOpen: boolean;
  setLoginPopupOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoginPopupOpen: false,
  setLoginPopupOpen: (open) => set({ isLoginPopupOpen: open }),
}));
