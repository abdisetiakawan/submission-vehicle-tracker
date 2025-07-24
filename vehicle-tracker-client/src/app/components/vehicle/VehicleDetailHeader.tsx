import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import StatusBadge from "../StatusBadge";

interface VehicleDetailHeaderProps {
  vehicle: Vehicle;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const VehicleDetailHeader: React.FC<VehicleDetailHeaderProps> = ({
  vehicle,
}) => (
  <div className="mb-8">
    <Link
      href="/"
      className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back to Fleet Dashboard
    </Link>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
        <div className="flex items-center space-x-4">
          <StatusBadge status={vehicle.status} />
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            Last updated: {formatDate(vehicle.updated_at)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VehicleDetailHeader;