/// <reference types="cypress" />
class ItemsListPage{

    CategoryTitle() {
        return cy.get('.maintext')
    }

    SortItems(Value) {
        /*
        available select value:
        date_modified-ASC -> Date Old > New
        date_modified-DESC -> Date New > Old
        pd.name-ASC -> Name A - Z
        pd.name-DESC -> Name Z - A
        p.price-ASC -> Price Low > High
        p.price-DESC -> Price High > Low
        rating-DESC -> rating highest
        rating-ASC -> rating lowest
        */
        var selectSort = cy.get('#sort')
        selectSort.select(Value)
    }

    ItemView(item) {
        // input numerical value based on the item list
        var hoverPlaceholder = cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(' + item + ') > div.thumbnail > div.shortlinks')
        hoverPlaceholder.invoke('show').contains('View').click()
        return this;
    }

    ItemReview(item) {
        // input numerical value based on the item list
        var hoverPlaceholder = cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(' + item + ') > div.thumbnail > div.shortlinks')
        hoverPlaceholder.invoke('show').contains('Write Review').click()
        return this;
    }

    ItemAddToCart(item) {
        // input numerical value based on the item list
        var cart = cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(' + item + ') > div.thumbnail > div.pricetag.jumbotron > a')
        cart.click()
        return this;
    }

    ItemPrice(item) {
        // this should return string converted to number
        var obj = cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div')
        var priceStr = obj.invoke('val')
        var newPrice = parseFloat(priceStr)
        cy.log(newPrice)
        return newPrice;
    }
}
export default ItemsListPage