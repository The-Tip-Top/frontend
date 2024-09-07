import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { signInSchema, signUpSchema } from '@/lib/utils';

type PasswordFieldProps<T extends Partial<z.infer<typeof signUpSchema | typeof signInSchema>>> = {
  name: FieldPath<T>;
  placeholder?: string;
  description?: string | JSX.Element;
  control: Control<T>;
  label: string;
};

export const SignInPasswordField = <T extends Partial<z.infer<typeof signUpSchema | typeof signInSchema>>>({
  name,
  placeholder = 'Enter password',
  description,
  control,
  label,
}: PasswordFieldProps<T>) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <div className="form-item w-full">
            <FormLabel className="form-label">{label} </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...field}
                  type={passwordVisibility ? 'text' : 'password'}
                  autoComplete="on"
                  placeholder={placeholder}
                  className={`input-class w-full ${fieldState.error ? 'text-destructive' : ''}`}
                />
                <div
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                  {passwordVisibility ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                </div>
              </div>
            </FormControl>
              <FormMessage className="form-message w-[40%] text-right" />
            {description && <div className="form-description">{description}</div>}
          </div>
        )}
      />
    </>
  );
};
