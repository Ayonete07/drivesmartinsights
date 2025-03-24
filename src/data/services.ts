
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "financing",
    title: "Auto Financing",
    description: "Competitive rates and flexible terms for all credit situations. We work with multiple lenders to get you approved and on the road fast.",
    icon: "credit-card",
    features: [
      "Low interest rates",
      "Flexible payment terms",
      "Pre-qualification with no credit impact",
      "Special programs for first-time buyers",
      "Refinancing options available"
    ]
  },
  {
    id: "leasing",
    title: "Leasing Options",
    description: "Drive a new vehicle every few years with our affordable lease programs. Lower monthly payments and minimal down payment required.",
    icon: "key",
    features: [
      "Lower monthly payments than buying",
      "Drive a new car every 2-3 years",
      "Minimal down payment",
      "Multiple mileage options",
      "Lease-end purchase options"
    ]
  },
  {
    id: "trade-in",
    title: "Vehicle Trade-In",
    description: "Get top dollar for your current vehicle. Our appraisal experts provide fair market value and apply the amount to your new purchase.",
    icon: "repeat",
    features: [
      "Free, no-obligation appraisals",
      "Same-day offer",
      "We'll pay off your loan balance",
      "Tax benefits on trade-ins",
      "Hassle-free process"
    ]
  },
  {
    id: "maintenance",
    title: "Service & Maintenance",
    description: "Factory-trained technicians and state-of-the-art facilities to keep your vehicle running at peak performance.",
    icon: "wrench",
    features: [
      "Scheduled maintenance",
      "Warranty repairs",
      "Genuine OEM parts",
      "Multi-point inspections",
      "Complimentary shuttle service"
    ]
  },
  {
    id: "protection",
    title: "Vehicle Protection",
    description: "Extend the life of your investment with our comprehensive protection plans, covering mechanical issues, appearance, and more.",
    icon: "shield",
    features: [
      "Extended warranties",
      "GAP insurance",
      "Tire & wheel protection",
      "Appearance packages",
      "Theft protection"
    ]
  },
  {
    id: "delivery",
    title: "Home Delivery",
    description: "Convenient door-to-door vehicle delivery service. We'll bring your new car directly to your home or office.",
    icon: "truck",
    features: [
      "Contactless delivery option",
      "Complete paperwork online",
      "Vehicle orientation at delivery",
      "Delivery throughout the region",
      "Flexible scheduling"
    ]
  }
];
