
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VehicleCard from '../components/VehicleCard';
import { vehicles, Vehicle } from '@/data/vehicles';

// This would normally come from an API
const getCategoryName = (categoryId: string): string => {
  const categoryMap: Record<string, string> = {
    'cars': 'Cars',
    'suvs': 'SUVs & Crossovers',
    'trucks': 'Trucks',
    'vans': 'Vans',
    'hybrids': 'Hybrid Vehicles',
    'electric': 'Electric Vehicles'
  };
  
  return categoryMap[categoryId] || 'Vehicles';
};

const VehicleCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryVehicles, setCategoryVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // In a real application, this would be an API call
    const filteredVehicles = vehicles.filter(vehicle => {
      if (categoryId === 'cars') {
        return vehicle.bodyType === 'Sedan' || vehicle.bodyType === 'Coupe' || vehicle.bodyType === 'Convertible';
      } else if (categoryId === 'suvs') {
        return vehicle.bodyType === 'SUV' || vehicle.bodyType === 'Crossover';
      } else if (categoryId === 'trucks') {
        return vehicle.bodyType === 'Truck' || vehicle.bodyType === 'Pickup';
      } else if (categoryId === 'vans') {
        return vehicle.bodyType === 'Van' || vehicle.bodyType === 'Minivan';
      } else if (categoryId === 'hybrids') {
        return vehicle.fuelType === 'Hybrid';
      } else if (categoryId === 'electric') {
        return vehicle.fuelType === 'Electric';
      }
      return true;
    });
    
    setCategoryVehicles(filteredVehicles);
    setIsLoading(false);
  }, [categoryId]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{getCategoryName(categoryId || '')}</h1>
          <p className="text-gray-600 mb-8">
            Browse our selection of {getCategoryName(categoryId || '').toLowerCase()} to find your perfect match.
          </p>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {categoryVehicles.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-medium mb-2">No vehicles found in this category</h3>
                  <p className="text-gray-600">Please check back later or explore other categories.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      id={vehicle.id}
                      image={vehicle.image}
                      title={vehicle.title}
                      price={vehicle.price}
                      description={vehicle.description}
                      features={vehicle.features}
                      onClick={(id) => window.location.href = `/vehicle/${id}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VehicleCategory;
