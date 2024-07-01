/// <reference types="cypress" />

class CheckoutPage{

    PageTitle() {
        return cy.get('.maintext')
    }

    CheckoutReturnPolicy() {
        return cy.get('p > a > b').click()
    }

    CheckoutShipName() {
        return cy.get('.confirm_shippment_options > tbody > tr > :nth-child(1)')
    }

    CheckoutShipAddress() {
        return cy.get('.confirm_shippment_options > tbody > tr > :nth-child(2) > address')
    }

    CheckoutShipRate() {
        return cy.get('.confirm_shippment_options > tbody > tr > :nth-child(3)')
    }

    CheckoutShipEditButton() {
        return cy.get('.confirm_shippment_options > tbody > tr > .align_right > .btn').click()
    }

    CheckoutPayName() {
        return cy.get('.confirm_shippment_options > tbody > tr > .align_right > .btn')
    }

    CheckoutPayAddress() {
        return cy.get('.confirm_payment_options > tbody > tr > :nth-child(2) > address')
    }

    CheckoutPayMethod() {
        return cy.get('.confirm_payment_options > tbody > tr > :nth-child(2) > address')
    }

    CheckoutPayEditButton() {
        return cy.get('.confirm_payment_options > tbody > tr > .align_right > :nth-child(1)')
    }

    CheckoutPayCouponButton() {
        return cy.get('.align_right > :nth-child(4)')
    }

    CheckoutItemThumbnail() {
        return cy.get('.confirm_products > tbody > tr > :nth-child(1) > a > img')
    }

    CheckoutItemTitle() {
        return cy.get(':nth-child(2) > .checkout_heading')
    }

    CheckoutItemBasePrice() {
        return cy.get('.confirm_products > tbody > tr > :nth-child(3)')
    }

    CheckoutItemQuan() {
        return cy.get('.confirm_products > tbody > tr > :nth-child(4)')
    }

    CheckoutItemTotalPrice() {
        return cy.get('td.checkout_heading')
    }

    CheckoutPriceSubTotal() {
        return cy.get(':nth-child(1) > :nth-child(2) > .bold')
    }

    CheckoutPriceShip() {
        return cy.get(':nth-child(2) > :nth-child(2) > .bold')
    }

    CheckoutPriceTotal() {
        return cy.get(':nth-child(3) > :nth-child(2) > .bold')
    }

    CheckoutPriceBackButton() {
        return cy.get('#back')
    }

    CheckoutConfirmOrderButton() {
        return cy.get('#checkout_btn')
    }

}

export default CheckoutPage