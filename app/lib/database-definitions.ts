export type User = {
  user_id: String;
  user_name: String;
  user_email: String;
  user_password: String;
  date_created: String;
};

export type Seller = {
  seller_id: String;
  seller_name: String;
  seller_email: String;
  seller_password: String;
  date_created: String;
};

export type Product = {
  seller_id: String; // KEY
  product_id: String; // KEY
  product_name: String;
  product_description: String;
  product_rating: Number;
  product_price: Number;
  product_thumbnail: String;
  product_image: String;
  date_added: String;
};

export type Review = {
  review_id: String; // KEY
  user_id: String; // KEY
  product_id: String; // KEY
  review_description: String;
  review_rating: Number;
  date_added: String;
};

export type CartProduct = {
  user_id: String; // KEY
  product_id: String; // KEY
  date_added: String;
};

export type UserBuyingHistory = {
  user_id: String; // KEY
  product_id: String; // KEY
  date_ordered: String;
};
