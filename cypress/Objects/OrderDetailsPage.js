/// <reference types="cypress" />

class OrderDetailsPage{

    OrderLeftTable() {
        return cy.get('.table.table-striped.table-bordered').find('td').eq(0)
    }

    OrderItemImage(num) {
        //num start from 1 as 0 is used for header
        return cy.get('.invoice_products.table.table-striped.table-bordered').find('tr').eq(num).find('td').eq(0).find('img')
    }

    OrderItemTitle(num) {
        //num start from 1 as 0 is used for header
        return cy.get('.invoice_products.table.table-striped.table-bordered').find('tr').eq(num).find('td').eq(1).find('a')
    }

    OrderItemModel(num) {
        //num start from 1 as 0 is used for header
        return cy.get('.invoice_products.table.table-striped.table-bordered').find('tr').eq(num).find('td').eq(2)
    }

    OrderItemQuan(num) {
        //num start from 1 as 0 is used for header
        return cy.get('.invoice_products.table.table-striped.table-bordered').find('tr').eq(num).find('td').eq(3)
    }

    OrderItemPrice(num) {
        //num start from 1 as 0 is used for header
        return cy.get('.invoice_products.table.table-striped.table-bordered').find('tr').eq(num).find('td').eq(4)
    }

    OrderItemTotal(num) {
        //num start from 1 as 0 is used for header
        return cy.get('.invoice_products.table.table-striped.table-bordered').find('tr').eq(num).find('td').eq(5)
    }

    OrderPriceSub() {
        return cy.get('table.table-striped.table-bordered').eq(2).find('tr').eq(0).find('td').eq(1)
    }

    OrderPriceRate() {
        return cy.get('table.table-striped.table-bordered').eq(2).find('tr').eq(1).find('td').eq(1)
    }

    OrderPriceRetail() {
        return cy.get('table.table-striped.table-bordered').eq(2).find('tr').eq(2).find('td').eq(1)
    }

    OrderPriceTotal() {
        return cy.get('table.table-striped.table-bordered').eq(2).find('tr').eq(3).find('td').eq(1)
    }

    OrderHistoryDate() {
        return cy.get('table.table-striped.table-bordered').eq(3).find('tr').eq(1).find('td').eq(0)
    }

    OrderHistoryStatus() {
        return cy.get('table.table-striped.table-bordered').eq(3).find('tr').eq(1).find('td').eq(1)
    }

    OrderHistoryComment() {
        return cy.get('table.table-striped.table-bordered').eq(3).find('tr').eq(1).find('td').eq(2)
    }

    OrderContinueButton() {
        return cy.get('btn.btn-default.mr10.mb20').click()
    }

    OrderPrintButton() {
        return cy.get('btn.btn-orange.mr10.mb10.pull-right').click()
    }
}

export default OrderDetailsPage