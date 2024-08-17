'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-[#8FB43A] p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-12">
        <div className="flex items-center w-20 h-20">
          <Image width={16} height={16} src="/logo.png" alt="Logo The Tip-Top Bio" className="h-16" />
          {/* <h1 className="text-2xl ml-4 font-bold">Thé Tip-Topp</h1> */}
        </div>

        {/* Burger Menu Button */}
        <button className="lg:hidden block text-[#8FB43A] focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.36 6.64a1 1 0 00-1.41-1.41L12 10.17 7.05 5.22a1 1 0 00-1.41 1.41L10.17 12l-4.95 4.95a1 1 0 101.41 1.41L12 13.83l4.95 4.95a1 1 0 001.41-1.41L13.83 12l4.95-4.95z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className="lg:flex lg:space-x-8 mt-4 lg:mt-0 space-y-4 lg:space-y-0">
            <li>
              <Link href="/home" legacyBehavior>
                <a className="font-semibold hover:underline" onClick={toggleMenu}>
                  Accueil
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="font-semibold hover:underline" onClick={toggleMenu}>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login" legacyBehavior>
                <a
                  className="bg-[#8FB43A] text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Inscription
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
