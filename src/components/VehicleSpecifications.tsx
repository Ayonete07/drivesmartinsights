
import React from 'react';
import { Calendar, Tag, Fuel, Car, Paintbrush, GaugeCircle } from 'lucide-react';

interface VehicleSpecificationsProps {
  vehicle: any;
}

const VehicleSpecifications: React.FC<VehicleSpecificationsProps> = ({ vehicle }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Vehicle Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Calendar className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Year</p>
            <p className="font-medium">{vehicle.year}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Fuel className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Fuel Type</p>
            <p className="font-medium">{vehicle.fuelType}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Car className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Transmission</p>
            <p className="font-medium">{vehicle.transmission}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Tag className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Body Type</p>
            <p className="font-medium">{vehicle.bodyType}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <Paintbrush className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Color</p>
            <p className="font-medium">{vehicle.color}</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
          <GaugeCircle className="text-red-500 mr-3 h-5 w-5" />
          <div>
            <p className="text-sm text-dssilver-500">Mileage</p>
            <p className="font-medium">{vehicle.mileage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSpecifications;
