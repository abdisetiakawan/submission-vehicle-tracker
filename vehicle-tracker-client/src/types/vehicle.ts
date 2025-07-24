export interface Vehicle {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  fuel_level: number;
  odometer: number;
  latitude: number;
  longitude: number;
  speed: number;
  updated_at: string;
}

export interface VehicleStore {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  isLoading: boolean;
  error: string | null;
  fetchVehicles: () => Promise<void>;
  fetchVehicleById: (id: number) => Promise<void>;
  clearSelectedVehicle: () => void;
}
