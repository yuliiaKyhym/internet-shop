///<reference types="cypress"/>

import BasePage from "./BasePage"

class CheckoutConfirmPage extends BasePage {

    getPageTitle() {
        return cy.get('h1')
    }

    assertCheckoutConfirmPageTitle() {
        this.getPageTitle().should('contain.text', 'Checkout Confirmation')
    }

    getConfirmOrderBtn() {
        return cy.get('#checkout_btn')
    }


}

export default new CheckoutConfirmPage()