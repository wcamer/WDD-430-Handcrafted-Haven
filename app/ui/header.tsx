import Link from 'next/link';

import NavigationMenu from './components/navigation-menu';

import Spacer from '@/app/ui/spacer.module.css';

export default function Header() {
  // change when login status is conplete
  const isLoggedIn: boolean = false;

  return (
    <header
      className={`flex flex-row justify-between px-4 py-6 ${Spacer.spacer} rounded-b-lg`}
    >
      <p>Company Logo / Handcrafted Haven</p> {/* Fill img with profile pic*/}
      <NavigationMenu isLoggedIn={isLoggedIn} />
    </header>
  );
}
