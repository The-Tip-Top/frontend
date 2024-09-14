import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import CheckCodePage from '../../../app/employe/page';
import React from 'react';
import { verifyCodeTicket } from '@/lib/actions/user.action';


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));


jest.mock('@/lib/actions/user.action', () => ({
  verifyCodeTicket: jest.fn(),
}));

describe('CheckCodePage', () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    render(<CheckCodePage />);
  });

  it('should render the input and error message correctly', () => {
    const inputElement = screen.getByPlaceholderText('Entrez votre code') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    expect(screen.queryByText('Une erreur est servenue')).not.toBeInTheDocument();
  });

  it('should update email state when input changes', () => {
    const inputElement = screen.getByPlaceholderText('Entrez votre code') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

    expect(inputElement.value).toBe('test@example.com');
  });

  it('should call verifyCodeTicket and redirect on successful verification', async () => {
    (verifyCodeTicket as jest.Mock).mockResolvedValue({ ticketId: '123' });

    const inputElement = screen.getByPlaceholderText('Entrez votre code') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => {
      expect(verifyCodeTicket).toHaveBeenCalledWith('test@example.com');
      expect(pushMock).toHaveBeenCalledWith('/employe/participation-details?user=test%40example.com');
    });
  });

  it('should display an error message on verification failure', async () => {
    (verifyCodeTicket as jest.Mock).mockRejectedValue(new Error('Failed'));

    const inputElement = screen.getByPlaceholderText('Entrez votre code') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText('Une erreur est servenue')).toBeInTheDocument();
    });
  });
});
