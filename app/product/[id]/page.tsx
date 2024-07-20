// import Header from '../ui/header'
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import ProductHighlight from '@/app/ui/components/productHighlight';
import { fetchProduct, fetchUser } from '@/app/lib/util';
import { ReviewForm } from '@/app/ui/components/review-form';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Product Page ',
};
 

interface Product {
    product_id: string;
    product_name: string
    product_description: string;
    product_rating: string;
    product_price: string;
    product_image: string;
    sellerName: string;
    

  }

interface User {
    user_id: string | undefined;

}



export default async function Page({ params }: { params: {id: string , userId: string}}) {
    const id = params.id;
    // console.log("!!!!!!!!!!!!!", params)
    //// actual user should work
    const someUser = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c' // this will need to get the user is from session
    
    //actual seller should give an error 
    // const someUser = 'b3a538e3-e006-4fbc-b334-f53d599ade77'

    const [productData, userData] = await Promise.all([fetchProduct(id), fetchUser(someUser)])
    

  let user: User= {
      user_id: ''
  }

  if(userData ==='0' || userData === undefined){
      console.log('No users are logged in')
      notFound()
      user.user_id = 'No User is logged in'

  } else {
      
      user.user_id = userData.user_id
 

  }
    

  if(productData === '0'){
      notFound()
  }

    
    // console.log('here is productData in product[id]page.......',productData
    //     ,'\n here is user data....',userData
    // )
    
    let product: Product = {
    product_id: id,
    product_name: productData.product_name,
    product_description: productData.product_description,
    product_rating: productData.product_rating,
    product_price: productData.product_price,
    product_image: productData.product_image,
    sellerName: productData.sellerName
 

    }

   
   

  
  return (
    <main className="h-[32rem]">
      
      <Header />
      <div className={`outline p-2 m-2  md:grid grid-cols-5` }>
        <div className='md:col-start-2 col-end-5'>
            <ProductHighlight product={product} user={user}/>
        </div>
            
      

        <div className='p-2 m-2 md:col-start-2 col-end-5 row-start-2'>
            <ReviewForm product={product} user={user} /> 
        </div>
         
      
      </div>
      
      <Footer />
    </main>
  );
}