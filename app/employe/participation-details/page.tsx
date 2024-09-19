'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { updateParticipationStatus, verifyCodeTicket } from '@/lib/actions/user.action';
import { getUserByEmail } from '@/lib/actions/user.auth.action';
import { EGiftStatus, frStatus, Ticket, User } from '@/lib/types/types';
import { formatDateTime } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useTransition } from 'react';
import { FadeLoader } from 'react-spinners';

export default function ParticipationDetailsPage() {
  const params = useSearchParams();
  const email = params.get('user');
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [isPending, startTransition] = useTransition();
  const [user, setUser] = useState<User | null>(null);
  const [filterBy, setFilterBy] = useState<'createdAt' | 'code' | 'status' | 'giftName' | 'description'>('createdAt');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (email) {
      startTransition(() => {
        getUserByEmail(email).then((u) => setUser(u))
          .catch((e) => console.log("Une erreur est servenue "))
        verifyCodeTicket(email)
          .then((ticket) => {
            setTickets(ticket);
          })
          .catch((err) => {
            console.error('Une erreur est servenue', err);
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
                    imageUrl: t.gift?.imageUrl ?? '',
                    giftId: t.gift?.giftId ?? '',
                    name: t.gift?.name ?? '',
                    description: t.gift?.description ?? '',
                  },
                  status: gift?.status as EGiftStatus,
                }
                : t,
            );
          });
        })
        .catch((err) => {
          console.error('error when udating participation status ', err);
        });
    }
  };
  
  const filteredTickets = tickets?.filter((ticket) => {
    const searchValue = searchTerm.toLowerCase();
    switch (filterBy) {
      case 'createdAt':
        const ticketDate = new Date(ticket.participation?.createdAt ?? "").toLocaleDateString();
        return ticketDate.toLowerCase().includes(searchValue);
      case 'status':
        return frStatus[ticket.status]?.toLowerCase().includes(searchValue);
      case 'giftName':
        return ticket.gift?.name?.toLowerCase().includes(searchValue);
      case 'description':
        return ticket.gift?.description?.toLowerCase().includes(searchValue);
      case 'code':
        return ticket.code?.toLowerCase().includes(searchValue);
      default:
        return false;
    }
  });

  return (
    <div className=" min-h-[calc(100vh-60px)] flex justify-center items-center p-3 pt-10 md:p-10 ">
      {isPending ? (
        <FadeLoader />
      ) : (
        <div className="size-full p-5 pt-4 mb-10 absolute top-20">
          <h2 className="text-xl md:text-2xl px-3 py-4 text-[#8FB43A]" >Les Participations de {user?.name ?? email} </h2>
          <div className="w-full flex justify-end">
            <div className="flex flex-col gap-y-1 xs:flex-row mt-2 mb-4 items-center w-full md:w-[50%]  gap-3">
              <Input
                type="text"
                placeholder="Rechercher un cadeau..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-lg w-full max-w-md shadow-sm focus:outline-none focus:ring-2"
              />

              <Select
                value={filterBy}
                onValueChange={(value) => setFilterBy(value as 'createdAt' | 'code' | 'status' | 'giftName' | 'description')}
              >
                <SelectTrigger className="bg-white border border-gray-300 w-full rounded-lg shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2">
                  <SelectValue placeholder="Choisissez un attribut de filtrage" />
                </SelectTrigger>
                <SelectContent className="border border-gray-300 bg-white rounded-lg shadow-sm mt-2">
                  <SelectItem value="createdAt">Date de création</SelectItem>
                  <SelectItem value="status">Statut</SelectItem>
                  <SelectItem value="giftName">Nom du cadeau</SelectItem>
                  <SelectItem value="description">Description</SelectItem>
                  <SelectItem value="code">Code de Participation</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
          {filteredTickets && filteredTickets?.length > 0 ?
          <>
            <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
              {filteredTickets?.map((ticket) => {
                return (
                  <div
                    className="bg-green rounded-lg shadow-lg md:max-w-md w-full md:w-full lg:max-w-lg border border-gray-200"
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
                              className={`text-sm md:text-lg font-semibold ${ticket?.status === 'GIFT_GIVEN' ? 'text-[#8FB43A]' : 'text-yellow-600'}`}
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
              })
              }
            </div>
            <div className="w-full p-5" />
          </>
            : (
              <div className="flex w-full h-[500px] justify-center items-center border border-gray-100 rounded-md">
                Aucun résultat trouvé
              </div>
            )}
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
