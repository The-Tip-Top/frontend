'use client';

import Link from 'next/link';
import { ContactIcon, HomeIcon, Menu, SquareUser, LogOut } from 'lucide-react';
import { FaUser } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavBar from '@/components/Navbar';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import LogoutButton from '@/components/auth/logoutButton';
import { SiderbarProps } from './Sidebar';
import { Separator } from './ui/separator';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = ({ user, role }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 bg-white z-50 font-lato text-[#8FB43A] md:px-6">
      <NavBar />
      <Sheet >
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className='bg-white'>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href={role === 'EMPLOYEE' ? '/employe/check-page' : '/home'}
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src="/logofinal.png"
                alt="Thétiptop, votre boutique de thé bio à Nice"
                width={90}
                height={90}
                className="bg-red-500"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Thé Tip Top</h1>
            </Link>

            {role === 'EMPLOYEE' ? (
              <Link
                href="/employe/check-page'"
                className="text-muted-foreground flex gap-6 transition-colors hover:text-foreground"
              >
                <HomeIcon />
                Accueil
              </Link>
            ) : (
              <>
                <Link href="/home" className="text-muted-foreground flex gap-6 transition-colors hover:text-foreground">
                  Accueil
                </Link>
                <Link
                  href="/home/contact"
                  className="text-muted-foreground flex gap-6  transition-colors hover:text-foreground"
                >
                  <ContactIcon />
                  Contact
                </Link>
                <Link
                  href="/home/blog"
                  className="text-muted-foreground flex gap-6  transition-colors hover:text-foreground"
                >
                  <ContactIcon />
                  Jeu Concours
                </Link>
                <Link
                  href="/home/about"
                  className="text-muted-foreground flex gap-6  transition-colors hover:text-foreground"
                >
                  <ContactIcon />
                  About
                </Link>
                <Link
                  href="/sign-in"
                  className="text-muted-foreground flex gap-6 items-center transition-colors hover:text-foreground"
                >
                  <SquareUser />
                  Connexion
                </Link>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet> 
      <section className="w-fulll max-w-[264px]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <Link href="/home" className="cursor-pointer flex items-center gap-1 px-4">
              <Image
                src="/logofinal.png"
                width={70}
                height={70}
                alt="Thé Tip-Top logo"
                // className="bg-red-500"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Thé Tip-Top</h1>
            </Link>
            <Separator className="my-4 text-black-2 bg-gray-300" />
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-black-1">
                  {role === 'EMPLOYEE' ? (
                    <Link
                      href="/employe/check-page"
                      className={cn(`mobilenav-sheet_close w-full bg-gray-50`, {
                        'bg-[#8FB43A]': pathname === '/employe/check-page',
                      })}
                    >
                      <HomeIcon />
                      Accueil
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/home"
                        className={cn(`mobilenav-sheet_close w-full bg-gray-50`, {
                          'bg-[#8FB43A]': pathname === '/home',
                        })}
                      >
                        <HomeIcon />
                        Accueil
                      </Link>

                      <Link
                        href="/account/history"
                        className={cn(`mobilenav-sheet_close w-full bg-gray-50`, {
                          'bg-[#8FB43A]': pathname === '/account/history',
                        })}
                      >
                        <ContactIcon />
                        Account
                      </Link>
                      <Link
                        href="/home/contact"
                        className={cn(`mobilenav-sheet_close w-full bg-gray-50`, {
                          'bg-[#8FB43A]': pathname === '/home/contact',
                        })}
                      >
                        <ContactIcon />
                        Contact
                      </Link>
                      {!user && (
                        <Link
                          href="/sign-in"
                          className={cn(`mobilenav-sheet_close w-full bg-gray-50`, {
                            'bg-[#8FB43A]': pathname === '/sign-in',
                          })}
                        >
                          <SquareUser />
                          Connexion
                        </Link>
                      )}
                    </>
                  )}
                </nav>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </section>

      {user && (
        <div className="flex items-center gap-4 absolute right-3 top-3 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={user?.image || ''} />
                <AvatarFallback className="bg-[#8FB43A] cursor-pointer">
                  <span className="text-white font-bold">{user?.name?.charAt(0).toUpperCase() || ''}</span>
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="end">
              <DropdownMenuItem className="cursor-pointer">
                <FaUser className="text-black-2 mr-2" />
                <Link href={'/account/history'}>Compte</Link>
              </DropdownMenuItem>
              <Separator className="bg-black-2 opacity-5" />
              <LogoutButton>
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </LogoutButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
