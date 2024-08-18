'use client';
import Image from 'next/image';
import { useEffect } from 'react';

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
    <footer className="bg-[#8FB43A] text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex justify-center lg:justify-start mt-4">
          <div className="h-32 w-32 rounded-full bg-white flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="Logo The Tip-Top Bio"
              width={35}
              height={35}
              className="h-35 w-35 object-contain rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="font-bold mb-2">THE TIP-TOP</h3>
          <a href="/home" className="hover:underline">
            Accueil
          </a>
          <a href="/login" className="hover:underline">
            Connexion
          </a>
          <a href="/register" className="hover:underline">
            Inscription
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="font-bold mb-2">NOUS CONTACTER</h3>
          <a href="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="font-bold mb-2">CGU/CGV</h3>
          <a href="/home/mentions-legales" className="hover:underline">
            Mentions légales
          </a>
          <a href="home/cgu" className="hover:underline">
            CGU / CGV
          </a>
        </div>
      </div>

      <div className="container mx-auto text-center mt-6">
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-4">ABONNEZ-VOUS À NOTRE NEWSLETTER</h3>
          <form className="flex flex-col sm:flex-row justify-center w-full max-w-md">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="p-2 rounded-md text-gray-800 mb-2 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="p-2 bg-white text-[#8FB43A] rounded-md font-semibold hover:bg-gray-200 transition duration-300"
            >
              Sabonner
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto text-center mt-4">
        <p className="text-white text-sm">&copy; 2024 Thé Tip-Top Bio</p>
      </div>
    </footer>
  );
};

export default Footer;
