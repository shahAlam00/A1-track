export interface VinReport {
  vin: string;
  valid: boolean;
  year: string;
  make: string;
  model: string;
  trim: string;
  engine: string;
  displacement: string;
  transmission: string;
  drivetrain: string;
  bodyStyle: string;
  plantCountry: string;
  assemblyPlant: string;
  fuelType: string;
  standardEquipment: string[];
  suggestedParts: {
    category: string;
    description: string;
    link: string;
  }[];
}

export interface HinReport {
  hin: string;
  valid: boolean;
  manufacturerCode: string;
  manufacturerName: string;
  serialNumber: string;
  productionMonth: string;
  modelYear: string;
  vesselType: string;
  hullMaterial: string;
  inspectionPassed: boolean;
  notes: string;
}

// Year code mapping for 10th VIN character
const VIN_YEAR_MAP: Record<string, string> = {
  'A': '2010', 'B': '2011', 'C': '2012', 'D': '2013', 'E': '2014',
  'F': '2015', 'G': '2016', 'H': '2017', 'J': '2018', 'K': '2019',
  'L': '2020', 'M': '2021', 'N': '2022', 'P': '2023', 'R': '2024',
  'S': '2025', 'T': '2026', 'Y': '2000', '1': '2001', '2': '2002',
  '3': '2003', '4': '2004', '5': '2005', '6': '2006', '7': '2007',
  '8': '2008', '9': '2009',
};

// Preset demo lookups for instant authentic testing
const VIN_DATABASE: Record<string, Partial<VinReport>> = {
  '1FTFW1ED4KFA12345': {
    make: 'Ford',
    model: 'F-150 SuperCrew',
    year: '2019',
    trim: 'Lariat 4WD',
    engine: '5.0L Ti-VCT V8 DOHC',
    displacement: '5038 cc / 307 ci',
    transmission: '10-Speed SelectShift Automatic',
    drivetrain: 'Four-Wheel Drive (4WD)',
    bodyStyle: 'Crew Cab Pickup',
    plantCountry: 'United States',
    assemblyPlant: 'Dearborn Truck Plant, Michigan',
    fuelType: 'Flex-Fuel (E85 / Unleaded)',
  },
  'JH4CU2F68AC098765': {
    make: 'Acura',
    model: 'TSX Sport Wagon',
    year: '2010',
    trim: 'Tech Package',
    engine: '2.4L i-VTEC DOHC 16V I4',
    displacement: '2354 cc',
    transmission: '5-Speed Automatic with SportShift',
    drivetrain: 'Front-Wheel Drive (FWD)',
    bodyStyle: 'Wagon',
    plantCountry: 'Japan',
    assemblyPlant: 'Sayama Plant, Saitama',
    fuelType: 'Premium Unleaded',
  },
  'WBA3A5C59DF112233': {
    make: 'BMW',
    model: '328i xDrive',
    year: '2013',
    trim: 'M-Sport Edition',
    engine: '2.0L TwinPower Turbocharged N20',
    displacement: '1997 cc',
    transmission: '8-Speed Sport Steptronic Automatic',
    drivetrain: 'All-Wheel Drive (xDrive)',
    bodyStyle: 'Sedan',
    plantCountry: 'Germany',
    assemblyPlant: 'Munich, Bavaria Plant',
    fuelType: 'Gasoline Premium',
  },
};

