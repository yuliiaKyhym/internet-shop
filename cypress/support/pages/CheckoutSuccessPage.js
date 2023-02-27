///<reference types="cypress"/>

import BasePage from "./BasePage"

class CheckoutSuccessPage extends BasePage {

    getPageTitle() {
        return cy.get('.maintext')
    }

    assertCheckoutSuccessPageTitle() {
        this.getPageTitle().should('have.text', ' Your Order Has Been Processed!')
    }
}

export default new CheckoutSuccessPage()