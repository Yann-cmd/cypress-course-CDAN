// <reference types="cypress" />
context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../index.html');
    });

    it('p should have text Hello World!', () => {
        cy.get('p').should('have.text', 'Hello World!');
    });
})
   