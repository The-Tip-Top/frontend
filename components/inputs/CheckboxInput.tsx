import { Dispatch, SetStateAction } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface CheckboxInputProps {
  checked: boolean;
  disabled?: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const CheckboxInput = ({ checked, setChecked }: CheckboxInputProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        className="bg-gray-100 border w-5 h-5 rounded-sm"
        onCheckedChange={(e: boolean) => setChecked(e as boolean)}
        id="terms2"
      />
      <label
        htmlFor="terms2"
        className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
       "
      >
        J&apos;ai lu et j&apos;accepte les Conditions Générales d&apos;Utilisation
      </label>
    </div>
  );
};
