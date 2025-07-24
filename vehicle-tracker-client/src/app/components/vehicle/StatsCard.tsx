import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;