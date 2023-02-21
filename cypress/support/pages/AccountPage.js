///<reference types="cypress"/>

import BasePage from "./BasePage"

class AccountPage extends BasePage{

    visit() {
        cy.log('Open account page')
        cy.visit('/index.php?rt=account/account')
    }

    verifyUserName(user){     
     cy.get('h1 span.subtext').should('contain', user.firstName)

    }

}

export default new AccountPage()