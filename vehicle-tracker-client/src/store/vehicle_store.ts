import { create } from "zustand";
import { Vehicle, VehicleStore } from "../types/vehicle";
import { mockApi } from "../data/mock_data";

export const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  selectedVehicle: null,
  isLoading: false,
  error: null,

  fetchVehicles: async () => {
    set({ isLoading: true, error: null });
    try {
      const vehicles = await mockApi.fetchVehicles();
      set({ vehicles, isLoading: false });
    } catch (error: unknown) {
      set({ error: "Failed to fetch vehicles", isLoading: false });
    }
  },

  fetchVehicleById: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const vehicle = await mockApi.fetchVehicleById(id);
      if (vehicle) {
        set({ selectedVehicle: vehicle, isLoading: false });
      } else {
        set({ error: "Vehicle not found", isLoading: false });
      }
    } catch (error: unknown) {
      set({ error: "Failed to fetch vehicle details", isLoading: false });
    }
  },

  clearSelectedVehicle: () => {
    set({ selectedVehicle: null });
  },
}));
