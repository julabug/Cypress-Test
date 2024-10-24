/// <reference types="cypress" />

describe("Iterate over elements", () => {
    
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        //cy.get is going to locate all the headers
        //aliases reduce code
        //invoke busca valores/propiedades dentro del elemento, por ejemplo, type - text - value. Extrae en este caso el valor 'text' de ese elemento
        //invoke('text') busca el texto en blanco
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail') //we create a variable for the text//
        cy.get('@productThumbnail').its('length').should('be.gt', 5) //should be greater than 5
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

    });

    it('Validate product thumbnail', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('product') //use alias to not repeat the entire code
        cy.get('@product').should('have.length', 16) //validate that there are 16 product thumbnails
        //cy.get('@product').its('length').should('eq', 16) //alternative. Same result
        cy.get('@product').find('.productcart').invoke('attr','title').should('include', 'Add to Cart')
        // cy.get('@product').find('.productcart').should('have.attr', 'title', 'Add to Cart') // mismo resultado que arriba
        //invoke('attr, 'title') no busca el texto en blanco, sino el atributo específico. En este caso title / title=Add to Cart
        //from thumbnail class, I want to find the productcart class and invoke its attribute title to be "Add to Cart"
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0; // contains both non sale and sale items
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0 //contains the total of non sale items
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) { //BUSCAR LOOPS JAVASCRIPT
                cy.log(itemPrice[i]) 
                itemPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemPriceTotal
            cy.log ('Non sale price items total: ' + itemPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0; // contains the total of sale items
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) { //BUSCAR LOOPS JAVASCRIPT
                cy.log(saleItemPrice[i]) 
                saleItemsPrice += Number(saleItemPrice[i]);
            } 
            itemsTotal += saleItemsPrice
            cy.log ('Sale price items total: ' + saleItemsPrice)
        })
        .then(() => {
            cy.log('The total price of all products: ' + itemsTotal)
            expect(itemsTotal).to.equal(648.5)
        })
      });
    });