export type FleetVehicle = {
  slug: string
  name: string
  seats: string
  type: string
  image: string
  summary: string
  description: string
  features: string[]
  idealFor: string[]
}

export type TravelService = {
  slug: string
  title: string
  image: string
  alt: string
  summary: string
  description: string
  highlights: string[]
  icon: 'car' | 'bus' | 'hotel'
}

export const fleetVehicles: FleetVehicle[] = [
  {
    slug: 'sedan',
    name: 'Sedan Car on Rent',
    seats: '4 seater',
    type: 'Sedan',
    image: '/fleet/sedan.jpg',
    summary: 'Comfortable sedan for local taxi, airport transfers, and short city trips in Deoghar.',
    description:
      'Book our Sedan Car on Rent for affordable local sightseeing, temple visits, and station pickups. Ideal for couples and small families who want a clean, AC car with an experienced local driver.',
    features: ['AC cabin', 'Luggage space for 2–3 bags', 'Local & outstation ready', 'On-time driver'],
    idealFor: ['Local taxi', 'Airport / railway transfer', 'Temple visits', 'Day sightseeing'],
  },
  {
    slug: 'dzire',
    name: 'Dzire Car on Rent',
    seats: '4 seater',
    type: 'Sedan',
    image: '/fleet/dzire.jpg',
    summary: 'Popular Swift Dzire on rent for smooth city rides and comfortable highway travel.',
    description:
      'Dzire Car on Rent is one of our most booked options for Deoghar local taxi and outstation trips. Enjoy a spacious boot, reliable mileage, and a polite driver who knows temple drop points and station routes.',
    features: ['Swift Dzire comfort', 'AC & music system', 'Great for highway', 'Easy temple access drops'],
    idealFor: ['Family of 3–4', 'Baidyanath Dham visits', 'Jasidih station pickup', 'One-way / round trip'],
  },
  {
    slug: 'ertiga',
    name: 'Ertiga Car on Rent',
    seats: '6–7 seater',
    type: 'MUV',
    image: '/fleet/ertiga.jpg',
    summary: 'Spacious Ertiga for family trips, group sightseeing, and comfortable outstation travel.',
    description:
      'Ertiga Car on Rent gives extra seating for families and small groups. Perfect for Deoghar sightseeing circuits, Basukinath trips, and weekend getaways with enough space for luggage.',
    features: ['6–7 seater MUV', 'Family-friendly cabin', 'Ample luggage space', 'AC comfort'],
    idealFor: ['Family tours', 'Group sightseeing', 'Outstation taxi', 'Wedding guest transfers'],
  },
  {
    slug: 'scorpio',
    name: 'Scorpio Car on Rent',
    seats: '7 seater',
    type: 'SUV',
    image: '/fleet/scorpio.jpg',
    summary: 'Powerful Scorpio SUV for highway routes, hills, and outstation journeys from Deoghar.',
    description:
      'Scorpio Car on Rent is built for longer routes and tougher roads. Choose this SUV for Sultanganj–Deoghar corridor travel, Mandar Hills, and other outstation pilgrimages with strong highway comfort.',
    features: ['SUV road presence', '7 seater capacity', 'Strong for highways', 'Ideal for hills & long routes'],
    idealFor: ['Outstation trips', 'Sultanganj route', 'Mandar Hills', 'Group highway travel'],
  },
  {
    slug: 'innova',
    name: 'Crysta Innova Car on Rent',
    seats: '7 seater',
    type: 'Premium',
    image: '/fleet/innova.jpg',
    summary: 'Premium Innova Crysta for executive travel, family comfort, and VIP airport transfers.',
    description:
      'Crysta Innova Car on Rent offers premium seating and a smoother ride for families, corporate guests, and wedding parties. Book for airport transfers, temple tours, and long-distance comfort across Jharkhand.',
    features: ['Premium 7-seater', 'Spacious & quiet cabin', 'Executive comfort', 'Ideal for long journeys'],
    idealFor: ['Corporate travel', 'Airport transfers', 'Wedding cars', 'Premium family tours'],
  },
  {
    slug: 'tempo-traveller',
    name: 'Tempo Traveller Rent',
    seats: '12–17 seater',
    type: 'Group',
    image: '/fleet/tempo.jpg',
    summary: 'Tempo Traveller rental for pilgrim groups, weddings, and institutional tours from Deoghar.',
    description:
      'Tempo Traveller Rent is the smart choice for larger groups visiting Baidyanath Dham, Basukinath, Tarapeeth, and Sultanganj. Enjoy push-back seating, luggage space, and coordinated pickup for your entire group.',
    features: ['12–17 seater options', 'Group luggage space', 'Pilgrimage-ready', 'AC options available'],
    idealFor: ['Pilgrim groups', 'Weddings', 'Corporate outings', 'Multi-stop temple tours'],
  },
  {
    slug: 'bus',
    name: 'Bus On Rent',
    seats: '20+ seater',
    type: 'Bus',
    image: '/fleet/bus.jpg',
    summary: 'Bus on rent for large families, institutions, and big group travel from Deoghar.',
    description:
      'Bus On Rent supports large pilgrim batches, school/college trips, and wedding processions. We arrange comfortable seating and reliable schedules for Deoghar to Kolkata, Patna, Ranchi, and nearby temple circuits.',
    features: ['20+ seater capacity', 'Group travel comfort', 'Long-route capable', 'Affordable per-seat value'],
    idealFor: ['Large pilgrimages', 'Institutional trips', 'Wedding groups', 'City-to-city bus hire'],
  },
]

