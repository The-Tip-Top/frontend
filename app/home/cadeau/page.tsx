'use client';

import { myFetch } from '@/lib/hooks/useFetch';
import { Gift, Ticket } from '@/lib/types/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

const CadeauPageContent = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [ticket, setTicket] = useState<Ticket>();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const ticketId = searchParams.get('ticketId');

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const response = await myFetch<Gift[]>('gifts', {});
        if (response) {
          response.forEach((g) => {
            switch(g.name) {
              case "Infuseur à thé":
                g.imageUrl = "/detox.jpg"
              break;
              case "Boîte de thé détox ou infusion":
                g.imageUrl = "/signature.jpg"
              break;
              case "Boîte de thé signature":
                g.imageUrl = "/infuseur.jpg"
              break;
              case "Coffret découverte 39€":
                g.imageUrl = "/coffret.jpg"
                break;
                case "Infuseurs à thé":
                  g.imageUrl = "/detox.jpg"
                  break;
                }
              })

              setGifts(response);
        } else {
          console.error('Erreur lors de la récupération des gifts');
        }
        myFetch<Ticket>(`tickets/id/${ticketId}`)
          .then((res) => setTicket(res))
          .catch((err) => console.error(err));
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGifts();
  }, []);

  const handleValidate = () => {
    if (ticketId) {
      localStorage.setItem('ticketId', ticketId);
    }
    router.push('/account/history');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-10 text-center">Vos Cadeaux</h1>

      {isLoading ? (
        <p>Chargement des cadeaux...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <div
              key={gift.giftId}
              className={cn(
                'bg-white shadow-md rounded-lg p-6 max-w-xs text-center transition-transform duration-300',
                {
                  'border-4 border-green-500 scale-105 shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out':
                    ticket?.gift?.giftId === gift?.giftId,
                  'opacity-50': ticket?.gift?.giftId !== gift?.giftId,
                },
              )}
            >
              <Image src={ gift.imageUrl || '/cadeau1.webp'} width={300} height={300} alt="cadeau1" className="rounded-md" />
              <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">{gift.name}</h2>
              <p className="text-gray-600">{gift.description}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleValidate}
        className="mt-12 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-200 shadow-lg"
      >
        Valider le Cadeau
      </button>
    </div>
  );
};

const CadeauPage = () => {
  return (
    <Suspense fallback={<BeatLoader />}>
      <CadeauPageContent />
    </Suspense>
  );
};

export default CadeauPage;
