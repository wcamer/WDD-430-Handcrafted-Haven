// 'use client'
import Link from 'next/link'
import Image from 'next/image'

// interface Product {
//     name: string;
//     price: string;
//     link: string;
//     rating: string;
//     imageSrc: string;
//     imageAlt: string;

// }

// interface ProductDisplayProps {
//     product: Product;
//   }

// //need a product as an argument
// export default function ProductDisplay({product}: ProductDisplayProps) {


//     return (
//         <section className='p-2 m-2 outline outline-9 outline-offset-2'>
//             <div className='flex justify-center p-2 m-2 outline'>
//                 <Link 
//                     href='/'
//                     //  href={product.link}
//                   >
//                         <Image 
//                             src= {product.imageSrc}
//                             width={600}
//                             height={600}
//                             alt={product.imageAlt}
//                         />
//                 </Link>
//             </div>
//             <div className='p2'>
//                 <p className='flex justify-center'>{product.name}</p>
//                 <p>Price: $<span>{product.price}</span></p>
//                 <p>Rating: <span>{product.rating}</span></p>
//             </div>
//             <div className='text-center p2  outline outline-1 outline-offset-2'>
//             <button className=' p-2 bg-green-500 hover:text-white hover:bg-black'>Add To Cart</button>
//             </div>
            
           

//         </section>
//     )
// }

// placeholder test code below 
export default function ProductDisplay() {


    return (
        <section className='p-2 m-2 outline outline-9 outline-offset-2'>
            <div className='flex justify-center p-2 m-2 outline'>
                <Link
                    href='/'
                >
                   <Image 
                src='/images/600x600ph.jpg'
                width={600}
                height={600}
                alt='Placeholder image'
                /> 
                </Link>
                
            </div>
            <div className='p2'>
                <p className='flex justify-center'>Name of product</p>
                <p>Price: $<span>1000</span></p>
                <p>Rating: <span>7.7</span></p>
            </div>
            <div className='grid grid-cols-1 text-center p2  outline outline-1 outline-offset-2'>
            <button className=' p-2 bg-green-500 hover:text-white hover:bg-black'>Add To Cart</button>
            </div>
            
           

        </section>
    )
}