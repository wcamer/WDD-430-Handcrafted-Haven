// import Header from '../ui/header'
import Header from '../ui/header';
import Footer from '../ui/footer'
import CartDisplay from '../ui/components/cart-display';
import Cart from '@/app/ui/cart.module.css'
import Link from 'next/link';


export default function Page() {
  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Cart Page</h1>
     
      <CartDisplay />
      <p className={`${Cart.cartTotal}`}>Total: $1000</p>
      <div className='flex justify-center'>
        
            <Link 
            href='/cart/checkout'>
                <button className={`${Cart.cartCheckoutBtn}`}>
                    
                    Go To Checkout
                </button>
            </Link>
      
      </div>
      
      <Footer />
    </main>
  );
}
