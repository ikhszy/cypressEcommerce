class headerNavigation {

    homeLogo() {
        return cy.get('body > div > header > div.headerstrip.navbar.navbar-inverse > div > div.navbar-header.header-logo > a > img')
    }

    loginRegisterButton() {
        return cy.get('#customer_menu_top')
    }

    headerSelection() {
        return cy.get('#topnav > select')
    }

    headerSearch() {
        return cy.get('#filter_keyword')
    }

    headerCurrency() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_6 > ul > li')
    }

    headerCurrencyEuro() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(1) > a')
    }

    headerCurrencyPound() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(2) > a')
    }

    headerCurrencyDollar() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(3) > a')
    }

    headerCartBase() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a')
    }

    headerCartItemsCount() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.label.label-orange.font14')
    }

    headerCartPrice() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.cart_total')
    }

    headerCartView() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > ul > li > div.row > div:nth-child(1) > a')
    }

    headerCartCheckout() {
        return cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > ul > li > div.row > div:nth-child(2) > a')
    }

    headerNavHomeBase() {
        return cy.get('#categorymenu > nav > ul > li:nth-child(1)')
    }

    headerNavHomeSpecial() {
        return cy.get('#main_menu > li:nth-child(1) > a')
    }

    headerNavHomeLoginBase() {
        return cy.get('#main_menu > li:nth-child(2) > a')
    }

    headerNavHomeCart() {
        return cy.get('#main_menu > li:nth-child(3) > a')
    }

    headerNavHomeCheckout() {
        return cy.get('#main_menu > li:nth-child(4) > a')
    }
}

export default headerNavigation