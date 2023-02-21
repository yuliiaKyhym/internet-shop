import * as user from '../fixtures/user.json'
import loginPage from '../support/pages/LoginPage'
import accountPage from '../support/pages/AccountPage'

it('Login with newly created user', () => {
   
    loginPage.visit()
    loginPage.submitLoginForm(user)
    accountPage.verifyUserName(user)
  })

  