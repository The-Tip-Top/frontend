/* eslint-disable no-unused-vars */

export enum UserRole {
  ADMIN,
  USER,
  EMPLOYEE,
}

export interface User {
  id: string;
  email: string;
  password: string | null;
  name: string | null;
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

export interface Account {
  id: string;
  id: string;
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

// model Session {
//   id           string   @id @default(cuid())
//   sessionToken string   @unique
//   id       string
//   expires      DateTime
//   user         User     @relation(fields: [id], references: [id])

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   @@index([id])
// }

export interface VerificationToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}
