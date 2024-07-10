// import Header from '../ui/header'
import Header from '../ui/header';
import Footer from '../ui/footer'
import RegForm from '../ui/components/registration-form';
import SellerProfile from '../ui/components/seller-profile';
import CustomerProfile from '../ui/components/customer-profile';


export default  function Page() {


  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Profile Page</h1>
      <SellerProfile />
      <CustomerProfile />
     
      
      <Footer />
    </main>
  );
}