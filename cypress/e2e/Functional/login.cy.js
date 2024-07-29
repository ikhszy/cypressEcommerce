/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import RegisterPage from "../../Objects/RegisterPage";
import MyAccountPage from "../../Objects/MyAccountPage";

describe('Login Test', function() {
    const headNav = new headerNavigation()
    const regPage = new RegisterPage()
    const MyAcc = new MyAccountPage()

    before(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        cy.fixture('user.json').then(function(user) {
            globalThis.user = user
        })
    })

    afterEach(() => {
        MyAcc.MyAccountTitle().invoke('text').as('title')
        cy.get('@title').then($ele => {
            var title = String($ele)
            if(title == ' My Account') {
                MyAcc.IconLogoff();
            } else {
                headNav.loginRegisterButton()
            }
        })
    })

    it('successfully logged in', function() {
        // Enter the login page
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        regPage.LoginFormName(user.username)
        regPage.LoginFormPass(user.password)
        regPage.LoginFormSubmit()

        // Verify logged in successfully
        MyAcc.MyAccountTitle().should('have.text', ' My Account');
    })

    it('failed login with wrong password', function() {
        // fill the login form
        regPage.LoginFormName(user.username)
        regPage.LoginFormPass('wrongpassword!!')
        regPage.LoginFormSubmit()

        // verify text
        regPage.LoginError().should('contain.text', 'Incorrect login')
    })

    it('failed login with empty username', function() {
        // fill the login form
        regPage.LoginFormName('')
        regPage.LoginFormPass(user.password)
        regPage.LoginFormSubmit()

        // verify text
        regPage.LoginError().should('contain.text', 'Incorrect login')
    })
})