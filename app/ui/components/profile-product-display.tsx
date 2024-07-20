import Link from 'next/link';
import Image from 'next/image';
import Products from '@/app/ui/products.module.css';



export default function ProductDisplay({props}: {props: any}) {

//   console.log('here is props in product-disaplay...', props)

  if(props.product_rating === 0){
    props.product_rating = 'Pending'
  }
  return (
    <section className={`${Products.prodCont} outline `} key={props.product_id}>
      <div className="flex justify-center p-0">
        <Link href={`/product/${props.product_id}`}>
          <Image
            src={props.product_image}
            width={600}
            height={600}
            alt={`This is an image of ${props.product_name}`}
          />
        </Link>
      </div>
      <div className="px-4 py-2">
        <p className="mb-2 flex">{props.product_name}</p>
        <p>
          Price: $<span>{props.product_price}</span>
        </p>
        <p>
          Rating: <span>{props.product_rating}</span>
        </p>
      </div>
      <div className="text-center">
        <button 
            className={`${Products.prodBtn}`}
           
        > 
            <Link href={`/product/${props.product_id}/edit`}>
                Edit
            </Link>
        </button>
        <button 
            className={`${Products.prodBtn}`}
        
        >
            <Link href={`/product/${props.product_id}/delete`}>
                Delete
            </Link>
        </button>
      </div>
    </section>
  );
}
