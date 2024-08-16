
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckCodePage() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleVerifyCode = () => {
    
    const isValidCode = code === 'VALID_CODE'; // juste exemle

    if (isValidCode) {
      router.push(`/participation-details?id=${encodeURIComponent('1')}`); 
    } else {
      alert('Code invalide');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6 text-center bg-sky-500">Vérification du Code</h1>
          <input
            type="text"
            value={code}
            onChange={handleCodeChange}
            placeholder="Entrez votre code"
            className="w-full p-3 border border-gray-300 rounded mb-6"
          />
          <button
            onClick={handleVerifyCode}
            className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          >
            Vérifier
          </button>
        </div>
      </div>
    </div>
  );
}
