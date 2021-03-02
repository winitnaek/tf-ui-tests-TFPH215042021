///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Resident / Work Validation", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
    //  cy.visit("http://ssqa01:2021/#") //Opens the URL
	//  cy.get("#appAreaSideMenu > li > a").click()

	
	
	 cy.get(".btn.btn-link").contains("Resident / Work Validation").click()// clicking the Resident / Work Validation Report link
	 
	 //Tax Code
	  cy.wait(1000)
	  cy.get("#myform > div > div:nth-child(2) > div > div > div.rbt-input-hint-container > input").type('BSI00100')//selecting Alabama
	 
	  cy.wait(1000)
	  
	  cy.get("#myform > div > div:nth-child(2) > div > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	  cy.get("#myform > div > div:nth-child(2) > div > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	   cy.wait(1000)
	   
	   //Tax Type
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.rbt-input-hint-container > input").type("001 ")
	   cy.wait(1000)
	  	  
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	   cy.get("#myform > div > div:nth-child(3) > div > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	   cy.wait(1000)
	   
	    //Formula
	   
	     cy.get("#myform > div > div:nth-child(4) > div > div > div.rbt-input-hint-container > input").type("1 - WITHH")
		 cy.wait(1000)
		 cy.get("#myform > div > div:nth-child(4) > div > div > div.rbt-input-hint-container > input").type('{downarrow}')// select the downarrow 
	  
	      cy.get("#myform > div > div:nth-child(4) > div > div > div.rbt-input-hint-container > input").type('{enter}') // selecting the enter key. ending of selecting from dropdown
	  
	   cy.wait(1000)
		
	   cy.wait(1000)
	  	  
	   
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	   cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Resident / Work Validation")//verifying screen title
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(2) > span.mr-1.badge.badge-dark").should("have.text","BSI00100000")//verify Authority code
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(3) > span.mr-1.badge.badge-dark").should("have.text","001")//verify Tax Type
	   
	   cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(4) > span.mr-1.badge.badge-dark").should("have.text","1")//verify formula
	   
	 
	    cy.wait(3000)
       cy.get('.text-center > .btn > .fas').click()
	  
	  

  });
});