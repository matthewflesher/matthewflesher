describe('Email is displayed', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should show the correct copyright in footer', () => {
      cy.fixture('example').then((data) => {
        cy.contains(data.copyright).should('be.visible');
      });
    });
  });