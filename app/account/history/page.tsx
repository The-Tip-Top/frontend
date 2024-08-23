'use client';

import { StatusBadge } from '@/components/ParticipationTable';
import { Card } from '@/components/ui/card';
import { getUserTickets, linkTicket } from '@/lib/actions/auth.action';
import { frStatus, Ticket } from '@/lib/types/types';
import { cn } from '@/lib/utils';
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
        'bg-white shadow-md rounded-lg p-6 max-w-xs text-center transition-transform duration-300 relative',
      )}
    >
      <Image src={'/cadeau1.webp'} width={300} height={300} alt="cadeau1" className="rounded-md" />
      <div className="absolute top-7 left-7">
        <StatusBadge status={ticket.status ?? ''} frStatus={frStatus[ticket.status] ?? ''} />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">{ticket?.gift?.name || ''}</h2>
      <p className="text-gray-600">{ticket?.gift?.description || ''}</p>
    </Card>
  );
};

export default function HistoryPage() {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    linkTicketToUser();
  }, []);

  useEffect(() => {
    console.log(')-- ', isPending);
    startTransition(() => {
      getUserTickets()
        .then((data) => {
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

  return (
    <div className="history-page bg-gray-50 min-h-[700px] py-10 px-2">
      <h1 className="page-title text-center text-4xl font-extrabold text-gray-800 mb-8">Historique de vos gains</h1>
      <section className="recent-gifts mb-12">
        {isPending ? (
          <div className="w-full h-[400px] flex items-center justify-center">
            <GridLoader loading={isPending} color="black" />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center lg:grid-cols-3 xl:grid-cols-4">
            {tickets?.map((ticket) => <CardItem key={ticket.ticketId} date={'01/01/2024'} ticket={ticket || null} />)}
          </div>
        )}
      </section>
    </div>
  );
}
