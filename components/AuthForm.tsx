'use client';

import Link from 'next/link';
import { useState } from 'react';
import SignUpForm from '@/components/auth/signUp';

const AuthForm = ({ type }: { type: string }) => {
  const [user] = useState(null);
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-26 flex justify-center font-semibold text-gray-900">
            {type === 'sign-up' ? 'Inscription' : 'Connexion'}{' '}
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4 ">........</div>
      ) : (
        <>
          {type === 'sign-in' ? '... sign in form' : <SignUpForm />}
          <footer className="flex justify-center gap-1">
            <p className="text-xs sm:text-14 font-normal text-gray-600">
              {type === 'sign-in' ? 'Vous n’avez pas de compte ?' : 'Already have an account ?'}{' '}
            </p>
            <Link className="form-link" href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
