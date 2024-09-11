'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { subscribeToNewsLetter } from '@/lib/actions/user.action';
import { Form, FormControl, FormField } from './ui/form';
import { Input } from './ui/input';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';

const NewsLetter = () => {
  const user = useCurrentUser();
  const subscribeSchema = z.object({
    email: z.string().email(),
  });
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof subscribeSchema>) => {
    try {
      if (user) {
        subscribeToNewsLetter(user?.id).then((data) => {
          console.log('subscribe  ', data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center lg:text-left mb-6 p-2 pt-0">
      <h3 className="font-bold font-lato text-lg text-white mb-2">ABONNEZ-VOUS À NOS NEWSLETTERS</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-1 justify-center w-full max-w-md mx-auto lg:mx-0"
        >
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => (
              <div className="form-item w-full">
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Entrez votre email"
                      type="email"
                      className="input-class w-full placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                </div>
              </div>
            )}
          />
          <Button
            type="submit"
            className="p-2 bg-white text-[#8FB43A] rounded-none font-semibold text-sm hover:bg-gray-200 transition duration-300"
          >
            S&apos;abonner
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsLetter;
