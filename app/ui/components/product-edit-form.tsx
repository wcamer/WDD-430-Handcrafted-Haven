'use client'

import { useState } from "react"

import PE from '@/app/ui/product-edit.module.css'
import { editProduct } from "@/app/lib/util"

interface Product {
    product_id: string
}


// export function ProductEditForm({product}: {product: any}){
export function ProductEditForm({product, user}: {product: any, user: any}){
    const [prodName, setProdName] = useState(product.product_name)
    const [prodDesc, setProdDesc] = useState(product.product_description)
    const [price, setPrice] = useState(product.product_price)
    const [image, setImage] = useState(product.product_image)
    console.log('here is user in the produt-edit-form...', user)


    //something new
    const initialState: any = { message: null, errors: {} };


    const edittedProduct = editProduct.bind(null,
                            product.product_id,
                            prodName,
                            prodDesc,
                            price,
                            image,

                        )

    // const[state, formAction] = useActionState(edittedProduct, initialState)
    const formAction = edittedProduct
    // const handleSubmit = (e: any) =>{
    //     // e.preventDefault()
    //     // editProduct(product.product_id,prodName,prodDesc, price, image )
    //     edittedProduct
    //     console.log('handlesubmit has been clicked')
    // }

    // const

    return (
        <form 
            className={`${PE.form} flex p-2 m-2`}
            // onSubmit={handleSubmit}
            // action={handleSubmit}
            action={formAction} 
            
        >
            <fieldset className={`${PE.formFieldset} p-2 m-2 flex flex-col outline `}>
                <legend className="text-2xl text-center p-2 m-2">Product Edit Form</legend>
                
                <label className="text-xl">Product Name</label><br></br>
                <input 
                    required 
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                ></input><br></br>

                <label className="text-xl">Price</label><br></br>
                <input
                    required type='number' 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                ></input><br></br>
               
                <label className="text-xl">Image</label><br></br>
                <input 
                    required 
                    // type='file' 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                ></input><br></br>
               
                <label className="text-xl">Product Description</label><br></br>
                <textarea 
                required 
                value={prodDesc}
                onChange={(e) => setProdDesc(e.target.value)}
                ></textarea><br></br>
                <button 
                    className={`${PE.submitBtn}  `}
                    type='submit'
                    
                >
                Submit Edit
                </button>
            </fieldset>
            
        </form>

    )



}