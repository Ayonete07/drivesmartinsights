
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out w-full',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-dsblue-600 to-dsblue-400 bg-clip-text text-transparent">
            DriveSmartInsights
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#vehicles" className="text-dssilver-800 hover:text-dsblue-500 transition-colors">
            Vehicles
          </a>
          <a href="#about" className="text-dssilver-800 hover:text-dsblue-500 transition-colors">
            About
          </a>
          <a href="#contact" className="text-dssilver-800 hover:text-dsblue-500 transition-colors">
            Contact
          </a>
        </nav>
        
        <a href="#vehicles" className="btn-primary">
          Browse Cars
        </a>
      </div>
    </header>
  );
};

export default Navbar;
