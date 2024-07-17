import Image from "next/image";
import Highlight from '@/app/ui/product-highlight.module.css'
import { fetchProduct, fetchProducts } from "@/app/lib/util";



export default async function ProductHighlight(){
    
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

        const prod = await fetchProduct('84cc3f32-2f63-4d85-ae57-cca720c7c16c')

        
        const prodName = 'this is a filler name'
        const sellerName = prod.sellerName // need to run a query or query for the object then break it down
        const price = prod.product_price
        const rating = prod.product_rating
        const imageUrl = prod.product_image
        const imageAlt = prod.product_description


    return(
        <div className='md:grid grid-cols-2 outline items-center '>
            <div className={`${Highlight.prodImage}`}>
                <Image className={''}
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt={imageAlt}
                        /> 

            </div>

            <section className={`${Highlight.ProductInfoSection} outline p-2 m-2 `}>
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

            










        </div>


    )
}