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


    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
    })

    it.only('Add 1 shoes item to the cart', function() {
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
        })

    it("add multiple items to the cart", function() {
        // select from shoes category
        headNav.headerNavApparelSelect('Shoes')
        ItemList.CategoryTitle().should('have.text', 'Shoes')

        // loop and add 2 different items
        for(let i = 1; i<=2; i++) {
        // view the item from item list
        ItemList.ItemPrice(i)
        ItemList.ItemView(i)

        // purchase the item
        ItemDetails.itemRadioListOne(3)
        ItemDetails.itemQuantity('3')
        ItemDetails.itemPurchaseButton()
        cy.wait(2000)

        // continue shopping if only single items added
        if(i < 2) {
            headNav.headerNavApparelSelect('Shoes')
            ItemList.CategoryTitle().should('have.text', 'Shoes')
            }
        }

        // entering the checkout page
        Cart.pageTitle()
        Cart.cartTableCount(3)

        // change quantity and update each items
        for(let j = 2; j <= 3; j++) {
        let rand =  Math.round(Math.random() * 10)
            Cart.cartItemQuantity(j, rand)
            Cart.cartTableUpdate()
            Cart.cartItemQuantityCheck(j, rand)
        }

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