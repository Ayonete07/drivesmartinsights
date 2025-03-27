
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Fuel, Calendar, Car, Gauge, BarChart, Ruler } from 'lucide-react';

interface VehicleDetailsProps {
  vehicle: any;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle }) => {
  if (!vehicle) return null;

  // Format vehicle data
  const makeModel = `${vehicle.model_make_display} ${vehicle.model_name}`;
  const year = vehicle.model_year || 'N/A';
  const engine = vehicle.model_engine_type || 'N/A';
  const fuel = vehicle.model_engine_fuel || 'N/A';
  const transmission = vehicle.model_transmission_type || 'N/A';
  const drive = vehicle.model_drive || 'N/A';
  const body = vehicle.model_body || 'N/A';
  const doors = vehicle.model_doors || 'N/A';
  const seats = vehicle.model_seats || 'N/A';
  const power = vehicle.model_engine_power_ps ? `${vehicle.model_engine_power_ps} PS` : 'N/A';
  const torque = vehicle.model_engine_torque_nm ? `${vehicle.model_engine_torque_nm} Nm` : 'N/A';
  const topSpeed = vehicle.model_top_speed_kph ? `${vehicle.model_top_speed_kph} km/h` : 'N/A';
  const acceleration = vehicle.model_0_to_100_kph ? `${vehicle.model_0_to_100_kph}s (0-100 km/h)` : 'N/A';
  
  // Default images based on body type
  const getDefaultImage = () => {
    const bodyType = vehicle.model_body?.toLowerCase() || '';
    
    if (bodyType.includes('suv') || bodyType.includes('crossover')) {
      return 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=60';
    } else if (bodyType.includes('pickup') || bodyType.includes('truck')) {
      return 'https://images.unsplash.com/photo-1595595512954-c6d34f0699d1?auto=format&fit=crop&w=800&q=60';
    } else if (bodyType.includes('van') || bodyType.includes('minivan')) {
      return 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=800&q=60';
    } else if (fuel.toLowerCase().includes('electric')) {
      return 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=60';
    } else if (engine.toLowerCase().includes('hybrid')) {
      return 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=60';
    } else {
      return 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=60';
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getDefaultImage()} 
          alt={makeModel}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold">{makeModel}</h3>
          <p className="text-sm opacity-80">{body} - {year}</p>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-start">
            <Fuel className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Fuel Type</p>
              <p className="font-medium">{fuel}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Year</p>
              <p className="font-medium">{year}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Car className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Transmission</p>
              <p className="font-medium">{transmission}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Gauge className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Power</p>
              <p className="font-medium">{power}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="font-semibold">Performance</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start">
              <BarChart className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Top Speed</p>
                <p className="font-medium">{topSpeed}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Ruler className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Acceleration</p>
                <p className="font-medium">{acceleration}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <button className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          View Details
        </button>
      </CardFooter>
    </Card>
  );
};

export default VehicleDetails;