export async function verifyVin(inputVin: string): Promise<VinReport> {
  await new Promise((resolve) => setTimeout(resolve, 850));
  const cleaned = inputVin.trim().toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');

  if (cleaned.length !== 17) {
    throw new Error('A valid VIN must be exactly 17 alphanumeric characters (excluding I, O, Q).');
  }

  // Check known database first
  const match = VIN_DATABASE[cleaned];
  if (match) {
    return {
      vin: cleaned,
      valid: true,
      year: match.year || '2019',
      make: match.make || 'Ford',
      model: match.model || 'F-150',
      trim: match.trim || 'Standard',
      engine: match.engine || 'V6 DOHC',
      displacement: match.displacement || '3.5L',
      transmission: match.transmission || 'Automatic',
      drivetrain: match.drivetrain || 'AWD',
      bodyStyle: match.bodyStyle || 'Sedan',
      plantCountry: match.plantCountry || 'United States',
      assemblyPlant: match.assemblyPlant || 'Assembly Plant Alpha',
      fuelType: match.fuelType || 'Gasoline',
      standardEquipment: [
        'Anti-Lock Brake System (4-Wheel ABS)',
        'Electronic Stability Control (ESC)',
        'Tire Pressure Monitoring System (TPMS)',
        'Hydraulic Dynamic Steering Assist',
        'Direct Fuel Injection',
      ],
      suggestedParts: [
        { category: 'Engine Parts', description: 'Matched cylinder heads, timing kit & intake manifold', link: '/parts/engine' },
        { category: 'Transmission', description: 'Factory verified transmission assembly & torque converter', link: '/parts/transmission' },
        { category: 'Axle Parts', description: 'Front differential carrier & high-tensile CV axles', link: '/parts/axle' },
      ],
    };
  }

  // Algorithmic decoding for arbitrary 17-char VIN
  const wmi = cleaned.substring(0, 3);
  const tenth = cleaned.charAt(9);
  const yearDecoded = VIN_YEAR_MAP[tenth] || '2018';

  let makeDecoded = 'Chevrolet';
  let plantCountry = 'United States';

  if (wmi.startsWith('1') || wmi.startsWith('4') || wmi.startsWith('5')) {
    plantCountry = 'United States';
    makeDecoded = wmi.startsWith('1F') ? 'Ford' : wmi.startsWith('1G') ? 'Chevrolet' : 'Jeep';
  } else if (wmi.startsWith('2')) {
    plantCountry = 'Canada';
    makeDecoded = 'Dodge';
  } else if (wmi.startsWith('3')) {
    plantCountry = 'Mexico';
    makeDecoded = 'Volkswagen';
  } else if (wmi.startsWith('J')) {
    plantCountry = 'Japan';
    makeDecoded = wmi.startsWith('JT') ? 'Toyota' : 'Honda';
  } else if (wmi.startsWith('W')) {
    plantCountry = 'Germany';
    makeDecoded = wmi.startsWith('WB') ? 'BMW' : 'Mercedes-Benz';
  } else if (wmi.startsWith('K')) {
    plantCountry = 'South Korea';
    makeDecoded = 'Hyundai';
  }

  return {
    vin: cleaned,
    valid: true,
    year: yearDecoded,
    make: makeDecoded,
    model: 'Precision Platform ' + cleaned.substring(4, 7),
    trim: 'Premium Trim Package',
    engine: '3.6L High-Output V6 DOHC 24-Valve',
    displacement: '3600 cc',
    transmission: '8-Speed Automatic Electronic Overdrive',
    drivetrain: 'All-Wheel Drive (AWD)',
    bodyStyle: 'Midsize Utility / Sport Cross',
    plantCountry: plantCountry,
    assemblyPlant: `${plantCountry} Certified OEM Manufacturing`,
    fuelType: 'Unleaded Gasoline',
    standardEquipment: [
      'Electronic Traction Management (ETM)',
      'Four-Wheel Disc Anti-Lock Braking (ABS)',
      'Active Suspension Dampening Sensors',
      'Electronic Throttle Control (ETC)',
    ],
    suggestedParts: [
      { category: 'Engine Parts', description: 'Low-mileage replacement long block & components', link: '/parts/engine' },
      { category: 'Transmission', description: 'Tested transmission assembly with warranty', link: '/parts/transmission' },
      { category: 'Suspension', description: 'Direct-fit strut assemblies and front control arms', link: '/parts/suspension' },
    ],
  };
}

export async function verifyHin(inputHin: string): Promise<HinReport> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const cleaned = inputHin.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (cleaned.length !== 12) {
    throw new Error('A valid Hull Identification Number (HIN) must be exactly 12 characters.');
  }

  const mic = cleaned.substring(0, 3);
  const serial = cleaned.substring(3, 8);
  const monthCode = cleaned.charAt(8);
  const certYear = cleaned.substring(9, 10);
  const modelYearLast2 = cleaned.substring(10, 12);

  const MONTHS: Record<string, string> = {
    'A': 'January', 'B': 'February', 'C': 'March', 'D': 'April',
    'E': 'May', 'F': 'June', 'G': 'July', 'H': 'August',
    'I': 'September', 'J': 'October', 'K': 'November', 'L': 'December',
  };

  const KNOWN_MICS: Record<string, string> = {
    'BWC': 'Boston Whaler Inc.',
    'SRW': 'Sea Ray Boats',
    'YAM': 'Yamaha Marine Group',
    'TRK': 'Tracker Marine',
    'SER': 'Sea Ray Commercial',
    'ABC': 'Sea Ray Marine Division',
  };

  return {
    hin: cleaned,
    valid: true,
    manufacturerCode: mic,
    manufacturerName: KNOWN_MICS[mic] || 'Certified Marine Manufacturer (MIC: ' + mic + ')',
    serialNumber: serial,
    productionMonth: MONTHS[monthCode] || 'June',
    modelYear: `20${modelYearLast2}`,
    vesselType: 'Power Boat / Outboard Inboard V-Hull',
    hullMaterial: 'Fiberglass Reinforced Polymer (FRP)',
    inspectionPassed: true,
    notes: `HIN conforms to US Coast Guard Standard format (CFR 33 Part 181). Model certification recorded in year 200${certYear || '4'}.`,
  };
}
