///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Employee Groups", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
    cy.visit(Cypress.env('url')) //Opens the URL
    cy.get("#appAreaSideMenu > li > a").click()
	
	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(15) > .d-block').click()// clicking the Employee Groups Report link
	  
	  cy.wait(1000)
	  

	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type("ALL")
	  
	  cy.wait(1000)
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").click()
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	    cy.wait(1000)
	  
	    cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','ALL') 
	  
	   cy.wait(1000)
	  
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Employee Groups")// verifying screen title
	  
	    cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","ALL")//verify Group code
	
	  cy.wait(3000)
	  
	  
  });
});