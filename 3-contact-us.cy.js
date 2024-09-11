    /// <reference types="Cypress" />
    
            // add the above command to allow cypress commands and have a definition of what everything works//
describe("Test Contact Us form via Webdriveruni", () =>{ //,() => es para hacer el callback. Esto quiere decir que dentro de la llave siguiente va a haber una función//
    it("Should be able to submit a successful submission via contact us form", () => {
        //CTRL + click on the type shows us the list of things we can do with that command//
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


})

