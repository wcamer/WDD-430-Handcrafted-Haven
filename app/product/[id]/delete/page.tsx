// import Header from '../ui/header'
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import { fetchProduct, fetchSeller } from '@/app/lib/util';
import { DeleteProductForm } from '@/app/ui/components/product-delete-form';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Delete Product Page',
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



export default async function Page({ params }: { params: {id: string, userId: string}}) {
    const id = params.id;
    // console.log("!!!!!!!!!!!!!", params)

    ////acutal user  should be an error
    // const someUser = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c' //Good test example this will need to get the user is from session
    
    ////actual seller
    const someUser = 'b3a538e3-e006-4fbc-b334-f53d599ade77'

    ////error example
    // const someUser = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57cCC' //BAD test example this will need to get the user is from session

    const [productData, userData] = await Promise.all([fetchProduct(id), fetchSeller(someUser)])
    
    
    let user: User= {
        user_id: ''
    }

    // console.log('here is userDataaa in delete [id] page..', userData)

    if(userData ==='0' || userData === undefined){
        console.log('No users are logged in')
     
        notFound()
        user.user_id = 'No User is logged in'

    } else {
      
        user.user_id = userData.seller_id

    }

    
 
    // console.log('here is user in the product id delete page...', user)

    if(productData === '0'){
      notFound()
    }
   
    
    // console.log('here is productData in product[id] deletepage.......',productData
    //     ,'\n here is user data....',userData
    //     ,'\n here is user...', user
        
    // )
    

    let product: Product = {
    product_id: id,
    product_name: productData.product_name,//'filler name',
    product_description: productData.product_description,
    product_rating: productData.product_rating,
    product_price: productData.product_price,
    product_image: productData.product_image,
    product_imageAlt: `This is an image of ${productData.product_name}`,
    sellerName: productData.sellerName
    

    }

   


  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Delete product page</h1>
      <div className={`flex  justify-center` }>
       

        <div className='  flex ' >
            <DeleteProductForm product={product} user={user}/>
        </div>
         
      
      </div>


    
      <Footer />
    </main>
  );
}