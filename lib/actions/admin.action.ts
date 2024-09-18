'use server';

import { emailTemplates } from '@/constants';
import { myFetch } from '../hooks/useFetch';
import { CountingTicketResponse, Participation, StatsResponse, User, UserWithDetails } from '../types/types';
import {Resend} from "resend"

export const getAllParticipations = async () => {
  try {
    const participations = await myFetch<Participation[]>('admin/getAllParticipations', {
      method: 'GET',
    });
    return participations;
  } catch (err) {
  }
};
export const getAllUsers = async () => {
  try {
    const users = await myFetch<User[]>('admin/getAllUsers', {
      method: 'GET',
    });
    console.log('response users total  ', users.length);
    return users;
  } catch (err) {
    console.log('error when fetching users ', err);
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


export const sendEmailing = async (emailList: string[]) => {
  const resend = new Resend(process.env.RESENd_API_KEY || 're_4Ft1Hm5s_C3s5tT4ZD75krrY7mC7ZuQnC');

  try {
    const emails = emailList.map(email => ({
      from: 'no-reply@dsp5-archi-022a-4-5-g2.fr',
      to: email,
      subject: '',
      html: emailTemplates[0],
    }));
    const response = await resend.batch.send(emails);
   
    console.log(response.data, response.error);
  } catch (err) {
    console.log('send email ', err);
  }
};
