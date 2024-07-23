import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';

export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/');
      const isOnRegister = nextUrl.pathname.startsWith('/register');
      const isOnConfirmedRegister =
        nextUrl.pathname.startsWith('/successRegister');
      const isOnProfile = nextUrl.pathname.startsWith('/profile');
      const isOnLogin = nextUrl.pathname.startsWith('/login');

      console.log('auth ', auth);
      console.log('request ', nextUrl);
      // console.log('is on dashboard ', isOnDashboard);
      // if (isLoggedIn) {
      //   console.log('auth is working!');
      //   return true;
      // }
      if (isLoggedIn) {
        if (isOnProfile) {
          return true;
        }
        if (isOnDashboard) {
          return true;
        }
        return Response.redirect(new URL('/profile', nextUrl));
      }
      if (!isLoggedIn) {
        if (isOnRegister) {
          return true;
        }
        if (isOnConfirmedRegister) {
          return true;
        }
        return false;
      }

      // if(!isLoggedIn){

      // }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
