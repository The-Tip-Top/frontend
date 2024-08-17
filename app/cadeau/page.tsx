// 'use client';

// import { myFetch } from '@/lib/hooks/useFatch';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// // TypeScript interface for gift and Gift

// export interface Gift {
//   giftId: string;
//   status: string;
//   name: string;
//   description: string;
//   ticket?: Ticket;
// }

// export interface Ticket {
//   ticket: string;
//   ticketId: string;
//   maxValidDate: string;
//   isValid: string;
//   ticketUserId?: string;
//   ticketGiftId?: string;
// }

// export default function CadeauPage() {
//   const [gifts, setGifts] = useState<Gift[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const searchParams = useSearchParams();

//   const ticketId = searchParams.get("ticketId");

//   useEffect(() => {
//     const fetchGifts = async () => {
//       try {
//         const response = await myFetch<Gift[]>('gifts', {});
//         if (response) {
//           setGifts(response);
//         } else {
//           console.error('Erreur lors de la récupération des gifts');
//         }
//       } catch (error) {
//         console.error('Erreur:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchGifts();
//   }, []);

//   console.log(ticketId);
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Cadeaux</h1>

//       {isLoading ? (
//         <p>Chargement des gifts...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {gifts.map((gift) => (
//             <div
//               key={gift.giftId}
//               className={cn("bg-white shadow-md rounded-lg p-4 max-w-xs text-center",  {
//                  'bg-red-700': ticketId === gift?.ticket?.ticketId,
//               })}
//             >
//               <Image src={"/cadeau1.webp"} width={300} height={300} alt='cadeau1'/>
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">gift ID: {gift.giftId}</h2>
//               {/* <p className="text-gray-500">Validité: {gift.isValid ? 'Valide' : 'Non Valide'}</p> */}
//               <p className="text-gray-500 mb-4">Name: {(gift.name)}</p>
//               {/* <p className="text-gray-500 mb-4">Name: {(gift.ticket.ticketId)}</p> */}
//               {/* {gift.gift ? (
//                 <>
//                   <h3 className="text-lg font-bold text-green-600">Cadeau:</h3>
//                   <p className="text-gray-700">{gift.gift.name}</p>
//                   <p className="text-gray-500">{gift.gift.description}</p>
//                 </>
//               ) : (
//                 <p className="text-gray-500">Aucun cadeau associé</p>
//               )} */}
//             </div>
//           ))}
//         </div>
//       )}

//       <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-200">
//         Valider le Cadeau
//       </button>
//     </div>
//   );
// }
'use client';

import { myFetch } from '@/lib/hooks/useFatch';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// TypeScript interface for Gift and Ticket
export interface Gift {
  giftId: string;
  status: string;
  name: string;
  description: string;
  ticket?: Ticket;
}

export interface Ticket {
  ticket: string;
  ticketId: string;
  maxValidDate: string;
  isValid: string;
  ticketUserId?: string;
  ticketGiftId?: string;
}

export default function CadeauPage() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const ticketId = searchParams.get('ticketId');

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const response = await myFetch<Gift[]>('gifts', {});
        if (response) {
          setGifts(response);
        } else {
          console.error('Erreur lors de la récupération des gifts');
        }
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGifts();
  }, []);

  const handleValidate = () => {
    // Redirection vers la page de connexion
    router.push('/login');
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
                    ticketId === gift?.ticket?.ticketId,
                  'opacity-50': ticketId !== gift?.ticket?.ticketId,
                },
              )}
            >
              <Image src={'/cadeau1.webp'} width={300} height={300} alt="cadeau1" className="rounded-md" />
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
}
