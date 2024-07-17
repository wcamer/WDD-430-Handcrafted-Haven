// import Header from '../ui/header'
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Navigation from "@/app/ui/navigation.module.css"
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Product Not Found Page',
};
export default async function Page() {
  


  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1 className="text-center text-3xl p-6 m-6">Uh-Oh! Product Not Found...</h1>
      
      <div className="flex justify-center p-6 m-6">
        <button className="place-content-center ">
            <Link className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
            href='/'>
                Return To Home
            </Link>
        </button>
      </div>
      
      <Footer />
    </main>
  );
}