///<reference types="cypress"/>

describe("Configuration and Taxes Custom Payments", function ()
{
 it("Custom Payments", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Custom Payments from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Payments from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customPayments").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
  
})

it('Add Custom Payments ', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="userCode"]').type("DJ_TestCode")	  
	  cy.wait(1000)	  
	  cy.get('input[name="payType"]').select("Custom Earnings")	  
	  cy.wait(1000)	  
	  cy.get('input[name="name"]').type("DJ_Testpayment")	  
	  cy.wait(1000)
	  
	  cy.get('input[name="payType"]').select("Limit / QTD")	
	  
	  cy.get('input[name="eemax"]').type("50.00")
	  
	  //verify buttons
  	 ccy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	// cy.get("[type='submit']").click()// click save button
})
//edit HONEYWELL
 it('Edit newly added Company', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('DJ_TESTCODE')
	 cy.wait(1000)
	 cy.get('#edit-9 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
      cy.get('[name = "userCode"]').invoke('attr','value').should('contain','DJ_TESTCODE')//Verify selection 
	// cy.get('[name = "taxCode"]').invoke('attr','placeholder').should('contain','Enter Custom Tax Code')//Verify Custom Tax Code
	 cy.wait(1000)
	 
  
	 cy.get("[name='name']").invoke('attr','value').should('contain','DJ_Testpayment')//Verify selection 
	 cy.wait(1000)
 
	 cy.get("[name='eemax']").invoke('attr','value').should('contain','50.00')//Verify selection 
	 cy.wait(1000)
	 cy.get('input[name="eemax"]').clear()
	cy.get('input[name="eemax"]').type("75.00")
     cy.wait(1000)

//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 //  cy.get("[type='submit']").click()
 }) 
 
 
it('Delete newly added Company', () => {	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)

    cy.get('[tabindex="5"]').type('DJ_TESTCODE')
	 cy.wait(1000)
	 cy.get('#edit-9 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="eemax"]').invoke('attr','value').should('contain','75.00')//Verify selection 
	  cy.wait(1000)	   
	


	 
//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	  
//Verify Deletion
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('DJ_TESTCODE')
	 cy.wait(1000)	
     cy.get('[tabindex="10"]').should("have.text","No data to display")	 
})
})