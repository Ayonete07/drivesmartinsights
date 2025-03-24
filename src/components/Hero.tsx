
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=80")',
        transition: 'background-position-y 0.5s ease-out'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block px-3 py-1 mb-4 bg-dsblue-500/90 text-white text-sm font-medium rounded-full">
            Premium Vehicle Selection
          </span>
          <h1 className="text-white mb-6 font-bold">
            Discover Your Perfect Drive
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-xl">
            Explore our curated collection of premium vehicles and find the perfect match for your lifestyle and needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#vehicles" className="btn-primary text-base px-8 py-3">
              Explore Vehicles
            </a>
            <a href="#contact" className="bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 transition-colors duration-300 rounded-md px-8 py-3 text-base">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#vehicles" className="flex flex-col items-center text-white/80 hover:text-white">
          <span className="mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
