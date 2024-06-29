const users = [
  {
    user_id: '577dd9e6-1af9-484a-ac7c-ddab33403f54',
    user_name: 'evan01',
    user_email: 'evan01@gmail.com',
    user_password: 'evanPass',
  },
  {
    user_id: 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c',
    user_name: 'dill02',
    user_email: 'dill02@gmail.com',
    user_password: 'dillPass',
  },
];

const sellers = [
  {
    seller_id: 'b3a538e3-e006-4fbc-b334-f53d599ade77',
    seller_name: 'gideon03',
    seller_email: 'gideon03@gmail.com',
    seller_password: 'gidPass',
  },
  {
    seller_id: 'a2e3b796-f4de-48e4-b97c-bb2c5f70a0bc',
    seller_name: 'nala04',
    seller_email: 'nala04@gmail.com',
    seller_password: 'nalaPass',
  },
];

const products = [
  {
    seller_id: 'b3a538e3-e006-4fbc-b334-f53d599ade77',
    product_id: '84cc3f32-2f63-4d85-ae57-cca720c7c16c',
    product_description: 'This is a product',
    product_rating: 5,
    product_price: 200,
    product_thumbnail: '/images/600x600ph.jpg',
    product_image: '/images/600x600ph.jpg',
  },
  {
    seller_id: 'b3a538e3-e006-4fbc-b334-f53d599ade77',
    product_id: '5521f508-63c3-4098-af3e-44f09a8431fb',
    product_description: 'This is a product',
    product_rating: 7,
    product_price: 20,
    product_thumbnail: '/images/600x600ph.jpg',
    product_image: '/images/600x600ph.jpg',
  },
  {
    seller_id: 'a2e3b796-f4de-48e4-b97c-bb2c5f70a0bc',
    product_id: '1130eeb8-13f3-4de3-a8f0-aab69c21227e',
    product_description: 'This is a bad product',
    product_rating: 1,
    product_price: 100,
    product_thumbnail: '/images/600x600ph.jpg',
    product_image: '/images/600x600ph.jpg',
  },
];

const reviews = [
  {
    review_id: '01b5f9d2-dfbd-407c-87e8-f48e2238eb2e',
    user_id: '577dd9e6-1af9-484a-ac7c-ddab33403f54',
    product_id: '1130eeb8-13f3-4de3-a8f0-aab69c21227e',
    review_description: 'This is a review for a bad product.',
    review_rating: 1,
  },
  {
    review_id: '89260ea9-bb68-4e2f-b9e2-c3a5afb602e7',
    user_id: '577dd9e6-1af9-484a-ac7c-ddab33403f54',
    product_id: '5521f508-63c3-4098-af3e-44f09a8431fb',
    review_description: 'This is a review for an okay product.',
    review_rating: 7,
  },
  {
    review_id: '4d9cd7d0-8bfb-4449-b02a-db491c8975f3',
    user_id: 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c',
    product_id: '84cc3f32-2f63-4d85-ae57-cca720c7c16c',
    review_description: 'This is a review for a meh product.',
    review_rating: 5,
  },
];

const cart_products = [
  {
    user_id: '89260ea9-bb68-4e2f-b9e2-c3a5afb602e7', // KEY
    product_id: '84cc3f32-2f63-4d85-ae57-cca720c7c16c', // KEY
  },
  {
    user_id: 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c', // KEY
    product_id: '5521f508-63c3-4098-af3e-44f09a8431fb', // KEY
  },
  {
    user_id: 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c', // KEY
    product_id: '1130eeb8-13f3-4de3-a8f0-aab69c21227e', // KEY
  },
];

const userBuyingHistory = [
  {
    user_id: '577dd9e6-1af9-484a-ac7c-ddab33403f54',
    product_id: '1130eeb8-13f3-4de3-a8f0-aab69c21227e',
  },
  {
    user_id: '577dd9e6-1af9-484a-ac7c-ddab33403f54',
    product_id: '5521f508-63c3-4098-af3e-44f09a8431fb',
  },
  {
    user_id: 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c',
    product_id: '84cc3f32-2f63-4d85-ae57-cca720c7c16c',
  },
];
