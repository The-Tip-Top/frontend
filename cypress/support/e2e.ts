// // cypress/e2e/cadeauPage.spec.ts
// describe('Cadeau Page', () => {
//     before(() => {
//       // Préparation des données si nécessaire
//     });
  
//     beforeEach(() => {
//       // Visiter la page avant chaque test
//       cy.visit('/cadeau'); // Assurez-vous que l'URL est correcte
//     });
  
//     it('should display the loading state initially', () => {
//       cy.get('p').contains('Chargement des cadeaux...');
//     });
  
//     it('should display gifts after loading', () => {
//       cy.intercept('GET', '/api/gifts', {
//         fixture: 'gifts.json'
//       }).as('getGifts');
  
//       cy.intercept('GET', '/api/tickets/id/*', {
//         fixture: 'ticket.json'
//       }).as('getTicket');
  
//       cy.wait('@getGifts');
//       cy.wait('@getTicket');
  
//       cy.get('.grid').should('be.visible');
//       cy.get('.bg-white').should('have.length.greaterThan', 0);
//     });
  
//     it('should navigate to history page on validate button click', () => {
//       cy.intercept('GET', '/api/gifts', {
//         fixture: 'gifts.json'
//       });
  
//       cy.intercept('GET', '/api/tickets/id/*', {
//         fixture: 'ticket.json'
//       });
  
//       cy.wait('@getGifts');
//       cy.wait('@getTicket');
  
//       cy.get('button').contains('Valider le Cadeau').click();
//       cy.url().should('include', '/account/history');
//     });
//   });
  