'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CheckCodePage() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleVerifyCode = () => {
    const isValidCode = code === 'VALID_CODE'; // Exemple de code valide

    if (isValidCode) {
      router.push(`/participation-details?id=${encodeURIComponent('1')}`);
    } else {
      alert('Code invalide');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleVerifyCode();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-36 max-h-screen bg-white" style={{ paddingBottom: '100px' }}>
      <h1 className="text-5xl font-bold mb-8 text-[#8FB43A] text-center">Thé Tip-Top</h1>
      
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={code}
          onChange={handleCodeChange}
          onKeyPress={handleKeyPress} // Ajout du gestionnaire de touche "Entrée"
          placeholder="Entrez votre code"
          className="w-full p-4 pl-12 border border-gray-300 rounded-full text-lg"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-8">
        {/* <Button
          onClick={handleVerifyCode}
          variant="ghost"
          className="px-8 py-3 text-lg rounded-full"
        >
          Vérifier
        </Button> */}
      </div>
    </div>
  );
}
