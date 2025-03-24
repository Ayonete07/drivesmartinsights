
import React from 'react';
import { partners } from '@/data/partners';

const PartnersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-3 py-1 mb-4 bg-dssilver-100 text-dssilver-800 text-sm font-medium rounded-full">
            Our Partners
          </span>
          <h2 className="text-4xl font-bold mb-4">Trusted Automotive Brands</h2>
          <p className="max-w-2xl mx-auto text-dssilver-700">
            We work with the world's leading automobile manufacturers to bring you quality vehicles and exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 reveal">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center p-4 hover:bg-dssilver-50 rounded-lg transition-colors duration-300"
            >
              <div className="h-24 w-24 p-2 mb-4 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-dssilver-800 mb-1">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
