/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import RegisterPage from "../../Objects/RegisterPage";

describe('Register Test', function() {
    const headNav = new headerNavigation()
    const regPage = new RegisterPage()

    const faker = require('@faker-js/faker');

    let firstName = faker.fakerEN.person.firstName()
    let lastName = faker.fakerEN.person.lastName()
    let email = faker.fakerEN.internet.email()
    let phoneNumber = faker.fakerEN.phone.number()
    let company = faker.fakerEN.company.buzzNoun()
    let address1 = faker.fakerEN.location.streetAddress()
    let address2 = faker.fakerEN.location.street()
    let city = faker.fakerEN.location.city()
    let region = faker.fakerEN.location.county()
    let zip = faker.fakerEN.location.zipCode()
    let nation = 'Indonesia'
    let loginName = 'user_' + firstName
    let password = faker.fakerEN.internet.password()

    it('Successfully register', function() {
        // Enter the registration page
        cy.visit('https://automationteststore.com/');
        headNav.loginRegisterButton().click();
        regPage.RegisterButton().click();
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // personal details
        regPage.RegisterFormFirstName().type(firstName)
        regPage.RegisterFormLastName().type(lastName)
        regPage.RegisterFormEmail().type(email)
        regPage.RegisterFormTelephone().type(phoneNumber)
        
        // Your Address
        regPage.RegisterFormCompany().type(company)
        regPage.RegisterFormAddress1().type(address1)
        regPage.RegisterFormAddress2().type(address2)
        regPage.RegisterFormCity().type(city)
        regPage.RegisterFormCountry().select(nation)
        regPage.RegisterFormRegionSelect().select('Jakarta Raya')
        regPage.RegisterFormZipCode().type(zip)
        regPage.RegisterFormLoginName().type(loginName)
        regPage.RegisterFormPassword().type(password)
        regPage.RegisterFormPasswordConfirm().type(password)

        // others and submit
        regPage.RegisterSubscribeNo().click()
        regPage.RegisterPrivacyCheck().click()
        regPage.RegisterSubmitButton().click()

        // verify
        regPage.RegisterSuccessTitle().should('have.text', ' Your Account Has Been Created!')
    })
})