export const site = {
  name: 'Artizan Urban',
  longName: 'Artizan Urban Coffee Shop',
  tagline: 'O mică seră pentru cafea făcută fără grabă',
  city: 'Pitești',
  country: 'România',
  address: 'Bulevardul I. C. Brătianu, bl. 35, sc. A',
  postal: '110002',
  plusCode: 'VV5C+WH Pitești',
  phone: '0727 867 861',
  phoneHref: 'tel:+40727867861',
  email: 'salut@artizan-urban.ro',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Artizan+Urban+Coffee+Shop+Pite%C8%99ti',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Artizan+Urban+Coffee+Shop+Pite%C8%99ti',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  rating: 4.9,
  reviewsCount: 296,
  priceRange: '1–20 lei',
  hours: [
    { day: 'Luni',      open: '08:00', close: '21:00' },
    { day: 'Marți',     open: '08:00', close: '21:00' },
    { day: 'Miercuri',  open: '08:00', close: '21:00' },
    { day: 'Joi',       open: '08:00', close: '21:00' },
    { day: 'Vineri',    open: '08:00', close: '22:00' },
    { day: 'Sâmbătă',   open: '09:00', close: '22:00' },
    { day: 'Duminică',  open: '09:00', close: '20:00' },
  ] as const,
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Acasă',       href: '/' },
  { label: 'Meniu',       href: '/menu' },
  { label: 'Despre noi',  href: '/about-us' },
  { label: 'Vizitează-ne', href: '/visit-us' },
];
