import { faker } from '@faker-js/faker';

describe("part of Assignment-2",()=>{
    beforeEach(()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login? ReturnUrl=%2Fadmin%2F')
        // cy.fixture('loginData.json').as(`data`)
    })

    it("To validate successfull login with fixture",()=>{            
         cy.fixture('loginData.json').then((data) => {
            cy.get('input#Email').clear().type(data.email)
            cy.get('input#Password').clear().type(data.password)            
          })
        cy.get('.button-1.login-button').click()
        cy.get('.content-header > h1').
        then((element)=>{
            const text=element.text().replace("\n","").trim()
            cy.log(text)
            // cy.wrap(element).should('have.text',text)
            expect(text).to.equal("Dashboard")

        })
            // (('have.text',"Dashboard".))
    })

    it.only("To validate the message showing incase of unsuccessfull login", ()=>{
        //cy.visit('https://admin-demo.nopcommerce.com/login? ReturnUrl=%2Fadmin%2F')
        let randomEmail = faker.internet.email();
        let randomPassword = faker.internet.password();
        cy.get('input#Email').clear().type(randomEmail)
        cy.get('input#Password').clear().type(randomPassword)
        cy.get('.button-1.login-button').click()
        cy.get('div.message-error').should('have.text',"Login was unsuccessful. Please correct the errors and try again.No customer account found\n")

    })

    it("To click on sales button under home page",()=>{
        cy.get('input#Email').clear().type('admin@yourstore.com')
        cy.get('input#Password').clear().type('admin')
        cy.get('.button-1.login-button').click()
        cy.get('a#nopSideBarPusher').click()
        cy.get('.nav-icon.fas.fa-shopping-cart').click({ force:true })
        // cy.get('i.fa').click()
        // cy.get(':nth-child(3) > [href="#"] > .nav-icon').trigger('mouseover')

    })
})