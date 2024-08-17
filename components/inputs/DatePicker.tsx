'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useController, Control, FieldPath } from 'react-hook-form';

import { cn, signInSchema, signUpSchema } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { z } from 'zod';

interface DatePickerProps<T extends z.infer<typeof signUpSchema | typeof signInSchema>> {
  name: FieldPath<T>;
  control: Control<T>;
}

export const DatePicker = <T extends z.infer<typeof signUpSchema | typeof signInSchema>>({
  name,
  control,
}: DatePickerProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] flex-row-reverse justify-between text-left font-normal',
            !value && 'input-class w-full',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(new Date(value), 'dd/MM/yyyy') : <span>Date de Naissance</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white border border-gray-200 shadow-md">
        <Calendar
          mode="single"
          selected={value ? new Date(value) : undefined}
          onSelect={(date) => onChange(date?.toISOString())}
          initialFocus
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
        />
      </PopoverContent>
    </Popover>
  );
};
