'use client';

import Link from 'next/link';
import { ContactIcon, HomeIcon, Menu, SquareUser, LogOut } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

import NavBar from '@/components/navigation/Navbar';
import LogoutButton from '@/components/auth/logoutButton';
import { SiderbarProps } from '@/components/navigation/Sidebar';
import FooterAdmin from '../FooterAdmin';

const Header = ({ user, role }: SiderbarProps) => {
  const pathname = usePathname();
  if(pathname.includes('employe')) return null;
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 bg-white z-50 font-lato text-[#8FB43A] md:px-6">
      <title>Thé Tip Top - Votre Boutique de Thé Bio à Nice</title>
      <meta
        name="description"
        content="Découvrez Thé Tip Top, votre expert en thé bio à Nice. Participez à notre jeu-concours exclusif et explorez nos thés relaxants pour le bien-être.
        Nous ouvrons notre nouvelle boutique à Nice. Thétiptop Nice vous réserve de très belles surprises"
      />
      <h1 className="sr-only">
        Thétiptop, c&apos;est bien plus qu&apos;une boutique de thé. Nous sommes une communauté de passionnés qui croit
        au pouvoir des ingrédients naturels pour le bien-être. Installée à Nice, notre boutique vous propose une
        expérience sensorielle unique autour du thé bio. Thétiptop Nice vous réserve de très belles surprises. Découvrez
        Thétiptop Nice, votre nouvelle boutique de vente de thé bio à Nice et participez à notre jeu-concours exclusif !
        Thétiptop est votre destination de choix pour découvrir une vaste sélection de thés bio à Nice. Notre nouvelle
        boutique est située en plein cœur de la ville. Nous avons des thés bio pour le bien-être, thé détox, thé
        minceur, thé vert, thé noir, thé blanc, thé rouge, thé oolong, thé matcha, thé bio en vrac, thé bio en sachet,
        thé bio en boîte. Jeu concours Thétiptop, Bienvenue chez Thétiptop - Votre Expert en Thé Bio à Nice. Thétiptop,
        c&apos;est bien plus qu&apos;une boutique de thé. Nous sommes une communauté de passionnés qui croit au pouvoir
        des ingrédients naturels
      </h1>
      <NavBar role={role} user={user} />
      <section className="w-full max-w-[264px] h-14 flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <Link href="/home" className="cursor-pointer flex items-center gap-1 px-4">
              <Image src="/logofinal.png" width={70} height={70} alt="Thé Tip-Top logo" />
              <h1 className="text-sm  font-ibm-plex-serif  font-bold text-[#8FB43A]">Thé Tip-Top</h1>
            </Link>
            <Separator className="my-4 text-black-2 bg-gray-300" />
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-2 pt-4 text-black-1">
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
                        className={cn(`mobilenav-sheet_close text-sm !p-3 w-full bg-gray-100`, {
                          'bg-[#8FB43A]': pathname === '/home',
                        })}
                      >
                        <HomeIcon />
                        Accueil
                      </Link>

                      <Link
                        href="/home/blog"
                        className={cn(`mobilenav-sheet_close text-sm !p-3 w-full bg-gray-100`, {
                          'bg-[#8FB43A]': pathname === '/home/blog',
                        })}
                      >
                        <ContactIcon />
                        Blog
                      </Link>

                      <Link
                        href="/home/about"
                        className={cn(`mobilenav-sheet_close text-sm !p-3 w-full bg-gray-100`, {
                          'bg-[#8FB43A]': pathname === '/home/about',
                        })}
                      >
                        <ContactIcon />
                        About
                      </Link>

                      <Link
                        href="/account/history"
                        className={cn(`mobilenav-sheet_close text-sm !p-3 w-full bg-gray-100`, {
                          'bg-[#8FB43A]': pathname === '/account/history',
                        })}
                      >
                        <ContactIcon />
                        Account
                      </Link>
                      <Link
                        href="/home/contact"
                        className={cn(`mobilenav-sheet_close text-sm !p-3 w-full bg-gray-100`, {
                          'bg-[#8FB43A]': pathname === '/home/contact',
                        })}
                      >
                        <ContactIcon />
                        Contact
                      </Link>
                      {!user && (
                        <Link
                          href="/sign-in"
                          className={cn(`mobilenav-sheet_close text-sm !p-3 w-full bg-gray-100`, {
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
              <LogoutButton user={user}>
                <FooterAdmin name={user?.name || 'admin'} email={user?.email || 'admin@gmail.com'} type="mobile" />
              </LogoutButton>
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
