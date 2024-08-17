'use client';

import { useSearchParams } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import { useCallback, useEffect, useState } from 'react';
import CardWrapper from '../CardWrapper';
import FormMessage from '../FormMessage';
import { newVerification } from '@/lib/actions/newVerificationToken.action';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError('Missing token');
      return;
    }
    newVerification(token)
      .then((data) => {
        console.log('---- ', data);
        //npm uninstall @typescript-eslint/parser @typescript-eslint/eslint-plugin
        //npm install @typescript-eslint/parser@latest @typescript-eslint/eslint-plugin@latest
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch(() => setError('Something went wrong'));
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper headerLabel="Confirming your verification" backButtonHref="/sign-in" backButtonLabel="Back to login">
      <div className="flex w-full items-center justify-center">
        {!success && !error && <BeatLoader />}
        <FormMessage type="ERROR" message={error} />
        <FormMessage type="SUCCESS" message={success} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
