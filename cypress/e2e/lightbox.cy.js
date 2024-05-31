// <reference types="cypress" />
context('lightbox testing', () => {
    beforeEach(() => {
        cy.visit('../../app/lightbox.html');
    });

    it('lightbox should open when clicking on the img', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('lightbox-open-test').should('be.visible')
    });

    it('lightbox should close when clicking away', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.get('body').click(0,0);
        cy.dataCy('lightbox-open-test').should('not.be.visible')
    });

    it('like counting should change when clicking on "like" icon on the lightbox and overlay (to add mention)', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('like-icon').click()
        cy.dataCy('like-count').should('have.text', '1');

        cy.get('body').click(0,0);
        cy.dataCy('lightbox-click-test').trigger('mouseover')
        cy.dataCy('like-count-overlay').should('have.text', '1');
    });

    it('like counting should change when clicking on "like" icon on the lightbox and overlay (to remove mention)', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('like-icon').click()
        cy.dataCy('like-count').should('have.text', '1');

        cy.get('body').click(0,0);
        cy.dataCy('lightbox-click-test').trigger('mouseover')
        cy.dataCy('like-count-overlay').should('have.text', '1');

        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('like-icon-remove').click()
        cy.dataCy('like-count').should('have.text', '0');

        cy.get('body').click(0,0);
        cy.dataCy('lightbox-click-test').trigger('mouseover')
        cy.dataCy('like-count-overlay').should('have.text', '0');
    });

    it('add comments should work', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('comments').type('Cypress is awesome!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comments-body-0').should('have.text', 'Cypress is awesome!');
    });

    it('add empty comment should not work', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('submit-comments').should('be.disabled');
    });

    it('hide comments should work', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('comments').type('Cypress is awesome!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comment-hide').should('have.text', 'Hide 1 comment')
        cy.dataCy('comment-hide').click()
        cy.dataCy('comment-hide').should('have.text', 'Show 1 comment')
        cy.dataCy('comments-body-0').should('not.be.visible');
    });

    it('comment count should compute correctly', () => {
        cy.dataCy('lightbox-click-test').trigger('mouseover')
        cy.dataCy('like-comment-overlay').should('have.text', '0');
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('comments').type('Cypress is awesome!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comment-hide').should('have.text', 'Hide 1 comment')

        cy.get('body').click(0,0);
        cy.dataCy('lightbox-click-test').trigger('mouseover')
        cy.dataCy('like-comment-overlay').should('have.text', '1');
    });

    it('plural/singular to hide!:show comments should be correct accroding to the counting', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('comments').type('Cypress is awesome!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comment-hide').should('have.text', 'Hide 1 comment')
        cy.dataCy('comments').type('Cypress is awesome!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comment-hide').should('have.text', 'Hide 2 comments')
        cy.dataCy('comment-hide').click()
        cy.dataCy('comment-hide').should('have.text', 'Show 2 comments')
    });

    it('delete comments should work', () => {
        cy.dataCy('lightbox-click-test').click()
        cy.dataCy('comments').type('Cypress is awesome!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comments').type('Cypress is awesome2!');
        cy.dataCy('submit-comments').click()
        cy.dataCy('comments').type('Cypress is awesome3!');
        cy.dataCy('submit-comments').click()

        cy.dataCy('delete-comments-1').click()
        cy.dataCy('comments-body-1').should('have.text', 'Cypress is awesome3!');
    });
})
   