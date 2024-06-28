import Header from './ui/header';
import Footer from './ui/footer';
import '@/app/ui/global.css';
import ProductListing from './ui/components/home-product-listing';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <ProductListing />
        <Footer /> */}
      </body>
    </html>
  );
}
