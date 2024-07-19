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
      await sql<CartProduct>`SELECT * from cart_products WHERE user_id = ${user_id} ORDER BY cart_id;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cart_products data.');
  }
}

export async function updateCartItemQuantity(
  cart_id: string,
  product_amount: number,
) {
  try {
    const data =
      await sql<CartProduct>`UPDATE cart_products SET product_amount = ${product_amount} WHERE cart_id = ${cart_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update CartProduct quantity.');
  }
}

export async function deleteCartItem(cart_id: string) {
  try {
    const data =
      await sql<CartProduct>`DELETE FROM cart_products WHERE cart_id = ${cart_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete CartProduct item.');
  }
}

export async function deleteAllUserCart(user_id: string) {
  try {
    const data =
      await sql<CartProduct>`DELETE FROM cart_products WHERE user_id = ${user_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error("Failed to delete CartProduct items from user's cart.");
  }
}

export async function addCartItem(
  user_id: string,
  product_id: string,
  product_amount: number,
) {
  try {
    const data =
      await sql<CartProduct>`INSERT INTO cart_products (user_id, product_id, product_amount, date_added)
      VALUES (
        ${user_id},
        ${product_id},
        ${product_amount},
        current_date
      );`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to insert CartProduct item.');
  }
}

export async function checkForExistingCartItem(product_id: string) {
  try {
    const data =
      await sql<CartProduct>`SELECT * from cart_products WHERE product_id = ${product_id}`;
    return data.rows;
  } catch (error) {
    return undefined;
  }
}

export async function getCartItemQuantity(cart_id: string) {
  try {
    const data =
      await sql`SELECT product_amount FROM cart_products WHERE cart_id = ${cart_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to select CartProduct quantity.');
  }
}

export async function getCartTotalPrice(user_id: string) {
  try {
    const data = await sql`SELECT product_price, product_amount
      FROM products
        INNER JOIN cart_products ON products.product_id = cart_products.product_id
      WHERE cart_products.user_id = ${user_id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to select CartProduct quantity.');
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

export async function addUserBuyingHistory(
  user_id: string,
  product_id: string,
  product_ammount: number,
) {
  try {
    const data =
      await sql<UserBuyingHistory>`INSERT INTO buying_history (user_id, product_id, product_amount, date_added)
      VALUES (
        ${user_id},
        ${product_id},
        ${product_ammount},
        current_date
      );`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to insert buying_history item.');
  }
}

// export async function name(params:type) {

// }

// export async function fetchAllRating(){
//   try{
//     const sql
//   }

// }

// works

export async function fetchUser(id: any): Promise<any> {
  try {
    const user = await sql`SELECT * FROM users WHERE user_id=${id}`;
    console.log('here is user in fetchUser...', user.rows[0]);
    return user.rows[0];
  } catch (error) {
    console.log('fetchUser error... : ', error);
    // let noUser = {user_id:'0'}
    return 'No User Logged In';
  }
}

export async function fetchProduct(id: any): Promise<any> {
  // remove the line below it is for testing only
  // await addAnotherReview(id)
  try {
    let result = await sql`SELECT * FROM products WHERE product_id=${id}`;
    let sellerName =
      await sql`SELECT * FROM sellers WHERE seller_id=${result.rows[0].seller_id}`;
    // let productAvgRating = await sql `Select * FROM reviews WHERE product_id=${id}`
    let allProductReviews =
      await sql`Select * FROM reviews WHERE product_id=${id}`;
    let ratingDenom = allProductReviews.rows.length;
    let aggRating = 0;

    {
      let productInfo = result.rows[0];
      for (let i = 0; i < allProductReviews.rows.length; i++) {
        aggRating += allProductReviews.rows[i].review_rating;
      }

      productInfo.sellerName = sellerName.rows[0].seller_name;
      productInfo.product_rating = (aggRating / ratingDenom).toString();
      // productInfo.product_rating = productAvgRating
      // console.log(
      //   'here is productInfo.....',
      //   productInfo,
      //   // '\nhere is the products average rating...', (aggRating/ ratingDenom).toString(),
      //   '\n here is allProductReviews...',
      //   allProductReviews.rows,
      //   // '63 out of 70 should be an average of 9...', (aggRating/ratingDenom).toString()
      //   // ,'\n here is prodcutAveRating....',productAvgRating.rows[0].review_rating,
      //   // '\n check the length of the returned results...', productAvgRating.rows.length,
      //   // '\n now i am going to try to do some math...', productAvgRating.rows.length * -10 + productAvgRating.rows[0].review_rating
      // );
      return productInfo;
    }
  } catch (error) {
    console.log('fetchProduct error: ', error);
    return '0';
  }
}

export async function setUserProdRating(
  userId: any,
  productId: any,
  reviewRating: any,
  reviewDesc: any,
) {
  let date = new Date();

  //review id assuming will be auto-gen'ed
  const user = userId;
  const product = productId;
  const review = reviewDesc;
  const rating = reviewRating;
  const currentDate = date.toISOString();

  console.log(
    'here is...',
    date,
    '\n user...',
    user,
    '\n product...',
    product,
    '\n review',
    review,
    '\n rating...',
    rating,
    '\nISOdate...',
    currentDate,
  );
  //will need to send this to an api route???
  try {
    await sql`INSERT INTO reviews 
    VALUES (${user}, ${product}, ${review}, ${rating}, ${currentDate});`;
  } catch (error) {
    console.log('here is the error in setUserProdRating...', error);
  }
}
// testing only
async function addAnotherReview(id: any) {
  let date = new Date();
  const currentDate = date.toISOString();
  const user = '577dd9e6-1af9-484a-ac7c-ddab33403f54';
  const product = id; //'1130eeb8-13f3-4de3-a8f0-aab69c21227e'
  const review = 'This is a review for a bad product that is a rating 2.';
  const rating = 2;

  try {
    await sql`INSERT INTO reviews 
   VALUES (
   ${user}, 
   ${product}, 
   ${review}, 
   ${rating}, 
   ${currentDate});`;

    console.log('new review added......');
  } catch (error) {
    console.log('addanotherreview error');
    throw error;
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
