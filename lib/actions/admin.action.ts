'use server';

import { myFetch } from '../hooks/useFetch';
import { Participation } from '../types/types';

//http://localhost:3001/api/v1/admin/getAllParticipations

// interface ParticipationResponse {
//   participations: Participation[];
// }

export interface CountingTicketResponse {
  WAITING: number;
  CANCELLED: number;
  GIFT_GIVEN: number;
}

export const getAllParticipations = async () => {
  try {
    const participations = await myFetch<Participation[]>('admin/getAllParticipations', {
      method: 'GET',
    });
    return participations;
  } catch (err) {
    console.log('error when fetching participations ', err);
  }
};

export const getCountTicketByStatus = async () => {
  try {
    const count = await myFetch<CountingTicketResponse>('admin/countTickets', {
      method: 'GET',
    });
    console.log('counting tickets ', count);
    return count;
  } catch (err) {
    console.log('error when fetching participations ', err);
  }
};
