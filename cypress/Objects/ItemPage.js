/// <reference types="cypress" />
class ItemPage{

    itemTitle() {
        return cy.get('.bgnone')
    }

    itemBasePrice() {
        // still not working as intended
        cy.get('.productfilneprice').invoke('text').as('price')
        var ItemPrice = cy.get('@price').then($ele => {
        ItemPrice = $ele.split('$');
        cy.log(ItemPrice)
        return ItemPrice;
        })
    }

    itemQuantity(q) {
        var quan = cy.get('#product_quantity')
        quan.clear()
        quan.type(q)
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