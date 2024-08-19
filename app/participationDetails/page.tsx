'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import '../../app/globals.css';

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
      const result = participationData.find((p) => p.participationId === Number(id));
      setParticipation(result || null);
    }
  }, [id]);

  const handleStatusChange = () => {
    if (participation) {
      // Simulez la mise à jour de statut
      setParticipation({
        ...participation,
        gift: { ...participation.gift, status: 'Remis' },
      });
    }
  };

  if (!participation) {
    return <div className="text-center mt-20 text-xl font-semibold text-gray-600">Participation non trouvée.</div>;
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Détails de la Participation</h1>
          <div className="flex flex-col space-y-4">
            <DetailItem label="Code de Participation" value={participation.participationTicketId} />
            <DetailItem label="Date" value={participation.date} />
            <DetailItem label="Cadeau" value={participation.gift.name} />
            <DetailItem label="Description" value={participation.gift.description} />
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-semibold text-gray-700">Statut:</p>
              <span
                className={`text-lg font-semibold ${
                  participation.gift.status === 'Remis' ? 'text-green-600' : 'text-yellow-600'
                }`}
              >
                {participation.gift.status}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleStatusChange}
            className="w-full py-3 bg-[#8FB43A]  text-white rounded-md shadow-md hover:bg-[#e68a00] transition duration-300"
          >
            Marquer comme Remis
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
      <p className="text-sm font-medium text-gray-600">{label}:</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
}