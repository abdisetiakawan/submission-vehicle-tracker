"use client";

import React, { useEffect, useMemo } from "react";
import { useVehicleStore } from "../../store/vehicle_store";
import Layout from "./Layout";
import VehicleStats from "./vehicle/VehicleStats";
import VehicleList from "./vehicle/VehicleList";
import StatsSkeleton from "./skeletons/StatsSkeleton";
import VehicleCardSkeleton from "./skeletons/VehicleCardSkeleton";
import ErrorDisplay from "./ErrorDisplay";

const VehicleListPage: React.FC = () => {
  const { vehicles, isLoading, error, fetchVehicles } = useVehicleStore();

  useEffect(() => {
    if (vehicles.length === 0) {
      fetchVehicles();
    }
  }, [fetchVehicles, vehicles.length]);

  const stats = useMemo(() => {
    const activeVehicles = vehicles.filter((v) => v.status === "ACTIVE").length;
    const totalVehicles = vehicles.length;
    const avgFuel =
      totalVehicles > 0
        ? (
            vehicles.reduce((sum, v) => sum + v.fuel_level, 0) / totalVehicles
          ).toFixed(1) + "%"
        : "0%";
    return { activeVehicles, totalVehicles, avgFuel };
  }, [vehicles]);

  const renderContent = () => {
    if (error) {
      return <ErrorDisplay message={error} onRetry={fetchVehicles} />;
    }

    if (isLoading && vehicles.length === 0) {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsSkeleton />
            <StatsSkeleton />
            <StatsSkeleton />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <VehicleCardSkeleton key={i} />
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        <VehicleStats
          activeCount={stats.activeVehicles}
          totalCount={stats.totalVehicles}
          avgFuel={stats.avgFuel}
        />
        <VehicleList vehicles={vehicles} />
      </>
    );
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Vehicle Fleet Dashboard
        </h1>
        <p className="text-gray-600">
          Monitor and manage your vehicle fleet in real-time
        </p>
      </div>
      {renderContent()}
    </Layout>
  );
};

export default VehicleListPage;
