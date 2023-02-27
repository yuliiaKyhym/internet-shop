///<reference types="cypress"/>

import BasePage from "./BasePage"

class HomePage extends BasePage {

    visit() {
        cy.visit('/')
    }

    getBellaBambaProduct() {
        return cy.get('[data-id="52"]')
    }

    getAddedToCartTooltip() {
        return cy.get('.quick_basket').children()
    }

    assertAddedToCartTooltipText() {
        this.getAddedToCartTooltip().should('have.attr', 'title', 'Added to cart')
    }

    getAddedToCartColor() {
        return cy.get('.pricetag.jumbotron.added_to_cart')
    }

    assertAddedToCartColor() {
        this.getAddedToCartColor().should('have.css', 'border-color', 'rgb(55, 137, 27)')
    }

    getCartPopupAddedProductImage() {
        return cy.get('td.image > a > img')
    }

    assertCartPopupAddedProductImage() {
        this.getCartPopupAddedProductImage()
            .should('have.attr', 'src', '//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg')
    }

    getCartPopupAddedProductName() {
        return cy.get('td.name > a')
    }

    assertCartPopupAddedProductName() {
        this.getCartPopupAddedProductName()
            .should('contain.text', 'Benefit Bella Bamba')
            .and('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/product&product_id=52')
    }

    getCartPopupAddedProductPrice() {
        return cy.get('.total')
    }

    assertCartPopupAddedProductPrice() {
        this.getCartPopupAddedProductPrice().should('contain.text', '$28.00')
    }

    getPopupAddedProduct() {
        return cy.get('.dropdown.hover')
            .last()
            .trigger('mouseover')
    }

    getPopupAddedProductTimes() {
        return cy.get('.times')
    }

    assertPopupAddedProductTimes() {
        this.getPopupAddedProduct().should('be.visible')
    }

    getPopupAddedProductQuantity() {
        return cy.get('.quantity')
    }

    assertPopupAddedProductQuantity() {
        this.getPopupAddedProductQuantity().should('contain.text', 2)
    }

    getPopupAddedProductSubtotal() {
        return cy.get('.cart_block_total').eq(1)
    }

    assertPopupAddedProductSubtotal() {
        this.getPopupAddedProductSubtotal().should('contain.text', '$56.00')
    }

    getPopupAddedProductTotal() {
        return cy.get('.cart_block_total').last()
    }

    assertPopupAddedProductTotal() {
        this.getPopupAddedProductTotal().should('contain.text', '$56.00')
    }

    getPopupHeaderAmount() {
        return cy.get('.label.label-orange.font14')
    }

    assertPopupHeaderAmount() {
        this.getPopupHeaderAmount().should('have.text', '$2')
    }

    getPopupHeaderTotal() {
        return cy.get('.cart_total')
    }

    assertPopupHeaderTotal() {
        this.getPopupHeaderTotal().should('have.text', '$56.00')
    }

    getPopupAddedProductViewCartBtn() {
        return cy.get('[title="View Cart"]')
    }
}

export default new HomePage()