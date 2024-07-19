import Cart from '@/app/ui/cart.module.css';
import CartItem from './cart-item';
import { fetchCart, getCartTotalPrice } from '@/app/lib/util';
import { CartProduct } from '@/app/lib/database-definitions';

interface User {
  userId: string;
}

export default async function CartDisplay(userId: User) {
  const user_id = userId.userId;
  const cartItems: CartProduct[] = await fetchCart(user_id);

  // console.log(product_id_list);
  const cartProductIds = await getCartTotalPrice(user_id);

  let cartTotal = 0;

  cartProductIds.forEach((item) => {
    cartTotal = cartTotal + item.product_price * item.product_amount;
  });

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      <h2>Cart</h2>

      <ul className={`${Cart.cartDisplay} grid-cols-2 md:grid lg:grid-cols-3 `}>
        {cartItems.map((item: CartProduct) => {
          return <CartItem key={item.cart_id} cartItem={item} />;
        })}
      </ul>
      <p className={`${Cart.cartTotal}`}>Total: {USDollar.format(cartTotal)}</p>
    </div>
  );
}
