export type OrderStage = 'ORDER CONFIRMED' | 'PROCESSING' | 'PACKED' | 'SHIPPED' | 'IN TRANSIT' | 'DELIVERED';

export interface TrackingStep {
  stage: OrderStage;
  title: string;
  description: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current: boolean;
}

export interface TrackingDetails {
  trackingNumber: string;
  orderNumber: string;
  carrier: string;
  carrierTrackingCode: string;
  currentStage: OrderStage;
  estimatedDelivery: string;
  shippingOrigin: string;
  destinationCity: string;
  itemDescription: string;
  grossWeight: string;
  freightClass: string;
  palletized: boolean;
  shockSensorStatus: 'NORMAL / INTACT' | 'TRIGGERED';
  steps: TrackingStep[];
}

const PRESET_TRACKINGS: Record<string, TrackingDetails> = {
  'TRK123456789': {
    trackingNumber: 'TRK123456789',
    orderNumber: 'A1-ORD-98214',
    carrier: 'FedEx Freight Priority (Heavy Logistics)',
    carrierTrackingCode: 'FXF-9023419082',
    currentStage: 'IN TRANSIT',
    estimatedDelivery: 'Tomorrow by 4:30 PM EST',
    shippingOrigin: 'A1 Auto King Hub, King, NC 27021',
    destinationCity: 'Columbus, OH 43215',
    itemDescription: '2019 Ford F-150 5.0L V8 Complete Engine (Crated)',
    grossWeight: '465 lbs (211 kg)',
    freightClass: 'Class 70 - Heavy Machinery',
    palletized: true,
    shockSensorStatus: 'NORMAL / INTACT',
    steps: [
      {
        stage: 'ORDER CONFIRMED',
        title: 'Order Authenticated & Verified',
        description: 'Payment secured and VIN compatibility confirmed by A1 technician.',
        location: 'King, NC Facility',
        timestamp: 'Sep 01, 09:15 AM',
        completed: true,
        current: false,
      },
      {
        stage: 'PROCESSING',
        title: 'Multi-Point Dyno & Clean Bench Test',
        description: 'Compression leak-down test completed (180 PSI across all 8 cylinders). Fluids flushed.',
        location: 'Diagnostic Bay 4, King, NC',
        timestamp: 'Sep 01, 02:40 PM',
        completed: true,
        current: false,
      },
      {
        stage: 'PACKED',
        title: 'Strapped, Shrink-Wrapped & Crated',
        description: 'Secure steel-banded heavy wooden shipping crate prepared with shockwatch sensor tag #8841.',
        location: 'Fulfillment Logistics Dock',
        timestamp: 'Sep 02, 10:10 AM',
        completed: true,
        current: false,
      },
      {
        stage: 'SHIPPED',
        title: 'Dispatched from King Facility',
        description: 'Loaded onto regional linehaul tractor trailer unit #4021.',
        location: 'King, NC 27021',
        timestamp: 'Sep 02, 05:30 PM',
        completed: true,
        current: false,
      },
      {
        stage: 'IN TRANSIT',
        title: 'Arrived at Regional Hub & Out on Linehaul',
        description: 'Package scanned at sorting center. Transferred to final distribution terminal.',
        location: 'Charleston Sorting Hub, WV',
        timestamp: 'Sep 03, 08:20 AM',
        completed: true,
        current: true,
      },
      {
        stage: 'DELIVERED',
        title: 'Final Mile Liftgate Delivery',
        description: 'Signature required by certified consignee or auto repair facility.',
        location: 'Columbus, OH',
        timestamp: 'Pending Delivery',
        completed: false,
        current: false,
      },
    ],
  },
};

export async function lookupTracking(code: string): Promise<TrackingDetails> {
  await new Promise((resolve) => setTimeout(resolve, 850));
  const normalized = code.trim().toUpperCase();

  if (!normalized) {
    throw new Error('Please enter a valid tracking number (e.g. TRK123456789).');
  }

  // If matches preset, return preset
  if (PRESET_TRACKINGS[normalized]) {
    return PRESET_TRACKINGS[normalized];
  }

  // Generate realistic tracking details for any input
  return {
    trackingNumber: normalized,
    orderNumber: `A1-ORD-${Math.floor(10000 + Math.random() * 90000)}`,
    carrier: 'R+L Carriers Dedicated Logistics',
    carrierTrackingCode: `RLC-${Math.floor(10000000 + Math.random() * 90000000)}`,
    currentStage: 'SHIPPED',
    estimatedDelivery: 'Within 2-3 Business Days',
    shippingOrigin: 'A1 Auto King Hub, 310 Kirby Rd, King, NC',
    destinationCity: 'Regional Destination Hub',
    itemDescription: 'Certified OEM Automotive Powertrain Unit',
    grossWeight: '220 lbs (100 kg)',
    freightClass: 'Class 85 - Certified Auto Assembly',
    palletized: true,
    shockSensorStatus: 'NORMAL / INTACT',
    steps: [
      {
        stage: 'ORDER CONFIRMED',
        title: 'Order Verified & Approved',
        description: 'Order received and inventory reserved at King facility.',
        location: 'King, NC',
        timestamp: 'Day 1, 10:00 AM',
        completed: true,
        current: false,
      },
      {
        stage: 'PROCESSING',
        title: 'Technical Quality Control & Bench Inspection',
        description: 'Component thoroughly cleaned, bench tested, and certified Grade A.',
        location: 'Diagnostic Bay, King, NC',
        timestamp: 'Day 1, 03:30 PM',
        completed: true,
        current: false,
      },
      {
        stage: 'PACKED',
        title: 'Custom Palletized & Weatherproof Sealed',
        description: 'Reinforced packaging applied with serial security tags attached.',
        location: 'Packaging Bay A',
        timestamp: 'Day 2, 09:00 AM',
        completed: true,
        current: false,
      },
      {
        stage: 'SHIPPED',
        title: 'Picked Up by Freight Carrier',
        description: 'Dispatched via carrier tracking network.',
        location: 'King, NC Hub',
        timestamp: 'Day 2, 04:15 PM',
        completed: true,
        current: true,
      },
      {
        stage: 'IN TRANSIT',
        title: 'En Route to Destination Sorting Hub',
        description: 'Freight moving along scheduled highway logistics corridor.',
        location: 'Regional Transit Corridor',
        timestamp: 'Scheduled',
        completed: false,
        current: false,
      },
      {
        stage: 'DELIVERED',
        title: 'Delivered to Shop or Residential Address',
        description: 'Direct delivery with inspection sign-off.',
        location: 'Customer Address',
        timestamp: 'Pending Delivery',
        completed: false,
        current: false,
      },
    ],
  };
}
