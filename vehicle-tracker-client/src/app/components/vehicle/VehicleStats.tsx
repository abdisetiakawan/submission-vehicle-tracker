import React from "react";
import { Gauge, MapPin, Clock } from "lucide-react";
import StatsCard from "./StatsCard";

interface VehicleStatsProps {
  activeCount: number;
  totalCount: number;
  avgFuel: string;
}

const VehicleStats: React.FC<VehicleStatsProps> = ({
  activeCount,
  totalCount,
  avgFuel,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        icon={
          <div className="p-2 bg-green-100 rounded-lg">
            <Gauge className="h-6 w-6 text-green-600" />
          </div>
        }
        label="Active Vehicles"
        value={activeCount}
      />
      <StatsCard
        icon={
          <div className="p-2 bg-blue-100 rounded-lg">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
        }
        label="Total Fleet"
        value={totalCount}
      />
      <StatsCard
        icon={
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
        }
        label="Avg Fuel Level"
        value={avgFuel}
      />
    </div>
  );
};

export default VehicleStats;
