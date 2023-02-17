///<reference types="cypress"/>

import * as user from '../fixtures/user.json'
import { headlessLogin } from '../support/helper'
import { findProduct } from '../support/helper'

beforeEach(() => {
    cy.log('**Open website home page**')
    cy.visit('/')
    headlessLogin(user)

})

it('Search and buy found product', () => {
    
    //Search 'e' 
    cy.get('#filter_keyword')
        .type('e {enter}')

    findProduct("Total Moisture Facial Cream")

    //Adding found product to the cart
    cy.get('.cart')
        .click()
    cy.get('.maintext')
        .should('contain.text', 'Shopping Cart')

    //Checkout
    cy.get('#cart_checkout1')
        .click()
    cy.get('h1')
        .should('contain.text', 'Checkout Confirmation')
    cy.get('#checkout_btn')
        .click()
    cy.get('.maintext')
        .should('have.text', ' Your Order Has Been Processed!')

}),

    it('Buy product on the home page', () => {

        cy.get('[data-id="52"]')
            .click()

        //Check changes on the page after adding product to the cart
        cy.get('.quick_basket')
            .children()
            .should('have.attr', 'title', 'Added to cart')
        cy.get('.pricetag.jumbotron.added_to_cart')
            .should('have.css', 'border-color', 'rgb(55, 137, 27)')
        cy.get('td.image > a > img')
            .should('have.attr', 'src', '//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg')
        cy.get('td.name > a')
            .should('contain.text', 'Benefit Bella Bamba')
            .and('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/product&product_id=52')
        cy.get('.total')
            .should('contain.text', '$28.00')


        //Check popup content
        cy.get('.dropdown.hover')
            .last()
            .trigger('mouseover')
        cy.get('.times')
            .should('be.visible')
        cy.get('.quantity')
            .should('contain.text', 2)
        cy.get('.cart_block_total')
            .eq(1)
            .should('contain.text', '$56.00')
        cy.get('.cart_block_total')
            .last()
            .should('contain.text', '$56.00')
        cy.get('.label.label-orange.font14')
            .should('have.text', '$2')
        cy.get('.cart_total')
            .should('have.text', '$56.00')


        //Go to the View cart page
        cy.get('[title="View Cart"]')
            .click()
        cy.get('img[src="//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-75x75.jpg"]')
            .should('be.visible')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/product&product_id=52&key=52"]')
            .last()
            .should('contain.text', 'Benefit Bella Bamba')
        cy.get('tr:nth-child(2) > td:nth-child(3)')
            .should('contain.text', '523755')
        cy.get('tr:nth-child(2) > td:nth-child(4)')
            .should('contain.text', '$28.00')
        cy.get('#cart_quantity52')
            .should('contain.value', 2)
        cy.get('tr:nth-child(2) > td:nth-child(6)')
            .should('contain.text', '$56.00')


        //Checkout
        cy.get('#cart_checkout1')
            .click()
        cy.get('.maintext')
            .should('contain.text', ' Checkout Confirmation')
        cy.get('#checkout_btn')
            .click()
        cy.get('.maintext')
            .should('contain.text', ' Your Order Has Been Processed!')

    })  
