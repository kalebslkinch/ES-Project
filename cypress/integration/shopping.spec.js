describe('Navigation', () => {
  it('should navigate to the Shopping page and have correct title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/shopping');

    cy.get('h1').contains('Products');
    cy.get('h3').contains('Nerds');
    cy.get('p').contains('Nerds Candy');
  });

  it('contain correct data on product card', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/shopping');

    cy.get('h3').contains('Nerds');
    cy.get('p').contains('Nerds Candy');
    cy.get('p');
  });
});

export {};
