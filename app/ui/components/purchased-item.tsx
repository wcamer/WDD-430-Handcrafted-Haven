import Link from 'next/link';
import Image from 'next/image';
import Products from '@/app/ui/products.module.css';
import { fetchProduct } from '@/app/lib/util';



export default async function PurchasedItem({props}: {props: any}) {

  console.log('here is props in product-disaplyyyyyy', props)

  const getItem = fetchProduct.bind(null,props.product_id)
  console.log('here is getItemmmmmmmmmmmmmmmmmmmmmm', getItem)
  const item = await fetchProduct(props.product_id)

  if(props.product_rating === 0){
    props.product_rating = 'Pending'
  }
  return (
    <section className={`${Products.prodCont} outline `} key={item.product_id}>
      <div className="flex justify-center p-2 m-2">
        <Link href={`/product/${item.product_id}`}>
          <Image
            src={item.product_image}
            width={600}
            height={600}
            alt={`This is an image of ${item.product_name}`}
          />
        </Link>
      </div>
      <div className="px-4 py-2">
        <p className="mb-2 flex">{item.product_name}</p>
        <p>
          Price: $<span>{props.product_price}</span>
        </p>
      </div>
      
    </section>
  );
}
