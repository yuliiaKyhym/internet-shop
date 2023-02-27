///<reference types="cypress"/>

import BasePage from "./BasePage"
import ProductPage from "./ProductPage"


class SearchPage extends BasePage {

    visit() {
        cy.log('Open home page')
        cy.visit('/')
    }

    getSearchField() {
        return cy.get('#filter_keyword')
    }

    getAllProducts() {
        return cy.get('.thumbnail')
    }

    getPagination() {
        return cy.get('.pagination li')
    }

    showErrorProductNotFound() {
        throw new Error('Product not found')
    }

    getSpecificProduct(product_name) {
        return this.getAllProducts().then(products => {
            let neededProduct = products.find(`a:contains("${product_name}")`)
            if (neededProduct.length > 0)
                return neededProduct

            return null
        })
    }

    getNextPage() {
        return this.getPagination().then(pages => {
            const neededPage = pages.find('a[href]:contains(">")')
            if (neededPage.length > 0)
                return neededPage

            return null
        })
    }

    click(element, isFirst = false) {
        const clickable = isFirst ? cy.wrap(element).first() : cy.wrap(element)
        clickable.click({ force: true })
    }

    findSpecificProduct(product_name) {
        this.getSpecificProduct(product_name).then(specificProduct => {
            if (specificProduct) {
                this.click(specificProduct)
                ProductPage.assertProductPageOpened(product_name)
            } else {
                this.getNextPage().then(nextPage => {
                    if (nextPage) {
                        this.click(nextPage, true)
                        this.findSpecificProduct(product_name)
                    } else {
                        this.showErrorProductNotFound()
                    }
                })
            }
        })
    }
}

export default new SearchPage()