import { useAuthStore } from './authStore';
import { useUIStore } from './uiStore';

export type RootState = {
  auth: ReturnType<typeof useAuthStore.getState>;
  ui: ReturnType<typeof useUIStore.getState>;
};

export type AppDispatch = {
  auth: typeof useAuthStore.setState;
  ui: typeof useUIStore.setState;
};
