/// <reference types="cypress" />

class SearchPage {

    pageTitle() {
        return cy.get('maintext');
    }

    SearchInput() {
        return cy.get("#keyword");
    }

    SearchSelectCategory(val) {
        /*
            selection guide:
            just open the elements and find the value yourself dammit!
            it's too long for me to write it here
        */
        return cy.get('#category_id').select(val)
    }

    SearchCheckDescription() {
        return cy.get('#description')
    }

    SearchCheckModel() {
        return cy.get('#model')
    }

    SearchBtn() {
        return cy.get('#search_button')
    }
}