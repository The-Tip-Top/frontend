import { signInSchema, signUpSchema } from '@/lib/utils';
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Control, FieldPath } from 'react-hook-form';

import { z } from 'zod';
import { Input } from '@/components/ui/input';

interface CustomInputProps<T extends z.infer<typeof signUpSchema | typeof signInSchema>> {
  name: FieldPath<T>;
  type?: string;
  label: string;
  placeholder: string;
  control: Control<T>;
}

const CustomInput = <T extends z.infer<typeof signUpSchema | typeof signInSchema>>({
  control,
  type = 'text',
  label,
  placeholder,
  name,
}: CustomInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item w-full">
          <FormLabel className="form-label">{label} </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input placeholder={placeholder} type={type} className="input-class w-full" {...field} />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
