// import Header from '../ui/header'
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import ProductHighlight from '@/app/ui/components/productHighlight';
import { fetchProduct, fetchUser, checkSeller } from '@/app/lib/util';
import { ProductEditForm } from '@/app/ui/components/product-edit-form';
import { Metadata } from 'next';
import Highlight from '@/app/ui/product-highlight.module.css'
import { notFound } from 'next/navigation';
import { NewProductForm } from '@/app/ui/components/product-new-form';

export const metadata: Metadata = {
  title: 'Add New Product  ',
};

// interface Product {
//     product_id: string;
//     product_description: string;
//     product_rating: string;
//     product_price: string;
//     product_image: string;
//     sellerName: string;
//     //product_name???

//   }

// interface User {
//     user_id: string | undefined;

// }


// interface PageParams{
//     productId: string;
//     userId?: string | null | undefined
// }
export default async function Page({ params }: { params: {id: string, userId: string}}) {
    // const id = params.id; // this will be for production
    // let user_id = params.id
    let user_id = 'b3a538e3-e006-4fbc-b334-f53d599ade77' // this is for testing
    console.log("!!!!!!!!!!!!! in the product add", params.id)

    if(params.id === undefined){

      // notFound() // this will be for production
      console.log('WARNING: This is a stand for the user_id', user_id)
    }

    
    const account_type = await checkSeller(user_id)
    console.log('here is account_type...', account_type)
//     const someUser = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57cCC' // this will need to get the user is from session
//     const [productData, userData] = await Promise.all([fetchProduct(id), fetchUser(someUser)])
    
    

//     /////////////test 1
//     // const [productData] = await Promise.all([fetchProduct(id)])

//     // let userId = params.userId

//     // let user

//     // if(userId === null || userId === undefined){
//     //     let noUser: User = {
//     //         user_id: 'Not Logged In'
//     //    }
//     //    user = noUser
//     // } else{
//     //     const userData = await Promise.all([fetchUser(userId)])
//     //    let foundUser: User={
//     //         user_id: userData[0].user_id

//     //     }

//     //     user = foundUser
        
//     // }
   
//     // console.log('here is user from params...', user)
   
//     // const productData = await fetchProduct(id)
//     // const userInfo = await

//     //////////////////test 2
//     // let user
//     // console.log('here is userData...', userData)

//     // if(userData.user_id === '0'){
//     //     console.log('No users are logged in')
//     //     let user: User ={
//     //         user_id: 'Not Logged In' 
//     //     }
        

//     // } else {
//     //     let user: User ={
//     //         user_id: userData.user_id 
//     //     }

//     // }

//     let user: User ={
//         user_id: userData.user_id
//     }

//     if(productData === '0'){
//       notFound()
//   }



//     // if(!productData){
//     //     notFound()
//     // }

   
    
//     console.log('here is productData in product[id]page.......',productData
//         ,'\n here is user data....',userData
//     )
    
//     let product: Product = {
//     product_id: id,
//     product_description: productData.product_description,
//     product_rating: productData.product_rating,
//     product_price: productData.product_price,
//     product_image: productData.product_image,
//     sellerName: productData.sellerName
//     //product_name ???

//     }

   
   

    

    


//   return (
//     <main className="h-[32rem]">
      
//       <Header />
//       <h1>New Product page</h1>
//       {/* <div className={`    md:grid grid-cols-3 lg:grid-cols-5` }> */}
//       <div className={`flex  justify-center` }>
//         {/* <div className='md:col-start-2 col-end-5'>
//             <ProductHighlight product={product}/>
//         </div> */}
            
      

//         <div className='  flex ' >
//             {/* <ReviewForm product={product} user={user} />  */}
//             <NewProductForm />
//         </div>
         
      
//       </div>


//       {/* <ProductHighlight product={product}/>
//       <div className={`${Highlight.rating} p-2 m-2 outline md: col-start-2 row-start-2`}>

//       <div className={` p-2 m-2 md:flex justify-center`}>
//         <ReviewForm  />  
//       </div> */}
      
      
//       <Footer />
//     </main>
//   );
// }




////////// below is just a structure

// export default function Page() {
 


return (
  <main className="h-[32rem]">
    
    <Header />
    <h1>New Product page</h1>
    <div className={`flex  justify-center` }>
      
        

      <div className='  flex ' >
          <NewProductForm seller={user_id}/>
      </div>
       
    
    </div>


    
    
    <Footer />
  </main>
);
}