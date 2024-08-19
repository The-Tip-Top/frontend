'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CircleUser, ContactIcon, HomeIcon, Menu, SquareUser, Search } from "lucide-react"

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

const Header = () => {

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 bg-white z-50 font-lato text-[#8FB43A] md:px-6">
      <title>Thé Tip Top - Votre Boutique de Thé Bio à Nice</title>
      <meta name="description" content="Découvrez Thé Tip Top, votre expert en thé bio à Nice. Participez à notre jeu-concours exclusif et explorez nos thés relaxants pour le bien-être.
        Nous ouvrons notre nouvelle boutique à Nice. Thétiptop Nice vous réserve de très belles surprises" />
        <h1 className="sr-only">Thétiptop, c'est bien plus qu'une boutique de thé. Nous sommes une communauté de passionnés qui croit au pouvoir des ingrédients naturels 
          pour le bien-être. Installée à Nice, notre boutique vous propose une expérience sensorielle unique autour du thé bio. Thétiptop Nice vous réserve de très belles surprises.
          Découvrez Thétiptop Nice, votre nouvelle boutique de vente de thé bio à Nice et participez à notre jeu-concours exclusif ! Thétiptop est votre destination de choix pour découvrir
          une vaste sélection de thés bio à Nice. Située en plein cœur de la ville.
          Nous avons des thés bio pour le bien-être, thé détox, thé minceur, thé vert, thé noir, thé blanc, thé rouge, thé oolong, thé matcha, thé bio en vrac, thé bio en sachet, thé bio en boîte.
          Jeu concours Thétiptop, Bienvenue chez Thétiptop - Votre Expert en Thé Bio à Nice. Thétiptop, c'est bien plus qu'une boutique de thé. Nous sommes une communauté de passionnés qui croit au pouvoir des ingrédients naturels
        </h1>
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
                alt="Thétiptop, votre boutique de thé bio à Nice"
                width={90}
                height={90}
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
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-9 w-9" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white' align="end">
            <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
