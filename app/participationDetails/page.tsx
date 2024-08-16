// app/participation-details/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
export default function ParticipationDetailsPage() {
  const router = useRouter();
  const query = new URLSearchParams(window.location.search);
  const id = 1; // Récupération de l'id depuis l'URL
  const [participation, setParticipation] = useState<any>(null);

  useEffect(() => {
    const participationData = [
        {
          participationId: 1,
          participationTicketId: 'ABC123',
          date: '01/08/2024',
          gift: {
            name: 'Infuseur à thé',
            description: 'Infuseur à thé',
            status: 'En attente',
          },
        },
    ];
    if (id) {
      const result = participationData.find(p => p.participationId === Number(id));
      setParticipation(result || null);
    }
  }, [id]);

  const handleStatusChange = () => {
    if (participation) {
      // Simulez la mise à jour de statut
      setParticipation({
        ...participation,
        gift: { ...participation.gift, status: 'Remis' }
      });
    }
  };

  if (!participation) {
    return <div>Participation non trouvée.</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Détails de la Participation</h1>
        <p className="mb-2"><strong>Code de Participation:</strong> {participation.participationTicketId}</p>
        <p className="mb-2"><strong>Date:</strong> {participation.date}</p>
        <p className="mb-2"><strong>Cadeau:</strong> {participation.gift.name}</p>
        <p className="mb-4"><strong>Description:</strong> {participation.gift.description}</p>
        <p className="mb-4"><strong>Status:</strong> {participation.gift.status}</p>
        <button
          onClick={handleStatusChange}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Marquer comme Remis
        </button>
      </div>
    </div>
  );
}
