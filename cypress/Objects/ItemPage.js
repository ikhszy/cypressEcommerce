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
        cy.wait(2000)
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

    itemTab(tabSelect) {
        // fill tabSelect with 0 (item description) or 1 (reviews)
        return cy.get('#myTab').find('li').eq(tabSelect).click()
    }

    itemReviewStar(rating) {
        // fill the rating manually. any input outside 1 - 4 will be considered as 5 stars
        if(rating === 1) {
            return cy.get('#rating1').click()
        } else if(rating === 2) {
            return cy.get('#rating2').click()
        } else if(rating === 3) {
            return cy.get('#rating3').click()
        } else if(rating === 4) {
            return cy.get('#rating4').click()
        } else {
            return cy.get('#rating5').click()
        }
    }

    itemReviewName(revName) {
    // revName for inputting name in String format
        return cy.get('#name').type(revName)
    }

    itemReviewYourReview(review) {
        return cy.get('#text').type(review)
    }

    itemReviewCode(code) {
        return cy.get('#captcha').type(code)
    }

    itemReviewSubmit() {
        return cy.get('#review_submit').click()
    }
}

export default ItemPage