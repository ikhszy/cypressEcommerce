/// <reference types="cypress"/>

import headerNavigation from "../../Objects/headerNavigation";
import ItemPage from "../../Objects/ItemPage";
import ItemsListPage from "../../Objects/ItemsListPage";

describe("search feature", function() {

    const headNav = new headerNavigation();
    const iPage = new ItemPage();
    const iListPage = new ItemsListPage();

    before(() => {
        cy.visit('https://automationteststore.com/index.php', { responseTimeout: 120000 })
    })

    it("successfully search return specific item", function() {
        // getting specific item name
        headNav.headerNavApparelSelect('T-shirts')
        iListPage.ItemName(0).invoke('attr','title').as('itemTitle');

        let qSearch;

        // start searching for the item
        cy.get('@itemTitle').then($ele => {
            qSearch = $ele
            headNav.headerSearch()
            .type(qSearch)
            .type('{enter}')
        })
    
         // count item should >= 1
        iListPage.itemBox().should('have.length.at.least', 1)
        
    })

    it("successfully search by selecting the categories", function() {
        // we'll be using "By" as our keyword as it yields multiple results
        headNav.headerSearch().type('By');
        headNav.headerSearchCategory(7).click();
        headNav.headerSearch().type('{enter}');
    })
})