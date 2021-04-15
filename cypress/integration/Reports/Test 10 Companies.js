///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Companies", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
       cy.visit(Cypress.env('reportsurl')) //Opens the URL
	  
	  cy.get("#appAreaSideMenu > li > a").click()
	  
	
	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(8) > .d-block').click()// clicking the Companies Report link. Selector selected with Cypress Playground
	  
	  cy.wait(1000)
	  
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	
	  cy.wait(3000)
	  
	  cy.get('.btn > .fas').click()	   
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(8) > .d-block').click()// clicking the Companies Report link. Selector selected using Cypress Playground
	  cy.wait(1000)
	  cy.get('#myform > div > div > div > div > div.col > div > div.rbt-input-hint-container > input').type("Djones")
	  cy.wait(2000)
	  cy.get('#myform > div > div > div > div > div.col > div > div.rbt-input-hint-container > input').type('{downarrow}')
	  cy.get('#myform > div > div > div > div > div.col > div > div.rbt-input-hint-container > input').type('{enter}')
	  
	  cy.get('#myform > div > div > div > div > div.col > div > div.rbt-input-hint-container > input').invoke('attr','value').should('contain','DJones_Test_Company1- (DJONES_TEST)') //Verify selection
	  cy.wait(1000)
	  cy.get("[type='submit']").click()// Click view buttons
	  
	 
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	   cy.get('.mb-1 > .mr-1').should('have.text','DJONES_TEST')//verify select Company code
  });
});