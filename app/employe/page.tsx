'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormMessage from '@/components/FormMessage';
import { verifyCodeTicket } from '@/lib/actions/user.action';

export default function CheckCodePage() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVerifyEmail = () => {
    verifyCodeTicket(email)
      .then(() => {
        // router.push(`/employe/participation-details?id=${encodeURIComponent(ticket?.ticketId || '')}`);
        router.push(`/employe/participation-details?user=${encodeURIComponent(email || '')}`);
      })
      .catch((err) => {
        setError('Une erreur est servenue');
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleVerifyEmail();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-60px)] bg-white">
      <div className="flex flex-col gap-y-3 w-[320px] md:w-[600px]  p-5 mb-40">
        <h1 className="text-2xl md:text-5xl font-bold mb-8 text-[#8FB43A] text-center">Thé Tip-Top</h1>

        <div className="relative w-full max-w-xl">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            placeholder="Entrez l'e-mail"
            className="w-full p-2 pl-12 md:p-4 md:pl-12 border border-gray-300 rounded-full text-lg"
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
        <FormMessage style="rounded-full" type="ERROR" message={error} />
      </div>

      <div className="mt-8"></div>
    </div>
  );
}
