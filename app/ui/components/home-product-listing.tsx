// 'use client'
import '@/app/ui/global.css';
import ProductDisplay from "./product-display"
import clsx from 'clsx'
import { useState } from 'react';


// const width = useState(window.innerWidth)
// console.log("the screen width is....", width)


export default function ProductListing() {


    return(
        
        <div>
            <div>
                <h2>Product Listing</h2>
            </div>
            <div>
            <article className="p-2 m-2 grid gap-4 grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
           {/* Placeholder products for now */}
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />



        </article>
            </div>

        </div>
        


    )
}