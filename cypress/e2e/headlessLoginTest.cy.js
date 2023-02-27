import * as user from '../fixtures/user.json'
import { headlessLogin } from '../support/helper'
import AccountPage from '../support/pages/AccountPage'

it('Open account page', () => {

    headlessLogin(user)

    cy.visit('/index.php?rt=account/account')

    AccountPage.verifyUserName(user)
})

it('Open order history page', () => {

    headlessLogin(user)

    cy.visit('/index.php?rt=account/history')

    cy.log('**Verify user first name on account page**')
    cy.get('h1 span.maintext', { timeout: 20000 }).should('contain', ' My Order History')
})