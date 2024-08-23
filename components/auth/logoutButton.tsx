'use client';

import { ExtendedUser } from '@/auth';
import { signOut } from 'next-auth/react';

interface LogoutButtonProps {
  children?: React.ReactNode;
  user?: ExtendedUser | undefined;
}

const LogoutButton = ({ children, user }: LogoutButtonProps) => {
  const redirectTo =
    user?.role === 'ADMIN' ? '/admin/sign-in' : user?.role === 'EMPLOYEE' ? '/employe/sign-in' : '/sign-in';
  const onClick = async () => {
    await signOut({ redirect: true, callbackUrl: redirectTo });
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
