/// <reference types="cypress" />

//CHAIN OF COMMANDS EXAMPLES ON EVERY IT

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item HEADER", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        //cy.get('.block_frame_featured [title="Skinsheen Bronzer Stick"]').click() -> with CSS selector
        
    });

    it('Click on the first item using item TEXT', () => {
        cy.visit("https://www.automationteststore.com/");
        // with THEN we can handle the order of the execution. Without it 'console.log' would run first // 
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(iteamHeaderText) {
            console.log("Selected the following item:" + iteamHeaderText.text()) //with TEXT we extract the name of the item selected //
            
        })
    });

    it.only('Click on the first item using INDEX', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click() //product number 0 of all//
    });
})