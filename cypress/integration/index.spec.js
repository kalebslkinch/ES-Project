describe('Navigation', () => {
  it('should navigate to the Home page and have correct title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Exotic Snaxx');
  });
});
it('should open correct page', () => {
  cy.visit('http://localhost:3000/');

  cy.get('button').contains('Enter the Store').click();

  cy.url().should('include', '/shopping');
});

it('should open correct page', () => {
  cy.visit('http://localhost:3000/');

  cy.get('button').contains('Mystery Snack Boxes').click();

  cy.url().should('include', '/snackbox');
});

export {};
