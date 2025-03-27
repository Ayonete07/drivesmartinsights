
import React from 'react';
import VehicleImageCarousel from './VehicleImageCarousel';
import SearchFilter from './SearchFilter';
import VehicleBreadcrumb from './VehicleBreadcrumb';
import { vehicles } from '@/data/vehicles';

interface VehicleHeroProps {
  vehicle: any;
  onGoBack: () => void;
  onFilterChange: (filtered: typeof vehicles) => void;
  vehicleImages: Array<{
    src: string;
    alt: string;
    type: 'exterior' | 'interior' | 'detail';
  }>;
}

const VehicleHero: React.FC<VehicleHeroProps> = ({ 
  vehicle, 
  onGoBack, 
  onFilterChange, 
  vehicleImages 
}) => {
  return (
    <div className="bg-dssilver-50 py-6">
      <div className="container mx-auto px-4">
        <VehicleBreadcrumb onGoBack={onGoBack} />
        
        {/* Search Filter */}
        <div className="mb-8">
          <SearchFilter onFilterChange={onFilterChange} />
        </div>
        
        {/* Vehicle image carousel */}
        <VehicleImageCarousel 
          images={vehicleImages} 
          vehicleName={vehicle.title} 
        />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{vehicle.title}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="bg-red-500 px-4 py-1 rounded-full text-white font-medium">
            {vehicle.price}
          </span>
          <span className="text-dssilver-600">
            {vehicle.brand} • {vehicle.year} • {vehicle.mileage} miles
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleHero;
