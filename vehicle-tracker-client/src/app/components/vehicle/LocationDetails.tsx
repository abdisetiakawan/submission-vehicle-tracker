import React from "react";
import { MapPin, Navigation } from "lucide-react";
import MetricCard from "./MetricCard";

interface LocationDetailsProps {
  latitude: number;
  longitude: number;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({
  latitude,
  longitude,
}) => (
  <MetricCard title="Location Details" icon={<MapPin />}>
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Latitude
          </label>
          <div className="p-3 bg-gray-50 rounded-lg font-mono text-sm">
            {latitude.toFixed(6)}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Longitude
          </label>
          <div className="p-3 bg-gray-50 rounded-lg font-mono text-sm">
            {longitude.toFixed(6)}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm text-blue-600">
        <Navigation className="h-4 w-4" />
        <a
          href={`https://www.google.com/maps?q=$${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  </MetricCard>
);

export default LocationDetails;
