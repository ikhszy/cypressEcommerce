/// <reference types="cypress" />

class AccountAddress {

    addressTitle() {
        return cy.get('.maintext')
    }

    addressList() {
        return cy.get('.contentpanel').find('.genericbox.border-bottom')
    }

    addressEdit(count) {
        return cy.get('.contentpanel').find('.genericbox.border-bottom').eq(count).find('button[title="Edit"]').click()
    }

    addressNewBtn() {
        return cy.get('a[title="New Address"]').click()
    }

    addressFirstName(fname) {
        return cy.get('#AddressFrm_firstname').type(fname)
    }

    addressLastName(lname) {
        return cy.get('#AddressFrm_lastname').type(lname)
    }

    addressCompany(com) {
        return cy.get('#AddressFrm_company').type(com)
    }

    addressAddr1(addr1) {
        return cy.get('#AddressFrm_address_1').type(addr1)
    }

    addressAddr2(addr2) {
        return cy.get('#AddressFrm_address_2').type(addr2)
    }

    addressCity(city) {
        return cy.get('#AddressFrm_city').type(city)
    }

    addressState(state) {
        return cy.get('#AddressFrm_zone_id').select(state)
    }

    addressZip(zip) {
        return cy.get('#AddressFrm_postcode').type(zip)
    }

    addressCountry(nation) {
        return cy.get('#AddressFrm_country_id').select(nation)
    }

    addressDefaultCheckbox(check) {
        if(check === 1) {
            return cy.get('#AddressFrm_default1').click()
        } else {
            return cy.get('#AddressFrm_default0').click()
        }
    }

    addressSubmitBtn() {
        return cy.get('button[title="Continue"]').click()
    }

    addressBackBtn() {
        return cy.get('a[title="Back"]').click()
    }
}

export default AccountAddress;