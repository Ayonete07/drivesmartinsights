
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleDetails from '@/components/VehicleDetails';
import { carQueryService } from '@/services/CarQueryService';
import { useToast } from '@/hooks/use-toast';

const VehicleCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchVehicles = async () => {
      setIsLoading(true);
      try {
        if (categoryId) {
          const data = await carQueryService.getVehiclesByCategory(categoryId);
          setVehicles(data);
        }
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        toast({
          title: "Error",
          description: "Failed to load vehicles. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVehicles();
  }, [categoryId, toast]);
  
  // Format category name for display
  const formatCategoryName = (id: string | undefined) => {
    if (!id) return '';
    
    switch (id) {
      case 'cars': return 'Cars';
      case 'suvs': return 'SUVs & Crossovers';
      case 'trucks': return 'Trucks';
      case 'vans': return 'Vans';
      case 'hybrids': return 'Hybrid Vehicles';
      case 'electric': return 'Electric Vehicles';
      default: return id.charAt(0).toUpperCase() + id.slice(1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{formatCategoryName(categoryId)}</h1>
          <p className="text-gray-600 mb-8">
            Browse our selection of {formatCategoryName(categoryId).toLowerCase()}
          </p>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vehicles.map((vehicle, index) => (
                <VehicleDetails key={`${vehicle.model_id}-${index}`} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-2">No vehicles found</h2>
              <p className="text-gray-600">
                We couldn't find any vehicles in this category. Please try another category or check back later.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehicleCategory;
