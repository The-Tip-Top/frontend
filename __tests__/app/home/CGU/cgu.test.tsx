import { render, screen } from '@testing-library/react';
import CGU from '@/app/home/cgu/page';

jest.mock('../../../../public/ConditionGeneral', () => ({
  conditionGeneral: '<p>Conditions générales de vente</p>',
}));

describe('CGU', () => {
  test('renders the component with the correct structure', () => {
    render(<CGU />);

    const textElement = screen.getByText(/Conditions générales de vente/i);
    expect(textElement).toBeInTheDocument();

    const container = textElement.closest('div.mt-24');
    expect(container).toBeInTheDocument();
  });
});