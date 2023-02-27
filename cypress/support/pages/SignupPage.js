///<reference types="cypress"/>

import BasePage from "./BasePage"

class SignupPage extends BasePage {

    visit() {
        cy.log('Open signup page')
        cy.visit('/index.php?rt=account/create')
    }

    getFirstNameField() {
        return cy.get('#AccountFrm_firstname')
    }

    getLastNameField() {
        return cy.get('#AccountFrm_lastname')
    }

    getEmailField() {
        return cy.get('#AccountFrm_email')
    }

    getTelephoneField() {
        return cy.get('#AccountFrm_telephone')
    }

    getFaxField() {
        return cy.get('#AccountFrm_fax')
    }

    getCompanyField() {
        return cy.get('#AccountFrm_company')
    }

    getAddress1Field() {
        return cy.get('#AccountFrm_address_1')
    }

    getAddress2Field() {
        return cy.get('#AccountFrm_address_2')
    }

    getCityField() {
        return cy.get('#AccountFrm_city')
    }

    getPostcodeField() {
        return cy.get('#AccountFrm_postcode')
    }

    getCountryField() {
        return cy.get('#AccountFrm_country_id')
    }

    getRegionField() {
        return cy.get('#AccountFrm_zone_id')
    }

    getLoginNameField() {
        return cy.get('#AccountFrm_loginname')
    }

    getPasswordField() {
        return cy.get('#AccountFrm_password')
    }

    getPasswordConfirmField() {
        return cy.get('#AccountFrm_confirm')
    }

    getSubscribeRadiobtn() {
        return cy.get('#AccountFrm_newsletter0')
    }

    getPrivacyPolicyCheckbox() {
        return cy.get('#AccountFrm_agree')
    }

    getContinueButton() {
        return cy.get('[title="Continue"]')
    }

    createNewAccount(user) {
        this.getFirstNameField().type(user.randomFirstName)
        this.getLastNameField().type(user.lastName)
        this.getEmailField().type(user.email)
        this.getTelephoneField().type(user.phone)
        this.getFaxField().type(user.phone)
        this.getCompanyField().type(user.company)
        this.getAddress1Field().type(user.address1)
        this.getAddress2Field().type(user.address2)
        this.getCityField().type(user.city)
        this.getPostcodeField().type(user.postcode)
        this.getCountryField().select('Ukraine')
        this.getRegionField().select('Kyiv')
        this.getLoginNameField().type(user.randomUsername)
        this.getPasswordField().type(user.randomPassword)
        this.getPasswordConfirmField().type(user.randomPassword)
        this.getSubscribeRadiobtn().check()
        this.getPrivacyPolicyCheckbox().check()
        this.getContinueButton().click()

    }
}



export default new SignupPage()