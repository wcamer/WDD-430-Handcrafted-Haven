import Cart from '@/app/ui/cart.module.css'
import Link from 'next/link'
import CartItem from './cart-item'

export default function CartDisplay(){

    return(
        <div>
            <h2>Cart</h2>
            <ul className={`${Cart.cartDisplay} md:grid grid-cols-2 lg:grid-cols-3 `}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
        
            </ul>
        </div>
        

    )
}