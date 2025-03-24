
// Car data organized by brand
export interface Vehicle {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  brand: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  bodyType: string;
  color: string;
}

export const vehicles: Vehicle[] = [
  // Audi
  {
    id: "audi-1",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Audi Q5 Premium",
    price: "$45,900",
    description: "Refined luxury SUV with cutting-edge technology and powerful performance.",
    features: ["AWD", "2.0L Turbo", "Leather", "Virtual Cockpit", "Panoramic Roof"],
    brand: "Audi",
    year: 2023,
    mileage: "9,875",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Glacier White"
  },
  
  // BMW
  {
    id: "bmw-1",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80",
    title: "2023 BMW 5 Series",
    price: "$55,800",
    description: "Executive sedan that combines dynamic performance with luxurious comfort.",
    features: ["RWD", "3.0L I6", "Navigation", "Premium Sound", "Driver Assistance"],
    brand: "BMW",
    year: 2023,
    mileage: "12,450",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Alpine White"
  },
  
  // Mercedes-Benz
  {
    id: "mercedes-1",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    title: "2023 Mercedes-Benz GLE",
    price: "$67,000",
    description: "Sophisticated SUV offering unmatched luxury and innovative technology.",
    features: ["4MATIC", "3.0L V6", "MBUX", "Burmester Audio", "64-Color Ambient Lighting"],
    brand: "Mercedes-Benz",
    year: 2023,
    mileage: "5,234",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Obsidian Black"
  },
  
  // Tesla
  {
    id: "tesla-1",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    title: "2023 Tesla Model Y",
    price: "$49,900",
    description: "All-electric SUV with impressive range and cutting-edge autonomous features.",
    features: ["Dual Motor", "AWD", "Autopilot", "15\" Touchscreen", "320mi Range"],
    brand: "Tesla",
    year: 2023,
    mileage: "8,712",
    fuelType: "Electric",
    transmission: "Single-Speed",
    bodyType: "SUV",
    color: "Pearl White"
  },
  
  // Toyota
  {
    id: "toyota-1",
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Toyota Camry SE",
    price: "$28,600",
    description: "Reliable midsize sedan combining efficiency, comfort, and smart technology.",
    features: ["FWD", "2.5L I4", "Apple CarPlay", "Toyota Safety Sense", "Sport-Tuned Suspension"],
    brand: "Toyota",
    year: 2023,
    mileage: "15,624",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Celestial Silver"
  },
  
  // Honda
  {
    id: "honda-1",
    image: "https://images.unsplash.com/photo-1590510696099-69dba44b83fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2024 Honda CR-V Hybrid",
    price: "$32,450",
    description: "Versatile crossover SUV with excellent fuel efficiency and spacious interior.",
    features: ["AWD", "2.0L Hybrid", "Honda Sensing", "Wireless Charging", "Hands-Free Access"],
    brand: "Honda",
    year: 2024,
    mileage: "7,823",
    fuelType: "Hybrid",
    transmission: "CVT",
    bodyType: "SUV",
    color: "Modern Steel"
  },
  
  // Ford
  {
    id: "ford-1",
    image: "https://images.unsplash.com/photo-1551830820-330a71ba4aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Ford F-150 XLT",
    price: "$41,800",
    description: "America's bestselling pickup with powerful performance and advanced technology.",
    features: ["4x4", "3.5L EcoBoost", "SYNC 4", "Pro Power Onboard", "Co-Pilot360"],
    brand: "Ford",
    year: 2023,
    mileage: "11,245",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Truck",
    color: "Oxford White"
  },
  
  // Chevrolet
  {
    id: "chevrolet-1",
    image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Chevrolet Silverado 1500",
    price: "$39,500",
    description: "Rugged and versatile pickup truck with impressive towing capabilities.",
    features: ["4WD", "5.3L V8", "Trailering Package", "Multi-Flex Tailgate", "Chevy Safety Assist"],
    brand: "Chevrolet",
    year: 2023,
    mileage: "13,456",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Truck",
    color: "Summit White"
  },
  
  // Lexus
  {
    id: "lexus-1",
    image: "https://images.unsplash.com/photo-1617037711881-4a7d366d7f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Lexus RX 350",
    price: "$52,300",
    description: "Premium crossover combining refined luxury with Japanese craftsmanship.",
    features: ["AWD", "3.5L V6", "Lexus Safety System+", "Mark Levinson Audio", "Leather"],
    brand: "Lexus",
    year: 2023,
    mileage: "9,123",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Eminent White Pearl"
  },
  
  // Subaru
  {
    id: "subaru-1",
    image: "https://images.unsplash.com/photo-1626037222256-28f4035378e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Subaru Outback",
    price: "$31,200",
    description: "Adventure-ready crossover with standard all-wheel drive and rugged capability.",
    features: ["AWD", "2.5L Boxer Engine", "Starlink Safety", "X-Mode", "8.7\" Ground Clearance"],
    brand: "Subaru",
    year: 2023,
    mileage: "14,785",
    fuelType: "Gasoline",
    transmission: "CVT",
    bodyType: "Wagon",
    color: "Crystal Black Silica"
  },
  
  // Volkswagen
  {
    id: "vw-1",
    image: "https://images.unsplash.com/photo-1558686531-18ff89ded342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Volkswagen Tiguan",
    price: "$27,900",
    description: "European-designed compact SUV with precise handling and versatile interior.",
    features: ["FWD", "2.0L Turbo", "Digital Cockpit", "IQ.Drive", "3rd Row Seating"],
    brand: "Volkswagen",
    year: 2023,
    mileage: "12,345",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Platinum Gray"
  },
  
  // Hyundai
  {
    id: "hyundai-1",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2024 Hyundai Tucson Hybrid",
    price: "$31,350",
    description: "Stylish compact SUV with impressive fuel economy and feature-rich interior.",
    features: ["AWD", "1.6L Turbo Hybrid", "BlueLink", "Smart Sense", "Panoramic Sunroof"],
    brand: "Hyundai",
    year: 2024,
    mileage: "8,765",
    fuelType: "Hybrid",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Amazon Gray"
  },
  
  // Kia
  {
    id: "kia-1",
    image: "https://images.unsplash.com/photo-1635771731949-25fde983f5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Kia Telluride",
    price: "$35,890",
    description: "Award-winning midsize SUV with generous space and premium features.",
    features: ["AWD", "3.8L V6", "UVO link", "Highway Driving Assist", "Captain's Chairs"],
    brand: "Kia",
    year: 2023,
    mileage: "10,245",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Everlasting Silver"
  },
  
  // Mazda
  {
    id: "mazda-1",
    image: "https://images.unsplash.com/photo-1626072778346-0ab6604d39c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Mazda CX-5",
    price: "$29,450",
    description: "Premium feel crossover with engaging driving dynamics and upscale design.",
    features: ["AWD", "2.5L Skyactiv", "i-Activsense", "Bose Audio", "Nappa Leather"],
    brand: "Mazda",
    year: 2023,
    mileage: "9,876",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Soul Red Crystal"
  },
  
  // Nissan
  {
    id: "nissan-1",
    image: "https://images.unsplash.com/photo-1609059032745-a71c8d7d99e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Nissan Rogue",
    price: "$30,190",
    description: "Family-friendly crossover with versatile interior and advanced safety features.",
    features: ["AWD", "1.5L Turbo", "ProPILOT Assist", "Divide-N-Hide", "Safety Shield 360"],
    brand: "Nissan",
    year: 2023,
    mileage: "12,789",
    fuelType: "Gasoline",
    transmission: "CVT",
    bodyType: "SUV",
    color: "Champagne Silver"
  },
  
  // GMC
  {
    id: "gmc-1",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 GMC Sierra 1500",
    price: "$43,400",
    description: "Professional grade pickup with bold design and innovative cargo solutions.",
    features: ["4WD", "5.3L V8", "MultiPro Tailgate", "ProGrade Trailering", "AT4 Off-Road"],
    brand: "GMC",
    year: 2023,
    mileage: "11,432",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Truck",
    color: "Summit White"
  },
  
  // Volvo
  {
    id: "volvo-1",
    image: "https://images.unsplash.com/photo-1626072305116-18ac2a3f1a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    title: "2023 Volvo XC60",
    price: "$45,700",
    description: "Scandinavian luxury SUV with distinctive design and class-leading safety.",
    features: ["AWD", "2.0L Turbo", "City Safety", "Pilot Assist", "Harman Kardon"],
    brand: "Volvo",
    year: 2023,
    mileage: "8,654",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Denim Blue"
  }
];

// Get unique brands from vehicles
export const brands = [...new Set(vehicles.map(vehicle => vehicle.brand))].sort();

// Get unique body types from vehicles
export const bodyTypes = [...new Set(vehicles.map(vehicle => vehicle.bodyType))].sort();

// Get unique fuel types from vehicles
export const fuelTypes = [...new Set(vehicles.map(vehicle => vehicle.fuelType))].sort();

// Get unique transmission types from vehicles
export const transmissionTypes = [...new Set(vehicles.map(vehicle => vehicle.transmission))].sort();
