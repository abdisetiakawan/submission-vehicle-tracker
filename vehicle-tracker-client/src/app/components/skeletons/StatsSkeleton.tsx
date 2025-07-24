import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const StatsSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="ml-4">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  );
};

export default StatsSkeleton;
