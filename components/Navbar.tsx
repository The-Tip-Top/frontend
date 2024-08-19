'use client';

import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './auth/logoutButton';
import { useEffect } from 'react';

const NavBar = () => {
  const user = useCurrentUser();
  useEffect(() => {
    console.log('----session user ', user);
  }, [user]);
  return (
    <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link href="/home" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Image src="/logofinal.png" width={70} height={70} alt="Thetiotop logo" />
        <span className="sr-only">Toggle user menu</span>
      </Link>
      <Link href="/home" className="text-muted-foreground text-[20px] transition-colors hover:text-foreground">
        Accueil
      </Link>
      <Link href="/home/contact" className="text-muted-foreground text-[20px] transition-colors hover:text-foreground">
        Contact
      </Link>
      {!user && (
        <Link href="/sign-up" className="text-muted-foreground text-[20px] transition-colors hover:text-foreground">
          Inscription
        </Link>
      )}
      {/* <Link href="/settings" className="text-muted-foreground text-[20px] transition-colors hover:text-foreground">
        settings
      </Link> */}
      {/* )
      } */}
    </nav>
  );
};

export default NavBar;
