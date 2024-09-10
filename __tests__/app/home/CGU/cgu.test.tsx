import { render, screen } from '@testing-library/react';
import CGU from '@/app/home/cgu/page';
import { conditionGeneral } from '../../../../public/ConditionGeneral';

// Mock the `conditionGeneral` if it's not a simple string or HTML
jest.mock('../../../../public/ConditionGeneral', () => ({
  conditionGeneral: '<p>Conditions générales de vente</p>',
}));

describe('CGU', () => {
    test('renders the component with the correct structure', () => {
      render(<CGU />);
  
      // Vérifie la présence du texte "Conditions générales de vente"
      const textElement = screen.getByText(/Conditions générales de vente/i);
      expect(textElement).toBeInTheDocument();
  
      // Vérifie que le conteneur parent a la classe 'mt-24'
      const container = textElement.closest('div.mt-24');
      expect(container).toBeInTheDocument();
    });
  });