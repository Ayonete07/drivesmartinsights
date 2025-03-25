// Car data organized by brand
export interface Vehicle {
  id: string;
  image: string;
  interiorImage?: string;
  detailImage?: string;
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
    interiorImage: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1606025297472-4d3b7c77d5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
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
  {
    id: "audi-2",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1571817591459-b9d3626b911d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Audi A4 Sedan",
    price: "$39,800",
    description: "A sophisticated sedan with spirited performance and elegant styling.",
    features: ["Quattro AWD", "2.0L TFSI", "Sport Package", "B&O Sound", "Adaptive Cruise"],
    brand: "Audi",
    year: 2023,
    mileage: "7,234",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Mythos Black"
  },
  {
    id: "audi-3",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1571817591459-b9d3626b911d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Audi e-tron GT",
    price: "$102,400",
    description: "Electrifying performance meets luxury in this all-electric gran turismo.",
    features: ["Electric", "Dual Motors", "Quattro", "Adaptive Air Suspension", "Matrix LED Headlights"],
    brand: "Audi",
    year: 2023,
    mileage: "3,125",
    fuelType: "Electric",
    transmission: "Single-Speed",
    bodyType: "Sedan",
    color: "Daytona Gray"
  },
  
  // BMW
  {
    id: "bmw-1",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80",
    interiorImage: "https://images.unsplash.com/photo-1570303363992-7f95ee20ebdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1556800572-1b8aedf82ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
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
  {
    id: "bmw-2",
    image: "https://images.unsplash.com/photo-1635073937223-a3d60c7f1fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 BMW X5 xDrive40i",
    price: "$63,900",
    description: "Versatile luxury SUV with impressive performance and advanced technology.",
    features: ["xDrive AWD", "3.0L TwinPower Turbo", "Live Cockpit Pro", "Panoramic Roof", "Harman Kardon Audio"],
    brand: "BMW",
    year: 2023,
    mileage: "8,345",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Mineral White"
  },
  {
    id: "bmw-3",
    image: "https://images.unsplash.com/photo-1655706936793-6b5246b0a3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1626023772800-eadff9c9f6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1550759339-e7d5185bf239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 BMW i4 eDrive40",
    price: "$58,200",
    description: "All-electric gran coupe with exceptional range and dynamic handling.",
    features: ["Electric", "RWD", "340 mi Range", "Curved Display", "iDrive 8"],
    brand: "BMW",
    year: 2023,
    mileage: "5,678",
    fuelType: "Electric",
    transmission: "Single-Speed",
    bodyType: "Sedan",
    color: "Portimao Blue"
  },
  
  // Mercedes-Benz
  {
    id: "mercedes-1",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    interiorImage: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
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
  {
    id: "mercedes-2",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1674118314394-33a93b513220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1669307411260-91f3cd3668d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Mercedes-Benz E-Class",
    price: "$56,750",
    description: "Masterfully crafted sedan balancing luxury, technology, and performance.",
    features: ["Rear-Wheel Drive", "2.0L Turbo", "MBUX Infotainment", "Heated Seats", "Active Brake Assist"],
    brand: "Mercedes-Benz",
    year: 2023,
    mileage: "7,825",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Selenite Grey"
  },
  {
    id: "mercedes-3",
    image: "https://images.unsplash.com/photo-1629721671030-a83edbb11181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1667898019804-ae7d593ca95a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1604705528621-83fce59a40ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Mercedes-Benz EQS 450+",
    price: "$104,400",
    description: "Revolutionary all-electric luxury sedan with exceptional range and technology.",
    features: ["Electric", "RWD", "350 mi Range", "Hyperscreen", "Level 2 Autonomous Driving"],
    brand: "Mercedes-Benz",
    year: 2023,
    mileage: "4,321",
    fuelType: "Electric",
    transmission: "Single-Speed",
    bodyType: "Sedan",
    color: "High-Tech Silver"
  },
  
  // Tesla
  {
    id: "tesla-1",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    interiorImage: "https://images.unsplash.com/photo-1619025473660-ac1d9a541c5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1655704906626-85afb209def5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
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
  {
    id: "tesla-2",
    image: "https://images.unsplash.com/photo-1619317594067-911171b9f329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1662939727132-cfdfde9a648b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1658765095634-1f91ffa6668a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Tesla Model 3",
    price: "$42,990",
    description: "Sleek all-electric sedan with minimalist design and cutting-edge technology.",
    features: ["RWD", "272 mi Range", "15\" Touchscreen", "Glass Roof", "Autopilot"],
    brand: "Tesla",
    year: 2023,
    mileage: "6,543",
    fuelType: "Electric",
    transmission: "Single-Speed",
    bodyType: "Sedan",
    color: "Solid Black"
  },
  {
    id: "tesla-3",
    image: "https://images.unsplash.com/photo-1617886213957-fd5680791f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1592859684360-fab56a69fc59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1619855544858-e8e275c3f31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Tesla Model X",
    price: "$109,990",
    description: "Premium all-electric SUV with falcon-wing doors and exceptional performance.",
    features: ["Tri Motor", "AWD", "340 mi Range", "Falcon Wing Doors", "Full Self-Driving"],
    brand: "Tesla",
    year: 2023,
    mileage: "3,987",
    fuelType: "Electric",
    transmission: "Single-Speed",
    bodyType: "SUV",
    color: "Deep Blue Metallic"
  },
  
  // Toyota
  {
    id: "toyota-1",
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    interiorImage: "https://images.unsplash.com/photo-1633304364094-d3b5e4fdabe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1631143391921-4e328a29d2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
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
  {
    id: "toyota-2",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    interiorImage: "https://images.unsplash.com/photo-1621019633335-508e4c964fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1658236548828-c6e3e9eb3ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Toyota RAV4 Hybrid",
    price: "$32,150",
    description: "Versatile hybrid crossover with excellent fuel economy and rugged capability.",
    features: ["AWD", "2.5L Hybrid", "41 MPG Combined", "Toyota Safety Sense 2.0", "7\" Touchscreen"],
    brand: "Toyota",
    year: 2023,
    mileage: "9,432",
    fuelType: "Hybrid",
    transmission: "CVT",
    bodyType: "SUV",
    color: "Blueprint"
  },
  {
    id: "toyota-3",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1634750089939-d2384e94a5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1658765095634-1f91ffa6668a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Toyota Tacoma TRD Off-Road",
    price: "$37,490",
    description: "Capable midsize pickup with legendary reliability and off-road prowess.",
    features: ["4WD", "3.5L V6", "Multi-Terrain Select", "Crawl Control", "Fox Shocks"],
    brand: "Toyota",
    year: 2023,
    mileage: "12,345",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Truck",
    color: "Army Green"
  },
  
  // Honda
  {
    id: "honda-1",
    image: "https://images.unsplash.com/photo-1590510696099-69dba44b83fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    interiorImage: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
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
  {
    id: "honda-2",
    image: "https://images.unsplash.com/photo-1617808654954-f5e9404a2599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    interiorImage: "https://images.unsplash.com/photo-1629807473015-4cabc3e5c775?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    detailImage: "https://images.unsplash.com/photo-1631143392521-c83c6fae9523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    title: "2023 Honda Accord Hybrid",
    price: "$31,895",
    description: "Sophisticated hybrid sedan with refined interior and excellent efficiency.",
    features: ["FWD", "2.0L Hybrid", "Honda Sensing", "Wireless CarPlay", "48 MPG Combined"],
    brand: "Honda",
    year: 2023,
    mileage: "6,754",
    fuelType: "Hybrid",
    transmission: "CVT",
    bodyType: "Sedan",
    color: "Platinum White"
  },
  {
    id: "
