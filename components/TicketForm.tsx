'use client';

import React, { useState } from 'react';
import { Ticket } from '@prisma/client';
import { myFetch } from '@/lib/hooks/useFetch';
import { useRouter } from 'next/navigation';
import FormMessage from '@/components/FormMessage';

export const TicketForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const code = (formData.get('code') as string).trim();
    if (code.length !== 10) {
      setError('Veuillez entrer un code valide');
      return;
    }

    try {
      const response = await myFetch<Ticket>(`tickets/${code.trim()}`, {});
      if (response) {
        router.push(`/home/cadeau?ticketId=${response.ticketId}`);
      } else {
        setError('Ticket non valide. Veuillez entrer un code valide.');
        // alert('Ticket non valide. Veuillez entrer un code valide.');
      }
    } catch (error) {
      console.error('Erreur lors de la vérification du ticket:', error);
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto mt-16 mb-16 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-[#8FB43A] mb-4">Vérifiez votre Ticket</h2>
      <p className="text-center text-gray-600 mb-6">Entrez le code de votre ticket pour vérifier vos gains.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="code"
          placeholder="Entrez votre code"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8FB43A] transition"
          required
        />
        <FormMessage type="ERROR" message={error} />
        <button
          type="submit"
          className="bg-[#8FB43A] text-white px-4 py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
        >
          Valider
        </button>
      </form>
    </div>
  );
};
