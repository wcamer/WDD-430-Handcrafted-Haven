'use client';

import Link from 'next/link';
import Navigation from '@/app/ui/navigation.module.css';
import { useEffect, useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';

import Spacer from '@/app/ui/spacer.module.css';

interface NavigationMenue {
  isLoggedIn: boolean;
}

export default function NavigationMenu(navigationMenu: NavigationMenue) {
  const menuStateOptions = [
    'hidden',
    `fixed grid ${Spacer.spacer} py-4 top-[5rem] right-0 rounded-bl-lg`,
  ];
  const [menuState, setMenuState] = useState(0);

  return (
    <>
      <nav className={menuStateOptions[menuState]}>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/products/manage"
        >
          Manage Products
        </Link>
        <Link
          className={`${Navigation.navLink} hover:${Navigation.navLinkHover}`}
          href="/cart"
        >
          Cart
        </Link>
        {navigationMenu.isLoggedIn ? (
          <Link className={Navigation.navLink} href="/logout">
            Logout
          </Link>
        ) : (
          <Link className={Navigation.navLink} href="/login">
            Login
          </Link>
        )}
      </nav>
      <Bars3Icon
        className={Navigation.hambMenu}
        onClick={() => {
          setMenuState(menuState ^ 1);
        }}
      />
    </>
  );
}
