'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {  ContactIcon, HomeIcon, Menu, SquareUser, LogOut } from "lucide-react";
import { FaUser } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from 'next/image';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import LogoutButton from '@/components/auth/logoutButton';

import NavBar from './navigation/Navbar';

const Header = () => {
  const user = useCurrentUser();

  useEffect(() => {
    // Inject the Google Tag Manager script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DPV2VF21SS';
    document.head.appendChild(script);

    const scriptText = document.createElement('script');
    scriptText.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DPV2VF21SS');
    `;
    document.head.appendChild(scriptText);
  }, []);

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 bg-white z-50 font-lato text-[#8FB43A] md:px-6">
      <title>Thé Tip Top - Votre Boutique de Thé Bio à Nice</title>
      <meta name="description" content="Découvrez Thé Tip Top, votre expert en thé bio à Nice. Participez à notre jeu-concours exclusif et explorez nos thés relaxants pour le bien-être." />
      <h1 className="sr-only">
        Thétiptop, c'est bien plus qu'une boutique de thé. Nous sommes une communauté de passionnés qui croit au pouvoir des ingrédients naturels pour le bien-être...
      </h1>
      <NavBar />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Image src="/logofinal.png" alt="Thétiptop, votre boutique de thé bio à Nice" width={90} height={90} />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Thé Tip Top</h1>
            </Link>
            <Link href="/home" className="text-muted-foreground flex gap-6 transition-colors hover:text-foreground">
              <HomeIcon />
              Accueil
            </Link>
            <Link href="/home/contact" className="text-muted-foreground flex gap-6 transition-colors hover:text-foreground">
              <ContactIcon />
              Contact
            </Link>
            <Link href="/sign-up" className="text-muted-foreground flex gap-6 items-center transition-colors hover:text-foreground">
              <SquareUser />
              Inscription
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {user && (
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback className="bg-[#8FB43A] cursor-pointer">
                  <FaUser className="text-white" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="end">
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
