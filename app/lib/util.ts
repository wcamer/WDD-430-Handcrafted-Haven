// const {sql, db} = require('@vercel/postgres')
import {sql} from '@vercel/postgres'





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

export async function fetchUser(id: any): Promise<any>{
  try{
    const user = await sql `SELECT * FROM users WHERE user_id=${id}`
    console.log('here is user in fetchUser...',user.rows[0])
    return user.rows[0] 
  }catch (error){
    console.log('fetchUser error... : ', error)
    // let noUser = {user_id:'0'}
    return 'No User Logged In'
  }
  
}

export async function fetchProducts(){

  const prods = await sql `SELECT * FROM products`

  console.log('here are prods.......', prods)

  return prods


}

export async function fetchProduct(id: any): Promise<any>{

  // remove the line below it is for testing only
  // await addAnotherReview(id)
  try{
      let result = await sql `SELECT * FROM products WHERE product_id=${id}`
      let sellerName = await sql `SELECT * FROM sellers WHERE seller_id=${result.rows[0].seller_id}`
      // let productAvgRating = await sql `Select * FROM reviews WHERE product_id=${id}`
      let allProductReviews = await sql `Select * FROM reviews WHERE product_id=${id}`
      let ratingDenom = allProductReviews.rows.length
      let aggRating = 0

      {let productInfo = result.rows[0]
      for(let i = 0; i < allProductReviews.rows.length; i++){
          aggRating += allProductReviews.rows[i].review_rating
      }
      
      productInfo.sellerName = sellerName.rows[0].seller_name
      productInfo.product_rating = (aggRating / ratingDenom).toString()
      // productInfo.product_rating = productAvgRating
      console.log('here is productInfo.....', productInfo,
        // '\nhere is the products average rating...', (aggRating/ ratingDenom).toString(),
        '\n here is allProductReviews...', allProductReviews.rows
        // '63 out of 70 should be an average of 9...', (aggRating/ratingDenom).toString()
        // ,'\n here is prodcutAveRating....',productAvgRating.rows[0].review_rating,
        // '\n check the length of the returned results...', productAvgRating.rows.length,
        // '\n now i am going to try to do some math...', productAvgRating.rows.length * -10 + productAvgRating.rows[0].review_rating  
      )
      return productInfo}
  }catch (error){
    console.log('fetchProduct error: ', error)
    return '0'
  }
  

}

export  async function setUserProdRating(
  userId: any, 
  productId: any, 
  reviewRating: any, 
  reviewDesc: any){

  let date = new Date()
  
  //review id assuming will be auto-gen'ed
  const user = userId;
  const product = productId;
  const review = reviewDesc;
  const rating = reviewRating;
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
    await sql `INSERT INTO reviews 
    VALUES (${user}, ${product}, ${review}, ${rating}, ${currentDate});`
  }catch (error){
    console.log('here is the error in setUserProdRating...',error)
  }
  

  


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