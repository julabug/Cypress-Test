/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        //cy.get('.info_links_footer > :nth-child(5) > a').click(); // bare CSS selector
        //cy.get('a[href$="contact"]').click() // the $ means to look for that word at the end of it - the URL ended with "contact"
        //cy.xpath("//a[contains(@href, 'contact')]").click() - with XPath
        // with customized CSS selector
        cy.get('a[href*="contact"]').click().then(function (button) {
            cy.log("You have clicked on " + button.text())
        }) 
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email') //assertion name:"email" on inspect
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        // cy.get('.col-md-6 > .btn').click();
        cy.get('button[title="Submit"]').click()
        //assertion with CHAI
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        console.log('Test has completed!') // by opening the CONSOLE (DevTools), it will show this text at the top. It's a non cypress command. // 
        // it will be displayed first even if the test hasn't finished executing yet - last row //
        // cy.log('Test has completed!') will displayed the message in Cypress
    });
})