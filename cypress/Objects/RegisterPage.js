/// <reference types="cypress" />
class RegisterPage{

    RegisterTitle() {
        return cy.get('#maincontainer > div > div > div > h1 > span.maintext')
    }

    RegisterSubTitle() {
        return cy.get('#maincontainer > div > div > div > div > div.col-sm-6.newcustomer > h2')
    }

    RegisterButton() {
        var button = cy.get('#accountFrm > fieldset > button');
        button.click();
        return this;
    }

    RegisterFormTitle() {
        return cy.get('#maincontainer > div > div > div > h1 > span.maintext')
    }

    RegisterFormFirstName(first) {
        var firstName = cy.get('#AccountFrm_firstname')
        firstName.type(first)
        return this;
    }
    
    RegisterFormLastName(last) {
        var lastName = cy.get('#AccountFrm_lastname')
        lastName.type(last)
        return this;
    }

    RegisterFormEmail(inputEmail) {
        var email = cy.get('#AccountFrm_email')
        email.type(inputEmail)
        return this;
    }

    RegisterFormTelephone(phone) {
        var telephone = cy.get('#AccountFrm_telephone')
        telephone.type(phone)
        return this;
    }

    RegisterFormFax(faxNum) {
        var fax = cy.get('#AccountFrm_fax')
        fax.type(faxNum)
        return this;
    }

    RegisterFormCompany(comp) {
        var company = cy.get('#AccountFrm_company')
        company.type(comp)
        return this;
    }

    RegisterFormAddress1(addr1) {
        var address1 = cy.get('#AccountFrm_address_1')
        address1.type(addr1)
        return this;
    }

    RegisterFormAddress2(addr2) {
        var address2 = cy.get('#AccountFrm_address_2')
        address2.type(addr2)
        return this;
    }

    RegisterFormCity(cityName) {
        var city = cy.get('#AccountFrm_city')
        city.type(cityName)
        return this;
    }

    RegisterFormRegionSelect(reg) {
        var region = cy.get('#AccountFrm_zone_id')
        region.select(reg)
        return this;
    }

    RegisterFormZipCode(zip) {
        var postal = cy.get('#AccountFrm_postcode')
        postal.type(zip)
        return this;
    }

    RegisterFormCountry(cty) {
        var country = cy.get('#AccountFrm_country_id')
        country.select(cty)
        return this;
    }

    RegisterFormLoginName(lgn) {
        var loginName = cy.get('#AccountFrm_loginname')
        loginName.type(lgn)
        return this;
    }

    RegisterFormPassword(pass) {
        var password = cy.get('#AccountFrm_password')
        password.type(pass)
        return this;
    }

    RegisterFormPasswordConfirm(passCfm) {
        var passConfirm = cy.get('#AccountFrm_confirm')
        passConfirm.type(passCfm)
        return this;
    }

    RegisterSubscribeYes() {
        var subscribeYes = cy.get('#AccountFrm_newsletter1')
        subscribeYes.click();
    }

    RegisterSubscribeNo() {
        var subscribeNo = cy.get('#AccountFrm_newsletter0')
        subscribeNo.click();
    }

    RegisterPrivacyCheck() {
        var Priv = cy.get('#AccountFrm_agree')
        Priv.click();
    }

    RegisterSubmitButton() {
        var submitBtn = cy.get('#AccountFrm > div.form-group > div > div > button')
        submitBtn.click();
    }

    RegisterSuccessTitle() {
        return cy.get('.maintext')
    }

    RegisterSuccessContinue() {
        return cy.get('.mb40 > .btn').click()
    }

    LoginTitle() {
        return cy.get('#maincontainer > div > div > div > div > div.col-sm-6.returncustomer > h2')
    }

    LoginFormName(fName) {
        var formName = cy.get('#loginFrm_loginname')
        formName.type(fName);
        return this;
    }

    LoginFormPass(fpass) {
        var formPass = cy.get('#loginFrm_password')
        formPass.type(fpass)
        return this;
    }

    LoginFormSubmit() {
        var submitBtn = cy.get('#loginFrm > fieldset > button')
        submitBtn.click();
    }

}

export default RegisterPage