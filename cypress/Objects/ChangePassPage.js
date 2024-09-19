/// <reference types="cypress" />

class ChangePassPage{

    title() {
        return cy.get('.maintext')
    }

    subTitle() {
        return cy.get('.heading4')
    }

    currPass(current) {
        var currpass = cy.get('#PasswordFrm_current_password')
        currpass.clear()
        return currpass.type(current)
    }

    newPass(npass) {
        var newpass = cy.get('#PasswordFrm_password')
        newpass.clear()
        return newpass.type(npass)
    }

    confPass(confirm) {
        var confpass = cy.get('#PasswordFrm_confirm')
        confpass.clear()
        return confpass.type(confirm)
    }

    backButton() {
        return cy.get('[title="Back"]')
    }

    submitButton() {
        return cy.get('[title="Continue"]')
    }

    alertError() {
        return cy.get('.alert.alert-error.alert-danger')
    }

    inputError(num) {
    /*
        input num accordingly
        0 --> current password error text
        1 --> new password error text
        2 --> confirm new password error text
    */
        return cy.get('.help-block').eq(num)
    }
}

export default ChangePassPage