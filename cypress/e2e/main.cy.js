// <reference types="cypress" />
context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('title should have text Caesar Cypher', () => {
        cy.dataCy('title-test').should('have.text', 'Caesar Cypher');
    });

    it('ceasar compute should be correct', () => {
        cy.dataCy('shift-test').type('6');
        cy.dataCy('text-test').type('Hello World!');
        cy.dataCy('button-test').click()
        cy.dataCy('result-test').should('have.text', 'Nkrru Cuxrj!');
    });
})
   