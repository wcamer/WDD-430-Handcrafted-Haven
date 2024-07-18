import { sql } from '@vercel/postgres';

const ITEMS_PER_PAGE = 10;

export async function fetchProductPageCount() {
  try {
    const count = await sql`SELECT COUNT(*) FROM products;`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
}

export async function fetchReviewPageCount() {
  try {
    const count = await sql`SELECT COUNT(*) FROM reviews;`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of reviews.');
  }
}

export async function fetchCartPageCount() {
  try {
    const count = await sql`SELECT COUNT(*) FROM cart_products;`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of cart products.');
  }
}

export async function fetchHistoryPageCount() {
  try {
    const count = await sql`SELECT COUNT(*) FROM buying_history;`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of buying history.');
  }
}
