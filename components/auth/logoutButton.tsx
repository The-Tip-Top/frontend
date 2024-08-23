'use client';

import { ExtendedUser } from '@/auth';
import { signOut } from 'next-auth/react';

interface LogoutButtonProps {
  children?: React.ReactNode;
  user?: ExtendedUser | undefined;
}

const LogoutButton = ({ children, user }: LogoutButtonProps) => {
  const onClick = async () => {
    await signOut({ redirect: true, callbackUrl: user?.role === 'ADMIN' ? '/admin/sign-in' : '/sign-in' });
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
