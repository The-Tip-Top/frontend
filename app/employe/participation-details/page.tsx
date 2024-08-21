'use client';

import { Button } from '@/components/ui/button';
import { getOneTicket, updateParticipationStatus } from '@/lib/actions/auth.action';
import { EGiftStatus, frStatus, Ticket } from '@/lib/types/types';
import { formatDateTime } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useTransition } from 'react';
import { FadeLoader } from 'react-spinners';

export default function ParticipationDetailsPage() {
  const params = useSearchParams();
  const id = params.get('id');
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (id) {
      startTransition(() => {
        getOneTicket(id)
          .then((ticket) => {
            setTicket(ticket);
          })
          .catch((err) => {
            console.log('Error ', err);
          });
      });
    }
  }, [id, startTransition]);

  const handleStatusChange = () => {
    if (ticket && ticket?.participation) {
      updateParticipationStatus(ticket?.participation?.participationId, EGiftStatus.GIFT_GIVEN)
        .then((gift) => {
          setTicket((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              status: gift?.status as EGiftStatus,
            };
          });
          console.log(gift);
        })
        .catch((err) => {
          console.log('error when udating participation status ', err);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-60px)] bg-gray-50 p-3 md:p-10 ">
      {isPending ? (
        <FadeLoader />
      ) : (
        <div className="bg-white rounded-lg shadow-lg max-w-[350px]  md:max-w-md w-full md:w-full lg:max-w-lg border border-gray-200">
          <div className="p-3 md:p-6 border-b border-gray-200">
            <h1 className="text-md md:text-3xl font-bold text-gray-800 mb-4">Détails de la Participation</h1>

            <div className="flex flex-col space-y-2 ">
              <DetailItem label="Participant" value={ticket?.user?.name ?? ''} />
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
              onClick={handleStatusChange}
              className="w-full py-3 bg-[#8FB43A]  text-white rounded-md shadow-md hover:bg-[#48c53f] transition duration-300"
            >
              Marquer comme Remis
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm h-[50px] md:h-[80px] ">
      <p className="text-sm md:text-lg font-medium text-gray-600">{label}:</p>
      <p className="text-sm md:text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
}
