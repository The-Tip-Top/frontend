'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import NewsLetter from './NewsLetter';

declare global {
  interface Window {
    axeptioSettings: {
      clientId: string;
      cookiesVersion: string;
    };
  }
}

const Footer = () => {
  useEffect(() => {
    // Axeptio script settings
    window.axeptioSettings = {
      clientId: '66c0fea2e93d2903ab5df8e0',
      cookiesVersion: 'front-staging5-archi-022a-4-5-g2-fr-EU',
    };

    // Create the Axeptio script element
    const axeptioScript = document.createElement('script');
    axeptioScript.async = true;
    axeptioScript.src = '//static.axept.io/sdk.js';
    document.body.appendChild(axeptioScript);

    // Create the Tawk.to script element
    const tawkScript = document.createElement('script');
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/66c1089a146b7af4a43b9b93/1i5h0j72r';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

    // Cleanup function to remove scripts if the component unmounts
    return () => {
      document.body.removeChild(axeptioScript);
      document.body.removeChild(tawkScript);
    };
  }, []);

  return (
    <footer className="bg-[#8FB43A] text-gray-300 py-6 w-full">
      <div className="container px-4 lg:px-8">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
            <div className="h-32 w-32 bg-white rounded-full flex items-center overflow-hidden justify-center">
              <Image
                src="/logofinal.png"
                alt="Logo The Tip-Top Bio"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left mb-6 md:mb-0">
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="font-bold text-lg text-white mb-2">À PROPOS</h3>
              <a href="/home" className="block text-white hover:underline text-sm mb-1">
                Accueil
              </a>
              <a href="/lsign-in" className="block hover:underline text-sm mb-1 text-white">
                Connexion
              </a>
              <a href="/sign-up" className="block hover:underline text-sm text-white">
                Inscription
              </a>
            </div>
            <div className="lg:w-1/3 mb-6 lg:mb-0">
              <h3 className="font-bold text-lg text-white mb-2">NOS SERVICES</h3>
              <a
                href="https://facebook.com"
                className="block hover:underline text-sm mb-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                className="block hover:underline text-sm mb-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a href="https://linkedin.com" className="block hover:underline text-sm text-white">
                LinkedIn
              </a>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="font-bold text-lg text-white mb-2">CGU/CGV</h3>
              <a href="/home/mentions-legales" className="block hover:underline text-sm mb-1 text-white">
                Mentions légales
              </a>
              <a href="/home/cgu" className="block hover:underline text-[12px] text-white">
                CGU / CGV
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <NewsLetter />
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 ">
          <p className="text-white text-xs">&copy; 2024 Thé Tip-Top Bio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
