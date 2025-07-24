import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),

  checkAuth: async () => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Not authenticated");
      }
      const userData = await response.json();
      set({ user: userData, isAuthenticated: true, isLoading: false });
    } catch (error) {
      // jika error, maka tidak ada sesi valid
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
  logout: async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      set({ user: null, isAuthenticated: false });
    }
  },
}));
