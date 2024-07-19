// import Header from '../ui/header'
import Header from '../ui/header';
import Footer from '../ui/footer';
import CartDisplay from '../ui/components/cart-display';
import Cart from '@/app/ui/cart.module.css';
import Link from 'next/link';

export default function Page() {
  const userId = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c';
  return (
    <main className="h-[32rem]">
      <Header />
      <h1>Cart Page</h1>

      <CartDisplay userId={userId} />
      <div className="flex justify-center">
        <Link href="/cart/checkout">
          <button className={`${Cart.cartCheckoutBtn}`}>Go To Checkout</button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
