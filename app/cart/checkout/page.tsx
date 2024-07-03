import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import CheckoutForm from "@/app/ui/components/checkout-form";



export default function Page() {
  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Checkout Page</h1>
      <CheckoutForm />
   
      <Footer />
    </main>
  );
}
