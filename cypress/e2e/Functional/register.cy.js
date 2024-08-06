/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import RegisterPage from "../../Objects/RegisterPage";
import MyAccountPage from "../../Objects/MyAccountPage";

describe('Register Test', function() {
    const headNav = new headerNavigation()
    const regPage = new RegisterPage()
    const accPage = new MyAccountPage()

    const faker = require('@faker-js/faker');
    

    it('Successfully register', function() {
        // generate data
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

        // logout
        accPage.IconLogoff()
    })

    it('failed on empty first name', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty first name
        cy.log(firstName + '.' + lastName + '@hotmail.com')
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

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'First Name must be between 1 and 32 characters!')

        // check error message
        regPage.RegisterError(0).should('contain.text', 'First Name must be between 1 and 32 characters!')
    })

    it('failed on empty last name', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty last name
        cy.log(firstName + '.' + lastName + '@hotmail.com')
        regPage.RegisterFormFirstName(firstName)
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

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Last Name must be between 1 and 32 characters!')

        // check error message
        regPage.RegisterError(1).should('contain.text', 'Last Name must be between 1 and 32 characters!')
    })

    it('failed on empty email', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty email
        cy.log(firstName + '.' + lastName + '@hotmail.com')
        regPage.RegisterFormFirstName(firstName)
        regPage.RegisterFormLastName(lastName)
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

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Email Address does not appear to be valid!')

        // check error message
        regPage.RegisterError(2).should('contain.text', 'Email Address does not appear to be valid!')
    })

    it('failed on empty address', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty address
        cy.log(firstName + '.' + lastName + '@hotmail.com')
        regPage.RegisterFormFirstName(firstName)
        regPage.RegisterFormLastName(lastName)
        regPage.RegisterFormEmail(email)
        regPage.RegisterFormTelephone(phoneNumber)
        
        // Your Address
        regPage.RegisterFormCompany(company)
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

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Address 1 must be between 3 and 128 characters!')

        // check error message
        regPage.RegisterError(6).should('contain.text', 'Address 1 must be between 3 and 128 characters!')
    })

    it('failed on empty city', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty city
        cy.log(firstName + '.' + lastName + '@hotmail.com')
        regPage.RegisterFormFirstName(firstName)
        regPage.RegisterFormLastName(lastName)
        regPage.RegisterFormEmail(email)
        regPage.RegisterFormTelephone(phoneNumber)
        
        // Your Address
        regPage.RegisterFormCompany(company)
        regPage.RegisterFormAddress1(address1)
        regPage.RegisterFormAddress2(address2)
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

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'City must be between 3 and 128 characters!')

        // check error message
        regPage.RegisterError(8).should('contain.text', 'City must be between 3 and 128 characters!')
    })

    it('failed on not selecting region', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty city
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
        regPage.RegisterFormZipCode(zip)
        regPage.RegisterFormLoginName(loginName)
        regPage.RegisterFormPassword(password)
        regPage.RegisterFormPasswordConfirm(password)

        // others and submit
        regPage.RegisterSubscribeNo()
        regPage.RegisterPrivacyCheck()
        regPage.RegisterSubmitButton()

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Please select a region / state!')

        // check error message
        regPage.RegisterError(9).should('contain.text', 'Please select a region / state!')
    })

    it('failed on empty zipcode', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty zip
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
        regPage.RegisterFormLoginName(loginName)
        regPage.RegisterFormPassword(password)
        regPage.RegisterFormPasswordConfirm(password)

        // others and submit
        regPage.RegisterSubscribeNo()
        regPage.RegisterPrivacyCheck()
        regPage.RegisterSubmitButton()

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Zip/postal code must be between 3 and 10 characters!')

        // check error message
        regPage.RegisterError(10).should('contain.text', 'Zip/postal code must be between 3 and 10 characters!')
    })

    it('failed not selecting country', function() {
        // generate data again
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
        let nation = ' --- Please Select --- '
        let loginName = 'user_' + firstName
        let password = faker.fakerEN.internet.password()

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with country back to default
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
        regPage.RegisterFormCountry(0)
        regPage.RegisterFormZipCode(zip)
        regPage.RegisterFormLoginName(loginName)
        regPage.RegisterFormPassword(password)
        regPage.RegisterFormPasswordConfirm(password)

        // others and submit
        regPage.RegisterSubscribeNo()
        regPage.RegisterPrivacyCheck()
        regPage.RegisterSubmitButton()

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Please select a country!')

        // check error message
        regPage.RegisterError(11).should('contain.text', 'Please select a country!')
    })

    it('failed empty login name', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty login name
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
        regPage.RegisterFormPassword(password)
        regPage.RegisterFormPasswordConfirm(password)

        // others and submit
        regPage.RegisterSubscribeNo()
        regPage.RegisterPrivacyCheck()
        regPage.RegisterSubmitButton()

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Login name must be alphanumeric only and between 5 and 64 characters!')

        // check error message
        regPage.RegisterError(12).should('contain.text', 'Login name must be alphanumeric only and between 5 and 64 characters!')
    })

    it('failed on empty password', function() {
        // generate data again
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

        // re-enter register page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill form with empty login name
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
        regPage.RegisterFormPasswordConfirm(password)

        // others and submit
        regPage.RegisterSubscribeNo()
        regPage.RegisterPrivacyCheck()
        regPage.RegisterSubmitButton()

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Password must be between 4 and 20 characters!')
        regPage.RegisterAlertBox().should('contain.text', 'Password confirmation does not match password!')

        // check error message
        regPage.RegisterError(13).should('contain.text', 'Password must be between 4 and 20 characters!')
        regPage.RegisterError(14).should('contain.text', 'Password confirmation does not match password!')
    })

    it.only('failed not checking the privacy', function() {
        // generate data
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
        regPage.RegisterSubmitButton()

        // check Alert is shown
        regPage.RegisterAlertBox().should('be.visible')
        regPage.RegisterAlertBox().should('contain.text', 'Error: You must agree to the Privacy Policy!')
    })
})