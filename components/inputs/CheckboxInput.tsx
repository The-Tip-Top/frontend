'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '../ui/button';
import Modal from '../Modal';
import { conditionGeneral } from '@/public/ConditionGeneral';

interface CheckboxInputProps {
  checked: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const CheckboxInput = ({ checked, setChecked }: CheckboxInputProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCheckboxChange = (e: boolean) => {
    setChecked(e);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        className="bg-gray-100 border w-5 h-5 rounded-sm"
        onCheckedChange={(e: boolean) => handleCheckboxChange(e)}
        onClick={(e) => e.stopPropagation()}
        id="terms2"
        data-testid="terms-checkbox"
      />
      <div
        className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
       "
      >
        J&apos;ai lu et j&apos;accepte{' '}
        <a
          className="underline text-[#8FB43A] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpenModal(true);
          }}
        >
          les Conditions Générales d&apos;Utilisation
        </a>
      </div>
      <Modal openDialog={openModal} onOpenChange={setOpenModal} title="Conditions Générales d'utilisation">
        {conditionGeneral}
      </Modal>
    </div>
  );
};
