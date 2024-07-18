import '@/app/ui/global.css';

import { Product } from '@/app/lib/database-definitions';

import ProductDisplay from './product-display';
import Pagination from './pagination/pagination';

import { fetchProductPageCount } from '@/app/lib/pagination';
import { fetchProducts } from '@/app/lib/util';
import { Suspense } from 'react';

export default async function ProductListing() {
  const totalPages = await fetchProductPageCount();
  const productList = await fetchProducts();

  return (
    <div className={` grid-cols-5 lg:grid  `}>
      <div className={` col-end-5 lg:col-start-2 `}>
        <article className="m-2 grid  gap-4 p-2 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5">
          {productList.map((product: Product) => {
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
          <Suspense>
            <Pagination totalPages={totalPages} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
