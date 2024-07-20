'use client'

import Highlight from '@/app/ui/product-highlight.module.css'
import { setUserProdRating } from '@/app/lib/serv-util';
import { useState } from "react";
 
interface User {
    user_id: string;
}

interface Product {
    product_id: string;
}
 
 
 export function ReviewForm({product, user}: {product: any, user: any} ){
    const [reviewRating, setReviewRating] = useState('') 
    const [reviewDesc, setReviewDesc] = useState('')

    const userId = user.user_id
    // console.log('here is userId in the review form', userId)
    const productId = product.product_id
    const settingUserProdRating = setUserProdRating
                .bind(
                    null,
                    userId,
                    productId,
                    reviewRating,
                    reviewDesc

                )

    const formAction = settingUserProdRating
    
 




    return (

    
 <section className={`${Highlight.rating} p-2 m-2 outline md: col-start-2 row-start-2`}>
                <form className={`${Highlight.ratingForm}`}
                action={formAction}
                >
                    <fieldset className="flex flex-col ">
                        <legend className="text-2xl text-center">Leave A Review</legend><br></br>
                        <label className="text-xl" htmlFor='ratingMenu'>Rating Out Of 10</label><br></br>
                        <select 
                            className="text-center" 
                            id='ratingMenu'
                            name='ratingMenu'
                            value={reviewRating}
                            onChange={(e) => setReviewRating(e.target.value)}
                        
                        >
                            <option value=""  disabled>Pick a rating for the product</option>
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
                        <button className={`${Highlight.submitBtn} outline p-2 m-2`} 
                        type='submit'
                        disabled={!reviewRating || !reviewDesc}
                        
                       
                        >
                            Submit Rating
                        </button> 

                    </fieldset>
                    
                </form>
            </section>

    )}