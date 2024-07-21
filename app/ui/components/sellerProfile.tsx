import Image from "next/image"
import Seller from '@/app/ui/seller-profile.module.css'
import ProfileProductDisplay from "./profile-product-display"
import Link from "next/link"

interface Seller {
  seller_id: string;
  seller_name: string;
  seller_image: string;
  seller_email: string;
  seller_description: string;
  seller_city: string;
  seller_state: string;
  seller_address: string;
  seller_zip: string;
  aveRev: any;
  account_type: string;
  products: any;
  
}



export default async function SellerProfile({seller}: {seller: Seller}){

    interface Product {
        name: string;
        imageUrl: string;
        price: number; 
        rating: any;
        id: string;
        sellerId: string;
        sellerName: string;
        imageAlt: string;
        link: string;
      }


    const products = seller.products
    // console.log('products in sellProfile componenet..........\n',products)
    if(seller.aveRev === 0){
      seller.aveRev = 'Pending'
    }else{
      //check to see if rating a whole number
      if(seller.aveRev % 1 != 0){
          seller.aveRev = (seller.aveRev).toFixed(2)
      }
    }
    return (
        <div className="lg:grid grid-cols-2">
            <div className="flex justify-center items-center justify-around lg:col-span-2">
                <Image 
                    src= {seller.seller_image}//'/images/600x600ph.jpg'
                    width={200}
                    height={200}
                    alt={`${seller.seller_name} profile picture`}//"placeholder image"
                />
                <h1 className={`${Seller.sellerName}`} defaultValue={seller.seller_name}>{seller.seller_name}</h1>
                
            </div>

            <article className={`${Seller.sellerStory}` }>
                <h2>My Story</h2>
                <p>Lena, a passionate crafter, opened an Etsy store to share her handmade jewelry. Each piece, inspired by nature, told a unique story. Customers adored her intricate designs and heartfelt notes. As orders poured in, Lena little shop thrived, turning her hobby into a blossoming, joyful business.</p>

            </article>

            <article className={`${Seller.sellerReview}`}>
                <h2>Overall Review Score</h2>
                <p>{seller.aveRev}/10</p>
                
            </article>

            <article className={`${Seller.sellerProducts} lg:col-span-2`}>
                <h2>Products</h2>
                <button className='p-2 m-2 outline rounded text-xl bg-orange-400 hover:bg-yellow-500' >
                  <Link
                    href={`/profile/${seller.seller_id}/add`}
                  >
                    Create New Product
                  </Link>

                </button>
                <section className="p-2 m-2 md:grid grid-cols-3 lg:grid-cols-5">
                    {products.map((product: Product) => {
                      // console.log('here is a single producttttttttt', product)
                        return (
                        <div className="p-2 " key={product.id}>
                          <ProfileProductDisplay
                            props={product}
                          
                          />
                        </div>

              
                        );
                    })}
                </section>
                
            </article>





        </div>

    )
}