/// <reference types="cypress" />
class CartPage{
    pageTitle() {
        return cy.get('.maintext').should('have.text', ' Shopping Cart');
    }

    cartTableCount(count) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
        var table = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody')
        return table.children().should('have.length', count)
    }

    cartItemName(count) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
        var name = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(2) > a')
        return name;
    }

    cartItemModel(count) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
        var model = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(3)')
        return model;
    }

    cartItemBasePrice(count) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
        var base = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(4)')
        return base;
    }

    cartItemQuantity(count,change) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
    // change is how much you want the new quantity to be
        var itemQuantity = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(5) > div > input')
        itemQuantity.clear()
        itemQuantity.type(change)

        return this;
    }

    cartItemQuantityCheck(count, change) {
        var itemQuantity = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(5) > div > input')
        itemQuantity.should('have.value', change)
        return this;
    }

    cartItemTotalPrice(count) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
        return cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(6)')
    }

    cartTableRemove(count) {
    // count should be > 1 since the column header is counted, as the 1st item always = 2
        var remove = cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(' + count + ') > td:nth-child(7) > a')
        remove.click()
        return this;
    }

    cartTableUpdate() {
        var updBtn = cy.get('#cart_update')
        updBtn.click()
        return this;
    }

    cartTableCheckout() {
        var chkBtn = cy.get('#cart_checkout1')
        chkBtn.click()
        return this;
    }

    cartCouponInput(input) {
    // not sure about this as i don't know any coupon
        var cpnInput = cy.get('#coupon_coupon')
        cpnInput.clear()
        cpnInput.type(input)
        return this;
    }

    cartCouponSubmit() {
        var cpnBtn = cy.get('#apply_coupon_btn')
        cpnBtn.click()
        return this;
    }

    cartShipCountry(country) {
    // use country name for input
        var cty = cy.get('#estimate_country')
        cty.select(country)
        return this;
    }

    cartShipState(state) {
    // use state name for input
        var stt = cy.get('#estimate_country_zones')
        stt.select(state)
        return this;
    }

    cartShipZip(zip) {
        var zpcd = cy.get('#estimate_postcode')
        zpcd.clear()
        zpcd.type(zip)
        return this;
    }

    cartShipEstimate() {
        var estBtn = cy.get('#estimate > div:nth-child(2) > div > span > button')
        estBtn.click()
        return this;
    }

    cartShipRate(rate) {
    // select by numerical order
        var shiprate = cy.get('#shippings')
        shiprate.select(rate)
        return this;
    }

    cartContinueShop() {
        var cntBtn = cy.get('#cart > div > div.container-fluid.cart_total > div > a.btn.btn-default.mr10.mb10')
        cntBtn.click()
        return this;
    }

    cartCheckout() {
        var cBtn = cy.get('#cart_checkout2')
        cBtn.click()
        return this;
    }


}

export default CartPage