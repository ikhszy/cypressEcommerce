/// <reference types="cypress" />

class ShippingPage {

    PageTitle() {
        return cy.get('.maintext')
    }

    ShipAddress() {
        return cy.get('.registerbox').find('address')
    }

    ShipAddressEditButton() {
        return cy.get("[title='Change Address']")
    }

    ShipMethodRadio() {
        return cy.get("[type='radio']")
    }

    ShipComment(cmd) {
        // cmd should be a string
        return cy.get('#shipping_comment').type(cmd)
    }

    ShipBackButton() {
        return cy.get("[title='Back']")
    }

    ShipContinueButton(num) {
        /* 
        multiple use
        0 = for using existing (form) and outside of form
        1 = for new address (form)
        */
        return cy.get("[title='Continue']").eq(num)
    }

    ShipFormRadio(num) {
        // start from 0 in case already have multiple address
        return cy.get("[type='radio']").eq(num)
    }

    ShipFormFirstName(fname) {
        return cy.get('#Address2Frm_firstname').type(fname)
    }

    ShipFormLastName(lname) {
        return cy.get('#Address2Frm_lastname').type(lname)
    }

    ShipFormLastComp(comp) {
        return cy.get('#Address2Frm_company').type(comp)
    }

    ShipFormAddr1(addr1) {
        return cy.get('#Address2Frm_address_1').type(addr1)
    }

    ShipFormAddr2(addr2) {
        return cy.get('#Address2Frm_address_2').type(addr2)
    }

    ShipFormCity(cty) {
        return cy.get('#Address2Frm_city').type(cty)
    }

    ShipFormRegion(rgn) {
        return cy.get('#Address2Frm_zone_id').select(rgn)
    }

    ShipFormZip(zip) {
        return cy.get('#Address2Frm_postcode').type(zip)
    }

    ShipFormNation(ntn) {
        return cy.get('#Address2Frm_country_id').select(ntn)
    }
}