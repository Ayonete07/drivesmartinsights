
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';
  
  // Toggle scroll state based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check (important for page refreshes)
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-10">
            <Logo variant={isScrolled ? "default" : "large"} />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-dssilver-800 hover:text-dsblue-500 font-medium transition-colors",
                location.pathname === '/' && "text-dsblue-500"
              )}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={cn(
                "text-dssilver-800 hover:text-dsblue-500 font-medium transition-colors",
                location.pathname === '/services' && "text-dsblue-500"
              )}
            >
              Services
            </Link>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={cn(
                "h-6 w-6 transition-colors",
                isScrolled || !isHomePage ? "text-dssilver-800" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "h-6 w-6 transition-colors",
                isScrolled || !isHomePage ? "text-dssilver-800" : "text-white"
              )} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <Link 
          to="/" 
          className={cn(
            "text-2xl font-medium text-dssilver-800 hover:text-dsblue-500 transition-colors",
            location.pathname === '/' && "text-dsblue-500"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/services" 
          className={cn(
            "text-2xl font-medium text-dssilver-800 hover:text-dsblue-500 transition-colors",
            location.pathname === '/services' && "text-dsblue-500"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <a 
          href="#contact" 
          className="btn-primary text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
