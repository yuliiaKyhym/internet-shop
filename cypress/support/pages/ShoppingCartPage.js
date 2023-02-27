///<reference types="cypress"/>

import BasePage from "./BasePage"

class ShoppingCartPage extends BasePage {

    getShoppingCartTitle() {
        return cy.get('.maintext')
    }

    assertShoppingCartPageOpened() {
        this.getShoppingCartTitle().should('contain.text', 'Shopping Cart')
    }

    getCheckoutBtn() {
        return cy.get('#cart_checkout1')
    }

    getProductImage() {
        return cy.get('img[src="//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-75x75.jpg"]')
    }

    assertProductImage() {
        this.getProductImage().should('be.visible')
    }

    getProductName() {
        return cy.get('a[href="https://automationteststore.com/index.php?rt=product/product&product_id=52&key=52"]')
            .last()
    }

    assertProductName() {
        this.getProductName().should('contain.text', 'Benefit Bella Bamba')
    }

    getModelCode() {
        return cy.get('tr:nth-child(2) > td:nth-child(3)')
    }

    assertModelCode() {
        this.getModelCode().should('contain.text', '523755')
    }

    getUnitPrice() {
        return cy.get('tr:nth-child(2) > td:nth-child(4)')
    }

    assertUnitPrice() {
        this.getUnitPrice().should('contain.text', '$28.00')
    }

    getProductQuantity() {
        return cy.get('#cart_quantity52')
    }

    assertProductQuantity() {
        this.getProductQuantity().should('contain.value', 2)
    }

    getTotal() {
        return cy.get('tr:nth-child(2) > td:nth-child(6)')
    }

    assertTotal() {
        this.getTotal().should('contain.text', '$56.00')
    }

}

export default new ShoppingCartPage()