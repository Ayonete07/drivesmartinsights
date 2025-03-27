
import { useState, useEffect } from 'react';

interface VehicleImage {
  src: string;
  alt: string;
  type: 'exterior' | 'interior' | 'detail';
}

export const useVehicleImages = (vehicle: any) => {
  const [vehicleImages, setVehicleImages] = useState<VehicleImage[]>([]);

  useEffect(() => {
    if (!vehicle) return;

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

    // Prepare vehicle images for the carousel
    const images: VehicleImage[] = [
      {
        src: vehicle.image || getDefaultImage('main'),
        alt: `${vehicle.title} - Main View`,
        type: 'exterior'
      },
      {
        src: vehicle.interiorImage || "https://images.unsplash.com/photo-1552849397-02041a5c9832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        alt: `${vehicle.title} - Interior View`,
        type: 'interior'
      },
      {
        src: vehicle.detailImage || "https://images.unsplash.com/photo-1626668893627-6632f0e20fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        alt: `${vehicle.title} - Detail View`,
        type: 'detail'
      }
    ];

    setVehicleImages(images);
  }, [vehicle]);

  return vehicleImages;
};
