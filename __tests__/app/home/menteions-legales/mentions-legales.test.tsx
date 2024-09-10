// __tests__/Mentions.test.tsx
import { render, screen } from '@testing-library/react';
import Mentions from '@/app/home/mentions-legales/page'; // Ajustez le chemin selon l'emplacement de votre composant
import '@testing-library/jest-dom';

describe('Mentions', () => {
  it('should render the title correctly', () => {
    render(<Mentions />);
    const title = screen.getByText(/Mentions légales et politique de confidentialité/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the main content paragraph correctly', () => {
    render(<Mentions />);
    
    // Vérifier la partie du texte avant <strong>
    expect(screen.getByText(/La société/i)).toBeInTheDocument();

    // Vérifier la partie du texte après <strong>
    expect(screen.getByText(/soucieuse des droits des individus/i)).toBeInTheDocument();

    // Vérifier le texte à l'intérieur de <strong>
    expect(screen.getByText(/Thé tip top/i)).toBeInTheDocument();
  });

  it('should render the CNIL link with correct attributes', () => {
    render(<Mentions />);
    const cnilLink = screen.getByRole('link', { name: /https:\/\/www.cnil.fr\//i });
    expect(cnilLink).toBeInTheDocument();
    expect(cnilLink).toHaveAttribute('href', 'https://www.cnil.fr/');
    expect(cnilLink).toHaveAttribute('target', '_blank');
    expect(cnilLink).toHaveClass('text-blue-600 underline');
  });

  it('should render the other paragraphs correctly', () => {
    render(<Mentions />);
    const paragraphTexts = [
      /La poursuite de la navigation sur ce site vaut acceptation/i,
      /La version actuellement en ligne de ces conditions d'utilisation est la seule opposable/i
    ];

    paragraphTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});