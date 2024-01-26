interface Destination {
    city: string;
    averagePrice: number;
    propertyCount: number;
    imageUrl: string;
    imageAlt: string;
}

const popularDestinations: Destination[] = [
  {
    city: 'Toronto',
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: 'src/assets/toronto.jpg',
    imageAlt: 'Toronto skyline',
  },
  {
    city: 'Malibu',
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: 'src/assets/malibu.jpg',
    imageAlt: 'Cliff in Malibu',
  },
  {
    city: 'Chicago',
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: 'src/assets/chicago.jpg',
    imageAlt: 'Chicago skyline',
  },
  {
    city: 'Seattle',
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: 'src/assets/seattle.jpg',
    imageAlt: 'Seattle skyline',
  },
  {
    city: 'Colorado',
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: 'src/assets/colorado.jpg',
    imageAlt: 'Lake in Colorado',
  },
  {
    city: 'Miami',
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: 'src/assets/miami.jpg',
    imageAlt: 'Beach in Miami',
  },
];

export default popularDestinations;
