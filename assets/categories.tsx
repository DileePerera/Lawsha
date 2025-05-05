import { Category } from './types/category';
import { PRODUCTS } from './products';

export const CATEGORIES: Category[] = [
  {
    name: 'Indoor Plants',
    slug: 'indoor-plants',
    imageUrl: 'https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    products: PRODUCTS.filter(product => product.category.slug === 'indoor-plants'),
  },
  {
    name: 'Pothos',
    slug: 'pothos',
    imageUrl: 'https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    products: PRODUCTS.filter(product => product.category.slug === 'pothos'),
  },
  {
    name: 'Lucky Bamboo',
    slug: 'lucky-bamboo',
    imageUrl: 'https://images.pexels.com/photos/2339438/pexels-photo-2339438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    products: PRODUCTS.filter(product => product.category.slug === 'lucky-bamboo'),
  },
  {
    name: 'Lavender',
    slug: 'lavender',
    imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    products: PRODUCTS.filter(product => product.category.slug === 'lavender'),
  },
];
