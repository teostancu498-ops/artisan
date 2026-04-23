export type MenuItem = {
  name: string;
  description?: string;
  vol?: string;        // e.g. "25 ml"
  price: string;       // e.g. "14 LEI"
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  accent?: 'ember' | 'moss' | 'candle';
  glyph?: 'bean' | 'cup' | 'leaf' | 'ice' | 'flame' | 'drop' | 'pour' | 'fruit';
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'black-coffee',
    title: 'Black Coffee',
    subtitle: 'Scurt, intens, fără compromis',
    note: 'Bob single origin, extras pe bar. Îți spunem bucuroși ce turnăm azi.',
    accent: 'ember',
    glyph: 'bean',
    items: [
      { name: 'Espresso',   vol: '25 ml',  price: '6 LEI' },
      { name: 'Double',     vol: '50 ml',  price: '8 LEI' },
      { name: 'Full Black', vol: '180 ml', price: '10 LEI' },
    ],
  },
  {
    id: 'white-coffee',
    title: 'White Coffee',
    subtitle: 'Cu lapte aburit, turnat cu grijă',
    note: 'Ovăz, migdale și cocos disponibile fără supliment.',
    accent: 'candle',
    glyph: 'cup',
    items: [
      { name: 'Macchiato',     vol: '50 ml',  price: '6 LEI' },
      { name: 'Cappuccino',    vol: '150 ml', price: '8 LEI' },
      { name: 'Flat White',    vol: '180 ml', price: '10 LEI' },
      { name: 'Caffe Latte',                  price: '10 LEI' },
      { name: 'Ice Latte',     vol: '300 ml', price: '12 LEI' },
      { name: 'Crème Brûlée, Tonka, Vanilla', description: 'Variante aromate, la alegere', price: '12 LEI' },
      { name: 'Chai Latte',    vol: '200 ml', price: '10 LEI' },
    ],
  },
  {
    id: 'iced',
    title: 'Iced | Blended',
    subtitle: 'Rece, răcoros, cu gheață pisată',
    accent: 'moss',
    glyph: 'ice',
    items: [
      { name: 'Ice Coffee',       vol: '150 ml', price: '10 LEI' },
      { name: 'Ice Chai Latte',   vol: '200 ml', price: '12 LEI' },
      { name: 'Cafe Frappe',      vol: '300 ml', price: '12 LEI' },
      { name: 'Chocolate Frappe', vol: '300 ml', price: '14 LEI' },
    ],
  },
  {
    id: 'special',
    title: 'Special Coffee',
    subtitle: 'Cu un strop de whiskey, pentru serile lungi',
    accent: 'ember',
    glyph: 'flame',
    items: [
      { name: 'Irish Coffee',       vol: '200 ml', price: '14 LEI' },
      { name: 'Irish Cream Coffee', vol: '200 ml', price: '14 LEI' },
      { name: 'Irish Cappuccino',   vol: '150 ml', price: '12 LEI' },
    ],
  },
  {
    id: 'chocolate-tea',
    title: 'Chocolate & Tea',
    subtitle: 'Caldă, aromată, pentru pauze lente',
    accent: 'moss',
    glyph: 'leaf',
    items: [
      { name: 'Hot Chocolate',  vol: '150 ml', price: '8 LEI' },
      { name: 'Red Fruits Tea', vol: '300 ml', price: '8 LEI' },
      { name: 'Green Tea',      vol: '300 ml', price: '8 LEI' },
      { name: 'Black Tea',      vol: '300 ml', price: '8 LEI' },
      { name: 'Rooibos Tea',    vol: '300 ml', price: '8 LEI' },
    ],
  },
  {
    id: 'brew',
    title: 'B-R-E-W',
    subtitle: 'Turnată de mână, o ceașcă pe rând',
    note: 'Metoda alternativă - spune-ne dacă o vrei mai fructuoasă, mai adâncă sau mai dulce.',
    accent: 'ember',
    glyph: 'pour',
    items: [
      { name: 'Aeropress',     vol: '200 ml', price: '12 LEI' },
      { name: 'V60',           vol: '250 ml', price: '12 LEI' },
      { name: 'Cold Brew Tea', vol: '300 ml', price: '10 LEI' },
    ],
  },
  {
    id: 'day-night',
    title: 'Day & Night',
    subtitle: 'Băuturi de însoțit, de la dimineață până seara',
    accent: 'candle',
    glyph: 'drop',
    items: [
      { name: 'Suc de portocale',           vol: '250 ml', price: '7 LEI' },
      { name: 'Apă plată / Apă minerală',   vol: '330 ml', price: '5 LEI' },
      { name: 'Limonadă',                    vol: '300 ml', price: '8 LEI' },
      { name: 'Apă tonică',                  vol: '330 ml', price: '6 LEI' },
      { name: 'Coca Cola',                   vol: '330 ml', price: '6 LEI' },
    ],
  },
  {
    id: 'smoothie',
    title: 'Smoothie',
    subtitle: 'Proaspăt, făcut pe loc',
    accent: 'moss',
    glyph: 'fruit',
    items: [
      {
        name: 'Summer Beat',
        description: 'Banană, mure, ananas, suc de portocale',
        vol: '300 ml',
        price: '12 LEI',
      },
      {
        name: 'Berry Blast',
        description: 'Afine, coacăze, mure, zmeură, suc de portocale',
        vol: '300 ml',
        price: '12 LEI',
      },
    ],
  },
];
