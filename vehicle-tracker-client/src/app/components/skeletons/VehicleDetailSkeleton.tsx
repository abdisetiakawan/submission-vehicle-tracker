import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const VehicleDetailSkeleton: React.FC = () => (
  <div>
    <Skeleton className="h-5 w-48 mb-4" />
    <Skeleton className="h-9 w-64 mb-2" />
    <Skeleton className="h-5 w-80 mb-8" />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Skeleton className="h-36 w-full rounded-lg" />
        <Skeleton className="h-48 w-full rounded-lg" />
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>
      <div className="space-y-6">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>
    </div>
  </div>
);

export default VehicleDetailSkeleton;
