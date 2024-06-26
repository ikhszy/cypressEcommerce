/// <reference types="cypress" />
class ItemPage{

    itemTitle() {
        return cy.get('.bgnone')
    }

    itemBasePrice() {
        // still not working as intended
        return cy.get('.productfilneprice')
    }

    itemTotalPrice() {
        // decided to add click first to handle animation of total price changing
        var totalPrice = cy.get('.total-price')
        totalPrice.click()
        return totalPrice;
    }

    itemQuantity(q) {
        var quan = cy.get('#product_quantity')
        quan.clear()
        quan.type(q)
        cy.wait(1000)
        return this;
    }

    itemRadioListOne(i) {
    // start with 0
        var radio = cy.get('#product > fieldset > div:nth-child(1) > div > label:nth-child(' + i + ')')
        radio.click()

        radio.find('input').invoke('attr', 'checked').should('contain', 'checked')
        return this;
    }

    itemPurchaseButton() {
        return cy.get('.cart').click()
    }
}

export default ItemPage