import { sql } from '@vercel/postgres';
import {
  CartProduct,
  Product,
  Review,
  UserBuyingHistory,
} from '@/app/lib/database-definitions';

export async function fetchProducts() {
  try {
    const data = await sql<Product>`SELECT * from products;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products data.');
  }
}

export async function fetchReviews(product_id: string) {
  try {
    const data =
      await sql<Review>`SELECT * from reviews WHERE product_id = ${product_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch reviews data.');
  }
}

export async function fetchCart(user_id: string) {
  try {
    const data =
      await sql<CartProduct>`SELECT * from cart_products WHERE user_id = ${user_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cart_products data.');
  }
}

export async function fetchUserBuyingHistory(user_id: string) {
  try {
    const data =
      await sql<UserBuyingHistory>`SELECT * from buying_history WHERE user_id = ${user_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch buying_history data.');
  }
}

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
