// import Header from '../ui/header'
import Header from '../../ui/header';
import Footer from '../../ui/footer'
import SellerProfile from '../../ui/components/seller-profile';
import CustomerProfile from '../../ui/components/customer-profile';
import { Metadata } from 'next';
import { fetchAllProductsBySeller, fetchProfile, fetchSellersOverallRating } from '@/app/lib/util';

export const metadata: Metadata ={
  title: 'Profile page'
}

export default  async function Page({params}: {params: {id: string}}) {
    const accountId = params.id
    console.log('here is accountId....', accountId)
    const cus = '577dd9e6-1af9-484a-ac7c-ddab33403f54'// this is customer id
    const sell = 'b3a538e3-e006-4fbc-b334-f53d599ade77' // this is a seller id

////////////////////base case that works if profile is seller
    // const [profileInfo, sellersProducts] = await Promise.all([
    //     fetchProfile(accountId), 
    //     fetchAllProductsBySeller(accountId)
    // ])

   
    // /////////// in case the profile is a seller
    // //to get seller's average rating (added all ratings for products based on seller id then divide by total number of products)

    // let sellerTotalRatingPoints = 0
    // {
    //     for (let i = 0; i < sellersProducts.length; i++ ){
    //         // sellerOverallRating += await fetchSellersOverallRating(sellersProducts[i].product_id)
    //         const pr = await fetchSellersOverallRating(sellersProducts[i].product_id)

    //         console.log('the cont int he forrrrrrrrr is...',i
    //             ,'\nhere is sellerProducts length...', sellersProducts.length
    //             ,'\n Here is pr....',pr
    //         )
    //         sellerTotalRatingPoints+= pr

    //     } 
    // }

    // let sellerAveRating = sellerTotalRatingPoints / sellersProducts.length

       
    // console.log('here are profileinfo....', profileInfo)
    // console.log('here are sellerProducts...', sellersProducts)
    // console.log('here are sellerTotalRatingPoints....', sellerTotalRatingPoints,
    //     '\nsellerAveRating...', sellerAveRating
    // )
///////end of base case



//////////////////modular look up
    const profileInfo = await fetchProfile(accountId)

    // console.log('herei the typeof profileInfo.....', typeof(profileInfo))

    if(profileInfo.account_type = 'seller'){
        const sellersProducts = await fetchAllProductsBySeller(accountId)
        let sellerTotalRatingPoints = 0; //starting amount
        {
                    for (let i = 0; i < sellersProducts.length; i++ ){
                        // sellerOverallRating += await fetchSellersOverallRating(sellersProducts[i].product_id)
                        const pr = await fetchSellersOverallRating(sellersProducts[i].product_id)
            
                        // console.log('the cont int he forrrrrrrrr is...',i
                        //     ,'\nhere is sellerProducts length...', sellersProducts.length
                        //     ,'\n Here is pr....',pr
                        // )
                        sellerTotalRatingPoints+= pr
            
                    } 
                }
                let sellerAveRating = sellerTotalRatingPoints / sellersProducts.length
    } else {
        console.log("we got a customer...")
    }
    // const [sellersProducts] = await Promise.all([
    //     fetchProfile(accountId), 
    //     fetchAllProductsBySeller(accountId),
    //     fetchSellersOverallRating(accountId)
    // ])

///////////////end of modular


    let displayedProfile =    <SellerProfile />  //this will be the variable that is passed a profile
        
    

  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Profile Page</h1>
      {/* base case below */}

        {/* <SellerProfile />
        <CustomerProfile /> */}

      {/* end of base case */}

      {/* modular case below*/}
        {displayedProfile}
     
      
      <Footer />
    </main>
  );
}