/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //create constant
        //create a dynamic selector 'href' using specific properties common through all links//
        
    //The following will fail
        /* const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        makeupLink.click();
        skincareLink.click(); */

    //The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click();

//This is how we should be doing it in Cypress. Best approach//
    cy.get("a[href*='product/category&path=']").contains("Makeup")
    cy.get("a[href*='product/category&path=']").contains("Skincare")

    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //Following code will fail
        /* const header = cy.get("h1 .maintext");
        cy.log(header.text()) */

        // el then trasnforma el JQuery
        cy.get("h1 .maintext").then(($headerText) => { //$headerText is just a name, we can change it // La => significa funcion. Puedo agregar function .then(function ($headerText))
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
            //I can replace headerText from cy.log and expect with $headerText.text(), and it'd be the same result.
        })
    });

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        //find the elem that has that ID and inside that make sure it has the text 'Contact Us Form'
        //with that result, I want to find the element with the ID field_11

        //JQuery approach. Mostly uses promises
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firtNameText = text.find('#field_11').text()
            expect(firtNameText).to.contain('First name')

              //Embedded commands (CLOSURE)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    
    });
})
