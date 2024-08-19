"use client"

import { auth, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  // const [session, setSession] = useState<Session | null>(null);
  // const { data: session } = useSession();

  // useEffect(() => {
  //   const getSession = async () => {
  //     const session = await auth()
  //     setSession(session)
  //   }
  //   getSession();
  // }, []);

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/home"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image
          src="/logofinal.png"
          width={70}
          height={70}
          alt="Thetiotop logo"
        />
        <span className="sr-only">Toggle user menu</span>
      </Link>
      <Link
        href="/home"
        className="text-muted-foreground text-[20px] transition-colors hover:text-foreground"
      >
        Accueil
      </Link>
      <Link
        href="/home/contact"
        className="text-muted-foreground text-[20px] transition-colors hover:text-foreground"
      >
        Contact
      </Link>
      {/* {session?.user ? (
        <Link
          href="/home"
          onClick={handleSignOut}
          className="text-muted-foreground text-[20px] transition-colors hover:text-foreground"
        >
          Déconnexion
        </Link> */}

      {/* ) : ( */}
        <Link
          href="/sign-up"
          className="text-muted-foreground text-[20px] transition-colors hover:text-foreground"
        >
          Inscription
        </Link>
      {/* )
      } */}
    </nav>
  )
}

export default NavBar
