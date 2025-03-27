
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehicles } from '@/data/vehicles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import PromoAd from '@/components/PromoAd';
import SearchFilter from '@/components/SearchFilter';
import VehicleImageCarousel from '@/components/VehicleImageCarousel';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { carQueryService } from '@/services/CarQueryService';
import { 
  ChevronLeft, 
  Calendar, 
  Tag, 
  Fuel, 
  Car, 
  Paintbrush,
  GaugeCircle,
  BarChart,
  Ruler,
  Truck,
  Package
} from 'lucide-react';

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
    // For now, we'll still use the static data for the primary view
    // but augment it with API data where possible
    const timer = setTimeout(() => {
      const foundVehicle = vehicles.find(v => v.id === id);
      setVehicle(foundVehicle || null);
      
      // Try to fetch additional details from API
      if (foundVehicle) {
        const fetchApiData = async () => {
          try {
            // Extract make and model from the title
            const parts = foundVehicle.title.split(' ');
            const make = parts[0].toLowerCase();
            const model = parts.slice(1).join(' ').toLowerCase();
            
            // Fetch from API
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
  
  // Get appropriate default images based on vehicle type
  const getDefaultImage = (type: string) => {
    if (!vehicle) return '';
    
    const bodyType = vehicle.bodyType?.toLowerCase() || '';
    
    if (bodyType.includes('suv') || bodyType.includes('crossover')) {
      return 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=60';
    } else if (bodyType.includes('pickup') || bodyType.includes('truck')) {
      return 'https://images.unsplash.com/photo-1595595512954-c6d34f0699d1?auto=format&fit=crop&w=800&q=60';
    } else if (bodyType.includes('van') || bodyType.includes('minivan')) {
      return 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=800&q=60';
    } else if (type === 'electric') {
      return 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=60';
    } else if (type === 'hybrid') {
      return 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=60';
    } else {
      return 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=60';
    }
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

  // Prepare vehicle images for the carousel
  const vehicleImages = [
    {
      src: vehicle.image || getDefaultImage('main'),
      alt: `${vehicle.title} - Main View`,
      type: 'exterior' as const
    },
    {
      src: vehicle.interiorImage || "https://images.unsplash.com/photo-1552849397-02041a5c9832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      alt: `${vehicle.title} - Interior View`,
      type: 'interior' as const
    },
    {
      src: vehicle.detailImage || "https://images.unsplash.com/photo-1626668893627-6632f0e20fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      alt: `${vehicle.title} - Detail View`,
      type: 'detail' as const
    }
  ];
  
  // Extract API data to augment the display
  const apiDetails = apiVehicle ? {
    engine: apiVehicle.model_engine_type || 'Not available',
    power: apiVehicle.model_engine_power_ps ? `${apiVehicle.model_engine_power_ps} PS` : 'Not available',
    torque: apiVehicle.model_engine_torque_nm ? `${apiVehicle.model_engine_torque_nm} Nm` : 'Not available',
    topSpeed: apiVehicle.model_top_speed_kph ? `${apiVehicle.model_top_speed_kph} km/h` : 'Not available',
    acceleration: apiVehicle.model_0_to_100_kph ? `${apiVehicle.model_0_to_100_kph}s (0-100 km/h)` : 'Not available',
    weight: apiVehicle.model_weight_kg ? `${apiVehicle.model_weight_kg} kg` : 'Not available',
    fuelEfficiency: apiVehicle.model_lkm_mixed ? `${apiVehicle.model_lkm_mixed} L/100km` : 'Not available'
  } : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <div className="bg-dssilver-50 py-6">
          <div className="container mx-auto px-4">
            <button 
              onClick={handleGoBack}
              className="flex items-center text-dssilver-700 mb-4 hover:text-red-500 transition-all"
            >
              <ChevronLeft className="mr-1 h-5 w-5" /> Back to listings
            </button>
            
            {/* Search Filter */}
            <div className="mb-8">
              <SearchFilter onFilterChange={handleFilterChange} />
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
                
                {/* API Data Section */}
                {apiDetails && (
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
                )}
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
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
          
          {/* Related Vehicles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredVehicles
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
                          <span className="text-white bg-red-500/90 px-3 py-1 rounded-full text-sm">{relatedVehicle.price}</span>
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