export const travelServices: TravelService[] = [
  {
    slug: 'car-and-coach-rentals',
    title: 'Car and Coach Rentals',
    image: '/fleet/innova.jpg',
    alt: 'Car and coach rentals in Deoghar',
    summary: 'Affordable car hire and local taxi services for sightseeing, temples, and transfers.',
    description:
      'For local sightseeing or temple visits, we offer affordable car hire services in Deoghar. For timely pick ups and drop-offs from railway stations, airports, or your hotel, make a prior booking of our Local Taxi Services in Deoghar. Choose Sedan, Dzire, Ertiga, Scorpio, or Innova based on your group size.',
    highlights: [
      'Local sightseeing & temple taxi',
      'Airport and railway pickup/drop',
      'One-way and round-trip options',
      'Clean cars with on-time drivers',
    ],
    icon: 'car',
  },
  {
    slug: 'bus-booking',
    title: 'Bus Booking',
    image: '/fleet/bus.jpg',
    alt: 'Bus booking in Deoghar',
    summary: 'Secure, hassle-free bus hire for large family pilgrimages, weddings, and group tours.',
    description:
      'For reliable bus hire in Deoghar, our travel company offers secure, hassle free group travel at affordable fares and convenient schedules perfectly suitable for large family pilgrimages, weddings, and local excursions. We also arrange Tempo Traveller options for mid-size groups.',
    highlights: [
      'Large group capacity',
      'Wedding & institutional travel',
      'Pilgrimage-friendly schedules',
      'Affordable group fares',
    ],
    icon: 'bus',
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hotel booking with Deoghar Travels',
    summary: 'Comfortable stays from budget hotels to luxury resorts matched to your trip.',
    description:
      'Our Deoghar travel agency organizes comfortable stays for tourists. Every one of our tour packages includes exclusive staying options at luxury hotels, resorts, and budget friendly accommodations, all matched exactly to your travel needs. Combine hotel booking with car pickup for a smooth arrival.',
    highlights: [
      '3 to 5-star hotel options',
      'Budget to luxury stays',
      'Package-linked accommodations',
      'Pickup from hotel on request',
    ],
    icon: 'hotel',
  },
]

export function getFleetBySlug(slug: string) {
  return fleetVehicles.find((item) => item.slug === slug)
}

export function getServiceBySlug(slug: string) {
  return travelServices.find((item) => item.slug === slug)
}
