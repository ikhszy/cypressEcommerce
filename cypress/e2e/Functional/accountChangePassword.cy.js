/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import MyAccountPage from "../../Objects/MyAccountPage";
import RegisterPage from "../../Objects/RegisterPage";
import ChangePassPage from "../../Objects/ChangePassPage";

describe('Change password', function() {

    const headNav = new headerNavigation();
    const myAcc = new MyAccountPage();
    const regPage = new RegisterPage();
    const passPage = new ChangePassPage();
    const faker = require('@faker-js/faker');

    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        cy.fixture('user.json').then(function(user) {
            globalThis.user = user
        })
    })

    it('Successfully change password', function() {
        // login process
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        regPage.LoginFormName(user.username)
        regPage.LoginFormPass(user.password)
        regPage.LoginFormSubmit()

        // Verify logged in successfully
        myAcc.MyAccountTitle().should('have.text', ' My Account');

        // enter the change password page
        myAcc.IconChangePassword()

        // generate new password
        let newpass = faker.fakerEN.internet.password()
        cy.log(newpass)

        // change the password to a new one
        passPage.title().should('have.text', ' Change Password')
        passPage.currPass(user.password)
        passPage.newPass(newpass)
        passPage.confPass(newpass)
        
        // write the new password to current user fixture
        cy.readFile("cypress/fixtures/user.json", (err, user) => {
            if (err) {
                return console.error(err);
            };
        }).then((user) => {
            user.password = newpass
            cy.writeFile("cypress/fixtures/user.json", JSON.stringify(user))
        })

        // submit the password change
        passPage.submitButton().click()
        myAcc.AlertSuccess().should('contain.text', 'Success: Your password has been successfully updated.')

        // logout and login again
        myAcc.IconLogoff()
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        cy.readFile("cypress/fixtures/user.json", (err, user) => {
            if (err) {
                return console.error(err);
            };
        }).then((user) => {
            regPage.LoginFormName(user.username)
            regPage.LoginFormPass(user.password)
            regPage.LoginFormSubmit()
        })
    })

    it.only('failed due to incorrect current password', function() {
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        cy.readFile("cypress/fixtures/user.json", (err, user) => {
            if (err) {
                return console.error(err);
            };
        }).then((user) => {
            regPage.LoginFormName(user.username)
            regPage.LoginFormPass(user.password)
            regPage.LoginFormSubmit()
        })
        
        // enter the change password page
        myAcc.IconChangePassword()

        // generate new password
        let newpass = faker.fakerEN.internet.password()
        cy.log(newpass)

        // change the current password incorrectly
        passPage.title().should('have.text', ' Change Password')
        passPage.currPass('gibberish')
        
        passPage.newPass(newpass)
        passPage.confPass(newpass)
        passPage.submitButton().click()

        // verify error text
        passPage.alertError().should('be.visible')
        passPage.alertError().should('contain.text', 'ops, there is an error with information provided')
        passPage.inputError(0).should('have.text', 'Your current password is incorrect! Please try again.')
    })
})