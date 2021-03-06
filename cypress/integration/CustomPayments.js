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
       cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All  
	  cy.wait(1000)
})

it('Add Custom Payments ', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get("#userCode").type("_001BSI")	  
	  cy.wait(1000)	  
	  cy.get('#payType').select("Custom Earnings")	  
	  cy.wait(1000)	  
	 cy.get('#name').type("_BSI Automation")	  
	  cy.wait(1000)
	  
	  cy.get('#taxability').select("Limit / QTD")	
	  
	  cy.get('#eemax').type("50.00")
	  
	  //verify buttons
  	 cy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
    cy.get("[type='submit']").click()// click save button
	cy.wait(1000)
	    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
})
//edit 
 it('Edit newly added Custom Payment', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('_001BSI')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
      cy.get('#userCode').invoke('attr','value').should('contain','_001BSI')//Verify selection 
	// cy.get('[name = "taxCode"]').invoke('attr','placeholder').should('contain','Enter Custom Tax Code')//Verify Custom Tax Code
	 cy.wait(1000)
	 
  
	 cy.get('#name').invoke('attr','value').should('contain','BSI Automation')//Verify selection 
	 cy.wait(1000)
 
	 cy.get('#eemax').invoke('attr','value').should('contain','50.00')//Verify selection 
	 cy.wait(1000)
	cy.get('#eemax').clear()
	cy.get('#eemax').type("75.00")
     cy.wait(1000)

//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	//  cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
  cy.get("[type='submit']").click()
  	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
 }) 
 
 
it('Delete newly added Custom Payment', () => {	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)

    cy.get('[tabindex="5"]').type('_001BSI')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('#eemax').invoke('attr','value').should('contain','75.00')//Verify selection 
	  cy.wait(1000)	   
	


	 
//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	  	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  
//Verify Deletion
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('_001BSI')
	 cy.wait(1000)	
     cy.get('[tabindex="10"]').should("have.text","No data to display")	 
})
})