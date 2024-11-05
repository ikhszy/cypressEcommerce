/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import MyAccountPage from "../../Objects/MyAccountPage";
import RegisterPage from "../../Objects/RegisterPage";
import AccountAddressPage from "../../Objects/AccountAddressPage";

describe('Account Address Book', function() {

    const headNav = new headerNavigation();
    const myAcc = new MyAccountPage();
    const regPage = new RegisterPage();
    const Adrs = new AccountAddressPage();

    const faker = require('@faker-js/faker');

    before(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        cy.fixture('user.json').then(function(user) {
            globalThis.user = user
        })
    })

    it('Add non-default new address to the list', function() {
        // login process
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        regPage.LoginFormName(user.username)
        regPage.LoginFormPass(user.password)
        regPage.LoginFormSubmit()

        // Verify logged in successfully
        myAcc.MyAccountTitle().should('have.text', ' My Account');

        // enter the manage address page
        myAcc.IconManageAddress()

        // create variable for comparison later
        var firstName = faker.fakerEN.person.firstName()
        var lastName = faker.fakerEN.person.lastName()
        var address1 = faker.fakerEN.location.streetAddress()

        // add new address
        Adrs.addressNewBtn()
        Adrs.addressFirstName(firstName)
        Adrs.addressLastName(lastName)
        Adrs.addressCompany(faker.fakerEN.company.buzzNoun())
        Adrs.addressAddr1(address1)
        Adrs.addressCity(faker.fakerEN.location.city())
        Adrs.addressZip(faker.fakerEN.location.zipCode())
        Adrs.addressCountry("United States")
        Adrs.addressState(faker.fakerEN.location.state())

        // submit and check for success alert
        Adrs.addressSubmitBtn()
        Adrs.addressSuccessAlert().should('be.visible')

        // verify new address added to the list
        Adrs.addressList().should('have.length.gt', 0)

        // compare the new address against input data
        Adrs.addressListDetails(1).should('contain.text', firstName)
        Adrs.addressListDetails(1).should('contain.text', lastName)
        Adrs.addressListDetails(1).should('contain.text', address1)
    })
})