"use client";

import React, { useEffect, useRef } from 'react';

// Données des participations avec informations sur les cadeaux
const participationData = [
  {
    participationId: "participation1",
    date: "01/01/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket1",
    participationGiftId: "gift1",
    gift: {
      name: "Infuseur à thé",
      description: "Infuseur à thé",
      status: "Remis"
    }
  },
  {
    participationId: "participation2",
    date: "15/01/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket2",
    participationGiftId: "gift2",
    gift: {
      name: "Boîte de thé détox ou infusion",
      description: "Boîte de thé détox ou infusion",
      status: "En attente"
    }
  },
  {
    participationId: "participation3",
    date: "01/02/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket3",
    participationGiftId: "gift3",
    gift: {
      name: "Boîte de thé signature",
      description: "Boîte de thé signature",
      status: "Abandonné"
    }
  },
  {
    participationId: "participation4",
    date: "10/02/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket4",
    participationGiftId: "gift4",
    gift: {
      name: "Coffret découverte 39€",
      description: "Coffret découverte d’une valeur de 39€",
      status: "Remis"
    }
  },
  {
    participationId: "participation5",
    date: "01/03/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket5",
    participationGiftId: "gift5",
    gift: {
      name: "Coffret découverte 69€",
      description: "Coffret découverte d’une valeur de 69€",
      status: "En attente"
    }
  },
  {
    participationId: "participation6",
    date: "10/03/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket6",
    participationGiftId: "gift6",
    gift: {
      name: "Infuseur à thé",
      description: "Infuseur à thé",
      status: "Remis"
    }
  },
  {
    participationId: "participation7",
    date: "01/04/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket7",
    participationGiftId: "gift7",
    gift: {
      name: "Boîte de thé détox ou infusion",
      description: "Boîte de thé détox ou infusion",
      status: "Abandonné"
    }
  },
  {
    participationId: "participation8",
    date: "15/04/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket8",
    participationGiftId: "gift8",
    gift: {
      name: "Boîte de thé signature",
      description: "Boîte de thé signature",
      status: "En attente"
    }
  },
  {
    participationId: "participation9",
    date: "01/05/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket9",
    participationGiftId: "gift9",
    gift: {
      name: "Coffret découverte 39€",
      description: "Coffret découverte d’une valeur de 39€",
      status: "Remis"
    }
  },
  {
    participationId: "participation10",
    date: "15/05/2024", // Format dd/mm/yyyy
    participationTicketId: "ticket10",
    participationGiftId: "gift10",
    gift: {
      name: "Coffret découverte 69€",
      description: "Coffret découverte d’une valeur de 69€",
      status: "En attente"
    }
  }
];

// Composant pour afficher un élément de participation
const TimelineItem = ({ date, gift, position }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('in-view');
        } else {
          ref.current.classList.remove('in-view');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`timeline-item ${position}`}>
      <div className="timeline-item-content">
        <span className="tag">{`Date: ${date}`}</span>
        <h3>{`Nom du cadeau: ${gift.name}`}</h3>
        <h4>{`Description: ${gift.description}`}</h4>
        <p>{`Statut: ${gift.status}`}</p>
      </div>
    </div>
  );
};

// Composant principal pour afficher la timeline des participations
export default function HistoryPage() {
  return (
    <div className="timeline-page">
      <h1 className="page-title">Historique de vos gains</h1>
      <div className="timeline-container">
        {participationData.map((item, index) => (
          <TimelineItem
            key={item.participationId}
            date={item.date}
            gift={item.gift}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
}
