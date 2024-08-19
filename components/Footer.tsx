'use client';
import Image from 'next/image';
import { useEffect } from 'react';

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
    <footer className="bg-[#8FB43A] text-gray-300 py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
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
          <div className="flex flex-col lg:flex-row lg:space-x-12 text-center lg:text-left mb-6 lg:mb-0">
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="font-bold text-lg text-white mb-2">À PROPOS</h3>
              <a href="/home" className="block text-white hover:underline text-sm mb-1">Accueil</a>
              <a href="/lsign-in" className="block hover:underline text-sm mb-1 text-white">Connexion</a>
              <a href="/sign-up" className="block hover:underline text-sm text-white">Inscription</a>
            </div>
            <div className="lg:w-1/3 mb-6 lg:mb-0">
              <h3 className="font-bold text-lg text-white mb-2">NOS SERVICES</h3>
              <a href="https://facebook.com" className="block hover:underline text-sm mb-1 text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" className="block hover:underline text-sm mb-1 text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" className="block hover:underline text-sm text-white">LinkedIn</a>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="font-bold text-lg text-white mb-2">CGU/CGV</h3>
              <a href="/home/mentions-legales" className="block hover:underline text-sm mb-1 text-white">Mentions légales</a>
              <a href="/home/cgu" className="block hover:underline text-sm text-white">Cgu / Cgv</a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center lg:text-left mb-6">
            <h3 className="font-bold text-lg text-white mb-2">ABONNEZ-VOUS À NOTRE NEWSLETTER</h3>
            <form className="flex flex-col sm:flex-row justify-center w-full max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="p-2 rounded-md text-gray-800 mb-2 sm:mb-0 sm:mr-2 text-sm"
              />
              <button
                type="submit"
                className="p-2 bg-white text-[#8FB43A] rounded-md font-semibold text-sm hover:bg-gray-200 transition duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-white-400 text-xs">&copy; 2024 Thé Tip-Top Bio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
