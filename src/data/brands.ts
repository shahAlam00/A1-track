export interface VehicleBrand {
  name: string;
  category: 'Domestic' | 'European' | 'Asian';
  origin: string;
  popularModels: string;
  code: string;
}

export const VEHICLE_BRANDS: VehicleBrand[] = [
  { name: 'Toyota', category: 'Asian', origin: 'Japan', popularModels: 'Camry, RAV4, Tacoma, Tundra', code: 'TOY' },
  { name: 'Honda', category: 'Asian', origin: 'Japan', popularModels: 'Civic, Accord, CR-V, Pilot', code: 'HND' },
  { name: 'Ford', category: 'Domestic', origin: 'USA', popularModels: 'F-150, Explorer, Mustang, Super Duty', code: 'FRD' },
  { name: 'Chevrolet', category: 'Domestic', origin: 'USA', popularModels: 'Silverado, Tahoe, Corvette, Malibu', code: 'CHV' },
  { name: 'Nissan', category: 'Asian', origin: 'Japan', popularModels: 'Altima, Rogue, Pathfinder, Titan', code: 'NSN' },
  { name: 'BMW', category: 'European', origin: 'Germany', popularModels: '3-Series, 5-Series, X3, X5, M-Power', code: 'BMW' },
  { name: 'Mercedes-Benz', category: 'European', origin: 'Germany', popularModels: 'C-Class, E-Class, GLC, GLE, AMG', code: 'MBZ' },
  { name: 'Audi', category: 'European', origin: 'Germany', popularModels: 'A4, A6, Q5, Q7, Quattro', code: 'AUD' },
  { name: 'Volkswagen', category: 'European', origin: 'Germany', popularModels: 'Jetta, Golf, Tiguan, Atlas', code: 'VW' },
  { name: 'Hyundai', category: 'Asian', origin: 'South Korea', popularModels: 'Elantra, Sonata, Tucson, Santa Fe', code: 'HYN' },
  { name: 'Kia', category: 'Asian', origin: 'South Korea', popularModels: 'Forte, Optima, Sportage, Telluride', code: 'KIA' },
  { name: 'Mazda', category: 'Asian', origin: 'Japan', popularModels: 'Mazda3, Mazda6, CX-5, Miata', code: 'MZD' },
  { name: 'Subaru', category: 'Asian', origin: 'Japan', popularModels: 'Outback, Forester, WRX, Crosstrek', code: 'SBR' },
  { name: 'Lexus', category: 'Asian', origin: 'Japan', popularModels: 'ES350, RX350, IS300, GX460', code: 'LEX' },
  { name: 'Acura', category: 'Asian', origin: 'Japan', popularModels: 'MDX, RDX, TLX, Integra', code: 'ACR' },
  { name: 'Infiniti', category: 'Asian', origin: 'Japan', popularModels: 'Q50, Q60, QX60, QX80', code: 'INF' },
  { name: 'Dodge', category: 'Domestic', origin: 'USA', popularModels: 'Charger, Challenger, Durango, Ram', code: 'DDG' },
  { name: 'Jeep', category: 'Domestic', origin: 'USA', popularModels: 'Wrangler, Grand Cherokee, Gladiator', code: 'JEP' },
];
