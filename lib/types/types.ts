/* eslint-disable no-unused-vars */

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  EMPLOYEE = 'EMPLOYEE',
}

export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface TicketStats {
  day: string;
  remis: number;
  annule: number;
  enAttente: number;
}
export interface ParticipationStats {
  day: string;
  total: number;
}

export interface StatsResponse {
  total: ParticipationStats[],
  totalDetails: TicketStats[]
}

export interface StatusBadgeProps {
  status: string;
  frStatus?: string;
}
export interface ParticipationTableProps {
  participations: Participation[];
}

export interface RecentParticipationsProps {
  participations: Participation[];
  page: number;
}

export enum EGiftStatus {
  WAITING = 'WAITING',
  GIFT_GIVEN = 'GIFT_GIVEN',
  CANCELLED = 'CANCELLED',
  PARTICIPATION = 'PARTICIPATION',
  CURRENT_PARTICIPATION = 'CURRENT_PARTICIPATION',
}

export enum EParticipationStatus {
  WAITING = 'WAITING',
  CANCELLED = 'CANCELLED',
  CONCLUDED = 'CONCLUDED',
  PARTICIPATION = 'PARTICIPATION',
  CURRENT_PARTICIPATION = 'CURRENT_PARTICIPATION',
}

export interface Gift {
  imageUrl: string;
  giftId: string;
  status: string;
  name: string;
  description: string;
  ticket?: Ticket;
}

export const frStatus: Partial<Record<EGiftStatus, string>> = {
  GIFT_GIVEN: 'Cadeau Remis',
  WAITING: 'Cadeau en Attente',
};

export interface Ticket {
  ticketId: string;
  code?: string;
  maxValidDate: string;
  isValid: string;
  ticketUserId?: string;
  ticketGiftId?: string;
  status: EGiftStatus;
  user?: User | null;
  gift?: Gift | null;
  participation?: Participation | null;
}

export interface User {
  id: string;
  email: string;
  password: string | null;
  name: string | null;
  dateOfBirth: Date | null;
  phoneNumber: string | null;
  role: UserRole;

  emailVerified: Date | null;
  image: string | null;
  // Session       Session[]
  Account: Account[];
  // Optional for WebAuthn support
  // Authenticator Authenticator[]

  createdAt: Date;
  updatedAt: Date;
}

export interface Participation {
  participationId: string;
  createdAt: Date | string;
  submitedAt: Date | string;

  participationTicketId: string;
  ticket: Ticket;

  participationGiftId: string;
  gift: Gift;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
  refresh_token_expires_in: number | null;
  user: User | null;

  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}
