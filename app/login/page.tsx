
import Header from '../ui/header';
import Footer from '../ui/footer'
import LoginForm from '../ui/components/login-form';
import Link from 'next/link';


export default function Page() {
  return (
    <main className="h-[32rem]">
      
      <Header />
      <h1>Login Page</h1>
      <LoginForm />

     
      <div className='flex justify-center p-2 m-2'>
            <p>Need to make an account?<Link href='/register'> Click here to Register</Link></p>
      </div>
      <Footer />
    </main>
  );
}