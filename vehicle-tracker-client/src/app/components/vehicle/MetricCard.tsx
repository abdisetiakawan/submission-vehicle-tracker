import React from "react";
import { LucideProps } from "lucide-react";

interface MetricCardProps {
  title: string;
  icon: React.ReactElement<LucideProps>;
  children: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, icon, children }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center mb-4">
      {React.cloneElement(icon, {
        className: "h-5 w-5 text-blue-600 mr-2",
      })}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </div>
    {children}
  </div>
);

export default MetricCard;
