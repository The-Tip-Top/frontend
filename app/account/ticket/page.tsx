'use client';

import React from 'react';
import { TicketForm } from '@/components/TicketForm';

const Ticket = () => {
  return (
    <>
      <section id="ticket-form" className="container mx-auto my-16 px-4 lg:px-12 text-center">
        <TicketForm />
      </section>
    </>
  );
};

export default Ticket;
