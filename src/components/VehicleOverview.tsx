
import React from 'react';
import VehicleSpecifications from './VehicleSpecifications';
import VehiclePerformance from './VehiclePerformance';
import VehicleFeatures from './VehicleFeatures';
import PromoAd from './PromoAd';

interface VehicleOverviewProps {
  vehicle: any;
  apiDetails: any;
}

const VehicleOverview: React.FC<VehicleOverviewProps> = ({ vehicle, apiDetails }) => {
  return (
    <div className="bg-dssilver-100 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="text-dssilver-700 mb-6">{vehicle.description}</p>
      
      <VehicleSpecifications vehicle={vehicle} />
      
      {apiDetails && <VehiclePerformance apiDetails={apiDetails} />}
      
      <VehicleFeatures features={vehicle.features} />
      
      <div className="mt-8">
        <PromoAd 
          title="Trade-In Your Vehicle"
          description="Get top dollar for your current vehicle when you trade it in for this model. Our appraisal experts are ready to provide a fair market value estimate."
          image="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          buttonText="Learn about our trade-in program"
          buttonLink="#contact"
          theme="dark"
        />
      </div>
    </div>
  );
};

export default VehicleOverview;
