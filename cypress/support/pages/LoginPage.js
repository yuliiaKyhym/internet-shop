///<reference types="cypress"/>

import BasePage from "./BasePage"

class LoginPage extends BasePage {

    visit() {
        cy.log('Open login page')
        cy.visit('/index.php?rt=account/login')
    }

    getLoginField() {
        return cy.get('#loginFrm_loginname')
    }

    getPasswordField() {
        return cy.get('#loginFrm_password')
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]').contains('Login')
    }

    assertUserUnathorized() {
        cy.log('Verify user is unauthorized')
        cy.getCookie('customer').should('be.null')
        cy.log('User is unathorized :)')
    }

    submitLoginForm(user) {
        cy.log('Trying to login...')

        this.getLoginField().type(user.username)
        this.getPasswordField().type(user.password)
        this.getSubmitButton().click()

    }
    assertInvalidLogin() {
        cy.get('.alert')
            .should('contain.text', 'Error: Incorrect login or password provided.')
    }

    submitLoginFormWithoutUsername(user) {
        this.getPasswordField().type(user.password)
        this.getSubmitButton().click()
        this.assertInvalidLogin()
    }

    submitLoginFormInvalidUsername(user) {
        this.getLoginField().type(user.username + 123)
        this.getPasswordField().type(user.password)
        this.getSubmitButton().click()
        this.assertInvalidLogin()
    }

    submitLoginFormInvalidPassword(user) {
        this.getLoginField().type(user.username)
        this.getPasswordField().type(user.password + 123)
        this.getSubmitButton().click()
        this.assertInvalidLogin()
    }
}

export default new LoginPage()