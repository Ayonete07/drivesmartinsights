
import React from 'react';

interface VehicleFeaturesProps {
  features: string[];
}

const VehicleFeatures: React.FC<VehicleFeaturesProps> = ({ features }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
            <span className="text-dssilver-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleFeatures;
