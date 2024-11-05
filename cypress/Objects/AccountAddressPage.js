/// <reference types="cypress" />

class AccountAddressPage {

    addressTitle() {
        return cy.get('.maintext')
    }

    addressList() {
        return cy.get('.contentpanel').find('.genericbox.border-bottom')
    }

    addressListDetails(count) {
         return cy.get('.contentpanel').find('.genericbox.border-bottom').eq(count).find('address')
    }

    addressEdit(count) {
        return cy.get('.contentpanel').find('.genericbox.border-bottom').eq(count).find('button[title="Edit"]').click()
    }

    addressDelete(count) {
        return cy.get('.contentpanel').find('.genericbox.border-bottom').eq(count).find('button[title="Delete"]').click()
    }

    addressNewBtn() {
        return cy.get('a[title="New Address"]').click()
    }

    addressFirstName(fname) {
        return cy.get('#AddressFrm_firstname').clear().type(fname)
    }

    addressLastName(lname) {
        return cy.get('#AddressFrm_lastname').clear().type(lname)
    }

    addressCompany(com) {
        return cy.get('#AddressFrm_company').clear().type(com)
    }

    addressAddr1(addr1) {
        return cy.get('#AddressFrm_address_1').clear().type(addr1)
    }

    addressAddr2(addr2) {
        return cy.get('#AddressFrm_address_2').clear().type(addr2)
    }

    addressCity(city) {
        return cy.get('#AddressFrm_city').clear().type(city)
    }

    addressState(state) {
        return cy.get('#AddressFrm_zone_id').select(state)
    }

    addressZip(zip) {
        return cy.get('#AddressFrm_postcode').clear().type(zip)
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

    addressSuccessAlert() {
        return cy.get('.alert.alert-success')
    }
}

export default AccountAddressPage;