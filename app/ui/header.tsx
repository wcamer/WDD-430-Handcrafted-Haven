'use server'
import Link from 'next/link';
import Image from 'next/image';
import NavigationMenu from './components/navigation-menu';

import Spacer from '@/app/ui/spacer.module.css';
import { signOut } from '@/auth';

import { cookies } from 'next/headers';
import { setEngine } from 'crypto';


export default async function Header() {
  // change when login status is conplete
  const isLoggedIn: boolean = false;
  const cookieStore = cookies();
  const sessionId = cookieStore.get('session_id');
  console.log('cookies ', cookieStore)
  console.log('session id ', sessionId);
  

  return (
    <header
      className={`flex flex-row items-center justify-between px-4 py-6 ${Spacer.spacer} `}
    >
      <Link href='/'>
       <Image
        src="/images/logo-l.png"
        width={200}
        height={51}
        alt="logo"
      />
      
      </Link>
     
      <NavigationMenu isLoggedIn={isLoggedIn} />
    </header>
  );
}
