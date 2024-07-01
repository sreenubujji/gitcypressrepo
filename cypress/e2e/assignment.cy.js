describe("part of Assignment-2",()=>{
    beforeEach(()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login? ReturnUrl=%2Fadmin%2F')
    })

    it("To validate successfull login",()=>{
        //cy.visit('https://admin-demo.nopcommerce.com/login? ReturnUrl=%2Fadmin%2F')
        cy.get('input#Email').clear().type('admin@yourstore.com')
        cy.get('input#Password').clear().type('admin')
        cy.get('.button-1.login-button').click()
        cy.get('.content-header > h1').should('have.text'," Dashboard ")
    })

    it("To validate the message showing incase of unsuccessfull login", ()=>{
        //cy.visit('https://admin-demo.nopcommerce.com/login? ReturnUrl=%2Fadmin%2F')
        cy.get('input#Email').clear().type('admin@yourstore.com')
        cy.get('input#Password').clear().type('admin12')
        cy.get('.button-1.login-button').click()
        cy.get('div.message-error').should('have.text',"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect")

    })

    it.("To click on sales button under home page",()=>{
        cy.get('input#Email').clear().type('admin@yourstore.com')
        cy.get('input#Password').clear().type('admin')
        cy.get('.button-1.login-button').click()
        cy.get('a#nopSideBarPusher').click()
        // cy.get('i.fa').click()
        // cy.get(':nth-child(3) > [href="#"] > .nav-icon').trigger('mouseover')

    })
})