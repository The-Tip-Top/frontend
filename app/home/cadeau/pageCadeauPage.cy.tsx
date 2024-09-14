import React from 'react'
import CadeauPage from './page'

// describe('<CadeauPage />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<CadeauPage />)
//   })
// })
// cypress/e2e/cadeauPage.spec.js
describe('Cadeau Page', () => {
  before(() => {
    cy.intercept('GET', '/api/gifts', { fixture: 'gifts.json' }).as('getGifts');
    cy.intercept('GET', '/api/tickets/id/*', { fixture: 'ticket.json' }).as('getTicket');
  
  });

  beforeEach(() => {
    // Visiter la page avant chaque test
    // cy.visit('/cadeau?ticketId=clzzijv0j0009zk1vi5qfma5a'); // Assurez-vous que l'URL est correcte
  });

  it('should display the loading state initially', () => {
    cy.get('p').contains('Chargement des cadeaux...');
  });

  it('should display gifts after loading', () => {
    // Assurez-vous que le test attend que les cadeaux soient chargés
    cy.wait('@getGifts');
    cy.wait('@getTicket');

    cy.get('.grid').should('be.visible');
    cy.get('.bg-white').should('have.length', 5); // Vérifier que le nombre de cadeaux est correct

    // Vérifier les détails du premier cadeau
    cy.get('.bg-white').first().within(() => {
      cy.get('img').should('have.attr', 'src', '/path/to/image/infuseur_th.webp');
      cy.get('h2').should('contain.text', 'Infuseur th');
      cy.get('p').should('contain.text', 'Infuseur th');
    });
  });

  it('should highlight the selected gift and navigate to history page on validate button click', () => {
    cy.wait('@getGifts');
    cy.wait('@getTicket');

    cy.get('.bg-white').first().should('have.class', 'border-green-500');

    cy.get('button').contains('Valider le Cadeau').click();

    cy.url().should('include', '/account/history');
  });
});
