'use server';

import { auth} from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
import { EGiftStatus, Gift, Ticket, User } from '../types/types';

export const linkTicket = async (ticketId: string) => {
  // const userId = cookies().get('userId')?.value
  const userId = (await auth())?.user?.id;
  const bodyData = { id: userId, ticketId: ticketId };
  if (userId && ticketId) {
    const linktiketResponse = await myFetch<ResponseMessageWithStatus>('linkTicketUser', {
      method: 'PUT',
      body: bodyData,
    });
    console.log('----- link ticket ', linktiketResponse);
    return linktiketResponse;
  }
  return null;
};

export const getUserTickets = async () => {
  const userId = (await auth())?.user?.id;
  if (userId) {
    const userTickets = await myFetch<Ticket[]>(`userTikets/${userId}`, {});
    if (userTickets) {
      return userTickets;
    }
  }
  return null;
};

export const verifyCodeTicket = async (code: string) => {
  if (code) {
    const ticket = await myFetch<Ticket>(`tickets/${code}`, {});
    if (ticket) {
      return ticket;
    }
  }
  return null;
};
export const getOneTicket = async (id: string) => {
  if (id) {
    const ticket = await myFetch<Ticket>(`tickets/id/${id}`, {});
    if (ticket) {
      return ticket;
    }
  }
  return null;
};

export const updateParticipationStatus = async (id: string, status: EGiftStatus) => {
  if (id) {
    const participation = await myFetch<Gift>(`participations/${id}`, {
      method: 'PUT',
      body: { status: status },
    });
    if (participation) {
      return participation;
    }
  }
  return null;
};
