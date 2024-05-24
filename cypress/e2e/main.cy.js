// <reference types="cypress" />
context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('p should have text Hello World!', () => {
        cy.get('p').should('have.text', 'Caesar Cypher');
    });

    it('ceasar compute should be correct', () => {
        cy.get('#shift').type('6');
        cy.get('#text').type('Hello World!');
        cy.get('#Cypher').click()
        cy.get('#result').should('have.text', 'Nkrru Cuxrj!');
    });
})
   