'use client';

import { Button } from '@/components/ui/button';
import { getOneTicket, updateParticipationStatus, verifyCodeTicket } from '@/lib/actions/user.action';
import { EGiftStatus, frStatus, Ticket } from '@/lib/types/types';
import { formatDateTime } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useTransition } from 'react';
import { FadeLoader } from 'react-spinners';

export default function ParticipationDetailsPage() {
  const params = useSearchParams();
  const email = params.get('user');
  // const id = params.get('id');
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (email) {
      startTransition(() => {
        // getOneTicket(id)
        //   .then((ticket) => {
        //     setTicket(ticket);
        //   })
        //   .catch((err) => {
        //     console.log('Error ', err);
        //   });
        verifyCodeTicket(email)
          .then((ticket) => {
            setTickets(ticket);
          })
          .catch((err) => {
            console.log('Une erreur est servenue', err);
          });
      });
    }
  }, [email, startTransition]);

  const handleStatusChange = (ticket: Ticket) => {
    if (ticket && ticket?.participation) {
      updateParticipationStatus(ticket?.participation?.participationId, EGiftStatus.GIFT_GIVEN)
        .then((gift) => {
          setTickets((prevTickets) => {
            if (!prevTickets) return null;
            return prevTickets.map((t) =>
              t.gift?.giftId === gift?.giftId
                ? {
                    ...t,
                    gift: {
                      ...t.gift,
                      status: gift?.status as EGiftStatus,
                      imageUrl: t.gift?.imageUrl ?? '', // provide a default value if undefined
                      giftId: t.gift?.giftId ?? '', // ensure giftId is retained
                      name: t.gift?.name ?? '', // retain or provide defaults for optional fields
                      description: t.gift?.description ?? '',
                    },
                    status: gift?.status as EGiftStatus,
                  }
                : t,
            );
          });
          console.log(gift);
        })
        .catch((err) => {
          console.log('error when udating participation status ', err);
        });
    }
  };
  console.log(isPending);
  return (
    <div className=" min-h-[calc(100vh-60px)] flex justify-center items-center p-3 md:p-10 ">
      {isPending ? (
        <FadeLoader />
      ) : (
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
          {tickets?.map((ticket) => {
            return (
              <div
                className="bg-green rounded-lg shadow-lg 
              md:max-w-md w-full md:w-full lg:max-w-lg border border-gray-200"
              >
                <>
                  <div className="p-3 md:p-6 border-b border-gray-200">
                    <h1 className="text-md font-bold text-gray-800 mb-4">Détails de la Participation</h1>

                    <div className="flex flex-col space-y-2 ">
                      <DetailItem label="Email" value={email ?? ''} />
                      <DetailItem label="Code de Participation" value={ticket?.code ?? ''} />
                      <DetailItem
                        label="Date"
                        value={formatDateTime(ticket?.participation?.createdAt as Date).dateTime ?? ''}
                      />
                      <DetailItem label="Cadeau" value={ticket?.gift?.name ?? ''} />
                      <DetailItem label="Description" value={ticket?.gift?.description ?? ''} />
                      <div className="flex items-center justify-between mt-8 px-3">
                        <p className="text-sm md:text-lg font-semibold text-gray-700">Statut:</p>
                        <span
                          className={`text-sm md:text-lg font-semibold ${
                            ticket?.status === 'GIFT_GIVEN' ? 'text-[#8FB43A]' : 'text-yellow-600'
                          }`}
                        >
                          {ticket?.status && frStatus[ticket?.status]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <Button
                      disabled={ticket?.status === EGiftStatus.GIFT_GIVEN}
                      onClick={() => handleStatusChange(ticket)}
                      className="w-full py-3 bg-[#8FB43A]  text-white rounded-md shadow-md hover:bg-[#48c53f] transition duration-300"
                    >
                      Marquer comme Remis
                    </Button>
                  </div>
                </>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm ">
      <p className="text-sm font-medium text-gray-600">{label}:</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}
