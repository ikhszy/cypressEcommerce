/// <reference types="cypress" />

class ConfirmPurchasePage {

    PageTitle() {
        return cy.get('.maintext')
    }

    PurchaseOrderId() {
        // will need to split
        return cy.get('#maincontainer > div > div > div > div > section > p:nth-child(3)')
    }

    PurchaseInvoiceRedirect() {
        return cy.contains('invoice page').click()
    }

}

export default ConfirmPurchasePage