/// <reference types="cypress" />
class ItemPage{

    itemTitle() {
        return cy.get('.bgnone')
    }

    itemBasePriceDiff() {
        let price
        cy.get('.productfilneprice').as('text')
        price = cy.get('@text')
        return price
    }

    itemBasePrice() {
        var priceBase
        cy.get('.productfilneprice')
        .then (($val) => {
            var price = $val.innerText()
            price.substring(1)
            priceBase += price;
        })
        return priceBase;
    }
}

export default ItemPage