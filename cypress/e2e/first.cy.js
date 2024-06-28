describe("First one to perform practice with git integration", ()=>{
   it("TEst1",()=>{
    cy.visit('www.google.com')
    cy.get(`input[placeholder='Search Google or type a URL']`).type("success")
   }
) 
})