'use client';

import React, { useTransition } from 'react';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { DEFAULT_REDIRECT_LOGIN } from '@/routes';
import { FcGoogle } from 'react-icons/fc';

const Social = () => {
  const [isPending] = useTransition();
  const onClick = (provider: 'google' | 'facebook') => {
    signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT_LOGIN,
    });
  };
  return (
    <>
      <div className="flex justify-center sm:gap-x-2 sm:flex-row flex-col gap-y-2">
        <Button
          className="w-full bg-white border hover:bg-gray-200 shadow-sm rounded-sm"
          type="button"
          size="lg"
          variant="destructive"
          onClick={() => onClick('google')}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 size={20} className="animate-spin" /> &nbsp; Loading ...
            </>
          ) : (
            <FcGoogle size={25} />
          )}
        </Button>
      </div>
    </>
  );
};

export default Social;
