import "cypress-iframe";

describe("First one to perform practice with git integration", ()=>{
   it("TEst1",()=>{
    cy.visit('www.google.com')
    //cy.get(`DRc6kd.bdn4dc > button.M6CB1c.rr4y5c`).click()
   //  cy.get(`[placeholder='Search Google or type a URL']`).type("success")
   cy.frameLoaded(`ifarme[name='callout']`)
   //cy.iframe(`ifarme[name='callout']`).contains('Stay signed out').click()
   cy.iframe(`ifarme[name='callout']`).find(`button[aria-label="Stay signed out"]`).should('be.visible').click()
   }
) 
})



// cy.get('[aria-hidden="false"] > iframe')