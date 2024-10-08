'use client';

import { Suspense, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Loader2, Variable } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Login } from '@/lib/actions/user.auth.action';
import CustomInput from '../inputs/CustomInput';
import FormMessage from '../FormMessage';
import { PasswordField } from '../inputs/PasswordInput';
import Social from '../Social';
import { signInSchema } from '@/lib/utils';
import { BeatLoader } from 'react-spinners';
import { SignInPasswordField } from '../inputs/PasswordInputSignIn';

const SignInFormContent = () => {
  // const [user, setUser] = useState(null);
  const [message, setMessage] = useState({
    error: '',
    success: '',
  });
  const searchParams = useSearchParams();
  const variable = searchParams.get('concour');
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked' ? 'Email déja utilisé avec un autre provider' : '';
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      setTransition(() => {
        Login(data, variable ?? '').then((data) => {
          setMessage({
            error: data?.error ?? '',
            success: data?.success ?? '',
          });
        });
      });
      // const newUser = await signUp(data);
      // setUser(newUser);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput label="Email" placeholder="Entrer votre email" control={form.control} name="email" />
        <SignInPasswordField<z.infer<typeof signInSchema>>
          placeholder="Entrer un mot de passe"
          control={form.control}
          name="password"
          label="Mot de passe"
        />
        <FormMessage message={message.error || urlError} type="ERROR" />
        <FormMessage message={message.success} type="SUCCESS" />
        <div className="flex justify-center flex-col gap-4">
          <Button className="form-btn bg-des" type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Loading ...
              </>
            ) : (
              'Connexion'
            )}
          </Button>
        </div>
      </form>
      <Social />
    </Form>
  );
};

const SignInForm = () => {
  return (
    <Suspense fallback={<BeatLoader />}>
      <SignInFormContent />
    </Suspense>
  );
};
export default SignInForm;
