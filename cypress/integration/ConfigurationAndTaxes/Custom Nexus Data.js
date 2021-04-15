///<reference types="cypress"/>

describe("Configuration and Taxes Custom Nexus Data", function ()
{
 it("Custom Nexus Data", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Custom Nexus Data from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click()
	  // using force:true to click the Hidden fav icon.
	  cy.wait(1000) 
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.fas.fa-caret-down').click()

	  
})

it('launch Custom Tax Codes from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customNexusData").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Nexus Data")// verifying screen title
  
})

it('Add Custom Nexus Data', () => {

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true })
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	cy.wait(1000)
	cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("001300")
	cy.wait(2000)
	cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	cy.wait(1000)
	cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}') 
    cy.wait(1000)	  
	  cy.get('[name="rescind"]').type("2021-06-30")	  
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  //Remove 
	  cy.wait(1000)
	  cy.get('#filter > .fas').click()
})
//edit 0001BSI
 it('Edit newly added Company', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Nexus Data")// verifying screen title
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true })
	  cy.wait(1000)
	 cy.get('[tabindex="6"]').type('GEORGIA')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','BSI00130000') 
	  cy.get('[name="rescind"]').invoke('attr','value').should('contain','2021-06-30') 
     cy.wait(1000)	  
	 cy.get('[name="rescind"]').type('2021-12-31')
	 cy.wait(1000)	 
	 cy.get(".btn-success").click()
	 cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Nexus Data")// verifying screen title

	 cy.wait(1000)	 
  	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('[name="rescind"]').invoke('attr','value').should('contain','2021-12-31') 
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
	 cy.get('[tabindex="6"]').clear()
 }) 
 
 
it('Delete newly added Company', () => {	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Nexus Data")// verifying screen title

	 cy.wait(1000)
	 
  	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('[name="rescind"]').invoke('attr','value').should('contain','2021-12-31') 
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
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Nexus Data")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)	 
      cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('Georgia')
	 cy.wait(1000)	
    // cy.get('[tabindex="13"]').should("contains","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 
})
})