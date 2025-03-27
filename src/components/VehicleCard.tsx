
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface VehicleCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  onClick: (id: string) => void;
}

const VehicleCard = ({
  id,
  image,
  title,
  description,
  price,
  features,
  onClick
}: VehicleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="vehicle-card cursor-pointer bg-dssilver-50/80 border border-dssilver-200/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id)}
    >
      <div className="img-hover-zoom h-64 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy" 
        />
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-dssilver-50/90 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-80" : "opacity-60"
          )}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-end">
            <h3 className="text-white font-medium">{title}</h3>
            <span className="text-white bg-red-500/90 px-3 py-1 rounded-full text-sm">{price}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-dssilver-700 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className="text-xs bg-dssilver-100 text-dssilver-700 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <button 
          className={cn(
            "w-full py-2 rounded-md transition-all duration-300 text-center",
            isHovered 
              ? "bg-red-500 text-white" 
              : "bg-dssilver-100 text-dssilver-700"
          )}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
