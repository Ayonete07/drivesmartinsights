import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehicles } from '@/data/vehicles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import VehicleHero from '@/components/VehicleHero';
import VehicleOverview from '@/components/VehicleOverview';
import RelatedVehicles from '@/components/RelatedVehicles';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { carQueryService } from '@/services/CarQueryService';
import { useVehicleImages } from '@/hooks/useVehicleImages';
import { ChevronLeft } from 'lucide-react';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<any | null>(null);
  const [apiVehicle, setApiVehicle] = useState<any | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const { toast } = useToast();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const foundVehicle = vehicles.find(v => v.id === id);
      setVehicle(foundVehicle || null);
      
      if (foundVehicle) {
        const fetchApiData = async () => {
          try {
            const parts = foundVehicle.title.split(' ');
            const make = parts[0].toLowerCase();
            const model = parts.slice(1).join(' ').toLowerCase();
            
            const trimResponse = await carQueryService.getTrims(make, model);
            if (trimResponse.Trims && trimResponse.Trims.length > 0) {
              setApiVehicle(trimResponse.Trims[0]);
            }
          } catch (error) {
            console.error('Error fetching API vehicle data:', error);
          }
        };
        
        fetchApiData();
      }
      
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleContactClick = () => {
    setIsFormOpen(true);
  };
  
  const handleFormSubmitSuccess = () => {
    setIsFormOpen(false);
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFilterChange = (filtered: typeof vehicles) => {
    setFilteredVehicles(filtered);
  };
  
  const vehicleImages = useVehicleImages(vehicle);

  const apiDetails = apiVehicle ? {
    engine: apiVehicle.model_engine_type || 'Not available',
    power: apiVehicle.model_engine_power_ps ? `${apiVehicle.model_engine_power_ps} PS` : 'Not available',
    torque: apiVehicle.model_engine_torque_nm ? `${apiVehicle.model_engine_torque_nm} Nm` : 'Not available',
    topSpeed: apiVehicle.model_top_speed_kph ? `${apiVehicle.model_top_speed_kph} km/h` : 'Not available',
    acceleration: apiVehicle.model_0_to_100_kph ? `${apiVehicle.model_0_to_100_kph}s (0-100 km/h)` : 'Not available',
    weight: apiVehicle.model_weight_kg ? `${apiVehicle.model_weight_kg} kg` : 'Not available',
    fuelEfficiency: apiVehicle.model_lkm_mixed ? `${apiVehicle.model_lkm_mixed} L/100km` : 'Not available'
  } : null;
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-36 bg-dssilver-200 rounded-md mb-4"></div>
            <div className="h-4 w-48 bg-dssilver-200 rounded-md"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <p className="text-dssilver-700 mb-8">Sorry, we couldn't find the vehicle you're looking for.</p>
          <button 
            onClick={handleGoBack}
            className="btn-primary flex items-center mx-auto"
          >
            <ChevronLeft className="mr-2 h-5 w-5" /> Return to Vehicle Listings
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <VehicleHero 
          vehicle={vehicle} 
          onGoBack={handleGoBack} 
          onFilterChange={handleFilterChange}
          vehicleImages={vehicleImages}
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VehicleOverview vehicle={vehicle} apiDetails={apiDetails} />
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-dssilver-50 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-4">Interested in this {vehicle.brand}?</h2>
                <p className="text-dssilver-700 mb-6">
                  Fill out the form below and one of our vehicle specialists will get in touch with you shortly.
                </p>
                
                <LeadForm 
                  selectedVehicle={vehicle.id} 
                  onSubmitSuccess={handleFormSubmitSuccess} 
                />
              </div>
            </div>
          </div>
          
          <RelatedVehicles 
            currentVehicleId={vehicle.id}
            filteredVehicles={filteredVehicles}
            currentBrand={vehicle.brand}
          />
        </div>
      </main>
      
      <Footer />
      
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <LeadForm 
            selectedVehicle={vehicle.id} 
            onSubmitSuccess={handleFormSubmitSuccess}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VehicleDetail;
