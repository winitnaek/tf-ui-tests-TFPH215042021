///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Taxability For Authority", function()
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

	
		 //use the CSS selector link to get link to open 
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(15) > .d-block').click()// clicking the Taxability For Authority Report link. Selector selected with Cypress Playground.
	
	 
	 //Tax Code
	  cy.wait(1000)
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('00210000')//selecting Alabama
	 
	  cy.wait(1000)
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	  cy.get("#myform > div > div:nth-child(1) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','00210000 - KENTUCKY') 
	  
	   cy.wait(1000)
	   
	   //Tax Type
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type("001")
	   cy.wait(1000)
	  	  
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	   
	   cy.get("#myform > div > div:nth-child(2) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','001 - WITHHOLDING TAX') 
	  
	   cy.wait(1000)
	   
	  //Type of Data
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.col > div > div.rbt-input-hint-container > input").type("All E")
	   cy.wait(1000)
	  	  
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.col > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	   
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.col > div > div.rbt-input-hint-container > input").invoke('attr','value').should('contain','All Earnings') 
	   
	   
	  
	   cy.wait(1000)
	  	  
	 
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Taxability for Authority")//verifying screen title
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","00210000")//verify Authority code
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(2) > span.mr-1.badge.badge-dark").should("have.text","001")//verify Tax Type
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(3) > span.mr-1.badge.badge-dark").should("have.text","All Earnings")//verify Type of Data
	   
	 
	   
	 
	   cy.wait(3000)
	  
	  

  });
});