/* eslint-disable no-unused-vars */

export enum UserRole {
  ADMIN,
  USER,
  EMPLOYEE,
}

export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export enum EGiftStatus {
  GIFT_GIVEN,
  WAITING,
  CANCELLED,
}

export interface Gift {
  giftId: string;
  status: string;
  name: string;
  description: string;
  ticket?: Ticket;
}

export interface Ticket {
  ticket: string;
  ticketId: string;
  maxValidDate: string;
  isValid: string;
  ticketUserId?: string;
  ticketGiftId?: string;
  status: EGiftStatus;
  user?: User | null;
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
  createdAt: Date;
  submitedAt: Date;

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
