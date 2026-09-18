import { IMAGES } from './images';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Auto Parts', href: '/parts/engine', hasDropdown: true },
  { label: 'VIN Verification', href: '/vin-verification' },
  { label: 'HIN Verification', href: '/hin-verification' },
  { label: 'Track Order', href: '/track' },
  { label: 'Contact', href: '/contact' },
];

export interface DropdownCategory {
  slug: string;
  name: string;
  description: string;
  href: string;
  count: string;
  image: string;
  highlight: string;
}

export const PARTS_DROPDOWN: DropdownCategory[] = [
  {
    slug: 'engine',
    name: 'Engine Parts',
    description: 'Complete V6, V8, EcoBoost & Diesel long/short blocks.',
    href: '/parts/engine',
    count: '14,200+ in stock',
    image: IMAGES.categories.engine.cover,
    highlight: 'Dyno Bench Certified',
  },
  {
    slug: 'transmission',
    name: 'Transmission',
    description: 'Heavy duty automatic, manual & CVT transmissions.',
    href: '/parts/transmission',
    count: '9,850+ in stock',
    image: IMAGES.categories.transmission.cover,
    highlight: '$1,500 - $4,000 Range',
  },
  {
    slug: 'steering',
    name: 'Steering Column',
    description: 'Electric & hydraulic tilt steering columns & shafts.',
    href: '/parts/steering',
    count: '6,400+ in stock',
    image: IMAGES.categories.steering.cover,
    highlight: '100% Collision-Free',
  },
  {
    slug: 'axle',
    name: 'Axle Parts',
    description: 'Front & rear differential carriers & CV drive axles.',
    href: '/parts/axle',
    count: '11,300+ in stock',
    image: IMAGES.categories.axle.cover,
    highlight: 'Tested Gear Ratios',
  },
  {
    slug: 'suspension',
    name: 'Suspension Parts',
    description: 'Struts, control arms, adaptive air shocks & wheel hubs.',
    href: '/parts/suspension',
    count: '8,900+ in stock',
    image: IMAGES.categories.suspension.cover,
    highlight: 'High-Tolerance Monotube',
  },
  {
    slug: 'electrical',
    name: 'Electrical Parts',
    description: 'Alternators, starters, tested engine ECUs & sensors.',
    href: '/parts/electrical',
    count: '12,700+ in stock',
    image: IMAGES.categories.electrical.cover,
    highlight: 'CAN-Bus Diagnostic Tested',
  },
];

export const COMPANY_CONTACT = {
  name: 'A1 Auto King',
  legalName: 'A1 Auto King Certified Parts LLC',
  address: {
    street: '310 Kirby Rd',
    city: 'King',
    state: 'NC',
    zip: '27021',
    full: '310 Kirby Rd, King, NC 27021',
  },
  phone: {
    display: '+1 (502) 385-4318',
    raw: '+15023854318',
  },
  email: {
    support: 'support@a1autoking.com',
    sales: 'contact@a1autoking.com',
  },
  hours: {
    support: '24/7 Priority Hotline & Chat',
    facility: 'Mon - Fri: 8:00 AM - 7:00 PM EST, Sat: 9:00 AM - 4:00 PM EST',
  },
  stats: {
    yearsExperience: '28+',
    foundedYear: 1995,
    partsAvailable: '500K+',
    happyCustomers: '45,000+',
    statesServed: 50,
  },
};
