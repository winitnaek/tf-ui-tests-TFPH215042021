///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Marital Status", function()
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
	
	 //use the CSS selector link to get link to open 
	 cy.get(':nth-child(3) > :nth-child(1) > :nth-child(5) > .d-block').click()// clicking the Marital Status Report link.Selector selected with Cypress Playground
	 
	  cy.wait(1000)
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('00100')//selecting Alabama
	 
	 cy.wait(1000)
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	   cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','00010000 - ALABAMA') 
	  
	   cy.wait(1000)
	   
	   //Tax Type
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type("001 ")
	   cy.wait(1000)
	  	  
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	   
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','001 - WITHHOLDING TAX') 
	  
	   cy.wait(1000)
	   
	    //Formula
	   
	    cy.get('input[name="formula"]').type("1")
	   cy.wait(1000)
	  	  
	   
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Marital Status")// verifying screen title
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","00010000")//verify Authority code
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(2) > span.mr-1.badge.badge-dark").should("have.text","001")//verify Tax Type
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(3) > span.mr-1.badge.badge-dark").should("have.text","1")//verify formula
	   
	 
	   cy.wait(3000)
	  
	  

  });
});