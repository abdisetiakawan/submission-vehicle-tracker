import { create } from "zustand";
import { VehicleStore } from "../types/vehicle";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  selectedVehicle: null,
  isLoading: false,
  error: null,

  fetchVehicles: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_URL}/vehicles`, {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch vehicles. Are you logged in?');
      }
      const data = await response.json();
      set({ vehicles: data.vehicles, isLoading: false });
    } catch (error: unknown) {
      console.error("Fetch vehicles error:", error);
      set({ error: "Failed to fetch vehicles", isLoading: false });
    }
  },

  fetchVehicleById: async (id: number) => {
    set({ isLoading: true, error: null, selectedVehicle: null });
    try {
      const response = await fetch(`${API_URL}/vehicles/${id}`, {
        credentials: 'include',
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Vehicle not found");
        }
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ selectedVehicle: data.vehicle, isLoading: false });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to fetch vehicle details";
      console.error("Fetch vehicle by ID error:", errorMessage);
      set({ error: errorMessage, isLoading: false });
    }
  },

  clearSelectedVehicle: () => {
    set({ selectedVehicle: null });
  },
}));
