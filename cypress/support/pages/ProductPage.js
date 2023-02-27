///<reference types="cypress"/>

import BasePage from "./BasePage"

class ProductPage extends BasePage {

  getProductName() {
    return cy.get('.bgnone')
  }

  assertProductPageOpened(product_name) {
    cy.get('.bgnone').should('contain.text', product_name)
  }

  getAddToCartBtn() {
    return cy.get('.cart')
  }

}

export default new ProductPage()