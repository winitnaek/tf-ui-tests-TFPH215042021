///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Experience Rates", function()
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
	  
	 
		  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(16) > .d-block').click()// clicking the Experience Rates Report link. Selector selected with Cypress Playground
		  cy.wait(1000)
		  cy.get("[type='submit']").click()// Click view buttons
		  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
		  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Experience Rates")// verifying screen title
		  cy.wait(3000)   
		   
	
	// Test entering a tax Code'BSI00280000'

		  cy.get('.btn > .fas').click()
		  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(16) > .d-block').click()// clicking the Experience Rates Report link
		  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type("BSI00280000")
		  cy.wait(1000)
		  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").click()
		  
		  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
		  
		  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
		  cy.wait(1000)		  
		  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','BSI00280000- (MISSISSIPPI)') 
		  cy.wait(1000)
		  cy.get("[type='submit']").click()// Click view buttons
		  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
		  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Experience Rates")// verifying screen title
		  cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","BSI00280000")//verify Group code
		  cy.wait(3000)

  });
});