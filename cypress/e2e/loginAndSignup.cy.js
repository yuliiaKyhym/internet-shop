///<reference types="cypress"/>

import * as user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'
import LoginPage from '../support/pages/LoginPage'
import AccountPage from '../support/pages/AccountPage'
import AccountSuccessPage from '../support/pages/AccountSuccessPage'
import SignupPage from '../support/pages/SignupPage'

user.randomFirstName = faker.name.firstName()
user.lastName = faker.name.fullName()
user.email = faker.internet.email()
user.phone = faker.phone.number()
user.fax = faker.phone.number()
user.company = faker.company.name()
user.address1 = faker.address.streetAddress()
user.address2 = faker.address.streetAddress()
user.city = faker.address.city()
user.postcode = faker.address.zipCode('###')
user.randomUsername = faker.internet.userName()
user.randomPassword = faker.internet.password(15)


describe('Sign up and login', () => {
  
    it('Sign up', () => {
      SignupPage.visit()
      SignupPage.createNewAccount(user)
      AccountSuccessPage.verifyNewAccountCreated()
    })

    it('Login with valid user', () => {
   
      LoginPage.visit()
      LoginPage.submitLoginForm(user)
      AccountPage.verifyUserName(user)
    })

    it('Login without username', () => {
        
      LoginPage.visit()
      LoginPage.submitLoginFormWithoutUsername(user)
    })

    it('Login with invalid username', () => {
  
      LoginPage.visit()
      LoginPage.submitLoginFormInvalidUsername(user)
    })

    it('Login with invalid password', () => {

      LoginPage.visit()
      LoginPage.submitLoginFormInvalidPassword(user)
    })

  })
