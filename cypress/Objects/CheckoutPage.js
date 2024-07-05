/// <reference types="cypress" />

class CheckoutPage{

    PageTitle() {
        return cy.get('.maintext')
    }

    CheckoutReturnPolicy() {
        return cy.get('p > a > b').click()
    }

    CheckoutShipName() {
        return cy.get('.confirm_shippment_options').find('.align_left').first()
    }

    CheckoutShipAddress() {
        return cy.get('.confirm_shippment_options').find('address')
    }

    CheckoutShipRate() {
        return cy.get('.confirm_shippment_options').find('.align_left').eq(2)
    }

    CheckoutShipEditButton() {
        return cy.get('.confirm_shippment_options').find('.btn-xs').click()

    }

    CheckoutPayName() {
        return cy.get('.confirm_payment_options').find('.align_left').first()
    }

    CheckoutPayAddress() {
        return cy.get('.confirm_payment_options').find('address')
    }

    CheckoutPayMethod() {
        return cy.get('.confirm_payment_options').find('.align_left').eq(2)
    }

    CheckoutPayEditButton() {
        return cy.get('.confirm_payment_options').find('.btn-xs').first().click()
    }

    CheckoutPayCouponButton() {
        return cy.get('.confirm_payment_options').find('.btn-xs').last().click()
    }

    CheckoutItemEditButton() {
        return cy.get('.pull-right.mr10.btn.btn-default btn-xs').click()
    }

    CheckoutItemThumbnail(num) {
        // num start from 0 for the 1st item
        return cy.get('.table.confirm_products').find('tr').eq(num).find('img')
    }

    CheckoutItemTitle(num) {
        // num start from 0 for the 1st item
        return cy.get('.table.confirm_products').find('tr').eq(num).find('.checkout_heading').first()
    }

    CheckoutItemBasePrice(num) {
        // num start from 0 for the 1st item
        return cy.get('.table.confirm_products').find('tr').eq(num).find('td').eq(2)

    }

    CheckoutItemQuan(num) {
        // num start from 0 for the 1st item
        return cy.get('.table.confirm_products').find('tr').eq(num).find('td').eq(3)
    }

    CheckoutItemTotalPrice(num) {
        // num start from 0 for the 1st item
        return cy.get('.table.confirm_products').find('tr').eq(num).find('.checkout_heading').last()
    }

    CheckoutPriceSubTotal() {
        return cy.get(':nth-child(1) > :nth-child(2) > .bold')
    }

    CheckoutPriceShip() {
        return cy.get(':nth-child(2) > :nth-child(2) > .bold')
    }

    CheckoutPriceRetail() {
        return cy.get(':nth-child(3) > :nth-child(2) > .bold')
    }

    CheckoutPriceTotal() {
        return cy.get(':nth-child(4) > :nth-child(2) > .bold')
    }

    CheckoutOrderSumQuan(num) {
        // num is for the item row, start from 0
        return cy.get('.sidewidt').find('tr').eq(num).find('.align_left.valign_top')
    }

    CheckoutOrderSumTitle(num) {
        // num is for the item row, start from 0
        return cy.get('.sidewidt').find('tr').eq(num).find('.align_left.valign_top > a')
    }

    CheckoutOrderSumDetails(num, numDetails) {
        // num is for the item row, start from 0
        // num details is for item details, also start from 0
        return cy.get('.sidewidt').find('tr').eq(num)
        .find('.align_left.valign_top > div > small').eq(numDetails)
    }

    CheckoutOrderSumPrice(num) {
        // num is for the item row, start from 0
        return cy.get('.sidewidt').find('tr').eq(num).find('.align_right.valign_top > b')
    }

    CheckoutSideSubtotal() {
        return cy.get('sidewidt').find('table').eq(1).find('tr').eq(0)
        .find('td').eq(1)
        .find('cart_block_total')
    }

    CheckoutSideShip() {
        return cy.get('sidewidt').find('table').eq(1).find('tr').eq(1)
        .find('td').eq(1)
        .find('cart_block_total')
    }

    CheckoutSideRetail() {
        return cy.get('sidewidt').find('table').eq(1).find('tr').eq(2)
        .find('td').eq(1)
        .find('cart_block_total')
    }

    CheckoutSideTotal() {
        return cy.get('sidewidt').find('table').eq(1).find('tr').eq(3)
        .find('td').eq(1)
        .find('cart_block_total')
    }

    CheckoutPriceBackButton() {
        return cy.get('#back')
    }

    CheckoutConfirmOrderButton() {
        return cy.get('#checkout_btn').click()
    }

}

export default CheckoutPage