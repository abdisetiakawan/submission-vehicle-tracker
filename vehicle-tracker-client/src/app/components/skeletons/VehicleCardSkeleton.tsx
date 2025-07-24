import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const VehicleCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-64 flex flex-col justify-between">
      <div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export default VehicleCardSkeleton;
