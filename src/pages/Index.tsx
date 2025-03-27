
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VehicleCard from '../components/VehicleCard';
import VehicleCategories from '../components/VehicleCategories'; 
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import PartnersSection from '../components/PartnersSection';
import SearchFilter from '../components/SearchFilter';
import PromoAd from '../components/PromoAd';
import { vehicles, Vehicle } from '@/data/vehicles';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// About us content
const aboutContent = {
  title: "About DriveSmartInsights",
  subtitle: "Your Trusted Automotive Partner",
  description: "DriveSmartInsights is dedicated to connecting discerning drivers with their perfect vehicles. We curate a selection of premium automobiles and provide personalized guidance throughout your car-buying journey. Our team of automotive experts is committed to delivering exceptional service and ensuring your complete satisfaction.",
  image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  stats: [
    { label: "Happy Clients", value: "5,000+" },
    { label: "Vehicles Sourced", value: "12,000+" },
    { label: "Years of Experience", value: "15+" },
    { label: "5-Star Reviews", value: "4,500+" }
  ]
};

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const aboutRef = useRef<HTMLDivElement>(null);
  const vehiclesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Get search term from URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    
    if (searchTerm) {
      const filtered = vehicles.filter(vehicle => 
        vehicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVehicles(filtered);
    } else {
      setFilteredVehicles(vehicles);
    }
  }, [location.search]);

  useEffect(() => {
    // Animation on scroll logic
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVehicleClick = (id: string) => {
    setSelectedVehicle(id);
    setIsFormOpen(true);
  };

  const handleVehicleDetailsClick = (id: string) => {
    navigate(`/vehicle/${id}`);
  };

  const handleFormSubmitSuccess = () => {
    setIsFormOpen(false);
  };

  const handleFilterChange = (filtered: Vehicle[]) => {
    setFilteredVehicles(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      {/* Vehicle Categories Section */}
      <VehicleCategories />
      
      {/* Vehicles Section */}
      <section id="vehicles" ref={vehiclesRef} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-3 py-1 mb-4 bg-red-100 text-red-800 text-sm font-medium rounded-full">
              Premium Selection
            </span>
            <h2 className="text-4xl font-bold mb-4">Explore Our Vehicles</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Browse our carefully curated selection of premium vehicles, each offering exceptional quality, performance, and value.
            </p>
          </div>
          
          <SearchFilter onFilterChange={handleFilterChange} />
          
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium mb-2">No vehicles match your search criteria</h3>
              <p className="text-gray-700">Please try adjusting your filters or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle, index) => (
                <div key={vehicle.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <VehicleCard
                    id={vehicle.id}
                    image={vehicle.image}
                    title={vehicle.title}
                    price={vehicle.price}
                    description={vehicle.description}
                    features={vehicle.features}
                    onClick={handleVehicleDetailsClick}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Promo Ad */}
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <PromoAd 
            title="Special Financing Offer"
            description="Qualified buyers can take advantage of 0% APR financing for up to 72 months on select models. Limited time offer."
            image="https://images.unsplash.com/photo-1586023473134-1e26aac33642?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            buttonText="See qualifying vehicles"
            buttonLink="#vehicles"
            theme="dark"
          />
        </div>
      </section>
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-3 py-1 mb-4 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                Our Story
              </span>
              <h2 className="text-4xl font-bold mb-4">{aboutContent.title}</h2>
              <h3 className="text-xl text-gray-700 mb-6">{aboutContent.subtitle}</h3>
              <p className="text-gray-700 mb-8">{aboutContent.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {aboutContent.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <a href="#contact" className="btn-primary inline-block">Contact Us</a>
            </div>
            
            <div className="relative reveal">
              <div className="absolute inset-0 bg-red-500 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src={aboutContent.image} 
                alt="About DriveSmartInsights" 
                className="relative z-10 rounded-lg shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-3 py-1 mb-4 bg-red-100 text-red-800 text-sm font-medium rounded-full">
              Get In Touch
            </span>
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Have questions about a specific vehicle or need personalized advice? 
              Reach out to our team of automotive experts.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto reveal">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span className="text-gray-700">1234 Auto Drive, Springfield, IL 62701</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span className="text-gray-700">(123) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      <span className="text-gray-700">info@drivesmartinsights.com</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Business Hours</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                      <li>Saturday: 10:00 AM - 5:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4">Send a Message</h3>
                  <LeadForm 
                    selectedVehicle={null} 
                    onSubmitSuccess={handleFormSubmitSuccess} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Lead Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <LeadForm 
            selectedVehicle={selectedVehicle} 
            onSubmitSuccess={handleFormSubmitSuccess}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
