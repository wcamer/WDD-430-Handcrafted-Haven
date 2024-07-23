import ProductListing from './ui/components/home-product-listing';
import Header from './ui/header';
import Footer from './ui/footer';
//import { signIn, signOut, useSession } from 'next-auth/react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  //const { data: session, status } = useSession();
   //console.log('session ', session);
  return (
    <main className="h-[32rem]">
      <Header />
      {/* <h1>Home Page</h1> */}
      {/* <p className="mt-4	">
        The space here is to show that the footer stays at the bottom of the
        page.
      </p> */}
      <ProductListing />
      <Footer />
    </main>
  );
}
