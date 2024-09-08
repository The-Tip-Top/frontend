import { render, screen } from '@testing-library/react';
import Head from 'next/head';
import About from '@/app/home/about/page';

describe('About Component', () => {
    beforeEach(() => {
      render(<About />);
    });
  
    it('should render the main heading correctly', () => {
        const h1 = screen.getByRole('heading', {level: 1})
      expect(h1).toHaveTextContent('À Propos de Thé Tip Top');
  
       });
    it('should render the main article correctly', () => {
        const article = document.querySelector('#article');
        expect(article).toBeInTheDocument();

    });
  
    it(' should renders the main headings and content', async () => {

       expect(await screen.findByText(/À Propos de Thé Tip Top/i)).toBeInTheDocument();
       expect(await screen.findByText(/Notre Mission/i)).toBeInTheDocument();
       expect(await screen.findByText(/Qualité et Durabilité/i)).toBeInTheDocument();
       expect(await screen.findByText(/Notre Présence à Nice/i)).toBeInTheDocument();
       expect(await screen.findByText(/Participez à Notre Jeu-Concours/i)).toBeInTheDocument();
  
     });
  });