// import { mount } from 'cypress/react';

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       mount: typeof mount;
//       dataCy(value: string): Chainable<JQuery<HTMLElement>>;
//     }
//   }
// }

export {}

declare global {
  namespace Cypress {
    interface Chainable {
      loginAs(role?: string): Chainable<any>,
      isWelcomePage(): Chainable<any>,
      openMenu(): Chainable<any>,
    }
  }
}