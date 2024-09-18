'use server';

import { myFetch } from '../hooks/useFetch';
import { CountingTicketResponse, Participation, StatsResponse, UserWithDetails } from '../types/types';

export const getAllParticipations = async () => {
  try {
    const participations = await myFetch<Participation[]>('admin/getAllParticipations', {
      method: 'GET',
    });
    return participations;
  } catch (err) {
  }
};

export const getCountTicketByStatus = async () => {
  try {
    const count = await myFetch<CountingTicketResponse>('admin/countTickets', {
      method: 'GET',
    });
    return count;
  } catch (err) {
    console.error('error when fetching participations ', err);
  }
};

export const getStatistics = async () => {
  try {
    const stats = await myFetch<StatsResponse>('admin/stats', {
      method: 'GET',
    });
    if (stats) {
      return stats;
    }
    return null;
  } catch (err) {
    console.error('error when fetching participations ', err);
  }
};

export const getAllTicketsWithParticipations = async () => {
  try {
    const participations = await myFetch<UserWithDetails[]>('admin/getAllTicketsWithParticipations', {
      method: 'GET',
    });
    return participations;
  } catch (err) {
    console.error('error when fetching participations ', err);
  }
};
