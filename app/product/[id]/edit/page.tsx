// import Header from '../ui/header'
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import ProductHighlight from '@/app/ui/components/productHighlight';
import { fetchProduct, fetchSeller } from '@/app/lib/util';
import { ProductEditForm } from '@/app/ui/components/product-edit-form';
import { Metadata } from 'next';
import Highlight from '@/app/ui/product-highlight.module.css'
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Product Edit',
};

interface Product {
    product_id: string;
    product_name: string;
    product_description: string;
    product_rating: string;
    product_price: string;
    product_image: string;
    product_imageAlt: string;
    sellerName: string;
    

  }

interface User {
    user_id: string | undefined;

}


// interface PageParams{
//     productId: string;
//     userId?: string | null | undefined
// }
export default async function Page({ params }: { params: {id: string, userId: string}}) {
    const id = params.id;
    console.log("!!!!!!!!!!!!!", params)
    ////acutal user  should be an error
    // const someUser = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c' //Good test example this will need to get the user is from session
    
    ////actual seller
    const someUser = 'b3a538e3-e006-4fbc-b334-f53d599ade77'

    ////error example
    // const someUser = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57cCC' //BAD test example this will need to get the user is from session

    const [productData, userData] = await Promise.all([fetchProduct(id), fetchSeller(someUser)])
    
    

    /////////////test 1
    // const [productData] = await Promise.all([fetchProduct(id)])

    // let userId = params.userId

    // let user

    // if(userId === null || userId === undefined){
    //     let noUser: User = {
    //         user_id: 'Not Logged In'
    //    }
    //    user = noUser
    // } else{
    //     const userData = await Promise.all([fetchUser(userId)])
    //    let foundUser: User={
    //         user_id: userData[0].user_id

    //     }

    //     user = foundUser
        
    // }
   
    // console.log('here is user from params...', user)
   
    // const productData = await fetchProduct(id)
    // const userInfo = await

    //////////////////test 2
    let user: User= {
        user_id: ''
    }

    console.log('here is userDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...', userData)

    if(userData ==='0' || userData === undefined){
        console.log('No users are logged in')
        // let user: User ={
        //     user_id: 'Not Logged In' 
        // }
        notFound()
        user.user_id = 'No User is logged in'

    } else {
        // let user: User ={
        //     user_id: userData.user_id 
        // }
        user.user_id = userData.seller_id

    }

    // let user: User ={
    //     user_id: userData.user_id
    // }

    console.log('here is user in the product id edit page...', user)

    if(productData === '0'){
      notFound()
    }



    // if(!productData){
    //     notFound()
    // }

   
    
    console.log('here is productData in product[id]page.......',productData
        ,'\n here is user data....',userData
        ,'\n here is user...', user
        
    )
    

    let productName = 'placeholder name' //productData.product_name 

    let product: Product = {
    product_id: id,
    product_name: productData.product_name,//'filler name',
    product_description: productData.product_description,
    product_rating: productData.product_rating,
    product_price: productData.product_price,
    product_image: productData.product_image,
    product_imageAlt: `This is an image of ${productName}`,
    sellerName: productData.sellerName
    

    }

   


  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Product Edit page</h1>
      <div className={`flex  justify-center` }>
       

        <div className='  flex ' >
            <ProductEditForm product={product} user={user}/>
        </div>
         
      
      </div>


    
      <Footer />
    </main>
  );
}