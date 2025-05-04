describe('Email is displayed', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should show the correct email address in the footer', () => {
      cy.fixture('example').then((data) => {
        cy.contains(data.email).should('be.visible');
      });
    });
  });
  