import ProductListing from "./ui/components/home-product-listing";
import Header from './ui/header'
import Footer from './ui/footer'



export default function Page() {
  return (
    <main className="h-[32rem]">
      
      <Header />
      <ProductListing  />
      <Footer />
    </main>
  );
}
