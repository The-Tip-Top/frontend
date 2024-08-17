/* eslint-disable no-unused-vars */
// import React, { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/button';

interface ModalProps {
  openDialog: boolean;
  onOpenChange: (b: boolean) => void;
  title: string;
  children: React.ReactNode;
}
const Modal = ({ openDialog, onOpenChange, title, children }: ModalProps) => {
  if (!openDialog) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black-1 bg-opacity-50" onClick={() => onOpenChange(false)}></div>

      {/* Modal content */}
      <div className="bg-white relative rounded-lg shadow-lg z-50 w-full max-w-lg md:max-w-3xl lg:max-w-4xl mx-4 sm:mx-6 md:mx-8 md:p-6 p-3 ">
        <div className="h-3 absolute top-0 left-0 right-0 bg-[#8FB43A] " />
        <div className="flex justify-between items-center border-b py-2">
          <h2 className="text-sm md:text-xl lg:text-2xl font-lato font-semibold">{title}</h2>
          <Button
            variant={'outline'}
            size={'icon'}
            onClick={() => onOpenChange(false)}
            className="text-gray-500 hover:text-gray-700 text-sm md:text-lg w-5 h-5 md:w-6 md:h-6"
          >
            &times;
          </Button>
        </div>
        {/* Modal body with scroll and max-height */}
        <div className="mt-4 max-h-72 sm:max-h-80 md:max-h-96 text-[12px] md:text-lg lg:max-h-[40rem] overflow-y-auto">
          {children}
        </div>
        <div className="mt-6 h-3 absolute bottom-0 left-0 right-0 bg-[#8FB43A] " />
      </div>
    </div>
  );
};

export default Modal;
