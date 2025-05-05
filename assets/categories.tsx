import { Category } from './types/category';
import { PRODUCTS } from './products';

export const CATEGORIES: Category[] = [
  {
    name: 'Snake Plants',
    slug: 'snake-plant',
    imageUrl: 'https://images.pexels.com/photos/1383044/pexels-photo-1383044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: PRODUCTS.filter(product => product.category.slug === 'snake-plant'),
  },
  {
    name: 'Pothos',
    slug: 'pothos',
    imageUrl: 'https://images.pexels.com/photos/31885126/pexels-photo-31885126/free-photo-of-variegated-epipremnum-plant-in-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: PRODUCTS.filter(product => product.category.slug === 'pothos'),
  },
  {
    name: 'Lucky Bamboo',
    slug: 'lucky-bamboo',
    imageUrl: 'https://images.pexels.com/photos/6912874/pexels-photo-6912874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: PRODUCTS.filter(product => product.category.slug === 'lucky-bamboo'),
  },
  {
    name: 'Lavender',
    slug: 'lavender',
    imageUrl: 'https://images.pexels.com/photos/2746155/pexels-photo-2746155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: PRODUCTS.filter(product => product.category.slug === 'lavender'),
  },
];
