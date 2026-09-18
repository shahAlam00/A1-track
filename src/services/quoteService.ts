export interface QuotePayload {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  vehicleType: 'Car/Truck' | 'Boat';
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  partNeeded: string;
  vin?: string;
  additionalDetails?: string;
}

export interface QuoteResult {
  success: boolean;
  quoteId: string;
  timestamp: string;
  estimatedPriceRange: string;
  estimatedDeliveryDays: string;
  technicianAssigned: string;
  message: string;
}

const TECHNICIANS = [
  'Marcus Vance (Master ASE Powertrain Specialist)',
  'Derrick Cole (Lead Transmission Diagnostic Tech)',
  'Alexander Cruz (OEM Electronics Senior Inspector)',
  'Rachel Vance (Senior Parts & Fitment Specialist)',
];

export async function submitQuoteRequest(data: QuotePayload): Promise<QuoteResult> {
  // Simulate network latency for authentic feel
  await new Promise((resolve) => setTimeout(resolve, 900));

  const quoteId = `A1-QT-${Math.floor(100000 + Math.random() * 900000)}`;
  const tech = TECHNICIANS[Math.floor(Math.random() * TECHNICIANS.length)];

  // Estimate price dynamically
  let estimatedPriceRange = '$450 - $1,250';
  const partLower = (data.partNeeded || '').toLowerCase();
  if (partLower.includes('engine')) {
    estimatedPriceRange = '$1,800 - $4,600';
  } else if (partLower.includes('transmission')) {
    estimatedPriceRange = '$1,500 - $3,800';
  } else if (partLower.includes('axle') || partLower.includes('differential')) {
    estimatedPriceRange = '$450 - $1,400';
  } else if (partLower.includes('steering')) {
    estimatedPriceRange = '$280 - $750';
  } else if (partLower.includes('suspension')) {
    estimatedPriceRange = '$180 - $650';
  } else if (partLower.includes('electrical') || partLower.includes('ecu')) {
    estimatedPriceRange = '$150 - $600';
  }

  return {
    success: true,
    quoteId,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    estimatedPriceRange,
    estimatedDeliveryDays: '2 - 4 Business Days',
    technicianAssigned: tech,
    message: `Your quote inquiry for ${data.vehicleYear} ${data.vehicleMake} ${data.vehicleModel} has been logged in the A1 Auto King dispatch system. A certified specialist will contact you directly at ${data.phone}.`,
  };
}
