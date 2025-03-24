
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehicles, Vehicle } from '@/data/vehicles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import PromoAd from '@/components/PromoAd';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  ChevronLeft, 
  Calendar, 
  Tag, 
  Fuel, 
  Car, 
  Paintbrush,
  GaugeCircle
} from 'lucide-react';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with short delay
    const timer = setTimeout(() => {
      const foundVehicle = vehicles.find(v => v.id === id);
      setVehicle(foundVehicle || null);
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
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-dssilver-900">
          <img 
            src={vehicle.image} 
            alt={vehicle.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dssilver-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <button 
                onClick={handleGoBack}
                className="flex items-center text-white mb-4 hover:underline transition-all"
              >
                <ChevronLeft className="mr-1 h-5 w-5" /> Back to listings
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{vehicle.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white">
                <span className="bg-dsblue-500 px-4 py-1 rounded-full text-white font-medium">
                  {vehicle.price}
                </span>
                <span className="text-dssilver-200">
                  {vehicle.brand} • {vehicle.year} • {vehicle.mileage} miles
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-dssilver-700 mb-6">{vehicle.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">Vehicle Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
                    <Calendar className="text-dsblue-500 mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm text-dssilver-500">Year</p>
                      <p className="font-medium">{vehicle.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
                    <Fuel className="text-dsblue-500 mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm text-dssilver-500">Fuel Type</p>
                      <p className="font-medium">{vehicle.fuelType}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
                    <Car className="text-dsblue-500 mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm text-dssilver-500">Transmission</p>
                      <p className="font-medium">{vehicle.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
                    <Tag className="text-dsblue-500 mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm text-dssilver-500">Body Type</p>
                      <p className="font-medium">{vehicle.bodyType}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
                    <Paintbrush className="text-dsblue-500 mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm text-dssilver-500">Color</p>
                      <p className="font-medium">{vehicle.color}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-dssilver-50 rounded-md">
                    <GaugeCircle className="text-dsblue-500 mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm text-dssilver-500">Mileage</p>
                      <p className="font-medium">{vehicle.mileage}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-dsblue-500 rounded-full mr-2"></span>
                      <span className="text-dssilver-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <PromoAd 
                    title="Trade-In Your Vehicle"
                    description="Get top dollar for your current vehicle when you trade it in for this model. Our appraisal experts are ready to provide a fair market value estimate."
                    image="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    buttonText="Learn about our trade-in program"
                    buttonLink="#contact"
                    theme="light"
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-dssilver-50 rounded-lg shadow-md p-6 sticky top-4">
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
          
          {/* Related Vehicles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vehicles
                .filter(v => v.id !== vehicle.id && v.brand === vehicle.brand)
                .slice(0, 3)
                .map(relatedVehicle => (
                  <div key={relatedVehicle.id} className="vehicle-card cursor-pointer" onClick={() => navigate(`/vehicle/${relatedVehicle.id}`)}>
                    <div className="img-hover-zoom h-48 relative">
                      <img 
                        src={relatedVehicle.image} 
                        alt={relatedVehicle.title} 
                        className="w-full h-full object-cover"
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dssilver-900/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                          <h3 className="text-white font-medium">{relatedVehicle.title}</h3>
                          <span className="text-white bg-dsblue-500/90 px-3 py-1 rounded-full text-sm">{relatedVehicle.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Lead Form Modal */}
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
