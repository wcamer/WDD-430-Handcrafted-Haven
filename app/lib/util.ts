'use server'

import {sql} from '@vercel/postgres'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'





export async function fetchProductsAToZ(){
    console.log('getting all products A-Z')

    // const results = await sql( 
    //     'SELECT * FROM products ORDER BY product_name ASC '
    // )

    // return results.rows

    const results = [
        {name:'ph1', price:'1000', rating: '7.9', src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph2', price:'1000', rating: '7.9', src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph3', price:'1000', rating: '7.9' ,src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph4', price:'1000', rating: '7.9' ,src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph5', price:'1000', rating: '7.9' ,src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph6', price:'1000', rating: '7.9' ,src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph7', price:'1000', rating: '7.9' ,src: "/images/600x600ph.jpg", alt: "placeholder image" },
        {name:'ph8', price:'1000', rating: '7.9'  ,src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph9', price:'1000', rating: '7.9',src: "/images/600x600ph.jpg", alt: "placeholder image" },
        { name:'ph10', price:'1000', rating: '7.9' ,src: "/images/600x600ph.jpg", alt: "placeholder image" }
      ]

      return results


}

export async function fetchProductsByPrice(){

}

export async function fetchByCategory(){

}

export async function fetchByMostRecent(){

}

// export async function name(params:type) {
  
// }

// export async function fetchAllRating(){
//   try{
//     const sql
//   }

// }

// works

export async function fetchProfile(id: any): Promise<any>{
  console.log('here is idddddddddddddddddddddd', id)
  let user // this will return the profile info
  try{
    //this is going to return a seller
    const search = await sql `SELECT * FROM sellers WHERE seller_id=${id};`
    user = search.rows[0]
    //this part will get average review score for seller
    const sellersProducts = await fetchAllProductsBySeller(id)
    console.log('here is how many products this seller hasssssssssssss', sellersProducts.length)
   
   //review average section
    let sellerTotalRatingPoints = 0; //starting amount
    let denom = 0 // initial value to figure sellerAveRating
    let sellerAveRating; //this will be either pending or a number at the end
        for (let i = 0; i < sellersProducts.length; i++ ){
            // sellerOverallRating += await fetchSellersOverallRating(sellersProducts[i].product_id)
            const pr = await fetchProductReviews(sellersProducts[i].product_id)
            console.log('Here are the product reviews returned to fetchProfile...\n'
              ,pr
            )
            // console.log('the cont int he forrrrrrrrr is...',i
            //     ,'\nhere is sellerProducts length...', sellersProducts.length
            //     ,'\n Here is pr....',pr
            // )

            if(pr.length > 0){
              console.log("at least 1 review......")
              denom += pr.length
              for (let k = 0; k < pr.length; k++){
                sellerTotalRatingPoints+= pr[k].review_rating
              }

            }

            // sellerTotalRatingPoints+= pr

        } 
    
    // let sellerAveRating = sellerTotalRatingPoints / sellersProducts.length
    if(denom === 0){
      sellerAveRating = 'Pending'
    }else{
           sellerAveRating = sellerTotalRatingPoints / denom

    }

    console.log(
      'sellerTotalRatingPoints...',sellerTotalRatingPoints
      ,'\ndenom....', denom
      ,'\nsellerAveRating.....', sellerAveRating
    )

    //end of review average section


    //returns all information about sellers products
    console.log('here is user before we start adding stuff...\n',user)
    user.aveRev = sellerAveRating
    user.account_type = 'seller'
    user.products = sellersProducts
    

    console.log('here user after the update....\n',user)
    // let overallReviewScore = 
    //   await sql`SELECT seller_id, AVG(review_score) AS average_review_score
    //             FROM reviews
    //             WHERE seller_id = ${id}
    //             GROUP BY ${id};
    //   `



    //   console.log('overaverevsco...',overallReviewScore.rows)
    // console.log('here is user in fetchProfile...',user.rows[0])
    console.log('user created successfully...')
    return user 
  }catch (error){

    // console.log('fetchProfile error... : ', error)
    console.log('No seller found.  Checking for users...')
    try{
      let search = await sql `SELECT * FROM users WHERE user_id=${id}`
      user = search.rows[0]
      
      let buyHistory = await sql`SELECT * FROM buying_history WHERE user_id=${id}`
      
      user.buyHistory = buyHistory.rows
      user.account_type = 'customer'

      console.log('here is user/cusomer after it has been manipulated..,\n',user)
      return user

    }catch(error){
      console.log('fetchProfile error... There is no seller or user at the following id: ', id)
      return '0'
    }
    
    
  }
  
}

export async function checkSeller(id: any) {
  try{
      let seller = await sql `SELECT * FROM sellers WHERE seller_id=${id}`
      console.log('@@@@@@@',seller.rows)
      return seller.rows
  }catch{
    console.log(' the checkSeller search didnt work..........')
  }

}

//give 1 product_id to get all the reviewsf or it
export async function fetchProductReviews(id: any): Promise<any>{
  let prod = await sql`SELECT product_name FROM products where product_id=${id}`
  let allProductReviews = await sql `Select * FROM reviews WHERE product_id=${id}`
  // console.log('fetchProductReviews was successful ...')
  // console.log('allproductReviews in side of fetchProductReviews for...',prod.rows[0].product_name,'.\n', allProductReviews.rows.length)
  console.log('fetchProductReviews...DONE')
  return allProductReviews.rows
  // let ratingDenom = allProductReviews.rows.length
  // let aggRating = 0

  //     {
  //       for(let i = 0; i < allProductReviews.rows.length; i++){
  //         let score = allProductReviews.rows[i].review_rating
  //         console.log('Score in the for loop of fetchselersoverallrating....',score)
  //         aggRating += score 
  //           // aggRating += allProductReviews.rows[i].review_rating
  //       }
  //     }

  // console.log('here are the figures for fetchSellersOvearllRating...\n',
  //   'aggrating: ', aggRating,
  //   '\n ratingDenom', ratingDenom,
  //   '\n average score...', (aggRating/ratingDenom)
  // )

  // return aggRating / ratingDenom
}


export async function fetchAllProductsBySeller(id: any): Promise<any>{
   const prods = await sql `SELECT * FROM products WHERE seller_id=${id}`
  //  console.log('here are your products in fetchallproducts...',prods.rows)
  console.log("fetchAllProductsBySeller...DONE")  
  return prods.rows

  }


//fully operational
export async function fetchUser(id: any): Promise<any>{
  try{
    console.log('here is id in fetch userrr', id)
    const user = await sql `SELECT * FROM users WHERE user_id=${id};`
   
    // const sellers = await sql `SELECT * FROM sellers;`
    // const prods = await sql `SELECT * FROM products WHERE product_id=${id};`

    console.log('here is user in fetchUser...',user.rows[0]
      // ,'here are all the sellers', sellers.rows
      // ,'\nhere are all prods with the id', prods.rows
    )
    return user.rows[0] 
  }catch (error){
    console.log('fetchUser error... Operation Canceled ')//, error)
    // let noUser = {user_id:'0'}
    // return 'No User Logged In'
    return '0'
  }
  
}

export async function fetchSeller(id: any): Promise<any>{
  try{
    console.log('here is id in fetch userrr', id)
    const user = await sql `SELECT * FROM sellers WHERE seller_id=${id};`
   
    // const sellers = await sql `SELECT * FROM sellers;`
    // const prods = await sql `SELECT * FROM products WHERE product_id=${id};`

    console.log('here is user in fetchSeller...',user.rows[0]
      // ,'here are all the sellers', sellers.rows
      // ,'\nhere are all prods with the id', prods.rows
    )

    return user.rows[0] 
  }catch (error){
    console.log('fetchSeller error... Operation Canceled ')//, error)
    // let noUser = {user_id:'0'}
    // return 'No User Logged In'
    return '0'
  }
  
}

export async function fetchProducts(){

  const prods = await sql `SELECT * FROM products`

  console.log('here are prods.......', prods)

  return prods


}

export async function fetchProduct(id: any): Promise<any>{
  console.log('herei the id in fetch product ', id)
  // remove the line below it is for testing only
  // await addAnotherReview(id)
  try{
      //get product by id
      let result = await sql `SELECT * FROM products WHERE product_id=${id}`
      let productInfo = result.rows[0]
      console.log('here i produt info in fetch prodcutt;lakj;dlk', productInfo)
      // get & give seller name
      let sellerName = await sql `SELECT * FROM sellers WHERE seller_id=${result.rows[0].seller_id};`
      productInfo.sellerName = sellerName.rows[0].seller_name

      // get all reviews and find the average for 1 product
      let allProductReviews = await sql `Select * FROM reviews WHERE product_id=${id}`
      if(allProductReviews.rows.length < 1){
        productInfo.product_rating = 0
        return productInfo
      }
      else{
        let ratingDenom = allProductReviews.rows.length
        let aggRating = 0
         // let productInfo = result.rows[0]
        for(let i = 0; i < allProductReviews.rows.length; i++){
            aggRating += allProductReviews.rows[i].review_rating
        }
        productInfo.product_rating = (aggRating / ratingDenom).toString()


          
          //   // let productInfo = result.rows[0]
          // for(let i = 0; i < allProductReviews.rows.length; i++){
          //     aggRating += allProductReviews.rows[i].review_rating
          // }
          
          // productInfo.sellerName = sellerName.rows[0].seller_name
          // productInfo.product_rating = (aggRating / ratingDenom).toString()
          // productInfo.product_rating = productAvgRating
          console.log('here is productInfo.....', productInfo,
            // '\nhere is the products average rating...', (aggRating/ ratingDenom).toString(),
            '\n here is allProductReviews...', allProductReviews.rows
            // '63 out of 70 should be an average of 9...', (aggRating/ratingDenom).toString()
            // ,'\n here is prodcutAveRating....',productAvgRating.rows[0].review_rating,
            // '\n check the length of the returned results...', productAvgRating.rows.length,
            // '\n now i am going to try to do some math...', productAvgRating.rows.length * -10 + productAvgRating.rows[0].review_rating  
            )
          return productInfo
      }
  }catch (error){
    console.log('fetchProduct error: ', error)
    return '0'
  }
  

}

//fully functional
export  async function setUserProdRating(
  userId: any, 
  productId: any, 
  reviewRating: any, 
  reviewDesc: any){

  let date =  new Date()
  
  //review id assuming will be auto-gen'ed
  const user = userId;
  const product = productId;
  const review = reviewDesc;
  const rating = Number(reviewRating);
  const currentDate = date.toISOString();

  console.log('here is...', date,
    '\n user...',user,
    '\n product...',product,
    '\n review',review,
    '\n rating...',rating,
    '\nISOdate...',currentDate
  )
  //will need to send this to an api route???
  try{
    // const reviews = await sql `SELECT * FROM reviews ;`
    // console.log('here is reviewsssssssssssss',reviews.rows
      // , 'here is productttttttttt...', product
    // )

    // const info = await sql`SELECT 
    //                     *
    //                 FROM 
    //                     information_schema.columns
    //                 WHERE 
    //                     table_name = 'reviews';
    //       `
    // console.log('here is infoooooooooooooooooooooooooo',info.rows)
    await sql `INSERT INTO reviews (
                product_id, user_id, review_rating, date_added, review_description 
                )

                VALUES (
                    ${product}, ${user}, ${rating}, ${currentDate}, ${review} 
        
                    );`

    const reviews = await sql `select * from reviews where product_id=${product};`
    console.log('here is reviewsssssssssssss',reviews.rows)
  }catch (error){
    console.log('here is the error in setUserProdRating...',error)
  }


  revalidatePath(`/product/${product}`)
  

  


}


//fully functional
export async function deleteProduct(
  product_id: any,
  seller_id: any,

){

  try{
    const product = await sql `SELECT * FROM products 
                                WHERE product_id=${product_id} AND seller_id=${seller_id};`
    console.log('FROM DELELTE PRODUCT...:\nHere is the product in the product table...',product.rows)
    
    await sql`DELETE FROM products 
              WHERE product_id=${product_id} AND seller_id=${seller_id};`

    const products = await sql`SELECT * FROM products;`
    console.log('from DELETEPRODUCT...:\nhere are all the products...',products.rows)

  }catch (error){
    console.log('There was an error in deleteProduct.  Operation Canceled!')

    redirect('/product/delete/not-found')
  }

  // redirect(`/profile/${seller_id}`)
  redirect(`/product/${product_id}/delete/completed`)

}

//fully functional
export async function createNewProdcut(
  sellerId: any,
  name: any,
  description: any,
  price: any,
  image: any,

){


  const initialRating = 0
  const thumbnail = image
  const date = new Date()
  const currentDate = date.toISOString();
 
 //// comment out below
//   console.log(`here are the variablesfor createNewProduct.........\n
// ${sellerId}, ${name}, ${description}, ${initialRating} ${Math.round(price)}, ${thumbnail}, ${image}, ${currentDate})
// `
//   )
  

  try{
    await sql`INSERT INTO products 
                (seller_id, product_name, product_description, product_rating, 
                product_price, product_thumbnail, product_image, date_added)
              VALUES(
              ${sellerId}, ${name}, ${description}, ${initialRating}, ${Math.round(price)}, ${thumbnail}, ${image}, ${currentDate}
              
              );`

  }catch (error){

    console.log("Error in createNewProduct.  Operation canceled!!!", error)//, error)

  }

  //test to see that product was created successfully
  let id
  try{
   const prods = await sql `SELECT * FROM products WHERE seller_id=${sellerId}`
    // console.log('here are prods after it was created...',prods.rows)
    const newestProductRowIndex = (prods.rows.length) - 1
    // console.log('here is the lengthe of prods.rows.length...', prods.rows.length
    //   , newestProductRowIndex
    //   , prods.rows[newestProductRowIndex].product_id
    // )

    id = prods.rows[newestProductRowIndex].product_id

    // console.log('here is the proID for the redirect', id)
    // revalidatePath('/product/add')
       // redirect(`/product/${id}`)


    // redirect(`/product/${prods.rows[newestProductRowIndex].product_id}`)
    // redirect(`/product/${id}`)

  }catch (error){
    console.log('Error trying to retrieve all prods by seller id in createNewProduct...',error)
  }



  revalidatePath('/product/add')
  redirect(`/product/${id}`)

  


}

// fully operational
export async function editProduct(
  id: any,
  name: any,
  description: any,
  price: any,
  image: any,


){
  
  // // console.log('here is the product in editProduct...',product)
  // console.log('here are the arguments in editProduct...\n',
  //   'id:...',id,
  //   '\nname...', name,
  //   '\ndesc...', description,
  //   '\nprice...', price,
  //   '\nimage...', image
  // )

  try{
    await sql`UPDATE products 
              SET 
                product_name=${name},
                product_description=${description},
                product_price=${price},
                product_image=${image}
                
              WHERE
                product_id=${id};
                `
  

  }catch (error){
    console.log('editProduct error.  Update operation canceled',error)
    return
  }

  revalidatePath(`/product/${id}/edit`)
  redirect(`/product/${id}`)
}

// testing only
async function addAnotherReview(id:any){
  let date = new Date()
  const currentDate = date.toISOString();
  const user = '577dd9e6-1af9-484a-ac7c-ddab33403f54'
  const product = id//'1130eeb8-13f3-4de3-a8f0-aab69c21227e'
  const review ='This is a review for a bad product that is a rating 2.'
  const rating = 2
  
  try{
    await sql `INSERT INTO reviews 
   VALUES (
   ${user}, 
   ${product}, 
   ${review}, 
   ${rating}, 
   ${currentDate});`

   console.log('new review added......')
  }catch (error){
    console.log('addanotherreview error')
    throw error;
  }



}