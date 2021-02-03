///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Ordered-Percent Garnishments", function()
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
	  
	
	  
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(8) > .d-block').click()// clicking the Monthly/Quarterly Tax Type Report link. Selector selected with Cypress Playground
	  
	  cy.wait(1000)
	  
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Ordered-Percent Garnishments")// verifying screen title
	
	  cy.wait(3000)
	  
	  
  });
});