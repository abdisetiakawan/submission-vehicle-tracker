"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVehicleStore } from "@/store/vehicle_store";
import Layout from "./Layout";
import ErrorDisplay from "./ErrorDisplay";
import VehicleDetailHeader from "./vehicle/VehicleDetailHeader";
import MetricCard from "./vehicle/MetricCard";
import LocationDetails from "./vehicle/LocationDetails";
import VehicleSummary from "./vehicle/VehicleSummary";
import QuickActions from "./vehicle/QuickActions";
import VehicleDetailSkeleton from "./skeletons/VehicleDetailSkeleton";
import { Fuel, Gauge } from "lucide-react";
import FuelLevelBar from "./FuelLevelBar";

interface VehicleDetailPageProps {
  id: string;
}

const VehicleDetailPage: React.FC<VehicleDetailPageProps> = ({ id }) => {
  const router = useRouter();
  const {
    selectedVehicle,
    isLoading,
    error,
    fetchVehicleById,
    clearSelectedVehicle,
  } = useVehicleStore();

  useEffect(() => {
    if (id) {
      fetchVehicleById(parseInt(id, 10));
    }
    return () => {
      clearSelectedVehicle();
    };
  }, [id, fetchVehicleById, clearSelectedVehicle]);

  if (isLoading && !selectedVehicle) {
    return (
      <Layout>
        <VehicleDetailSkeleton />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <ErrorDisplay message={error} onRetry={() => router.push("/")} />
      </Layout>
    );
  }

  if (!selectedVehicle) {
    return (
      <Layout>
        <ErrorDisplay
          message="Vehicle not found"
          onRetry={() => router.push("/")}
        />
      </Layout>
    );
  }

  const fuelStatusMessage =
    selectedVehicle.fuel_level >= 50
      ? "Fuel level is sufficient"
      : selectedVehicle.fuel_level >= 25
        ? "Fuel level is moderate - consider refueling"
        : "Low fuel level - refueling recommended";

  return (
    <Layout>
      <VehicleDetailHeader vehicle={selectedVehicle} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MetricCard title="Fuel Level" icon={<Fuel />}>
            <FuelLevelBar level={selectedVehicle.fuel_level} size="lg" />
            <p className="text-sm text-gray-600 mt-2">{fuelStatusMessage}</p>
          </MetricCard>

          <MetricCard title="Speed & Movement" icon={<Gauge />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {selectedVehicle.speed.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">km/h</div>
                <div className="text-xs text-gray-500 mt-1">Current Speed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {(selectedVehicle.odometer / 1000).toFixed(1)}k
                </div>
                <div className="text-sm text-gray-600">km</div>
                <div className="text-xs text-gray-500 mt-1">
                  Total Distance
                </div>
              </div>
            </div>
          </MetricCard>

          <LocationDetails
            latitude={selectedVehicle.latitude}
            longitude={selectedVehicle.longitude}
          />
        </div>

        <div className="space-y-6">
          <VehicleSummary vehicle={selectedVehicle} />
          <QuickActions />
        </div>
      </div>
    </Layout>
  );
};

export default VehicleDetailPage;