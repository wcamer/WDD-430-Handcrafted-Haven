import Image from "next/image"
import { LeftArrow, RightArrow } from "./arrows"
import Cart from '@/app/ui/cart.module.css'


// export default async function CartItem() {


//     return(
//         <li className={`${Cart.cartItem} p-6 m-6`}>
//             <Image 
//                 src='/images/600x600ph.jpg'
//                 width={300}
//                 height={300}
//                 alt='Placeholder image'
//                 /> 
//             <h2>
//                 Product Name
//             </h2>

//             <p>$1000</p>
//             <div className={`${Cart.cartQuant} flex justify-around `}>
                
//                     <LeftArrow />
//                     <p>QTY: 1</p>
//                     <RightArrow />
                
                
//             </div>
            
//             <button className={`${Cart.cartDeleteBtn}`}>Delete</button>




//         </li>



//     )
// }

export default async function CartItem() {


    return(
        
        <li className={`flex items-center  p-6`}>
            <div className={`${Cart.cartItem} outline `}>
                <Image 
                    src='/images/600x600ph.jpg'
                    width={300}
                    height={300}
                    alt='Placeholder image'
                    /> 
                <h2>
                    Product Name
                </h2>

                <p>$1000</p>
                <div className={`${Cart.cartQuantSec} flex justify-around `}>
                    
                        <LeftArrow />
                        <p>QTY: <span className="cartQuantCount">0</span></p>
                        <RightArrow />
                    
                    
                </div>
            </div>

            <div>
                <button className={`${Cart.cartDeleteBtn} p-6 m-6`}>Delete</button>
            </div>
           
            
            




        </li>



    )
}