/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import RegisterPage from "../../Objects/RegisterPage";
import MyAccountPage from "../../Objects/MyAccountPage";

describe('Login Test', function() {
    const headNav = new headerNavigation()
    const regPage = new RegisterPage()
    const MyAcc = new MyAccountPage()

    it('successfully logged in', function() {
        // Enter the login page
        cy.visit('https://automationteststore.com/');
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        regPage.LoginFormName('koloTerorita')
        regPage.LoginFormPass('password123')
        regPage.LoginFormSubmit()

        // Verify logged in successfully
        MyAcc.MyAccountTitle().should('have.text', ' My Account');
    })
})