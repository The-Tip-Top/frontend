'use client';

import { linkTicket } from '@/lib/actions/auth.action';
import { Gift, Ticket } from '@/lib/types/types';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const participationData = [
  {
    participationId: 'participation1',
    date: '01/01/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket1',
    participationGiftId: 'gift1',
    gift: {
      giftId: "",
      name: 'Infuseur à thé',
      description: 'Infuseur à thé',
      status: 'Remis',
      imageUrl: '/cadeau1.webp'
    },
  },
  {
    participationId: 'participation2',
    date: '15/01/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket2',
    participationGiftId: 'gift2',
    gift: {
      giftId: "",
      name: 'Boîte de thé détox ou infusion',
      description: 'Boîte de thé détox ou infusion',
      status: 'En attente',
      imageUrl: '/cadeau2.webp'
    },
  },
  {
    participationId: 'participation3',
    date: '01/02/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket3',
    participationGiftId: 'gift3',
    gift: {
      giftId: "",
      name: 'Boîte de thé signature',
      description: 'Boîte de thé signature',
      status: 'Abandonné',
      imageUrl: '/cadeau3.webp'
    },
  },
  {
    participationId: 'participation4',
    date: '10/02/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket4',
    participationGiftId: 'gift4',
    gift: {
      giftId: "",
      name: 'Coffret découverte 39€',
      description: 'Coffret découverte d’une valeur de 39€',
      status: 'Remis',
      imageUrl: '/cadeau2.webp'
    },
  },
  {
    participationId: 'participation5',
    date: '01/03/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket5',
    participationGiftId: 'gift5',
    gift: {
      giftId: "",
      name: 'Coffret découverte 69€',
      description: 'Coffret découverte d’une valeur de 69€',
      status: 'En attente',
      imageUrl: '/cadeau1.webp'
    },
  },
  {
    participationId: 'participation6',
    date: '10/03/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket6',
    participationGiftId: 'gift6',
    gift: {
      giftId: "",
      name: 'Infuseur à thé',
      description: 'Infuseur à thé',
      status: 'Remis',
      imageUrl: '/cadeau3.webp'
    },
  },
  {
    participationId: 'participation7',
    date: '01/04/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket7',
    participationGiftId: 'gift7',
    gift: {
      giftId: "",
      name: 'Boîte de thé détox ou infusion',
      description: 'Boîte de thé détox ou infusion',
      status: 'Abandonné',
      imageUrl: '/cadeau1.webp'
    },
  },
  {
    participationId: 'participation8',
    date: '15/04/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket8',
    participationGiftId: 'gift8',
    gift: {
      giftId: "",
      name: 'Boîte de thé signature',
      description: 'Boîte de thé signature',
      status: 'En attente',
      imageUrl: '/cadeau1.webp'
    },
  },
  {
    participationId: 'participation9',
    date: '01/05/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket9',
    participationGiftId: 'gift9',
    gift: {
      giftId: "",
      name: 'Coffret découverte 39€',
      description: 'Coffret découverte d’une valeur de 39€',
      status: 'Remis',
      imageUrl: '/cadeau1.webp'
    },
  },
  {
    participationId: 'participation10',
    date: '15/05/2024', // Format dd/mm/yyyy
    participationTicketId: 'ticket10',
    participationGiftId: 'gift10',
    gift: {
      giftId: "",
      name: 'Coffret découverte 69€',
      description: 'Coffret découverte d’une valeur de 69€',
      status: 'En attente',
      imageUrl: '/cadeau1.webp'
    },
  },
];

interface CardItemProps {
  date: Date | string;
  gift: Gift;
}

const CardItem = ({ date, gift }: CardItemProps) => {

  return (
    <div className="grid-item transform transition duration-500 ease-in-out hover:scale-105 bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={gift?.imageUrl || "/logofinal.png"}
        alt={gift.name || "logo"}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <span className="text-sm text-gray-500">{`Date: ${date}`}</span>
        <h3 className="mt-2 text-xl font-bold text-[#8FB43A]">{`Nom du cadeau: ${gift?.name || ""}`}</h3>
        <p className="text-gray-600 mt-2">{`Description: ${gift.description || ""}`}</p>
        <p
          className={`status mt-3 ${gift?.status === 'Remis' ? 'text-green-600' : gift?.status === 'En attente' ? 'text-yellow-600' : 'text-red-600'
            } font-semibold`}
        >
          {`Statut: ${gift.status}`}
        </p>
      </div>
    </div>
  );
};

interface LinkTicketResponse {
  tickets: Ticket[]
}

export default function HistoryPage() {
  const [newGigt, setnewGigt] = useState<Gift | null>(null);
  // useEffect(() => {
  //   const ticketId = localStorage.getItem('ticketId')
  //   const link = async () => {
  //     if(ticketId) {
  //      await linkTicket(ticketId)
  //     }
  //   }
  //   link()
  // }, [])

  return (
    <div className="history-page bg-gray-50 min-h-screen py-10">
      <h1 className="page-title text-center text-4xl font-extrabold text-gray-800 mb-8">Historique de vos gains</h1>
      <section className="recent-gifts mb-12">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Cadeaux récents</h2>
        <div className="grid-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {/* {recentGifts.map((item) => ( */}
          <CardItem date={'01/01/2024'} gift={participationData[0].gift} />
          {/* ))} */}
        </div>
      </section>

      <section className="old-gifts">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Anciens cadeaux</h2>
        <div className="grid-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {participationData.map((item) => (
            <CardItem key={item.participationId} date={item.date} gift={item.gift} />
          ))}
        </div>
      </section>
    </div>
  );
}