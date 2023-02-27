///<reference types="cypress"/>

import * as user from '../fixtures/user.json'
import { headlessLogin } from '../support/helper'
import SearchPage from '../support/pages/SearchPage'
import ProductPage from '../support/pages/ProductPage'
import ShoppingCartPage from '../support/pages/ShoppingCartPage'
import CheckoutConfirmPage from '../support/pages/CheckoutConfirmPage'
import CheckoutSuccessPage from '../support/pages/CheckoutSuccessPage'
import HomePage from '../support/pages/HomePage'

let product_name = "Benefit Bella Bamba"

beforeEach(() => {
    //Open homepage
    HomePage.visit()
    headlessLogin(user)

})

it('Search and buy found product', () => {

    //Find product
    SearchPage.getSearchField().type('e {enter}')
    SearchPage.findSpecificProduct(product_name)

    //Adding found product to the cart
    ProductPage.getAddToCartBtn().click()
    ShoppingCartPage.assertShoppingCartPageOpened()

    //Checkout
    ShoppingCartPage.getCheckoutBtn().click()
    CheckoutConfirmPage.assertCheckoutConfirmPageTitle()
    CheckoutConfirmPage.getConfirmOrderBtn().click()
    CheckoutSuccessPage.assertCheckoutSuccessPageTitle()

}),

    it('Buy product on the home page', () => {

        //Add product to the cart
        HomePage.getBellaBambaProduct().click()

        //Check changes on the page after adding
        HomePage.assertAddedToCartTooltipText()
        HomePage.assertAddedToCartColor()
        HomePage.assertCartPopupAddedProductImage()
        HomePage.assertCartPopupAddedProductName()
        HomePage.assertCartPopupAddedProductPrice()

        //Check popup content
        HomePage.getPopupAddedProduct()
        HomePage.assertPopupAddedProductTimes()
        HomePage.assertPopupAddedProductQuantity()
        HomePage.assertPopupAddedProductSubtotal()
        HomePage.assertPopupAddedProductTotal()
        HomePage.assertPopupHeaderAmount()
        HomePage.assertPopupHeaderTotal()

        //Go to the View cart page
        HomePage.getPopupAddedProductViewCartBtn().click()
        ShoppingCartPage.assertShoppingCartPageOpened()
        ShoppingCartPage.assertProductImage()
        ShoppingCartPage.assertProductName()
        ShoppingCartPage.assertModelCode()
        ShoppingCartPage.assertUnitPrice()
        ShoppingCartPage.assertProductQuantity()
        ShoppingCartPage.assertTotal()

        //Checkout
        ShoppingCartPage.getCheckoutBtn().click()
        CheckoutConfirmPage.assertCheckoutConfirmPageTitle()
        CheckoutConfirmPage.getConfirmOrderBtn().click()
        CheckoutSuccessPage.assertCheckoutSuccessPageTitle()

    })  
