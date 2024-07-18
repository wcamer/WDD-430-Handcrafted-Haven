export type User = {
  user_id: string;
  user_name: string;
  user_email: string;
  user_password: string;
  user_city: string;
  user_state: string;
  user_address: string;
  user_zip: string;
};

export type Seller = {
  seller_id: string;
  seller_name: string;
  seller_email: string;
  seller_description: string;
  seller_password: string;
  seller_city: string;
  seller_state: string;
  seller_address: string;
  seller_zip: string;
};

export type Product = {
  seller_id: string; // KEY
  product_id: string; // KEY
  product_name: string;
  product_description: string;
  product_rating: number;
  product_price: number;
  product_thumbnail: string;
  product_image: string;
  date_added: string;
};

export type Review = {
  review_id: string; // KEY
  user_id: string; // KEY
  product_id: String; // KEY
  review_description: string;
  review_rating: number;
  date_added: string;
};

export type CartProduct = {
  cart_id: string; // KEY
  user_id: string; // KEY
  product_id: string; // KEY
  date_added: string;
};

export type UserBuyingHistory = {
  history_id: string; // KEY
  user_id: string; // KEY
  product_id: string; // KEY
  date_ordered: string;
};
