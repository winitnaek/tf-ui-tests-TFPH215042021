///<reference types="cypress"/>

describe("Configuration and Taxes Custom Garnishments", function ()
{
 it("FavLink Custom Garnishments", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Custom Garnishments from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Garnishments from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customGarnishment").click() // selecting Custom Tax from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishments")// verifying screen title
  
})
it('Add Custom Garnishments', function () {
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="code"]').type("00_1BSI")
	  cy.wait(1000)
	  cy.get('input[name="name"]').type("_BSI Automation")
	//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// veurify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	  cy.get("[type='submit']").click() 
   	    cy.wait(1000)
		cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
		cy.wait(1000)  
     cy.get('.modal-footer > .btn').click()	  
	 
})
it('Edit newly added Custom Garnishments', () => {
	  cy.wait(1000)
 //     cy.get("#jumpto-customGarnishment").click() // selecting Custom Tax from favorite menu
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishments")// verifying screen title
	 cy.wait(1000)

	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
      cy.get('[name = "name"]').invoke('attr','value').should('contain','_BSI Automation')//Verify selection 
	 cy.wait(1000)

	 cy.get('input[name="name"]').clear()
	cy.get('input[name="name"]').type("_BSI Automation2")
     cy.wait(1000)
	 	//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
//  cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	  cy.get("[type='submit']").click()  
	cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
     cy.get('.modal-footer > .btn').click()
})
it('Delete newly added Custom Garnishments', () => {
	  cy.wait(1000)
    //  cy.get("#jumpto-customGarnishment").click() // selecting Custom Tax from favorite menu	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishments")// verifying screen title
	 cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="name"]').invoke('attr','value').should('contain','_BSI Automation2')//Verify selection 
	  cy.wait(1000)	   
	


	 
//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
      cy.get('.modal-footer > .btn').click()
	  
//Verify Deletion
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishments")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('00_1BSI')
	 cy.wait(1000)	
     cy.get('[tabindex="8"]').should("have.text","No data to display")	 
})
it('Re-add Custom Garnishments', function () {
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="code"]').type("00_1BSI")
	  cy.wait(1000)
	  cy.get('input[name="name"]').type("_BSI Automation")
	//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// veurify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	  cy.get("[type='submit']").click() 
   cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000) 
     cy.get('.modal-footer > .btn').click()	  
	 
})
})
