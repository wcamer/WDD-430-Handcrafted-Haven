import Image from 'next/image';
import Cart from '@/app/ui/cart.module.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { CartProduct, Product } from '@/app/lib/database-definitions';
import {
  deleteCartItem,
  fetchProduct,
  updateCartItemQuantity,
} from '@/app/lib/util';

interface Cart {
  cartItem: CartProduct;
}

export default async function CartItem(cartItem: Cart) {
  const cart_item = cartItem.cartItem;
  const productItem: Product = await fetchProduct(cart_item.product_id);

  const handleDelete = async () => {
    'use server';
    await deleteCartItem(cart_item.cart_id);
  };

  return (
    <li className={`flex items-center  p-6`}>
      <div className={`${Cart.cartItem} outline `}>
        <Image
          src={productItem.product_image}
          width={300}
          height={300}
          alt={productItem.product_name}
        />
        <h2>{productItem.product_name}</h2>
        <QuantityChanger cartItem={cart_item} />

        <p>{productItem.product_price}</p>
      </div>

      <form className={`${Cart.cartDeleteBtn} m-6 p-6`} action={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </li>
  );
}

function QuantityChanger(cartItem: Cart) {
  const cart_item = cartItem.cartItem;
  const handleDecrease = async () => {
    'use server';
    const newQuantity = cart_item.product_amount - 1;
    if (newQuantity > 0) {
      await updateCartItemQuantity(cart_item.cart_id, newQuantity);
    }
  };
  const handleIncrease = async () => {
    'use server';
    const newQuantity = cart_item.product_amount + 1;
    await updateCartItemQuantity(cart_item.cart_id, newQuantity);
  };
  return (
    <div className={`${Cart.cartQuantSec} flex justify-around `}>
      <form action={handleDecrease}>
        <button type="submit">
          <ArrowLeftIcon className="h-6 w-6 text-black outline" />
        </button>
      </form>

      <p>
        QTY: <span className="cartQuantCount">{cart_item.product_amount}</span>
      </p>
      <form action={handleIncrease}>
        <button type="submit">
          <ArrowRightIcon className="h-6 w-6 text-black outline" />
        </button>
      </form>
    </div>
  );
}
