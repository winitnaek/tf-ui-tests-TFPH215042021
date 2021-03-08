///<reference types="cypress"/>

describe("Configuration and Taxes Companies", function ()
{
 it("Companies", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Companies from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Tax Codes from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-company").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
  
})

it('Add Company', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(5000)	  
	  cy.get('input[name="company"]').type("0001BSI")	  
	  cy.wait(1000)	  
	  cy.get('input[name="companyName"]').type("BSI Automation1")	  
	  cy.wait(1000)	  
	  cy.get('input[name="fein"]').type("012345678")	  
	  cy.wait(1000)
	  cy.get('input[name="courtesy"]').click()
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	  cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
//edit 0001BSI
 it('Edit newly added Company', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  
	 cy.get('input[name="companyName"]').clear()
	 cy.get('input[name="companyName"]').type("BSI Automation2")
	 cy.wait(1000)
	 cy.get(".btn-success").click()
	 cy.wait(1000)
	 cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
	 cy.wait(1000) 
	  cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title

	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('BSI Automation1')
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('{enter}')
	 cy.get('[tabindex="10"]').should("have.text","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.get('[tabindex="6"]').type('BSI Automation2')
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('{enter}')
	 cy.wait(1000)	 
  	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="company"]').invoke('attr','value').should('contain','0001BSI')//Verify selection 
	  cy.wait(1000)	   
	  cy.get('input[name="companyName"]').invoke('attr','value').should('contain','BSI Automation2')//Verify selection 	  
	  cy.wait(1000)	  	
	  cy.get('input[name="fein"]').invoke('attr','value').should('contain','012345678')//Verify selection 	
	  cy.wait(1000)

//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	   cy.get("[type='submit']").click()
	    cy.wait(1000)
		cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
		cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
   cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
 }) 
 
 
it('Delete newly added Company', () => {	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)

     cy.get('[tabindex="6"]').clear()
	 cy.get('[tabindex="6"]').type('BSI Automation2')
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('{enter}')
	 cy.wait(1000)	 
  	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="company"]').invoke('attr','value').should('contain','0001BSI')//Verify selection 
	  cy.wait(1000)	   
	  cy.get('input[name="companyName"]').invoke('attr','value').should('contain','BSI Automation2')//Verify selection 	  
	  cy.wait(1000)	  	
	  cy.get('input[name="fein"]').invoke('attr','value').should('contain','012345678')//Verify selection 	
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
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)	 
      cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
	 cy.wait(1000)	
     cy.get('[tabindex="10"]').should("have.text","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 
})
it('Add Company', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="company"]').type("0001BSI")	  
	  cy.wait(1000)	  
	  cy.get('input[name="companyName"]').type("BSI Automation1")	  
	  cy.wait(1000)	  
	  cy.get('input[name="fein"]').type("012345678")	  
	  cy.wait(1000)
	  cy.get('input[name="courtesy"]').click()
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	  cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
})