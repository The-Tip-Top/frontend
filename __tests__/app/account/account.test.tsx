import { render, screen } from '@testing-library/react';
import Ticket from '@/app/account/ticket/page';
import React from 'react';

jest.mock('@/components/TicketForm', () => ({
  TicketForm: jest.fn(() => <div data-testid="ticket-form">Mocked Ticket Form</div>),
}));

describe('Ticket Page', () => {
  it('should render the TicketForm component', () => {
    render(<Ticket />);

    expect(screen.getByTestId('ticket-form')).toBeInTheDocument();
    expect(screen.getByTestId('ticket-form')).toHaveTextContent('Mocked Ticket Form');
  });
});
