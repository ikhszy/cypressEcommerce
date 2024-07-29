/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import ItemsListPage from "../../Objects/ItemsListPage";
import ItemPage from '../../Objects/ItemPage';
import CartPage from '../../Objects/CartPage';
import RegisterPage from "../../Objects/RegisterPage";
import MyAccountPage from "../../Objects/MyAccountPage";
import CheckoutPage from "../../Objects/CheckoutPage";
import ShippingPage from "../../Objects/ShippingPage";
import ConfirmPurchasePage from "../../Objects/ConfirmPurchasePage";
import OrderDetailsPage from "../../Objects/OrderDetailsPage";

describe('E2E testing', ()=> {

    const headNav = new headerNavigation()
    const regPage = new RegisterPage()
    const accPage = new MyAccountPage()
    const ItemList = new ItemsListPage()
    const ItemDetails = new ItemPage()
    const Cart = new CartPage()
    const chckout = new CheckoutPage()
    const ship = new ShippingPage()
    const purc = new ConfirmPurchasePage()
    const ord = new OrderDetailsPage()
    const faker = require('@faker-js/faker');

    let firstName = faker.fakerEN.person.firstName()
    let lastName = faker.fakerEN.person.lastName()
    let email = faker.fakerEN.internet.email()
    let phoneNumber = faker.fakerEN.string.numeric(8)
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
        cy.fixture('user.json').then(function(user) {
            globalThis.user = user
        })
    })

    it('e2e', () => {
        // Enter registration page\
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

        cy.writeFile('cypress/fixtures/user.json', {
        "username": loginName,
        "password": password
        })

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
        regPage.LoginFormName(user.username)
        regPage.LoginFormPass(user.password)
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
        ItemDetails.itemTitle().invoke('text').as('itemName')
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

        // edit shipping info
        chckout.CheckoutShipEditButton()
        ship.ShipAddressEditButton()
        var newAdress = faker.fakerEN.location.streetAddress()
        ship.ShipFormFirstName(faker.fakerEN.person.firstName())
        ship.ShipFormLastName(faker.fakerEN.person.lastName())
        ship.ShipFormLastComp(faker.fakerEN.company.buzzVerb())
        ship.ShipFormAddr1(newAdress)
        ship.ShipFormCity(faker.fakerEN.location.city())
        ship.ShipFormNation('Indonesia')
        cy.wait(2000)
        ship.ShipFormRegion('Jakarta Raya')
        ship.ShipFormZip('10110')
        ship.ShipContinueButton(1)

        // confirm the adress changed
        chckout.CheckoutShipAddress().should('contain.text', newAdress)

        // change payment address
        chckout.CheckoutPayEditButton()
        ship.ShipAddressEditButton()

        // count total address
        ship.ShipFormRadio().then($count => {
            var counter = $count.length

            // pick random radio to click
            var rand = Math.floor(Math.random() * counter)
            ship.ShipFormRadio().eq(rand).click()

            // get the new address for comparison later
            ship.ShipFormRadioAddress(rand).invoke('text').as('payAddr')
        })

        ship.ShipContinueButton(0)
        // asserting the change
        cy.get('@payAddr').then($ele => {
            chckout.CheckoutPayName().invoke('text').then($comp => {
                let paddr = $comp.replace(/\n|\t/g,'')
                expect($ele.replace(/,/g,'')).to.have.string(paddr.substring(0, paddr.length - 8))
            })
        })

        // edit payment
        chckout.CheckoutPayEditButton()

        // add comment
        var cmd = faker.fakerEN.lorem.lines(2)
        ship.ShipPayComment(cmd)
        ship.shipCheckbox().check()
        ship.shipCheckbox().should('be.checked')
        ship.ShipContinueButton(0)

        // confirm purchase
        chckout.CheckoutConfirmOrderButton()

        // check the invoice
        // first check on invoice ID
        purc.PurchaseOrderId().invoke('text').as('orderId')
        purc.PurchaseInvoiceRedirect()
        cy.get('@orderId').then($ele => {
            let ordId = $ele.substring(11, $ele.length - 18)
            ord.OrderLeftTable().should('contain.text', ordId)
        })

        // second check on item name
        cy.get('@itemName').then($ele => {
            ord.OrderItemTitle(1).should('have.text', $ele)
        })

        // third check on item price
        cy.get('@basePrice').then($ele => {
            let num = $ele.trim()
            ord.OrderItemPrice(1).should('have.text', num)
        })

        // fourth check the comment
        ord.OrderHistoryComment().should('have.text', cmd)
    })
})