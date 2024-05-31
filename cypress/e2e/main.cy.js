// <reference types="cypress" />
context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('p should have text Hello World!', () => {
        cy.get('p').should('have.text', 'Caesar Cypher');
    });

    it('ceasar compute should be correct', () => {
        cy.dataCy('shift-test').type('6');
        cy.dataCy('text-test').type('Hello World!');
        cy.dataCy('button-test').click()
        cy.dataCy('result-test').should('have.text', 'Nkrru Cuxrj!');
    });
})
   