'use client';

import Link from 'next/link';
import SignUpForm from '@/components/auth/signUp';
import SignInForm from '@/components/auth/signIn';
import { Card } from '@/components/ui/card';

const AuthForm = ({ type }: { type: string }) => {
  return (
    <>
      <Card className="shadow-lg rounded-lg p-4 w-full xs:max-w-md bg-white my-20">
        <section className="auth-form xs:max-w-[26rem]">
          <header className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-1 md:gap-3">
              <h1 className="text-24 lg:text-26 flex justify-center font-semibold text-gray-900">
                {type === 'sign-up' ? 'Inscription' : 'Connexion'}{' '}
              </h1>
            </div>
          </header>

          {type === 'sign-in' ? <SignInForm /> : <SignUpForm />}
          <footer className="flex justify-center gap-1">
            <p className="text-xs sm:text-14 font-normal text-gray-600">
              {type === 'sign-in' ? 'Vous n’avez pas de compte ?' : 'Déjà inscrit ?'}{' '}
            </p>
            <Link className="form-link" href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
              {type === 'sign-in' ? 'Inscription' : 'Connexion'}
            </Link>
          </footer>
        </section>
      </Card>
    </>
  );
};

export default AuthForm;
