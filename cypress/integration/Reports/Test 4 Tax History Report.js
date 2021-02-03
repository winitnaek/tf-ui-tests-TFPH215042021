///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Tax History Report", function()
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
	  
	
	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .d-block').click()// clicking the Tax History Report link. Selector from Cypress Playground.
	  
	  cy.wait(1000)
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Tax History Report")
	  
	  cy.wait(3000)
	
	  
	  cy.get("#edit-6 > i").click({ force: true })
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get(':nth-child(2) > :nth-child(1) > .mr-1').should("have.text","00060000")//verify BSIAUTH
	   
	  cy.get(':nth-child(2) > :nth-child(2) > .mr-1').should("have.text","CALIFORNIA")// verify Authority Name//
	   
	   cy.wait(1000)
	  
	  cy.get("#pageContainer > div:nth-child(1) > span").click()
	  
	  cy.wait(3000)
	  
	 });
	
  });