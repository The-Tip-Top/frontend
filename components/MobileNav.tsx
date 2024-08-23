'use client';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FooterAdmin from '@/components/FooterAdmin';
import { Separator } from '@/components/ui/separator';
import LogoutButton from './auth/logoutButton';
import { ExtendedUser } from '@/auth';

interface MobileNavProps {
  user: ExtendedUser | undefined;
}

const MobileNav = ({ user }: MobileNavProps) => {
  if (!user) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image
              src="/icons/bio.png"
              width={40}
              height={40}
              alt="Thetiotop logo"
              // className="bg-red-500"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Thetiotop</h1>
          </Link>
          <Separator className="my-4 text-black-2 bg-gray-300" />
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route; //|| pathname.startsWith(`${item.route}/`)

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn('mobilenav-sheet_close w-full bg-gray-50', { 'bg-[#8FB43A]': isActive })}
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive,
                          })}
                        />
                        <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>

            <LogoutButton user={user}>
              <FooterAdmin name={'admin'} email={'admin@gmail.com'} type="mobile" />
            </LogoutButton>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
