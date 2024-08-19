'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CircleUser, ContactIcon, HomeIcon, Menu, SquareUser, Search, LogOut } from "lucide-react"
import { FaUser } from 'react-icons/fa'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import NavBar from "@/components/Navbar"
import Image from 'next/image';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import LogoutButton from '@/components/auth/logoutButton';

const Header = () => {
  const user = useCurrentUser()
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
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src="/logofinal.png"
                width={90}
                height={90}
                alt="Thetiotop logo"
                className="bg-red-500"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Thé Tip Top</h1>
            </Link>

            <Link
              href="/home"
              className="text-muted-foreground flex gap-6 transition-colors hover:text-foreground"
            >
              <HomeIcon />
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
              href="/sign-up"
              className="text-muted-foreground flex gap-6 items-center transition-colors hover:text-foreground"
            >
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
                <AvatarFallback className='bg-[#8FB43A] cursor-pointer'>
                  <FaUser className='text-white' />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white' align="end">
              <LogoutButton>
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className='h-4 w-4 mr-2' />
                  Logout</DropdownMenuItem>
              </LogoutButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      )}
    </header>
  );
};

export default Header;
