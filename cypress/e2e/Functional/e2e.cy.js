/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import ItemsListPage from "../../Objects/ItemsListPage";
import ItemPage from '../../Objects/ItemPage';
import CartPage from '../../Objects/CartPage';
import RegisterPage from "../../Objects/RegisterPage";
import MyAccountPage from "../../Objects/MyAccountPage";
import CheckoutPage from "../../Objects/CheckoutPage";

describe('E2E testing', ()=> {

    const headNav = new headerNavigation()
    const regPage = new RegisterPage()
    const accPage = new MyAccountPage()
    const ItemList = new ItemsListPage()
    const ItemDetails = new ItemPage()
    const Cart = new CartPage()
    const chckout = new CheckoutPage()
    const faker = require('@faker-js/faker');

    let firstName = faker.fakerEN.person.firstName()
    let lastName = faker.fakerEN.person.lastName()
    let email = faker.fakerEN.internet.email()
    let phoneNumber = faker.fakerEN.phone.number()
    let company = faker.fakerEN.company.buzzNoun()
    let address1 = faker.fakerEN.location.streetAddress()
    let address2 = faker.fakerEN.location.street()
    let city = faker.fakerEN.location.city()
    let zip = faker.fakerEN.location.zipCode()
    let nation = 'Indonesia'
    let loginName = 'user_' + firstName
    let password = faker.fakerEN.internet.password()

    before(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
    })

    it('e2e', () => {
        // Enter registration page
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.loginRegisterButton().click();
        regPage.RegisterButton()
        regPage.RegisterFormTitle().should('have.text', ' Create Account');

        // fill personal details
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

        // verify registration is a success
        regPage.RegisterSuccessTitle().should('have.text', ' Your Account Has Been Created!')

        // continue to go to account dashboard and logout
        regPage.RegisterSuccessContinue()
        accPage.IconLogoff()
        cy.wait(2000)

        // login again
        headNav.loginRegisterButton().click();
        regPage.LoginTitle().should('have.text', 'Returning Customer');
        
        // fill the login form
        regPage.LoginFormName(loginName)
        regPage.LoginFormPass(password)
        regPage.LoginFormSubmit()

        // Verify logged in successfully
        accPage.MyAccountTitle().should('have.text', ' My Account');

        // start shopping single item

        // select from shoes category
        headNav.headerNavApparelSelect('Shoes')
        ItemList.CategoryTitle().should('have.text', 'Shoes')

        // view the item from item list
        ItemList.ItemView('1')

        // get the item base price
        ItemDetails.itemBasePrice().invoke('text').as('basePrice')

        // select item details
        ItemDetails.itemRadioListOne(3)
        ItemDetails.itemQuantity('3')

        // check the new price
        cy.get('@basePrice').then($ele => {
            var bPrice = $ele.replaceAll('$','')
            var tPrice = parseFloat(bPrice) * 3
            ItemDetails.itemTotalPrice().should('have.text', '$' + tPrice +'.00')
        })
        ItemDetails.itemPurchaseButton()

        // entering the checkout page
        Cart.pageTitle()
        Cart.cartTableCount(2)

        // change quantity and update
        Cart.cartItemQuantity(2, 5)
        Cart.cartTableUpdate()
        Cart.cartItemQuantityCheck(2, 5)

        // Ship to my country :)
        cy.wait(2000)
        Cart.cartShipCountry("Indonesia")
        cy.wait(2000)
        Cart.cartShipState("Jakarta Raya")
        cy.wait(2000)
        Cart.cartShipZip('13450')
        Cart.cartShipEstimate()
        Cart.cartCheckout()

        // checkout page
        // compare the item name
        cy.get('@itemName').then($ele => {
            chckout.CheckoutItemTitle(0).should('have.text', $ele)
            chckout.CheckoutOrderSumTitle(0).should('have.text', $ele)
        })

        // compare base price
        cy.get('@basePrice').then($ele => {
            let num = $ele.trim()
            chckout.CheckoutItemBasePrice(0).should('have.text', num)
            chckout.CheckoutOrderSumPrice(0).should('have.text', num)
        })
    })
})