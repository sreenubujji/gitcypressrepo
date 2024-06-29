describe("First one to perform practice with git integration", ()=>{
   it("TEst1",()=>{
    cy.visit('www.google.com')
    //cy.get(`DRc6kd.bdn4dc > button.M6CB1c.rr4y5c`).click()
   //  cy.get(`[placeholder='Search Google or type a URL']`).type("success")
   cy.get(`[aria-hidden="false"] > iframe button.M6CB1c.rr4y5c`).click()
   }
) 
})



// cy.get('[aria-hidden="false"] > iframe')