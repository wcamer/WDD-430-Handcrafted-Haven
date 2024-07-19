import {
  addUserBuyingHistory,
  deleteAllUserCart,
  fetchCart,
} from '@/app/lib/util';
import Checkout from '@/app/ui/checkout.module.css';
import { redirect } from 'next/navigation';

export default async function CheckoutForm() {
  const user_id = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c';

  const handleCheckout = async () => {
    'use server';
    const cartItems = await fetchCart(user_id);

    cartItems.forEach(async (item) => {
      await addUserBuyingHistory(
        item.user_id,
        item.product_id,
        item.product_amount,
      );
      console.log('added history');
    });

    await deleteAllUserCart(user_id);

    redirect('/cart/checkout/confirmation');
  };

  return (
    <div>
      <form className={` m-6 flex justify-center p-6 `} action={handleCheckout}>
        <fieldset className={`${Checkout.form} m-3 p-3 outline`}>
          <legend className="p-2 ">Purchase Form</legend>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" required />
          <br />
          <br />
          <label htmlFor="address">Address</label>
          <br />
          <input type="text" id="address" required />
          <br />
          <br />
          <label htmlFor="city">City</label>
          <br />
          <input type="text" id="city" required />
          <br />
          <br />
          <label htmlFor="state">State</label>
          <br />
          <input type="text" id="state" required />
          <br />
          <br />
          <label htmlFor="zip">Zip</label>
          <br />
          <input type="text" id="zip" required />
          <br />
          <br />

          {/* <input className={`${Checkout.submitBtn} `} type='submit' value='Complete Order' /> */}

          <button className={`${Checkout.submitBtn} `} type="submit">
            Fake Complete Order
          </button>
        </fieldset>
      </form>
    </div>
  );
}
