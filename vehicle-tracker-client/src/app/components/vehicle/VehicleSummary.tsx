import React from "react";
import { Vehicle } from "@/types/vehicle";
import StatusBadge from "../StatusBadge";

interface VehicleSummaryProps {
  vehicle: Vehicle;
}

const SummaryItem: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-medium">{children}</span>
  </div>
);

const VehicleSummary: React.FC<VehicleSummaryProps> = ({ vehicle }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">
      Vehicle Summary
    </h2>
    <div className="space-y-2">
      <SummaryItem label="Vehicle ID">
        #{vehicle.id.toString().padStart(3, "0")}
      </SummaryItem>
      <SummaryItem label="Status">
        <StatusBadge status={vehicle.status} />
      </SummaryItem>
      <SummaryItem label="Fuel Level">
        {vehicle.fuel_level.toFixed(1)}%
      </SummaryItem>
      <SummaryItem label="Current Speed">
        {vehicle.speed.toFixed(1)} km/h
      </SummaryItem>
      <SummaryItem label="Total Distance">
        {vehicle.odometer.toLocaleString()} km
      </SummaryItem>
    </div>
  </div>
);

export default VehicleSummary;
