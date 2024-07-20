'use client'


import PE from '@/app/ui/product-edit.module.css'
import { deleteProduct } from "@/app/lib/util"

interface Product {
    product_id: string
}


export function DeleteProductForm({product, user}: {product: any, user: any}){
    
    const prodName = product.product_name
    const price = product.product_price 
    const image = product.product_image 
    const prodDesc = product.product_description
    // console.log('here is user in the delete-produt-form...', user)



    const deletedProduct = deleteProduct.bind(null,
                            product.product_id,
                            user.user_id

                        )

    const formAction = deletedProduct

    return (
        <form 
            className={`${PE.form} flex p-2 m-2`}
            action={formAction} 
            
        >
            <fieldset className={`${PE.formFieldset} p-2 m-2 flex flex-col outline `}>
                <legend className="text-2xl text-center p-2 m-2">Delete Product Form</legend>
                
                <label className="text-xl">Product Name</label><br></br>
                <input 
                    required 
                    value={prodName}
                    disabled
                    
                ></input><br></br>

                <label className="text-xl">Price</label><br></br>
                <input
                    required type='number' 
                    value={price}
                    disabled
                ></input><br></br>
               
                <label className="text-xl">Image</label><br></br>
                <input 
                    required 
                    // type='file' 
                    value={image}
                    disabled
                ></input><br></br>
               
                <label className="text-xl">Product Description</label><br></br>
                <textarea 
                required 
                value={prodDesc}
                disabled
                ></textarea><br></br>
                <button 
                    className={`${PE.submitBtn} hover:bg-red-500 `}
                    type='submit'
                    
                >
                Delete Product
                </button>
            </fieldset>
            
        </form>

    )



}