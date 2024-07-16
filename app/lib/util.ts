import { sql } from '@vercel/postgres';
import { Product } from '@/app/lib/database-definitions';

export async function fetchProducts() {
  try {
    const data = await sql<Product>`SELECT * from products;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchProductAscending() {}

export async function fetchProductDescending() {}

export async function fetchProductByRating() {}

export async function fetchProductsAToZ() {
  console.log('getting all products A-Z');

  // const results = await sql(
  //     'SELECT * FROM products ORDER BY product_name ASC '
  // )

  // return results.rows

  const results = [
    {
      name: 'ph1',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph2',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph3',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph4',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph5',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph6',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph7',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph8',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph9',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
    {
      name: 'ph10',
      price: '1000',
      rating: '7.9',
      src: '/images/600x600ph.jpg',
      alt: 'placeholder image',
    },
  ];

  return results;
}

export async function fetchProductsByPrice() {}

export async function fetchByCategory() {}

export async function fetchByMostRecent() {}

// Pagination
export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
