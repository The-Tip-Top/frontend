import Image from 'next/image';
import Link from 'next/link';
import { SiderbarProps } from '@/components/navigation/Sidebar';

const NavBar = ({ user, role = 'USER' }: SiderbarProps) => {
  return (
    <nav className="hidden sm:hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link href={role === 'EMPLOYEE' ? "/employe" : "/home"} className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Image src="/logofinal.png" width={70} height={70} alt="Thetiotop logo" />
        <span className="sr-only">Toggle user menu</span>
      </Link>
      {role === 'EMPLOYEE' ? (
        <Link
          href="/employe"
          className="text-muted-foreground text-[#8FB43A] text-[20px] transition-colors hover:text-foreground"
        >
          Accueil
        </Link>
      ) : (
        <>
          <Link href="/home" className="text-muted-foreground text-[#8FB43A] text-[20px] transition-colors hover:text-foreground">
            Accueil
          </Link>

          <Link href="/home/blog" className="text-muted-foreground text-[#8FB43A] text-[20px] transition-colors hover:text-foreground">
            Blog
          </Link>

          <Link
            href="/home/about"
            className="text-muted-foreground text-[#8FB43A] text-[20px] transition-colors hover:text-foreground"
          >
            About
          </Link>
        </>
      )}
      {role !== 'EMPLOYEE' && (
        <Link
          href="/home/contact"
          className="text-muted-foreground text-[#8FB43A] text-[20px] transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      )}
      {!user ? (
        <Link href="/sign-in" className="text-muted-foreground text-[20px] transition-colors hover:text-foreground">
          Connexion
        </Link>
      ) : null}
      {/* <Link href="/settings" className="text-muted-foreground text-[20px] transition-colors hover:text-foreground">
        settings
      </Link> */}
    </nav>
  );
};

export default NavBar;
