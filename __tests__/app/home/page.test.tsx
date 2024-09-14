// __tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '@/app/home/page';
import '@testing-library/jest-dom';
import React from 'react';

// Mock du composant CountdownTimer
jest.mock('@/components/CountdownTimer', () => () => <div data-testid="countdown-timer">Countdown Timer</div>);

describe('Home', () => {
  
  // it('should render the countdown timer', () => {
  //   render(<Home />);
  //   const timer = screen.getByTestId('countdown-timer');
  //   expect(timer).toBeInTheDocument();
  // });

  it('should render the link to participate', () => {
    render(<Home />);
    const link = screen.getByText(/Participer maintenant/i);
    expect(link).toHaveAttribute('href', '/sign-in?concour=true');
  });
  

  it('should render the description text', () => {
    render(<Home />);
    const descriptionText = screen.getByText(/Découvrez Thetiptop, votre nouvelle boutique de vente de thé bio à Nice/i);
    expect(descriptionText).toBeInTheDocument();
  });

  it('should render the list of prizes', () => {
    render(<Home />);
    const prizeItems = [
      'Infuseurs à thé',
      'Boîtes de thé bio détox ou infusion',
      'Boîtes de thé signature',
      'Coffrets découverte'
    ];

    prizeItems.forEach(item => {
      expect(screen.getByText(new RegExp(item, 'i'))).toBeInTheDocument();
    });
  });

  it('should render the grand prize description', () => {
    render(<Home />);
    const grandPrizeText = screen.getByText(/Un an de thé d'une valeur de 360€, tiré au sort sous contrôle d'huissier !/i);
    expect(grandPrizeText).toBeInTheDocument();
  });
});
