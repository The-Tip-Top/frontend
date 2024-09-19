'use client';

import { StatusBadge } from '@/components/StatusBadge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getUserTickets, linkTicket } from '@/lib/actions/user.action';
import { frStatus, Ticket } from '@/lib/types/types';
import { cn, formatDateTime } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState, useTransition } from 'react';
import { GridLoader } from 'react-spinners';

interface CardItemProps {
  date: Date | string;
  ticket: Ticket;
}

const CardItem = ({ ticket }: CardItemProps) => {
  return (
    <Card
      x-chunk="dashboard-02-chunk-2"
      key={ticket.ticketId}
      className={cn(
        'bg-white shadow-md rounded-lg p-3 max-w-xs text-center transition-transform duration-300 relative',
      )}
    >
      <Image src={ticket?.gift?.imageUrl || '/cadeau1.webp'} width={300} height={300} alt="cadeau1" className="rounded-md" />
      <div className="absolute top-7 left-7">
        <StatusBadge status={ticket.status ?? ''} frStatus={frStatus[ticket.status] ?? ''} />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">{ticket?.gift?.name || ''}</h2>
      <p className="text-gray-600">{ticket?.gift?.description || ''}</p>
      <p className="text-gray-600">{formatDateTime(new Date(ticket?.participation?.createdAt ?? "")).dateTime || ''}</p>
    </Card>
  );
};

export default function HistoryPage() {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [filterBy, setFilterBy] = useState<'createdAt' | 'status' | 'giftName' | 'description'>('createdAt');

  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    linkTicketToUser();
  }, []);

  useEffect(() => {
    startTransition(() => {
      getUserTickets()
        .then((data) => {
          data && data.forEach((t) => {
            switch (t?.gift?.name) {
              case "Infuseur à thé":
                t.gift.imageUrl = "/detox.jpg"
                break;
              case "Boîte de thé détox ou infusion":
                t.gift.imageUrl = "/signature.jpg"
                break;
              case "Boîte de thé signature":
                t.gift.imageUrl = "/infuseur.jpg"
                break;
              case "Coffret découverte 39€":
                t.gift.imageUrl = "/coffret.jpg"
                break;
              case "Infuseurs à thé":
                t.gift.imageUrl = "/detox.jpg"
                break;
            }
          })
          setTickets(data || []);
        })
        .catch((err) => {
          console.error('Error fetching tickets:', err);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTransition]);

  const linkTicketToUser = async () => {
    const ticketId = localStorage.getItem('ticketId');
    if (ticketId) {
      const isLinkedTicket = await linkTicket(ticketId);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isLinkedTicket?.status === 200 && localStorage.clear();
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
      default:
        return false;
    }
  });

  return (
    <div className="history-page bg-gray-50 min-h-[700px] py-6 px-4 md:p-2 md:py-10">
      <div className="flex justify-between w-full items-center flex-col ">
        <div>
          <h1 className="page-title text-center text-4xl font-extrabold text-[#6AA843] mb-8">Historique de vos gains</h1>
          <div className="text-center text-gray-600 max-w-2xl mb-6">
            <p><strong>Explorez l'historique de vos gains</strong></p>
            <p>Sur cette page, vous pouvez consulter l'ensemble de vos tickets gagnants.</p>
          </div>
        </div>

      </div>
      <div className="w-full flex justify-end">
        <div className="flex mt-2 mb-4 items-center w-full md:w-[50%]  gap-3">
          <Input
            type="text"
            placeholder="Rechercher un cadeau..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg w-full max-w-md shadow-sm focus:outline-none focus:ring-2"
          />

          <Select
            value={filterBy}
            onValueChange={(value: string) => setFilterBy(value as 'createdAt' | 'status' | 'giftName' | 'description')}
          >
            <SelectTrigger className="bg-white border border-gray-300 w-full rounded-lg shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2">
              <SelectValue placeholder="Choisissez un attribut de filtrage" />
            </SelectTrigger>
            <SelectContent className="border border-gray-300 bg-white rounded-lg shadow-sm mt-2">
              <SelectItem value="createdAt">Date de création</SelectItem>
              <SelectItem value="status">Statut</SelectItem>
              <SelectItem value="giftName">Nom du cadeau</SelectItem>
              <SelectItem value="description">Description</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>

      <section className="recent-gifts mb-12">
        {isPending ? (
          <div className="w-full h-[400px] flex items-center justify-center">
            <GridLoader loading={isPending} color="black" />
          </div>
        ) : (
          filteredTickets && filteredTickets?.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center lg:grid-cols-3 xl:grid-cols-4">
              {filteredTickets?.map((ticket) => <CardItem key={ticket.ticketId} date={'01/01/2024'} ticket={ticket || null} />)}
            </div>
          ) : (
            <div className="flex w-full h-[500px] justify-center items-center border border-gray-200 rounded-md">
              Aucun résultat trouvé
            </div>
          )
        )}
      </section>
    </div>
  );
}
