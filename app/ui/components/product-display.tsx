import Link from 'next/link';
import Image from 'next/image';
import Products from '@/app/ui/products.module.css';
import {
  addCartItem,
  checkForExistingCartItem,
  updateCartItemQuantity,
} from '@/app/lib/util';

// placeholder test code below
export default function ProductDisplay(props: {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}) {
  const user_id = 'bedfe120-7bff-4d8a-b5a8-5b2644d2b57c';
  const handleAddItem = async () => {
    'use server';

    const cart_item = await checkForExistingCartItem(props.id);

    if (cart_item?.length != 0) {
      await addCartItem(user_id, props.id, 1);
    } else {
      const newQuantity = (cart_item[0].product_amount += 1);
      await updateCartItemQuantity(cart_item[0].cart_id, newQuantity);
    }
  };
  return (
    <section className={`${Products.prodCont}`}>
      <div className="flex justify-center p-0">
        <Link href={`./${props.id}`}>
          <Image
            src={props.imageUrl}
            width={600}
            height={600}
            alt={props.name}
          />
        </Link>
      </div>
      <div className="px-4 py-2">
        <p className="mb-2 flex">{props.name}</p>
        <p>
          Price: $<span>{props.price}</span>
        </p>
        <p>
          Rating: <span>{`${props.rating}`}</span>
        </p>
      </div>
      <form className="text-center" action={handleAddItem}>
        <button className={`${Products.prodBtn}`} type="submit">
          Add To Cart
        </button>
      </form>
    </section>
  );
}
