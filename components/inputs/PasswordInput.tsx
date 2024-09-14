import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Control, FieldPath, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { signInSchema, signUpSchema } from '@/lib/utils';
import zxcvbn from 'zxcvbn';
import { Progress } from '@/components/ui/progress';

type PasswordFieldProps<T extends Partial<z.infer<typeof signUpSchema | typeof signInSchema>>> = {
  name: FieldPath<T>;
  placeholder?: string;
  description?: string | JSX.Element;
  control: Control<T>;
  label: string;
};

export const PasswordField = <T extends Partial<z.infer<typeof signUpSchema | typeof signInSchema>>>({
  name,
  placeholder = 'Enter password',
  description,
  control,
  label,
}: PasswordFieldProps<T>) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [progressColor, setProgressColor] = useState('transparent');
  const { setValue, setError } = useFormContext();

  const handleChange = (value: string) => {
    const result = zxcvbn(value);
    setPasswordStrength(result.score);
    setProgressColor(getStrengthMessage(result.score));
    setValue('password', value);
  };

  const getStrengthMessage = (score: number) => {
    switch (score) {
      case 0:
      case 1:
        setError('password', { message: 'Mot de pass faible' });
        return 'bg-red-600';
      case 2:
        setError('password', { message: 'Mot de pass moyen' });
        return 'bg-yellow-600';
      case 3:
      case 4:
        setError('password', { message: '' });
        return 'bg-green-600';
      default:
        return 'bg-transparent';
    }
  };
  const getProgressValue = (score: number) => (score / 4) * 100;
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
                  onChange={(e) => handleChange(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                  {passwordVisibility ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                </div>
              </div>
            </FormControl>
            <div className="mt-2 text-sm flex justify-between">
              <div className="w-5/6 animate-pulse">
                <Progress
                  value={getProgressValue(passwordStrength)}
                  className={`w-[60%] text-gray-500 h-1 `}
                  indicatorColor={progressColor}
                />
              </div>
              <FormMessage className="form-message w-[40%] text-right" />
            </div>
            {description && <div className="form-description">{description}</div>}
          </div>
        )}
      />
    </>
  );
};
