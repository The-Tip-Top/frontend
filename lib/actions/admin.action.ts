'use server';

import { myFetch } from '../hooks/useFetch';
import { CountingTicketResponse, Participation, StatsResponse, UserWithDetails } from '../types/types';

export const getAllParticipations = async () => {
  try {
    const participations = await myFetch<Participation[]>('admin/getAllParticipations', {
      method: 'GET',
    });
    console.log('response participation total  ', participations.length);
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

export const getStatistics = async () => {
  try {
    const stats = await myFetch<StatsResponse>('admin/stats', {
      method: 'GET',
    });
    if(stats){
      console.log('stats tickets ', stats);
      return stats;
    }
    return null
  } catch (err) {
    console.log('error when fetching participations ', err);
  }
}

export const getAllTicketsWithParticipations = async () => {
  try {
    const participations = await myFetch<UserWithDetails[]>('admin/getAllTicketsWithParticipations', {
      method: 'GET',
    });
    console.log('response participation total  ', participations.length);
    return participations;
  } catch (err) {
    console.log('error when fetching participations ', err);
  }
};