// CheckboxInput.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxInput } from '@/components/inputs/CheckboxInput'; // Assure-toi que le chemin est correct
import '@testing-library/jest-dom'; // Pour les matchers personnalisés comme toBeInTheDocument
import { Dispatch, SetStateAction } from 'react';

// Mock des composants externes (Modal et Checkbox)
jest.mock('@/components/Modal', () => ({
  __esModule: true,
  default: ({ openDialog, onOpenChange, title, children }: { openDialog: boolean; onOpenChange: Dispatch<SetStateAction<boolean>>; title: string; children: React.ReactNode }) => (
    <div>
      {openDialog && <div role="dialog">{title}</div>}
      {children}
    </div>
  ),
}));

jest.mock('@/components/ui/checkbox', () => ({
  Checkbox: ({ checked, onCheckedChange, ...props }: { checked: boolean; onCheckedChange: (checked: boolean) => void }) => (
    <input type="checkbox" checked={checked} id='terms' onChange={(e) => onCheckedChange(e.target.checked)} {...props} />
  ),
}));

describe('CheckboxInput Component', () => {
  let setCheckedMock: jest.Mock;

  // Avant chaque test, on initialise setCheckedMock
  beforeEach(() => {
    setCheckedMock = jest.fn();
    render(<CheckboxInput checked={false} setChecked={setCheckedMock} />);
  });

  // Test pour vérifier le rendu et le comportement du checkbox
  it('should render the checkbox and change its state', () => {
    const checkbox = screen.getByTestId('terms-checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // Simuler le changement d'état du checkbox
    fireEvent.click(checkbox);
    expect(setCheckedMock).toHaveBeenCalledWith(true);
  });

  // Test pour vérifier que la modal s'ouvre lorsque l'utilisateur clique sur le lien
  it('should open the modal when clicking the terms link', () => {
    const termsLink = screen.getByText(/les Conditions Générales d'Utilisation/i);
    expect(termsLink).toBeInTheDocument();

    // Simuler le clic sur le lien
    fireEvent.click(termsLink);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent("Conditions Générales d'utilisation");
  });
});
