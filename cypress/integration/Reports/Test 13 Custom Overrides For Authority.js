///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Custom Overrides For Authority", function()
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
	  
	
	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(11) > .d-block').click()// clicking the Custom Overrides For Authority Report link
	  
	  cy.wait(1000)
	  
	  //Authority Code
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type("0000000")
	  
	  cy.wait(1000)
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").click()
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	    cy.wait(1000)
	  
	    cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','00000000 - FEDERAL') 
	  
	   cy.wait(1000)
	   
	   //Tax Type
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type("001 ")
	   
	   cy.wait(1000)
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").click()
	  
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	   
	   cy.wait(1000)
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','001 - WITHHOLDING TAX')
	  
	   cy.wait(1000)
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Overrides For Authority")// verifying screen title
	   
	   cy.wait(1000)
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","00000000")//verify Authority code
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(2) > span.mr-1.badge.badge-dark").should("have.text","001")//verify Tax Type
	   
	  
	   
	   cy.wait(3000)
	
  });
});