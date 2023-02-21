
export function loginViaUI(user) {

    cy.visit('/')
    cy.get('#loginFrm_loginname')
        .type(user.username)
    cy.get('#loginFrm_password')
        .type(user.password)
    cy.get('[title="Login"]')
        .click()
}

export function headlessLogin(user) {
    let csrfToken;
    let csrfInstance;

    cy.request('GET', '/index.php?rt=account/login').then(response => {
        let htmlResp = document.createElement('html')
        htmlResp.innerHTML = response.body
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
    }).then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            body: {
                loginname: user.username,
                password: user.password,
                csrfinstance: csrfInstance,
                csrftoken: csrfToken
            },
            form: true
        })
    })
}
// export function someLoginViaAPI(){
// let token
// cy.request({
//     method: 'POST',
//     url: '/index.php?rt=account/login',
//     body: {

//         loginname: user.username,
//         password: user.passwoed,

//     }}).then( response => {

//     //One of 3 variants 
//     token = response.body.token
//     cy.setCookie('token', response.body.token) //if you need it further
//     window.localStorage.setItem('token', response.body.token) //if token is saved in local storage
//     window.sessionStorage.setItem('token', response.body.token) //if token is saved in session storage
//     })

// } //after call this func we can make cy.visit(/)


export function findProduct(product_name) {

    //Find needed product among all
    cy.get('.thumbnail').then(products => {
        let neededProduct
        if ((neededProduct = products.find(`a:contains("${product_name}")`)).length > 0) {
            cy.wrap(neededProduct).click({ force: true })

            //check product page is opened
            cy.get('.bgnone')
                .should('contain.text', product_name)
        }
        else {
            cy.get('.pagination li').then(pages => {

            //until 'next' button is present click on it and search product again
                let neededPage = pages.find('.pagination li a[href]:contains(">")')
                console.log(neededPage)
                cy.log(neededPage)

                if ((neededPage = pages.find('a[href]:contains(">")')).length > 0) {
                    cy.wrap(neededPage)
                        .first()
                        .click({ force: true })

                    findProduct(product_name)

                } else {
                    cy.log('[There is no such product](http://e.ua)') //link is just to make text blue for visibility
                    throw new Error('Product not found')
                }

            })
        }
    })
}
