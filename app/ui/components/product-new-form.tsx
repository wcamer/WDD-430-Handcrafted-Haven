'use client'

import PE from '@/app/ui/product-edit.module.css' // will be changed
import { useState } from 'react'
import { createNewProdcut } from '@/app/lib/util'


interface Seller{
    seller_id: string;
}


export function NewProductForm({seller}: {seller: string}){
    console.log('here is seller in newproductform....',seller)

    const [prodName, setProdName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const createdProduct = createNewProdcut.bind(null,
                                            seller,
                                            prodName,
                                            desc,
                                            price,
                                            image

                                        )


    const formAction = createdProduct

 

    return (
        <form className={`${PE.form} flex p-2 m-2`} 
        action={formAction}
        
        >
            <fieldset className={`${PE.formFieldset} p-2 m-2 flex flex-col outline `}>
                <legend className="text-2xl text-center p-2 m-2">New Product Form</legend>
                <label className="text-xl">Product Name</label><br></br>
                <input 
                    required 
                    placeholder="some name"
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)} 
                ></input><br></br>
                
                <label className="text-xl">Price</label><br></br>
                <input 
                required
                type='number' 
                placeholder="200.30"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                ></input><br></br>
                
                <label className="text-xl">Image</label><br></br>
                <input 
                required
                type='text'
                value={image}
                placeholder='/images/600x600ph.jpg'
                onChange={(e) => setImage(e.target.value)}
                ></input><br></br>
                
                <label className="text-xl">Product Description</label><br></br>
                <textarea  
                required 
                placeholder="Add Product description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                ></textarea><br></br>
                
                <button 
                    className={`${PE.submitBtn}  `}
                    type='submit'
                >
                Submit New Product
                </button>
            </fieldset>
            
        </form>
    )
}