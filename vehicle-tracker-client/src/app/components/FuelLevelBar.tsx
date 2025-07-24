import React from "react";

interface FuelLevelBarProps {
  level: number;
  size?: "sm" | "lg";
}

const FuelLevelBar: React.FC<FuelLevelBarProps> = ({ level, size = "sm" }) => {
  const height = size === "lg" ? "h-3" : "h-2";

  const getFuelColor = (level: number): string => {
    if (level >= 50) return "bg-green-500";
    if (level >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`flex-1 bg-gray-200 rounded-full ${height}`}>
        <div
          className={`${height} rounded-full transition-all duration-300 ${getFuelColor(level)}`}
          style={{ width: `${Math.min(Math.max(level, 0), 100)}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 min-w-[45px]">
        {level.toFixed(1)}%
      </span>
    </div>
  );
};

export default FuelLevelBar;
