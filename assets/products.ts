import { Product } from './types/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Indoor Plants',
    slug: 'indoor-plants',
    heroImage: require('../assets/images/indoor-1.jpg'),
    imagesUrl: [
      require('../assets/images/indoor-1.jpg'),
      require('../assets/images/indoor-2.jpg'),
    //   require('../assets/images/indoor-3.jpg'),
    ],
    price: 899.99,
    category: {
      imageUrl: require('../assets/images/indoor-1.jpg'),
      name: 'Indoor Plants',
      slug: 'indoor-plants',
    },
    maxQuantity: 5,
  },
  {
    id: 5,
    title: 'Snake Plant',
    slug: 'snake-plant',
    heroImage: require('../assets/images/snake-1.jpg'),
    imagesUrl: [
      require('../assets/images/snake-1.jpg'),
      require('../assets/images/snake-2.jpg'),
    ],
    price: 1099.99,
    category: {
      imageUrl: require('../assets/images/snake-1.jpg'),
      name: 'Indoor Plants',
      slug: 'indoor-plants',
    },
    maxQuantity: 7,
  },
  {
    id: 2,
    title: 'Pothos',
    slug: 'pothos',
    heroImage: require('../assets/images/pothos-1.jpg'),
    imagesUrl: [
      require('../assets/images/pothos-1.jpg'),
      require('../assets/images/pothos-2.jpg'),
    ],
    price: 999.99,
    category: {
      imageUrl: require('../assets/images/pothos-1.jpg'),
      name: 'Pothos',
      slug: 'pothos',
    },
    maxQuantity: 10,
  },
  {
    id: 6,
    title: 'Lavender',
    slug: 'lavender',
    heroImage: require('../assets/images/lavender-1.jpg'),
    imagesUrl: [
      require('../assets/images/lavender-1.jpg'),
      require('../assets/images/lavender-2.jpg'),
    ],
    price: 799.99,
    category: {
      imageUrl: require('../assets/images/lavender-1.jpg'),
      name: 'Lavender',
      slug: 'lavender',
    },
    maxQuantity: 12,
  },
  {
    id: 3,
    title: 'Succalent',
    slug: 'succalent',
    heroImage: require('../assets/images/succalent-1.jpg'),
    imagesUrl: [
      require('../assets/images/succalent-1.jpg'),
      require('../assets/images/succalent-2.jpg'),
    ],
    price: 499.99,
    category: {
      imageUrl: require('../assets/images/succalent-1.jpg'),
      name: 'plants',
      slug: 'plants',
    },
    maxQuantity: 15,
  },
  {
    id: 4,
    title: 'Lucky Bamboo',
    slug: 'lucky-bamboo',
    heroImage: require('../assets/images/lucky-bamboo-1.jpg'),
    imagesUrl: [
      require('../assets/images/lucky-bamboo-1.jpg'),
      require('../assets/images/lucky-bamboo-2.jpg'),
      
    ],
    price: 699.99,
    category: {
      imageUrl: require('../assets/images/lucky-bamboo-1.jpg'),
      name: 'Lucky Bamboo',
      slug: 'lucky-bamboo',
    },
    maxQuantity: 3,
  },
//   {
//     id: 7,
//     title: 'Nintendo Switch',
//     slug: 'nintendo-switch',
//     heroImage: require('../assets/images/nintendo-switch-1.jpg'),
//     imagesUrl: [
//       require('../assets/images/nintendo-switch-1.jpg'),
//       require('../assets/images/nintendo-switch-2.jpg'),
//     ],
//     price: 299.99,
//     category: {
//       imageUrl: require('../assets/images/ps-5-1.jpg'),
//       name: 'Gaming',
//       slug: 'gaming',
//     },
//     maxQuantity: 8,
//   },
];