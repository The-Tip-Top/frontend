'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

import { ExtendedUser } from '@/auth';
import FooterAdmin from '@/components/FooterAdmin';
import LogoutButton from '@/components/auth/logoutButton';
import { Separator } from '../ui/separator';

export interface SiderbarProps {
  user?: ExtendedUser | undefined;
  role?: 'ADMIN' | 'USER' | 'EMPLOYEE';
}

const Sidebar = ({ user }: SiderbarProps) => {
  if (!user) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-4 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/bio.png"
            width={50}
            height={50}
            alt="The tip top logo"
            className="size-[50px] max-xl:size-14"
          />
          <h1 className="text-sm font-bold font-lato text-[#8FB43A]">Thé Tip Top</h1>
        </Link>
        <Separator className="bg-gray-200" />
        {sidebarLinks?.map((item) => {
          const isActive = pathname === item.route; //|| pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn('sidebar-link items-center text-sm !p-3', { '!bg-[#8FB43A]': isActive })}
              href={item.route}
              key={item.label}
            >
              <div className="relative size-6">
                <Image src={item.icon} fill alt={item.label} className={cn({ 'brightness-[3] invert-0': isActive })} />
              </div>
              <p
                className={cn('sidebar-label text-sm ', {
                  '!text-white': isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <LogoutButton user={user}>
        <FooterAdmin name={user?.name ?? 'admin'} email={user?.email ?? 'admin@gmail.com'} type="mobile" />
      </LogoutButton>
    </section>
  );
};

export default Sidebar;
