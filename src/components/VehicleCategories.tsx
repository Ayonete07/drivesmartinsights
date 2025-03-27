
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Truck, Bus, Package, Zap } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const VehicleCategories = () => {
  const navigate = useNavigate();
  
  const categories: CategoryItem[] = [
    {
      id: 'cars',
      name: 'Cars',
      icon: <Car className="w-10 h-10 mb-4 text-red-500" />,
      description: 'Sedans, coupes, and convertibles'
    },
    {
      id: 'suvs',
      name: 'SUVs & Crossovers',
      icon: <Car className="w-10 h-10 mb-4 text-red-500" />,
      description: 'Spacious and versatile vehicles'
    },
    {
      id: 'trucks',
      name: 'Trucks',
      icon: <Truck className="w-10 h-10 mb-4 text-red-500" />,
      description: 'Powerful hauling capabilities'
    },
    {
      id: 'vans',
      name: 'Vans',
      icon: <Package className="w-10 h-10 mb-4 text-red-500" />,
      description: 'Perfect for families and businesses'
    },
    {
      id: 'hybrids',
      name: 'Hybrid Vehicles',
      icon: <Car className="w-10 h-10 mb-4 text-red-500" />,
      description: 'Economical and environmentally friendly'
    },
    {
      id: 'electric',
      name: 'Electric Vehicles',
      icon: <Zap className="w-10 h-10 mb-4 text-red-500" />,
      description: 'Zero emissions, full performance'
    }
  ];
  
  const handleCategoryClick = (categoryId: string) => {
    navigate(`/vehicle-category/${categoryId}`);
  };
  
  return (
    <section id="vehicle-categories" className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Browse by Vehicle Type</h2>
          <p className="text-dssilver-600 max-w-2xl mx-auto">
            Explore our inventory by vehicle category to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="flex flex-col items-center p-6 bg-dssilver-100 border border-dssilver-200/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-red-500/30"
            >
              {category.icon}
              <h3 className="text-lg font-semibold mb-2 text-dssilver-800">{category.name}</h3>
              <p className="text-dssilver-600 text-sm text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleCategories;
