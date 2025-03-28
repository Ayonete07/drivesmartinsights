
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PromoAdProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  theme?: 'light' | 'dark';
}

const PromoAd = ({ 
  title, 
  description, 
  image, 
  buttonText, 
  buttonLink,
  theme = 'light' 
}: PromoAdProps) => {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-md reveal ${theme === 'dark' ? 'bg-dssilver-50 text-dssilver-800' : 'bg-dssilver-100 text-dssilver-700'} border border-dssilver-200/20`}>
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-2/5 h-64 md:h-auto relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dssilver-50/90 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:w-3/5 flex flex-col justify-center">
          <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-dssilver-800' : 'text-dssilver-700'}`}>{title}</h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-dssilver-600' : 'text-dssilver-600'}`}>{description}</p>
          <a 
            href={buttonLink} 
            className={`inline-flex items-center mt-2 text-sm font-medium ${theme === 'dark' ? 'text-red-500 hover:text-red-400' : 'text-red-500 hover:text-red-400'} transition-colors duration-200`}
          >
            {buttonText} <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoAd;
