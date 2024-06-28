const {sql, db} = require('@vercel/postgres')





export async function fetchProductsAToZ(){
    console.log('getting all products A-Z')

    const results = await sql( 
        'SELECT * FROM products ORDER BY product_name ASC '
    )
    return results.rows
}

export async function fetchProductsByPrice(){

}

export async function fetchByCategory(){

}

export async function fetchByMostRecent(){

}

