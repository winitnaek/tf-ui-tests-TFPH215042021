///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("All Mapped Pay Codes", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
    //  cy.visit(Cypress.env('sslaburl')) //Opens the URL
	//  cy.get("#appAreaSideMenu > li > a").click()
	  
	
	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .d-block').click()// clicking the All Mapped Pay Codes Report link. Selector from Cypress Playground.
	  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","All Mapped Pay Codes")
	  
	  cy.wait(3000)
      cy.get('.text-center > .btn > .fas').click()
	
  });
});