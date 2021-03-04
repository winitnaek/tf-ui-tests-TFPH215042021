///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("PA Services Tax", function()
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
	
	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .d-block').click()// clicking the PA Services Tax Report link. Selector from Cypress Playground
	  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","PA Services Tax Report")
	  
	 
	 
	  cy.get("#edit-9 > i").click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  
	  cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","00420038")//verify Authority code
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(2) > span.mr-1.badge.badge-dark").should("have.text","ALLENTOWN CSD")//verify Title
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(3) > span.mr-1.badge.badge-dark").should("have.text","LEHIGH")//verify County
	   
	    cy.wait(3000)
		
	cy.get('#filter > .fas').click()
		
	  cy.wait(3000)
	
  });
});