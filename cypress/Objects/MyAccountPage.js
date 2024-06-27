class MyAccountPage {

    MyAccountTitle() {
        return cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.maintext')
    }

    IconEditAccount() {
        return cy.get('[data-original-title="Edit account details"]').click()
    }

    IconChangePassword() {
        return cy.get('[data-original-title="Change password"]').click()
    }

    IconManageAddress() {
        return cy.get('[data-original-title="Manage Address Book"]').first().click()
    }

    IconAdressCount() {
        return cy.get('[data-original-title="Manage Address Book"]').find('.badge-success')
    }

    IconWishlist() {
        return cy.get('[data-original-title="My wish list"]').click()
    }
}

export default MyAccountPage