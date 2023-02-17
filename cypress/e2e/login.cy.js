///<reference types="cypress"/>

import * as user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'

user.firstName = faker.name.firstName()
user.lastName = faker.name.fullName()
user.email = faker.internet.email()
user.address = faker.address.streetAddress()
user.city = faker.address.city()
user.postcode = faker.address.zipCode('###')
user.username = faker.internet.userName()
user.password = faker.internet.password(15)


describe('Sign up and login', () => {
  it('Sign up', () => {
    cy.log('**Open website home page**')
    cy.visit('/')

    cy.log('Open website sign up page')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()
    cy.get('[title="Continue"]')
      .click()

    cy.log('Fill registration form')
    cy.get('#AccountFrm_firstname')
      .type(user.firstName)

    cy.get('#AccountFrm_lastname')
      .type(user.lastName)

    cy.get('#AccountFrm_email')
      .type(user.email)

    cy.get('#AccountFrm_telephone')
      .type('0931112233')

    cy.get('#AccountFrm_fax')
      .type('0932221133')

    cy.get('#AccountFrm_company')
      .type('My Company')

    cy.get('#AccountFrm_address_1')
      .type(user.address)

    cy.get('#AccountFrm_address_2')
      .type(user.address)

    cy.get('#AccountFrm_city')
      .type(user.city)

    cy.get('#AccountFrm_postcode')
      .type(user.postcode)

    cy.get('#AccountFrm_country_id')
      .select('Ukraine')

    cy.get('#AccountFrm_zone_id')
      .select('Kyiv')

    cy.get('#AccountFrm_loginname')
      .type(user.username)

    cy.get('#AccountFrm_password')
      .type(user.password)

    cy.get('#AccountFrm_confirm')
      .type(user.password)

    cy.get('#AccountFrm_newsletter0')
      .check()

    cy.get('#AccountFrm_agree')
      .check()

    cy.get('[title="Continue"]')
      .click()

    cy.get('[title="Continue"]')
      .click()
    cy.log('Verify user first name on account page')
    cy.get('h1 span.subtext')
      .should('contain', user.firstName)

    cy.log(user)
    // cy.get('.maintext')
    //   .should('contain.text', ' Your Account Has Been Created!')
  })

  it('Login with newly created user', () => {
    cy.log('Open website home page')
    cy.visit('/')

    cy.log('Open website login page')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()

    cy.log('Fill login form')
    cy.get('#loginFrm_loginname')
      .type(user.username)

    cy.get('#loginFrm_password')
      .type(user.password)

    cy.get('[title="Login"]')
      .click()

    cy.get('.maintext')
      .should('contain.text', 'My Account')

  })

  it('Login without username', () => {
    cy.log('Open website home page')
    cy.visit('/')

    cy.log('Open website login page')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()

    cy.log('Enter password')
    cy.get('#loginFrm_password')
      .type(user.password)

    cy.get('[title="Login"]')
      .click()

    cy.log('Check error message displaying')
    cy.get('.alert')
      .should('contain.text', 'Error: Incorrect login or password provided.')

    cy.log('Check that user stays on the login page')
    cy.get('h4.heading4')
      .last()
      .should('contain.text', "I am a returning customer.")

  })

  it('Login with incorrect username', () => {
    cy.log('Open website home page')
    cy.visit('/')

    cy.log('Open website login page')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()

    cy.log('Fill login form')
    cy.get('#loginFrm_loginname')
      .type(`${user.username}123`)

    cy.get('#loginFrm_password')
      .type(user.password)

    cy.get('[title="Login"]')
      .click()

    cy.log('Check error message displaying')
    cy.get('.alert')
      .should('contain.text', 'Error: Incorrect login or password provided.')

    cy.log('Check that user stays on the login page')
    cy.get('h4.heading4')
      .last()
      .should('contain.text', "I am a returning customer.")
  })

  it('Login with incorrect password', () => {
    cy.log('Open website home page')
    cy.visit('/')

    cy.log('Open website login page')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()

    cy.log('Fill login form')
    cy.get('#loginFrm_loginname')
      .type(user.username)

    cy.get('#loginFrm_password')
      .type(`${user.password}123`)

    cy.get('[title="Login"]')
      .click()

    cy.log('Check error message displaying')
    cy.get('.alert')
      .should('contain.text', 'Error: Incorrect login or password provided.')

    cy.log('Check that user stays on the login page')
    cy.get('h4.heading4')
      .last()
      .should('contain.text', "I am a returning customer.")
  })

})