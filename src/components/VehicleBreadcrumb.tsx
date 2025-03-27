
import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface VehicleBreadcrumbProps {
  onGoBack: () => void;
}

const VehicleBreadcrumb: React.FC<VehicleBreadcrumbProps> = ({ onGoBack }) => {
  return (
    <button 
      onClick={onGoBack}
      className="flex items-center text-dssilver-700 mb-4 hover:text-red-500 transition-all"
    >
      <ChevronLeft className="mr-1 h-5 w-5" /> Back to listings
    </button>
  );
};

export default VehicleBreadcrumb;
