// Blog.test.tsx

import { render, screen } from '@testing-library/react';
import Blog from '@/app/home/blog/page';
import '@testing-library/jest-dom';

describe('Blog Component', () => {
    test('renders the Blog component with correct content', () => {
      render(<Blog />);
  
      // Vérifier la présence du titre
      expect(screen.getByText(/Participez au Jeu-Concours Thé Tip Top et Gagnez des Cadeaux Exceptionnels/i)).toBeInTheDocument();
  
      // Vérifier la présence des descriptions et des sections
      expect(screen.getByText(/Pour célébrer l'ouverture de notre 10ème boutique à Nice/i)).toBeInTheDocument();
      expect(screen.getByText(/Conditions de Participation/i)).toBeInTheDocument();
      expect(screen.getByText(/Répartition des Gains/i)).toBeInTheDocument();
      expect(screen.getByText(/Comment Participer \?/i)).toBeInTheDocument();
      expect(screen.getByText(/Récupération de Votre Lot/i)).toBeInTheDocument();
      expect(screen.getByText(/Règlement du Jeu et Tirage au Sort Final/i)).toBeInTheDocument();
      expect(screen.getByText(/Quelques Précisions Importantes/i)).toBeInTheDocument();
  
      // Vérifier les images
      expect(screen.getByAltText(/Boutique Thé Tip Top à Nice/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Infuseur à thé et coffret découverte/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Jouer au jeu-concours Thé Tip Top/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Tirage au sort final de the tip tip top/i)).toBeInTheDocument();
  
     
  });
   
  });