
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RelatedVehiclesProps {
  currentVehicleId: string;
  filteredVehicles: any[];
  currentBrand: string;
}

const RelatedVehicles: React.FC<RelatedVehiclesProps> = ({ 
  currentVehicleId, 
  filteredVehicles, 
  currentBrand 
}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-foreground">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredVehicles
          .filter(v => v.id !== currentVehicleId && v.brand === currentBrand)
          .slice(0, 3)
          .map(relatedVehicle => (
            <div 
              key={relatedVehicle.id} 
              className="vehicle-card cursor-pointer bg-dssilver-50/80 border border-dssilver-200/20" 
              onClick={() => navigate(`/vehicle/${relatedVehicle.id}`)}
            >
              <div className="img-hover-zoom h-48 relative">
                <img 
                  src={relatedVehicle.image} 
                  alt={relatedVehicle.title} 
                  className="w-full h-full object-cover"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dssilver-50/90 to-transparent"></div>
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
  );
};

export default RelatedVehicles;
