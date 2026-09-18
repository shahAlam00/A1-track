export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  vehicle: string;
  partPurchased: string;
  savings: string;
  quote: string;
  date: string;
  verified: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    location: 'Charlotte, NC',
    rating: 5,
    vehicle: '2018 Ford F-150 5.0L V8',
    partPurchased: 'Complete Reman V8 Engine',
    savings: 'Saved $1,850 vs Dealer',
    quote: 'The engine arrived strapped securely to a custom pallet with compression test paperwork attached. Dropped right into my truck and fired up on the first crank. Zero smoke, whisper quiet, and pulling strong after 12,000 miles.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    location: 'Austin, TX',
    rating: 5,
    vehicle: '2019 Audi Q5 Quattro',
    partPurchased: 'ZF 8-Speed Automatic Transmission',
    savings: 'Saved $2,400',
    quote: 'Dealership quoted me an astronomical sum for a new gearbox. A1 Auto King matched my exact transmission code via my VIN and delivered to my mechanic in 3 business days. Shift points are buttery smooth.',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 't-3',
    name: 'David K. Miller',
    location: 'Denver, CO',
    rating: 5,
    vehicle: '2016 Toyota Tacoma 4x4',
    partPurchased: 'Front Axle & Carrier Assembly',
    savings: 'Saved $780',
    quote: 'Hard to find clean front differential assemblies with low mileage in Colorado without paying a massive premium. The team at A1 verified gear ratios before shipping. Impeccable customer service.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 't-4',
    name: 'Jason Hernandez',
    location: 'Atlanta, GA',
    rating: 5,
    vehicle: '2020 Chevrolet Silverado 1500',
    partPurchased: 'Steering Column Assembly with EPS',
    savings: 'Saved $620',
    quote: 'Electronic power steering column assembly was an exact factory match. The plug and play harness was pristine with zero damaged clips. Delivered ahead of schedule with tracking updates every step.',
    date: '2 months ago',
    verified: true,
  },
  {
    id: 't-5',
    name: 'Brian O\'Connor',
    location: 'Seattle, WA',
    rating: 5,
    vehicle: '2017 Honda Accord Sport',
    partPurchased: '2.4L K24 Cylinder Head & Intake',
    savings: 'Saved $940',
    quote: 'True automotive enthusiasts run this place. The technician I spoke to over the phone actually understood valve clearances and gave me exact specs on the head before I paid a dime.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 't-6',
    name: 'Samantha Wright',
    location: 'Chicago, IL',
    rating: 5,
    vehicle: '2021 Jeep Grand Cherokee',
    partPurchased: 'Suspension Air Strut Units (Pair)',
    savings: 'Saved $1,150',
    quote: 'Air suspension warning disappeared immediately after installation. High-grade OEM components with warranty peace of mind. Will definitely recommend A1 Auto King to friends and family.',
    date: '1 month ago',
    verified: true,
  },
];
