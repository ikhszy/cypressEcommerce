/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import ItemsListPage from "../../Objects/ItemsListPage";
import ItemPage from '../../Objects/ItemPage';
import CartPage from '../../Objects/CartPage';

describe('Register Test', function() {
    const headNav = new headerNavigation()
    const ItemList = new ItemsListPage()
    const ItemDetails = new ItemPage()
    const Cart = new CartPage()

    it('Add 1 shoes item to the cart', function() {
        // open the shoes category
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
        headNav.headerNavApparelSelect('Shoes')
        ItemList.CategoryTitle().should('have.text', 'Shoes')

        // view the item from item list
        ItemList.ItemPrice('1')
        ItemList.ItemView('1')

        // purchase the item
        ItemDetails.itemRadioListOne(3)
        ItemDetails.itemQuantity('3')
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
        })
})