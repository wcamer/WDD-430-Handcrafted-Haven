const {sql, db} = require('@vercel/postgres')





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

