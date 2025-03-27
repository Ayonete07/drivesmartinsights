
import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { 
  vehicles, 
  brands, 
  bodyTypes, 
  fuelTypes, 
  transmissionTypes 
} from '@/data/vehicles';

interface SearchFilterProps {
  onFilterChange: (filtered: typeof vehicles) => void;
}

const SearchFilter = ({ onFilterChange }: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedBodyType, setSelectedBodyType] = useState<string>('');
  const [selectedFuelType, setSelectedFuelType] = useState<string>('');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    // Filter vehicles based on all criteria
    const filtered = vehicles.filter(vehicle => {
      // Search term filter (case insensitive)
      const matchesSearch = searchTerm === '' || 
        vehicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
        
      // Brand filter
      const matchesBrand = selectedBrand === '' || vehicle.brand === selectedBrand;
      
      // Body type filter
      const matchesBodyType = selectedBodyType === '' || vehicle.bodyType === selectedBodyType;
      
      // Fuel type filter
      const matchesFuelType = selectedFuelType === '' || vehicle.fuelType === selectedFuelType;
      
      // Transmission filter
      const matchesTransmission = selectedTransmission === '' || vehicle.transmission === selectedTransmission;
      
      return matchesSearch && matchesBrand && matchesBodyType && matchesFuelType && matchesTransmission;
    });
    
    onFilterChange(filtered);
  }, [searchTerm, selectedBrand, selectedBodyType, selectedFuelType, selectedTransmission, onFilterChange]);
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedBodyType('');
    setSelectedFuelType('');
    setSelectedTransmission('');
  };
  
  return (
    <div className="w-full bg-gray-50 p-4 rounded-lg mb-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by make, model, or keywords..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        
        {/* Filter button (mobile) */}
        <button
          className="md:hidden flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-5 w-5" />
          Filters
        </button>
        
        {/* Desktop filters */}
        <div className="hidden md:flex gap-2 flex-grow">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="flex-grow bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          
          <select
            value={selectedBodyType}
            onChange={(e) => setSelectedBodyType(e.target.value)}
            className="flex-grow bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">All Body Types</option>
            {bodyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          <select
            value={selectedFuelType}
            onChange={(e) => setSelectedFuelType(e.target.value)}
            className="flex-grow bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          <select
            value={selectedTransmission}
            onChange={(e) => setSelectedTransmission(e.target.value)}
            className="flex-grow bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">All Transmissions</option>
            {transmissionTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          {/* Clear filters button */}
          {(selectedBrand || selectedBodyType || selectedFuelType || selectedTransmission || searchTerm) && (
            <button
              onClick={clearFilters}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-1"
            >
              <X className="h-4 w-4" /> Clear
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile filter panel */}
      {isFilterOpen && (
        <div className="md:hidden mt-4 p-4 bg-white rounded-md border border-gray-200 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Body Type</label>
            <select
              value={selectedBodyType}
              onChange={(e) => setSelectedBodyType(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">All Body Types</option>
              {bodyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
            <select
              value={selectedFuelType}
              onChange={(e) => setSelectedFuelType(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">All Fuel Types</option>
              {fuelTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
            <select
              value={selectedTransmission}
              onChange={(e) => setSelectedTransmission(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">All Transmissions</option>
              {transmissionTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="flex gap-2 pt-2">
            <button
              onClick={clearFilters}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Clear Filters
            </button>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
