
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface VehicleImage {
  src: string;
  alt: string;
  type: 'exterior' | 'interior' | 'detail';
}

interface VehicleImageCarouselProps {
  images: VehicleImage[];
  vehicleName: string;
}

const VehicleImageCarousel: React.FC<VehicleImageCarouselProps> = ({ 
  images, 
  vehicleName 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  
  return (
    <>
      {/* Main Carousel */}
      <div className="relative mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative h-[60vh] cursor-pointer overflow-hidden rounded-lg" 
                  onClick={() => handleImageClick(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt || `${vehicleName} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 bg-dsblue-500/80 text-white px-3 py-1 rounded-full text-sm">
                    {image.type.charAt(0).toUpperCase() + image.type.slice(1)} View
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-white" />
          <CarouselNext className="-right-4 bg-white" />
        </Carousel>
        
        {/* Thumbnail indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentImageIndex === index ? "bg-dsblue-500 scale-125" : "bg-dssilver-300"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl">
          <Carousel className="w-full" defaultIndex={currentImageIndex}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-[70vh] flex items-center justify-center">
                    <img 
                      src={image.src} 
                      alt={image.alt || `${vehicleName} - Image ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-2 text-dssilver-600">
                    {image.alt || `${vehicleName} - ${image.type.charAt(0).toUpperCase() + image.type.slice(1)} View`}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-white" />
            <CarouselNext className="-right-4 bg-white" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VehicleImageCarousel;
