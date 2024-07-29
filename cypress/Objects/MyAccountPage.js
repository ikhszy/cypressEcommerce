class MyAccountPage {

    MyAccountTitle() {
        return cy.get('.maintext')
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

    IconWishCount() {
        return cy.get('[data-original-title="My wish list"]').find('.badge-success')
    }

    IconOrderHistory() {
        return cy.get('[data-original-title="Order history"]').first().click()
    }

    IconOrderCount() {
        return cy.get('[data-original-title="Order history"]').first().find('.badge-success')
    }

    IconTransHistory() {
        return cy.get('[data-original-title="Transaction history"]').first().click()
    }

    IconTransCount() {
        return cy.get('[data-original-title="Transaction history"]').first().find('.badge-success')
    }

    IconDownload() {
        return cy.get('[data-original-title="Downloads"]').first().click()
    }

    IconDownloadCount() {
        return cy.get('[data-original-title="Downloads"]').first().find('.badge-success')
    }

    IconNotification() {
        return cy.get('[data-original-title="Notifications"]').click()
    }

    IconLogoff() {
        return cy.get('[data-original-title="Logoff"]').click()
    }
}

export default MyAccountPage