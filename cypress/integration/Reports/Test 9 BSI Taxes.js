///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("BSI Taxes", function()
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
	  
	
	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(7) > .d-block').click()// clicking the BSI Taxes Report link. Selector selected with Cypress Playground.
	  
	  cy.wait(1000)
	  
	  
	  cy.get("[type='submit']").click()
	   
	
	  
	    cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 50000 }).should('be.visible'); //Waiting 50 secs to have screen to load
	  
	    cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","BSI Taxes")// verifying screen title
	  
	    cy.wait(3000)
	  
	
  });
});