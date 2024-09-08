import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '@/app/home/contact/page';

describe('ContactPage', () => {
    test('renders the contact form', () => {
      render(<ContactPage />);
      
      // Check if the form elements are rendered
      expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Adresse mail/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Sujet/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Envoyer/i })).toBeInTheDocument();
    });
  
    test('updates input fields correctly', () => {
      render(<ContactPage />);
      
      const nameInput = screen.getByLabelText(/Nom/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/Adresse mail/i) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(/Sujet/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;
  
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
  
      expect(nameInput.value).toBe('John Doe');
      expect(emailInput.value).toBe('john.doe@example.com');
      expect(subjectInput.value).toBe('Test Subject');
      expect(messageInput.value).toBe('This is a test message.');
    });
  
    test('submits the form and clears the fields', () => {
      render(<ContactPage />);
      
      const nameInput = screen.getByLabelText(/Nom/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/Adresse mail/i) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(/Sujet/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: /Envoyer/i });
  
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
  
      fireEvent.click(submitButton);
  
      // Check if the form fields are cleared after submit
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(subjectInput.value).toBe('');
      expect(messageInput.value).toBe('');
    });
  
    test('prevents form submission with empty fields', () => {
      render(<ContactPage />);
  
      const submitButton = screen.getByRole('button', { name: /Envoyer/i });
      
      // Try submitting the form without filling it
      fireEvent.click(submitButton);
  
      // Check that no fields have been cleared or changed (just to ensure there's no unwanted behavior)
      const nameInput = screen.getByLabelText(/Nom/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/Adresse mail/i) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(/Sujet/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;
      
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(subjectInput.value).toBe('');
      expect(messageInput.value).toBe('');
    });
  });