/// <reference types="cypress" />

describe('Test Contact Us form via Webdriveruniversity', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Julieta")
        cy.get('[name="last_name"]').type("Vazquez")
        cy.get('[name="email"]').type("julietsvz@gmail.com")
        cy.get('textarea.feedback-input').type("Hello, world")
        cy.get('[type="submit"]').click()
        
    });

    //by putting it.only(...), we will run this test only//
    it('Should not be able to submite a succesful submission via contact us form as all fields are required', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Julieta")
        cy.get('[name="last_name"]').type("Vazquez")
        cy.get('textarea.feedback-input').type("Hello, world")
        cy.get('[type="submit"]').click()
        
    });
});