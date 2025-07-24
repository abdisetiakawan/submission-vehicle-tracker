import { Vehicle } from "../types/vehicle";

// data for mocking API responses
export const mockVehicles: Vehicle[] = [
  {
    id: 1,
    name: "Fleet Truck 001",
    status: "ACTIVE",
    fuel_level: 85.5,
    odometer: 125430.2,
    latitude: -6.2088,
    longitude: 106.8456,
    speed: 45.2,
    updated_at: "2025-01-12T10:30:00Z",
  },
  {
    id: 2,
    name: "Delivery Van 002",
    status: "ACTIVE",
    fuel_level: 62.8,
    odometer: 89765.4,
    latitude: -6.1751,
    longitude: 106.865,
    speed: 0,
    updated_at: "2025-01-12T10:25:00Z",
  },
  {
    id: 3,
    name: "Service Vehicle 003",
    status: "INACTIVE",
    fuel_level: 23.1,
    odometer: 156789.1,
    latitude: -6.2297,
    longitude: 106.8467,
    speed: 0,
    updated_at: "2025-01-12T09:15:00Z",
  },
  {
    id: 4,
    name: "Cargo Truck 004",
    status: "ACTIVE",
    fuel_level: 91.3,
    odometer: 78234.7,
    latitude: -6.1944,
    longitude: 106.8229,
    speed: 67.5,
    updated_at: "2025-01-12T10:32:00Z",
  },
  {
    id: 5,
    name: "Mobile Unit 005",
    status: "ACTIVE",
    fuel_level: 45.7,
    odometer: 203456.8,
    latitude: -6.2615,
    longitude: 106.7815,
    speed: 32.1,
    updated_at: "2025-01-12T10:28:00Z",
  },
  {
    id: 6,
    name: "Emergency Vehicle 006",
    status: "INACTIVE",
    fuel_level: 78.9,
    odometer: 67890.3,
    latitude: -6.1879,
    longitude: 106.8583,
    speed: 0,
    updated_at: "2025-01-12T08:45:00Z",
  },
];

export const mockApi = {
  // Mock API methods to simulate server responses
  fetchVehicles: (): Promise<Vehicle[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockVehicles), 1000);
    });
  },

  fetchVehicleById: (id: number): Promise<Vehicle | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const vehicle = mockVehicles.find((v) => v.id === id) || null;
        resolve(vehicle);
      }, 600);
    });
  },
};
