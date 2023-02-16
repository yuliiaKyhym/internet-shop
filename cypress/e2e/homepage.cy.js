///<reference types="cypress"/>

import * as user from '../fixtures/user.json'

before(() => {
    cy.viewport('macbook-15')
    cy.log('**Open website home page**')
    cy.visit('https://automationteststore.com/')
})

it('Buy a good', () => {

    cy.log('Add good to the cart')
    cy.get('[data-id="52"]')
        .click()

    //Check changes on the page
    cy.log('Check that tooltip is displayed')
    cy.get('.quick_basket')
        .children()
        .should('have.attr', 'title', 'Added to cart')

    cy.log('Check that color is changed to green')
    cy.get('.pricetag.jumbotron.added_to_cart')
        .should('have.css', 'border-color', 'rgb(55, 137, 27)')

    cy.log('Check that good image is displayed')
    cy.get('td.image > a > img')
        .should('have.attr', 'src', '//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg')

    cy.log('Check that good name is displayed')
    cy.get('td.name > a')
        .should('contain.text', 'Benefit Bella Bamba')
        .and('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/product&product_id=52')

    cy.log('Check that total price is displayed')
    cy.get('.total')
        .should('contain.text', '$28.00')

    //Check popup content
    cy.get('.dropdown.hover')
        .last()
        .trigger('mouseover')

    cy.log('Check that x is displayed')
    cy.get('.times')
        .should('be.visible')

    cy.log('Check that quantity is displayed')
    cy.get('.quantity')
        .should('contain.text', 2)

    cy.log('Check that subtotal is displayed')
    cy.get('.cart_block_total')
        .eq(1)
        .should('contain.text', '$56.00')

    cy.log('Check that total is displayed')
    cy.get('.cart_block_total')
        .last()
        .should('contain.text', '$56.00')

    cy.get('.label.label-orange.font14')
        .should('have.text', '$2')

    cy.get('.cart_total')
        .should('have.text', '$56.00')

    cy.log('Go to the View card page')
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

    cy.log('Go to checkout')
    cy.get('#cart_checkout1')
        .click()


    cy.log('Fill login form')
    cy.get('#loginFrm_loginname')
        .type(user.username)
    cy.get('#loginFrm_password')
        .type(user.password)
    cy.get('[title="Login"]')
        .click()

    cy.log('Check that Checkout page is opened')
    cy.get('.maintext')
        .should('contain.text', ' Checkout Confirmation')
    cy.get('#checkout_btn')
        .click()

    cy.log('Check that order is created')
    cy.get('.maintext')
        .should('contain.text', ' Your Order Has Been Processed!')
})  