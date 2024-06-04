class RegisterPage{

    RegisterTitle() {
        return cy.get('#maincontainer > div > div > div > h1 > span.maintext')
    }

    RegisterSubTitle() {
        return cy.get('#maincontainer > div > div > div > div > div.col-sm-6.newcustomer > h2')
    }

    RegisterButton() {
        return cy.get('#accountFrm > fieldset > button')
    }

    RegisterFormTitle() {
        return cy.get('#maincontainer > div > div > div > h1 > span.maintext')
    }

    RegisterFormFirstName() {
        return cy.get('#AccountFrm_firstname')
    }
    
    RegisterFormLastName() {
        return cy.get('#AccountFrm_lastname')
    }

    RegisterFormEmail() {
        return cy.get('#AccountFrm_email')
    }

    RegisterFormTelephone() {
        return cy.get('#AccountFrm_telephone')
    }

    RegisterFormFax() {
        return cy.get('#AccountFrm_fax')
    }

    RegisterFormCompany() {
        return cy.get('#AccountFrm_company')
    }

    RegisterFormAddress1() {
        return cy.get('#AccountFrm_address_1')
    }

    RegisterFormAddress2() {
        return cy.get('#AccountFrm_address_2')
    }

    RegisterFormCity() {
        return cy.get('#AccountFrm_city')
    }

    RegisterFormRegionSelect() {
        return cy.get('#AccountFrm_zone_id')
    }

    RegisterFormZipCode() {
        return cy.get('#AccountFrm_postcode')
    }

    RegisterFormCountry() {
        return cy.get('#AccountFrm_country_id')
    }

    RegisterFormLoginName() {
        return cy.get('#AccountFrm_loginname')
    }

    RegisterFormPassword() {
        return cy.get('#AccountFrm_password')
    }

    RegisterFormPasswordConfirm() {
        return cy.get('#AccountFrm_confirm')
    }

    RegisterSubscribeYes() {
        return cy.get('#AccountFrm_newsletter1')
    }

    RegisterSubscribeNo() {
        return cy.get('#AccountFrm_newsletter0')
    }

    RegisterPrivacyCheck() {
        return cy.get('#AccountFrm_agree')
    }

    RegisterSubmitButton() {
        return cy.get('#AccountFrm > div.form-group > div > div > button')
    }

    RegisterSuccessTitle() {
        return cy.get('.maintext')
    }

}

export default RegisterPage