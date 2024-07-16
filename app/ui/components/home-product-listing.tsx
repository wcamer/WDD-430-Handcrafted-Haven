// 'use client'
import '@/app/ui/global.css';
import ProductDisplay from './product-display';
import { LeftArrow, RightArrow } from './arrows';
import { ProductFilterButtons } from './product-filter';
import Home from '@/app/ui/home-page.module.css';
// import clsx from 'clsx';
import { useState } from 'react';
import { string } from 'zod';
import Pagination from './pagination/pagination';
import { fetchProductPageCount } from '@/app/lib/pagination';
import {
  fetchProducts,
  fetchProductsAToZ,
  fetchProductAscending,
  fetchProductDescending,
  fetchProductByRating,
} from '@/app/lib/util';
import { Product } from '@/app/lib/database-definitions';

// const width = useState(window.innerWidth)
// console.log("the screen width is....", width)

export default async function ProductListing() {
  // interface Product {
  //   name: string;
  //   imageUrl: string;
  //   price: number;
  //   rating: number;
  //   id: string;
  //   sellerId: string;
  //   sellerName: string;
  //   imageAlt: string;
  //   link: string;
  // }

  const totalPages = await fetchProductPageCount();

  // will be controller by filter buttons
  const filteredList = {
    productsList: async () => await fetchProducts(),
    aToz: async () => await fetchProductsAToZ(),
    priceAscending: async () => await fetchProductAscending(),
    priceDescending: async () => await fetchProductDescending(),
    rating: async () => await fetchProductByRating(),
  };

  const productsList = await filteredList['productsList']();

  return (
    <div className={` grid-cols-5 lg:grid  `}>
      <div className={` col-start-2 col-end-5 lg:grid `}>
        <h2 className="text-center">Product Listing</h2>
      </div>

      <div className={` col-end-5 lg:col-start-2  `}>
        <ProductFilterButtons />
      </div>

      <div className={` col-end-5 lg:col-start-2  `}>
        <article className="m-2 grid  gap-4 p-2 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5">
          {productsList.map((product: Product) => {
            return (
              <ProductDisplay
                id={product.product_id}
                name={product.product_name}
                price={product.product_price}
                rating={product.product_rating}
                imageUrl={product.product_image}
                key={product.product_id}
              />
            );
          })}
        </article>

        <div className="flex flex-row justify-center p-2">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
