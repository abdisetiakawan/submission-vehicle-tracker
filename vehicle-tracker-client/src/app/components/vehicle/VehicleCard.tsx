import React from "react";
import Link from "next/link";
import { Vehicle } from "@/types/vehicle";
import StatusBadge from "../StatusBadge";
import FuelLevelBar from "../FuelLevelBar";
import { Eye, Clock } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const formatLastUpdate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const minutesAgo = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

  if (minutesAgo < 1) return "Just now";
  if (minutesAgo < 60) return `${minutesAgo} min ago`;
  if (minutesAgo < 1440) return `${Math.floor(minutesAgo / 60)} hr ago`;
  return date.toLocaleDateString();
};

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {vehicle.name}
            </h3>
            <StatusBadge status={vehicle.status} />
          </div>
          <div className="text-right text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{formatLastUpdate(vehicle.updated_at)}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Fuel Level
            </span>
            <FuelLevelBar level={vehicle.fuel_level} />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Speed</span>
              <p className="font-semibold text-gray-900">
                {vehicle.speed.toFixed(1)} km/h
              </p>
            </div>
            <div>
              <span className="text-gray-600">Odometer</span>
              <p className="font-semibold text-gray-900">
                {(vehicle.odometer / 1000).toFixed(1)}k km
              </p>
            </div>
          </div>

          <div className="text-sm">
            <span className="text-gray-600">Location</span>
            <p className="font-semibold text-gray-900">
              {vehicle.latitude.toFixed(4)}, {vehicle.longitude.toFixed(4)}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={`/vehicles/${vehicle.id}`}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
