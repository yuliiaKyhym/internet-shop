///<reference types="cypress"/>

import BasePage from "./BasePage"
class AccountSuccessPage extends BasePage {

    verifyNewAccountCreated() {
        cy.get('.maintext').should('contain.text', ' Your Account Has Been Created!')
    }
}


export default new AccountSuccessPage()