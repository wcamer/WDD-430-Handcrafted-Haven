import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Link from 'next/link';
import Navigation from '@/app/ui/navigation.module.css';

export default function Page() {
  return (
    <main className="h-[32rem]">
      <Header />
      <h1 className="m-6 p-6 text-center">Thank You For Your Purchase!</h1>

      <div className="m-6 flex justify-center p-6">
        <button className="place-content-center ">
          <Link
            className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
            href="/"
          >
            Return To Home
          </Link>
        </button>
      </div>

      <Footer />
    </main>
  );
}
