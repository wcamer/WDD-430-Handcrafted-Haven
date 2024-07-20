// 'use client'
import Link from 'next/link';
import Image from 'next/image';
import Products from '@/app/ui/products.module.css';


export default function ProductDisplay(props: any) {
  return (
    <section className={`${Products.prodCont}`} key={props.id}>
      <div className="flex justify-center p-0">
        <Link href={props.link}>
          <Image
            src={props.imageUrl}
            width={600}
            height={600}
            alt={props.imageAlt}
          />
        </Link>
      </div>
      <div className="px-4 py-2">
        <p className="mb-2 flex">{props.name}</p>
        <p>
          Price: $<span>{props.price}</span>
        </p>
        <p>
          Rating: <span>{props.rating}</span>
        </p>
      </div>
      <div className="text-center">
        <button className={`${Products.prodBtn}`}>Add To Cart</button>
      </div>
    </section>
  );
}
