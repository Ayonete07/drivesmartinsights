
import React from 'react';
import { BarChart, Ruler, Tag, Fuel } from 'lucide-react';

interface ApiDetailsType {
  engine: string;
  power: string;
  torque: string;
  topSpeed: string;
  acceleration: string;
  weight: string;
  fuelEfficiency: string;
}

interface VehiclePerformanceProps {
  apiDetails: ApiDetailsType | null;
}

const VehiclePerformance: React.FC<VehiclePerformanceProps> = ({ apiDetails }) => {
  if (!apiDetails) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Performance Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <BarChart className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Top Speed</p>
            <p className="font-medium">{apiDetails.topSpeed}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Ruler className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Acceleration</p>
            <p className="font-medium">{apiDetails.acceleration}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Tag className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Engine</p>
            <p className="font-medium">{apiDetails.engine}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Fuel className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Fuel Efficiency</p>
            <p className="font-medium">{apiDetails.fuelEfficiency}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePerformance;
