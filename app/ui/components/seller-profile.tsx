import Image from "next/image"
import Seller from '@/app/ui/seller-profile.module.css'
import ProductDisplay from "./product-display"



export default async function SellerProfile(){

    // For testing purposes and will be deleted later
    interface Product {
        name: string;
        imageUrl: string;
        price: number;
        rating: number;
        id: string;
        sellerId: string;
        sellerName: string;
        imageAlt: string;
        link: string;
      }
    
      const handicraftProducts = [
        {
          name: 'Handwoven Basket',
          imageUrl: '/images/handcraft1.png',
          price: 25.99,
          rating: 4.7,
          id: 'hc001',
          sellerId: 'seller001',
          sellerName: 'CraftsByEmma',
          imageAlt: 'A beautifully handwoven basket with intricate patterns',
          link: 'https://example.com/products/handwoven-basket',
        },
        {
          name: 'Ceramic Vase',
          imageUrl: '/images/handcraft2.png',
          price: 45.99,
          rating: 4.8,
          id: 'hc002',
          sellerId: 'seller002',
          sellerName: 'PotteryArt',
          imageAlt: 'A tall ceramic vase with elegant floral designs',
          link: 'https://example.com/products/ceramic-vase',
        },
        {
          name: 'Handmade Quilt',
          imageUrl: '/images/handcraft3.png',
          price: 120.0,
          rating: 4.9,
          id: 'hc003',
          sellerId: 'seller003',
          sellerName: 'QuiltsBySarah',
          imageAlt: 'A colorful handmade quilt with patchwork patterns',
          link: 'https://example.com/products/handmade-quilt',
        },
        {
          name: 'Wooden Jewelry Box',
          imageUrl: '/images/handcraft4.png',
          price: 35.5,
          rating: 4.6,
          id: 'hc004',
          sellerId: 'seller004',
          sellerName: 'WoodenWonders',
          imageAlt: 'A wooden jewelry box with intricate carvings',
          link: 'https://example.com/products/wooden-jewelry-box',
        },
        {
          name: 'Knitted Scarf',
          imageUrl: '/images/handcraft5.png',
          price: 22.99,
          rating: 4.5,
          id: 'hc005',
          sellerId: 'seller005',
          sellerName: 'KnitCreations',
          imageAlt: 'A soft knitted scarf in a vibrant color',
          link: 'https://example.com/products/knitted-scarf',
        },
        {
          name: 'Leather Wallet',
          imageUrl: '/images/handcraft6.png',
          price: 40.0,
          rating: 4.7,
          id: 'hc006',
          sellerId: 'seller006',
          sellerName: 'LeatherCraft',
          imageAlt: 'A sleek leather wallet with multiple compartments',
          link: 'https://example.com/products/leather-wallet',
        },
        {
          name: 'Hand-painted Plate',
          imageUrl: '/images/handcraft7.png',
          price: 30.0,
          rating: 4.8,
          id: 'hc007',
          sellerId: 'seller007',
          sellerName: 'ArtisticPlates',
          imageAlt: 'A decorative hand-painted plate with colorful designs',
          link: 'https://example.com/products/hand-painted-plate',
        },
        {
          name: 'Embroidered Cushion Cover',
          imageUrl: '/images/handcraft8.png',
          price: 18.99,
          rating: 4.6,
          id: 'hc008',
          sellerId: 'seller008',
          sellerName: 'CushionArt',
          imageAlt: 'An embroidered cushion cover with floral patterns',
          link: 'https://example.com/products/embroidered-cushion-cover',
        },
        {
          name: 'Bamboo Wind Chime',
          imageUrl: '/images/handcraft9.png',
          price: 27.99,
          rating: 4.7,
          id: 'hc009',
          sellerId: 'seller009',
          sellerName: 'NatureSounds',
          imageAlt: 'A bamboo wind chime with a soothing sound',
          link: 'https://example.com/products/bamboo-wind-chime',
        },
      ];










    // end of testing code


    return (
        <div className="lg:grid grid-cols-2">
            <div className="flex justify-center items-center justify-around lg:col-span-2">
                <Image 
                    src='/images/600x600ph.jpg'
                    width={200}
                    height={200}
                    alt="placeholder image"
                />
                <h1 className={`${Seller.sellerName}`}>Sellers Name</h1>
                
            </div>

            <article className={`${Seller.sellerStory}` }>
                <h2>My Story</h2>
                <p>Lena, a passionate crafter, opened an Etsy store to share her handmade jewelry. Each piece, inspired by nature, told a unique story. Customers adored her intricate designs and heartfelt notes. As orders poured in, Lena little shop thrived, turning her hobby into a blossoming, joyful business.</p>

            </article>

            <article className={`${Seller.sellerReview}`}>
                <h2>Overall Review Score</h2>
                <p>7.5/10</p>
                
            </article>

            <article className={`${Seller.sellerProducts} lg:col-span-2`}>
                <h2>Products</h2>
                <section className="md:grid grid-cols-3 lg:grid-cols-5">
                    {handicraftProducts.map((product: Product) => {
                        return (
                        <ProductDisplay
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                            imageUrl={product.imageUrl}
                            key={product.id}
                            link={product.link}
                        />
                        );
                    })}
                </section>
                
            </article>





        </div>

    )
}