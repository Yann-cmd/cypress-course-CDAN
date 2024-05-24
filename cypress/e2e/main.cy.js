// <reference types="cypress" />
context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('p should have text Hello World!', () => {
        cy.get('p').should('have.text', 'Hello World!');
    });
})
   