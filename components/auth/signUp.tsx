'use client';

import { Suspense, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Register } from '@/lib/actions/user.auth.action';
import CustomInput from '../inputs/CustomInput';
import { CheckboxInput } from '../inputs/CheckboxInput';
import FormMessage from '../FormMessage';
import Social from '../Social';
import { signUpSchema } from '@/lib/utils';
import { PasswordField } from '../inputs/PasswordInput';
import { BeatLoader } from 'react-spinners';

const SignUpFormContent = () => {
  const [message, setMessage] = useState({
    error: '',
    success: '',
  });
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked' ? 'Email déja utilisé avec un autre provider' : '';

  const [isPending, setTransition] = useTransition();
  const [checked, setChecked] = useState(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    try {
      setTransition(() => {
        Register(data).then((data) => {
          setMessage({
            error: data.error ?? '',
            success: data.success ?? '',
          });
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  const passCheck = form.getFieldState('password')?.error?.message?.length! > 0;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 sm:space-y-4">
        <>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 ">
            <CustomInput label="Nom" placeholder="Entrer votre nom" control={form.control} name="firstName" />
            <CustomInput label="Prénom" placeholder="Entrer votre prénom" control={form.control} name="lastName" />
          </div>
          <CustomInput
            label="Nom d'utilisateur"
            placeholder="Entrer un nom d'utilisateur"
            control={form.control}
            name="name"
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 ">
            <CustomInput label="Téléphone" placeholder="ex 0123456789" control={form.control} name="phoneNumber" />
            <CustomInput
              label="Date de naissance"
              placeholder="ex 24/04/2000"
              control={form.control}
              name="dateOfBirth"
              type="date"
              block={true}
            />
          </div>
          <CustomInput label="Email" placeholder="Entrer votre email" control={form.control} name="email" />
          <PasswordField<z.infer<typeof signUpSchema>>
            placeholder="Entrer un mot de passe"
            control={form.control}
            name="password"
            label="Mot de pass"
          />
        </>
        <CheckboxInput checked={checked} setChecked={setChecked} />
        <FormMessage message={message.error || urlError} type="ERROR" />
        <FormMessage message={message.success} type="SUCCESS" />
        <div className="flex justify-center flex-col gap-4">
          <Button className="form-btn bg-des" type="submit" disabled={isPending || !checked || passCheck}>
            {isPending ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Loading ...
              </>
            ) : (
              'Inscription'
            )}
          </Button>
        </div>
      </form>
      <Social />
    </Form>
  );
};

const SignUpForm = () => {
  return (
    <Suspense fallback={<BeatLoader />}>
      <SignUpFormContent />
    </Suspense>
  );
};
export default SignUpForm;
