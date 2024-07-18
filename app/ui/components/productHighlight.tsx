'use client'

import Image from "next/image";
import Highlight from '@/app/ui/product-highlight.module.css'
import { fetchProduct, fetchProducts, setUserProdRating } from "@/app/lib/util";
import { useState } from "react";


interface Product {
    // name: string;
    // imageUrl: string;
    // price: number;
    // rating: number;
    // id: string;
    // sellerName: string;
    // imageAlt: string;
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
    
    //   const handicraftProducts = [
    //     {
    //       name: 'Handwoven Basket',
    //       imageUrl: '/images/handcraft1.png',
    //       price: 25.99,
    //       rating: 4.7,
    //       id: 'hc001',
    //       sellerId: 'seller001',
    //       sellerName: 'CraftsByEmma',
    //       imageAlt: 'A beautifully handwoven basket with intricate patterns',
    //       link: 'https://example.com/products/handwoven-basket',
    //     },]

        // const sellerName = handicraftProducts[0].sellerName // need to run a query or query for the object then break it down
        // const price = handicraftProducts[0].price
        // const rating = handicraftProducts[0].rating
        // const imageUrl = handicraftProducts[0].imageUrl
        // const imageAlt = handicraftProducts[0].imageAlt

        // const prods = await fetchProducts()

        //const prod = await fetchProduct('84cc3f32-2f63-4d85-ae57-cca720c7c16c')

        const prod = product

        console.log('here is prod in the second productHighlight...', prod)
        
        const prodName = prod.product_name
        const sellerName = prod.sellerName // need to run a query or query for the object then break it down
        const price = prod.product_price
        const rating = prod.product_rating
        const imageUrl = prod.product_image
        const imageAlt = `This is an image of ${prodName} by ${prod.sellerName}`

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
                    <button className={`${Highlight.addToCart} outline p-2 m-2`}>
                        Add To Cart
                    </button>
                </div>
                

            </section>


            {/* <section className={`${Highlight.rating} outline md: col-start-2 row-start-2`}>
                <form className={`${Highlight.ratingForm}`}>
                    <fieldset className="flex flex-col justify-center align-center items-center">
                        <legend className="text-2xl text-center">Leave A Review</legend><br></br>
                        <label className="text-xl" htmlFor='ratingMenu'>Rating Out Of 10</label><br></br>
                        <select 
                            className="text-center" 
                            id='ratingMenu'
                            name='ratingMenu'
                            value={reviewRating}
                            onChange={(e) => setReviewRating(e.target.value)}
                        
                        >
                            <option value="" selected disabled>Pick a rating for the product</option>
                            <option value="1">1 Worst</option>
                            <option value="2">2</option> 
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10 Best</option>
                        </select><br></br>
                        <label htmlFor='commentSection'>Comment Section</label>
                        <textarea 
                            id='commentSection'
                            name='commentSection'
                            className={`${Highlight.ratingDesc}`}
                            placeholder="Leave a comment"
                            onChange={(e) => setReviewDesc(e.target.value)} 
                        ></textarea> <br></br>
                        <button className={`${Highlight.submitBtn} outline p-2 m-2`} type='submit'
                        // onClick={setUserProdRating('someuser','prodid','reviewer rating', 'review description')}
                        // onClick={document.querySelector('.Highlight.submitBtn').setAttribute='disabled'}
                        onClick={handleSubmit}
                        >
                            Submit Rating
                        </button> 

                    </fieldset>
                    
                </form>
            </section> */}

            










        </div>


    )
}