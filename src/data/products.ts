
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16 pouces",
    description: "Le MacBook Pro le plus puissant jamais conçu. Avec la puce M2 Pro révolutionnaire.",
    price: 2699,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    category: "electronics",
    rating: 4.8,
    reviews: 324,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500"
    ]
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "Le smartphone le plus avancé au monde avec une puce A17 Pro révolutionnaire.",
    price: 1229,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    category: "electronics",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500"
    ]
  },
  {
    id: 3,
    name: "AirPods Pro",
    description: "Audio spatial avec suivi dynamique de la tête. Réduction de bruit active.",
    price: 279,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    category: "electronics",
    rating: 4.7,
    reviews: 892,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"
    ]
  },
  {
    id: 4,
    name: "Canon EOS R5",
    description: "Appareil photo hybride plein format 45MP avec vidéo 8K et stabilisation intégrée.",
    price: 3899,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500",
    category: "electronics",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500"
    ]
  },
  {
    id: 5,
    name: "Tesla Model S",
    description: "Berline électrique de luxe avec une autonomie de 652 km et accélération 0-100 en 2.1s.",
    price: 89990,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500",
    category: "automotive",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500"
    ]
  },
  {
    id: 6,
    name: "Nike Air Jordan 1",
    description: "La sneaker légendaire qui a révolutionné le basketball et la mode urbaine.",
    price: 169,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "fashion",
    rating: 4.5,
    reviews: 1240,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    ]
  },
  {
    id: 7,
    name: "Rolex Submariner",
    description: "Montre de plongée iconique, étanche jusqu'à 300 mètres de profondeur.",
    price: 8550,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    category: "fashion",
    rating: 4.9,
    reviews: 89,
    inStock: false,
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500"
    ]
  },
  {
    id: 8,
    name: "Herman Miller Aeron",
    description: "Chaise de bureau ergonomique révolutionnaire pour un confort optimal.",
    price: 1395,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    category: "furniture",
    rating: 4.7,
    reviews: 445,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"
    ]
  }
];

export const categories = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'electronics', name: 'Électronique' },
  { id: 'fashion', name: 'Mode' },
  { id: 'furniture', name: 'Mobilier' },
  { id: 'automotive', name: 'Automobile' }
];
