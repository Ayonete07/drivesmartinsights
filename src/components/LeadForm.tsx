
import React, { useState } from 'react';
import { toast } from "@/components/ui/sonner";

interface LeadFormProps {
  selectedVehicle: string | null;
  onSubmitSuccess: () => void;
}

const LeadForm = ({ selectedVehicle, onSubmitSuccess }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    try {
      // In a real app, you would send this data to your backend
      // For demo, we'll just simulate a network request
      console.log('Form submitted with data:', {
        ...formData,
        vehicleId: selectedVehicle
      });
      
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Form submitted successfully! Redirecting...");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Wait briefly, then redirect
      setTimeout(() => {
        onSubmitSuccess();
        // Redirect to Sheehy.com
        window.location.href = 'https://www.sheehy.com/';
      }, 2000);
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto animate-fade-in">
      <h3 className="text-2xl font-medium text-dssilver-800 mb-6">Get More Information</h3>
      
      {selectedVehicle && (
        <div className="mb-6 p-3 bg-dssilver-50 rounded-md border border-dssilver-100">
          <p className="text-dssilver-700 text-sm">
            You're inquiring about: <span className="font-medium text-dssilver-900">Vehicle ID: {selectedVehicle}</span>
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dssilver-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dssilver-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dssilver-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dssilver-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
            placeholder="I'm interested in learning more about this vehicle..."
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-dsblue-500 hover:bg-dsblue-600 text-white py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </div>
        
        <p className="text-xs text-dssilver-600 text-center mt-4">
          By submitting, you agree to our privacy policy and consent to be contacted regarding your inquiry.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
