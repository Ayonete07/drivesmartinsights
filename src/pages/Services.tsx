
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { toast } from 'sonner';
import { 
  CreditCard, 
  Key, 
  Repeat, 
  Wrench, 
  Shield, 
  Truck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'credit-card': return <CreditCard className="h-8 w-8" />;
      case 'key': return <Key className="h-8 w-8" />;
      case 'repeat': return <Repeat className="h-8 w-8" />;
      case 'wrench': return <Wrench className="h-8 w-8" />;
      case 'shield': return <Shield className="h-8 w-8" />;
      case 'truck': return <Truck className="h-8 w-8" />;
      default: return <CheckCircle className="h-8 w-8" />;
    }
  };
  
  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your inquiry has been submitted. We'll contact you shortly!");
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-dssilver-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486684228390-9e13eecef9c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Automotive service" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 bg-dsblue-500/20 text-dsblue-100 text-sm font-medium rounded-full">
            Comprehensive Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Automotive Services</h1>
          <p className="max-w-2xl mx-auto text-dssilver-200 mb-8">
            DriveSmartInsights offers a full range of services to meet all your automotive needs, from financing and leasing to maintenance and protection plans.
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-dssilver-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 reveal">
                <div className="p-3 bg-dsblue-500/10 inline-flex rounded-lg text-dsblue-500 mb-4">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-dssilver-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dsblue-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-dssilver-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="text-dsblue-500 font-medium hover:text-dsblue-600 transition-colors flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-dssilver-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-3 py-1 mb-4 bg-dssilver-200 text-dssilver-800 text-sm font-medium rounded-full">
              How It Works
            </span>
            <h2 className="text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="max-w-2xl mx-auto text-dssilver-700">
              We've streamlined our service process to make it as convenient as possible for you. Here's how it works:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="text-center">
              <div className="w-16 h-16 bg-dsblue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-dssilver-700">
                Speak with our automotive experts to discuss your specific needs and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-dsblue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-3">Custom Solution</h3>
              <p className="text-dssilver-700">
                Receive a tailored solution designed specifically for your situation and requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-dsblue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-dssilver-700">
                Experience a smooth implementation process with ongoing support from our team.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section ref={contactFormRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 reveal">
              <span className="inline-block px-3 py-1 mb-4 bg-dssilver-100 text-dssilver-800 text-sm font-medium rounded-full">
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold mb-4">Request a Service</h2>
              <p className="max-w-2xl mx-auto text-dssilver-700">
                Fill out the form below and one of our service specialists will get in touch with you shortly.
              </p>
            </div>
            
            <div className="bg-dssilver-50 p-8 rounded-lg shadow-md reveal">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dssilver-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
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
                      required
                      className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dssilver-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dssilver-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a Service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
                      <option value="other">Other (Please specify)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dssilver-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-dssilver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:border-transparent transition-all"
                    placeholder="Please provide any specific details about your service needs..."
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-dsblue-500 hover:bg-dsblue-600 text-white py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-dsblue-500 focus:ring-offset-2"
                  >
                    Submit Request
                  </button>
                </div>
                
                <p className="text-xs text-dssilver-600 text-center">
                  By submitting, you agree to our privacy policy and consent to be contacted regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
