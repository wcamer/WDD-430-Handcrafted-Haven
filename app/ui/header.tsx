import Link from 'next/link';

import Spacer from '@/app/ui/spacer.module.css';
import Navigation from '@/app/ui/navigation.module.css';

export default function Header() {
  // change when login status is conplete
  const isLoggedIn = false;

  return (
    <header
      className={`flex flex-row justify-between px-4 py-6 ${Spacer.spacer} rounded-b-lg`}
    >
      <p>Company Logo & Name</p> {/* Fill img with profile pic*/}
      <nav>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/stories"
        >
          Stories
        </Link>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/cart"
        >
          Cart
        </Link>
        {isLoggedIn ? (
          <Link className={Navigation.navLink} href="/logout">
            Logout
          </Link>
        ) : (
          <Link className={Navigation.navLink} href="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
