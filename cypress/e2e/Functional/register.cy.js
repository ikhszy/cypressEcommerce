/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import RegisterPage from "../../Objects/RegisterPage";
import MyAccountPage from "../../Objects/MyAccountPage";

describe('Register Test', function() {
    const headNav = new headerNavigation()
    const regPage = new RegisterPage()
    const accPage = new MyAccountPage()

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
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // personal details
        cy.log(firstName + '.' + lastName + '@hotmail.com')
        regPage.RegisterFormFirstName(firstName)
        regPage.RegisterFormLastName(lastName)
        regPage.RegisterFormEmail(email)
        regPage.RegisterFormTelephone(phoneNumber)
        
        // Your Address
        regPage.RegisterFormCompany(company)
        regPage.RegisterFormAddress1(address1)
        regPage.RegisterFormAddress2(address2)
        regPage.RegisterFormCity(city)
        regPage.RegisterFormCountry(nation)
        regPage.RegisterFormRegionSelect('Jakarta Raya')
        regPage.RegisterFormZipCode(zip)
        regPage.RegisterFormLoginName(loginName)
        regPage.RegisterFormPassword(password)
        regPage.RegisterFormPasswordConfirm(password)

        // others and submit
        regPage.RegisterSubscribeNo()
        regPage.RegisterPrivacyCheck()
        regPage.RegisterSubmitButton()

        // verify
        regPage.RegisterSuccessTitle().should('have.text', ' Your Account Has Been Created!')

        // continue to go to account dashboard
        regPage.RegisterSuccessContinue()

        // account page
        accPage.IconEditAccount()
    })
})