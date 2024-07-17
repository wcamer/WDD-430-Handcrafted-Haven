// import Header from '../ui/header'
import Header from '../ui/header';
import Footer from '../ui/footer'

import SellerProfile from '../ui/components/seller-profile';
import CustomerProfile from '../ui/components/customer-profile';
import ProductHighlight from '../ui/components/product-highlight';



export default  function Page() {


  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Product Page</h1>
      {/* <SellerProfile />
      <CustomerProfile />
      */}
      <ProductHighlight />
      
      
      <Footer />
    </main>
  );
}