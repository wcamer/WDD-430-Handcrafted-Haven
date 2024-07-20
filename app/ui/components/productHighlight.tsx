'use client'

import Image from "next/image";
import Highlight from '@/app/ui/product-highlight.module.css'
import { setUserProdRating } from "@/app/lib/util";
import { useState } from "react";


interface Product {
   
    product_name: string;
    product_description: string;
    product_rating: string;
    product_price: string;
    product_image: string;
    sellerName: string;
    

    
  }


interface User{
    user_id: string;
}



export default async function ProductHighlight({product, user}: {product: any, user: any}) {
    

        const prod = product

        // console.log('here is prod in the productHighlight...', prod)
        
        const prodName = prod.product_name
        const sellerName = prod.sellerName // need to run a query or query for the object then break it down
        const price = prod.product_price
        let rating = prod.product_rating
        const imageUrl = prod.product_image
        const imageAlt = `This is an image of ${prodName} by ${prod.sellerName}`

        if(rating === 0){
            rating = 'Pending'
        }
        console.log('here is pName, sName, rating, and imageurl...', prodName, sellerName, rating, imageUrl)

        const [reviewRating, setReviewRating] = useState('')
        const [reviewDesc, setReviewDesc] = useState('')

        const handleSubmit = async (e:any)  =>{
            e.preventDefault();
            const userId = 'insert user id here'
            const productId = 'insert prod id here'
            await setUserProdRating(userId, productId, reviewRating, reviewDesc)
        }

    return(
        <div className='flex flex-col justify-around p-2 m-2 lg:grid grid-cols-2'>
            <div className={`${Highlight.prodImage} outline p-2 m-2 `}>
                <Image className={''}
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt={imageAlt}
                        /> 

            </div>

            <section className={`${Highlight.ProductInfoSection}  outline p-2 m-2 `}>
                <h1 className="outline p-2 m-2">{prodName}</h1>
                <div className={`${Highlight.ProductInfo} outline  p-2 m-2 `} >
                    <p>Sold By:</p>
                    <p>{sellerName}</p>
                    <p>Price:</p>
                    <p>${price}</p>
                    <p>Rating:</p>
                    <p>{`${rating} / 10`}</p>
                </div>

                <div>
                    <button 
                    className={`${Highlight.addToCart} 
                    outline p-2 m-2
                    `}>
                        Add To Cart
                    </button>
                </div>
                

            </section>


          
            










        </div>


    )
}