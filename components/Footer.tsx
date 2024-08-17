const Footer = () => {
  return (
    <footer className="bg-[#8FB43A] text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex justify-center lg:justify-start mt-4">
          <div className="h-32 w-32 rounded-full bg-white flex justify-center items-center">
            <img src="/logo.png" alt="Logo The Tip-Top Bio" className="h-35 w-35 object-contain rounded-full" />
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
          <a href="https://facebook.com" className="hover:underline" target="_blank">
            Facebook
          </a>
          <a href="https://instagram.com" className="hover:underline" target="_blank">
            Instagram
          </a>
          <a href="https://linkedin.com" className="hover:underline" target="_blank">
            LinkedIn
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="font-bold mb-2">CGU/CGV</h3>
          <a href="/mentions-legales" className="hover:underline">
            Mentions légales
          </a>
          <a href="/cgu" className="hover:underline">
            CGU / CGV
          </a>
        </div>
      </div>

      <div className="container mx-auto text-center mt-6">
        <p className="text-white text-sm">&copy; 2024 Thé Tip-Top Bio</p>
      </div>
    </footer>
  );
};

export default Footer;
