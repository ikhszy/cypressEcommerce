/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import MyAccountPage from "../../Objects/MyAccountPage";
import RegisterPage from "../../Objects/RegisterPage";
import AccountDetails from "../../Objects/AccountDetails";

describe('Account Details', function() {

    const headNav = new headerNavigation();
    const myAcc = new MyAccountPage();
    const regPage = new RegisterPage();
    const accDet = new AccountDetails();
    const faker = require('@faker-js/faker');

    before(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        cy.fixture('user.json').then(function(user) {
            globalThis.user = user
        })

        // login process
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        regPage.LoginFormName(user.username)
        regPage.LoginFormPass(user.password)
        regPage.LoginFormSubmit()

        // Verify logged in successfully
        myAcc.MyAccountTitle().should('have.text', ' My Account');

    })


    it('Successfully change details', function() {
        // enter the edit details page
        myAcc.IconEditAccount();
        accDet.title().should('have.text', 'My Account Information')
        accDet.loginName().should('have.text', user.username)

        // generate random data
        let firstName = faker.fakerEN.person.firstName()
        let lastName = faker.fakerEN.person.lastName()
        let email = faker.fakerEN.internet.email()
        let phone = faker.fakerEN.phone.number()

        // input those random data into the field
        accDet.firstName(firstName)
        accDet.lastName(lastName)
        accDet.email(email)
        accDet.phone(phone)

        // submit the data
        accDet.btnContinue()

        // check success message
        myAcc.AlertSuccess().should('be.visible')
        myAcc.AlertSuccess().should('contain.text', 'Success: Your account has been successfully updated.')
    })
})