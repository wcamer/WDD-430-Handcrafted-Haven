// import Header from '../ui/header'
import Header from '../../ui/header';
import Footer from '../../ui/footer'
import SellerProfile from '../../ui/components/sellerProfile';
import CustomerProfile from '../../ui/components/customerProfile';
import { Metadata } from 'next';
import { fetchAllProductsBySeller, fetchProfile,} from '@/app/lib/serv-util';

export let metadata: Metadata ={
  title: 'Profile page'
}



interface Seller {
    seller_id: string;
    seller_name: string;
    seller_image: string;
    seller_imageAlt: string;
    seller_email: string;
    seller_description: string;
    seller_city: string;
    seller_state: string;
    seller_address: string;
    seller_zip: string;
    aveRev: number;
    account_type: string;
    products: any;
    
  }

  interface Customer {
    user_id: string;
    user_name: string;
    user_email: string;
    user_city: string;
    user_state: string;
    user_address: string;
    user_zip: string;
    buyHistory: any;

  }

export default  async function Page({params}: {params: {id: string}}) {
    const accountId = params.id
    let displayedProfile
    let user
    // console.log('here is accountId in profile [id] page....', accountId)
    const cus = '577dd9e6-1af9-484a-ac7c-ddab33403f54'// this is customer id
    const sell = 'b3a538e3-e006-4fbc-b334-f53d599ade77' // this is a seller id



//////////////////modular look up
    const profileInfo = await fetchProfile(accountId)

    // console.log('herei the profileInfo after finding.....', profileInfo)

    if(profileInfo.account_type === 'seller'){

        // console.log('we got a seller................................')
       
        let seller: Seller = {
            seller_id: profileInfo.seller_id,
            seller_name: profileInfo.seller_name,
            seller_image: '/images/600x600ph.jpg', // this needs to be added to db
            seller_imageAlt: ` Profile image of ${profileInfo.seller_name}`,
            seller_email: profileInfo.seller_email,
            seller_description: profileInfo.seller_description,
            seller_city: profileInfo.seller_city,
            seller_state: profileInfo.seller_state,
            seller_address: profileInfo.seller_address,
            seller_zip: profileInfo.seller_zip,
            aveRev: profileInfo.aveRev,
            account_type: profileInfo.account_type,
            products: profileInfo.products
        }

        // console.log('here is seller in profile [iddddddddddddddd', seller)
       
        
        displayedProfile = <SellerProfile seller={seller} />
    } else {
        // console.log("we got a customer...\nhere is the info........\n",profileInfo)
        


        let customer: Customer = {
            user_id: profileInfo.user_id,
            user_name: profileInfo.user_name,
            user_email: profileInfo.user_email,
            user_city: profileInfo.user_city,
            user_state: profileInfo.user_state,
            user_address: profileInfo.user_address,
            user_zip: profileInfo.user_zip,
            buyHistory: profileInfo.buyHistory
        }


        displayedProfile = <CustomerProfile customer={customer}  />



    }
    
    

  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Profile Page</h1>
      
        {displayedProfile}
      
      <Footer />
    </main>
  );
}