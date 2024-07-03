// import Header from '../ui/header'
import Header from '../ui/header';
import Footer from '../ui/footer'
import RegForm from '../ui/components/registration-form';


export default function Page() {
  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Registration Page</h1>
      <RegForm />

     
      
      <Footer />
    </main>
  );
}