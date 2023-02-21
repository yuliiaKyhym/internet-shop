///<reference types="cypress"/>
export default class BasePage { // обычно тут хедер и футтер хранятся (элементы, которые есть на всех страницах)

    getSearchField() {
        return cy.get('#filter_keyword')
    }
}