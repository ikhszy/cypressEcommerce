/// <reference types="cypress" />

import headerNavigation from "../../Objects/headerNavigation";
import ItemsListPage from "../../Objects/ItemsListPage";
import ItemPage from '../../Objects/ItemPage';

describe('Register Test', function() {
    const headNav = new headerNavigation()
    const ItemList = new ItemsListPage()
    const ItemDetails = new ItemPage()

    it('Add shoes to the cart', function() {
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


        })
})