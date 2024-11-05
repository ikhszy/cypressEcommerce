/// <reference types="cypress" />

class AccountDetailsPage {

    title() {
        return cy.get('.maintext')
    }

    subtitle() {
        return cy.get('.heading4')
    }

    loginName() {
        return cy.get('#AccountFrm > div.registerbox.form-horizontal > fieldset > div:nth-child(1) > div')
    }

    inputFirstName(name) {
        var fname = cy.get('#AccountFrm_firstname')
        fname.clear()
        fname.type(name)
    }

    inputLastName(name) {
        var lname = cy.get('#AccountFrm_lastname')
        lname.clear()
        lname.type(name)
    }

    inputEmail(email) {
        var mail = cy.get('#AccountFrm_email')
        mail.clear()
        mail.type(email)
    }

    inputPhone(phone) {
        var phn = cy.get('#AccountFrm_telephone')
        phn.clear()
        phn.type(phone)
    }

    inputFax(fax) {
        var fx = cy.get('#AccountFrm_fax')
        fx.clear()
        fx.type(fax)
    }

    btnBack() {
        var btn = cy.get('.btn.btn-default.mr10')
        btn.click()
    }

    btnContinue() {
        var btn = cy.get('.btn.btn-orange.pull-right.lock-on-click')
        btn.click()
    }
}

export default AccountDetailsPage