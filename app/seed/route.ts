import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import {
  buying_history,
  cart_products,
  products,
  reviews,
  sellers,
  users,
} from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_name VARCHAR(255) NOT NULL,
      user_email TEXT NOT NULL UNIQUE,
      user_password TEXT NOT NULL,
      user_city TEXT NOT NULL,
      user_state TEXT NOT NULL,
      user_address TEXT NOT NULL,
      user_zip TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.user_password, 10);
      return client.sql`
        INSERT INTO users (
          user_id,
          user_name,
          user_email,
          user_password,
          user_city,
          user_state,
          user_address,
          user_zip
        )
        VALUES (
          ${user.user_id},
          ${user.user_name},
          ${user.user_email},
          ${hashedPassword},
          ${user.user_city},
          ${user.user_state},
          ${user.user_address},
          ${user.user_zip}
        )
        ON CONFLICT (user_id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedSellers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`CREATE TABLE IF NOT EXISTS sellers (
    seller_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    seller_name VARCHAR(255) NOT NULL,
    seller_email TEXT NOT NULL UNIQUE,
    seller_description TEXT,
    seller_password TEXT NOT NULL,
    seller_city TEXT NOT NULL,
    seller_state TEXT NOT NULL,
    seller_address TEXT NOT NULL,
    seller_zip TEXT NOT NULL
  )`;

  const insertedSellers = await Promise.all(
    sellers.map(async (seller) => {
      const hashedPassword = await bcrypt.hash(seller.seller_password, 10);
      return client.sql`
      INSERT INTO sellers (
        seller_id,
        seller_name,
        seller_email,
        seller_description,
        seller_password,
        seller_city,
        seller_state,
        seller_address,
        seller_zip
      )
      VALUES (
        ${seller.seller_id},
        ${seller.seller_name},
        ${seller.seller_email},
        ${seller.seller_description},
        ${hashedPassword},
        ${seller.seller_city},
        ${seller.seller_state},
        ${seller.seller_address},
        ${seller.seller_zip}
      )
        ON CONFLICT (seller_id) DO NOTHING;`;
    }),
  );

  return insertedSellers;
}

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
  CREATE TABLE IF NOT EXISTS products (
    product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    seller_id UUID REFERENCES sellers (seller_id) ON DELETE CASCADE,
    product_name TEXT NOT NULL,
    product_description TEXT,
    product_rating INT,
    product_price INT,
    product_thumbnail VARCHAR(255),
    product_image VARCHAR(255),
    date_added DATE
  );`;

  const insertedProducts = await Promise.all(
    products.map((product) => {
      return client.sql`
      INSERT INTO products (product_id, seller_id, product_name, product_description, product_rating, product_price, product_thumbnail, product_image, date_added)
      VALUES (
      ${product.product_id},
      (SELECT seller_id FROM sellers WHERE seller_id = ${product.seller_id}),
      ${product.product_name},
      ${product.product_description},
      ${product.product_rating},
      ${product.product_price},
      ${product.product_thumbnail},
      ${product.product_image},
      current_date
      )
        ON CONFLICT (product_id) DO NOTHING;`;
    }),
  );

  return insertedProducts;
}

async function seedReviews() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`CREATE TABLE IF NOT EXISTS reviews (
    review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products (product_id) ON DELETE CASCADE,
    user_id UUID REFERENCES users (user_id) ON DELETE CASCADE,
    review_description TEXT,
    review_rating INT NOT NULL,
    date_added DATE
  );`;

  const insertedReviews = await Promise.all(
    reviews.map(async (review) => {
      return client.sql`
      INSERT INTO reviews (
      review_id,
      product_id,
      user_id,
      review_description,
      review_rating,
      date_added
      )
      VALUES (
        ${review.review_id},
        (SELECT product_id FROM products WHERE product_id = ${review.product_id}),
        (SELECT user_id FROM users WHERE user_id = ${review.user_id}),
        ${review.review_description},
        ${review.review_rating},
        current_date
      )
        ON CONFLICT (review_id) DO NOTHING;`;
    }),
  );

  return insertedReviews;
}

async function seedCarts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`CREATE TABLE IF NOT EXISTS cart_products (
    cart_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products (product_id) ON DELETE CASCADE,
    user_id UUID REFERENCES users (user_id) ON DELETE CASCADE,
    product_amount INT,
    date_added DATE
  );`;

  const insertedCarts = await Promise.all(
    cart_products.map(async (cart) => {
      return client.sql`
      INSERT INTO cart_products (
        product_id,
        user_id,
        product_amount,
        date_added
      )
      VALUES (
        (SELECT product_id FROM products WHERE product_id = ${cart.product_id}),
        (SELECT user_id FROM users WHERE user_id = ${cart.user_id}),
        ${cart.product_amount},
        current_date
      )
        ON CONFLICT (cart_id) DO NOTHING;`;
    }),
  );

  return insertedCarts;
}

async function seedBuyingHistory() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`CREATE TABLE IF NOT EXISTS buying_history (
    history_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products (product_id) ON DELETE CASCADE,
    user_id UUID REFERENCES users (user_id) ON DELETE CASCADE,
    product_amount INT,
    date_added DATE
  );`;

  const insertedBuyingHistory = await Promise.all(
    buying_history.map(async (history) => {
      return client.sql`
        INSERT INTO buying_history (
          product_id,
          user_id,
          product_amount,
          date_added
        )
        VALUES (
          (SELECT product_id FROM products WHERE product_id = ${history.product_id}),
          (SELECT user_id FROM users WHERE user_id = ${history.user_id}),
          ${history.product_amount},
          current_date
        )
        ON CONFLICT (history_id) DO NOTHING;
      `;
    }),
  );

  return insertedBuyingHistory;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedSellers();
    await seedProducts();
    await seedReviews();
    await seedCarts();
    await seedBuyingHistory();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
