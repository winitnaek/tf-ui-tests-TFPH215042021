///<reference types="cypress"/>

describe("Configuration and Taxes Custom Payment Exemptions", function ()
{
 it("Custom Payment Exemptions", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Custom Payment Exemptions', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Optional Rate Override from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customPaymentExceptions").click() // selecting Custom Payment Exemptions from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Payment Exceptions ")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Custom Payment Exemptions.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
	 


	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(2000)
	 cy.get('#addNew > a > .fas',{ timeout: 30000 }).should('be.visible')
	 cy.wait(2000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add a Custom Payment Exemptions
	
	// cy.wait(1000)
    // cy.get("input[name='startDate']").type('2021-01-12')// enter start date
	 cy.wait(1000)
	 
	cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("BSI0000")
	 cy.wait(2000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("003")
	 cy.wait(2000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	 cy.wait(1000)
     cy.get("input[name='startDate']").type('2021-01-12')// enter start date
	  
	 
	 cy.wait(1000)
   //  cy.get(':nth-child(5) > .col > .form-control').type('2021-12-31')// enter end date
   cy.get("input[name='rescind']").type('2021-03-12')// enter end date
	 cy.wait(1000)
     cy.get('#e_taxability').select("Limit-QTD")	
	  cy.wait(1000)
	   cy.get('#eeMax').clear()
	  cy.get('#eeMax').type("50.00")
	 cy.wait(1000)
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
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})

it('Edit Original Added Code', () => {

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)

	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	 cy.wait(1000)
   //  cy.get("input[name='startDateDspl']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main') .invoke('attr','value').should('contain','BSI00000000')//Verify selection 

	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','003')//Verify selection 
	  
	   cy.get("input[name='startDate']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	  
	 cy.wait(1000)
   // cy.get(':nth-child(5) > .col > .form-control').type('2021-02-28')// enter end date
	  cy.get("input[name='rescind']").invoke('attr','value').should('contain','2021-03-12')//Verify selection 
     cy.wait(1000)
     //cy.get('#e_taxability').invoke('attr','value').should('contain','Limit-QTD')//Verify selection
	  cy.wait(1000)
	 cy.get('#eeMax').invoke('attr','value').should('contain','50.00')//Verify selection	 

	  cy.wait(1000)
	//  cy.get('#eeMax').clear({force: true})
	//  cy.get('#eeMax').type('100.00')
	 cy.wait(1000)
	 //verify 
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
	 cy.wait(2000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})

it('Delete Newly Added Code', () => {
	 cy.wait(1000)

	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override

	  cy.wait(1000)
	  //  cy.get('#eeMax').invoke('attr','value').should('contain','100.00')//Verify selection	
	 cy.wait(1000)

	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	  cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)  
      cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	 cy.get('[tabindex="5"]').clear() 
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})
it('Delete Originally Added Code', () => {
	 cy.wait(1000)
  
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	// cy.get('[tabindex="11"]').type('Jones')
	// cy.wait(2000)
	cy.get('[tabindex="13"]').should('have.text','No data to display')//Verify selection
	cy.wait(1000)
	// cy.get('[tabindex="11"]').clear() 
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})	

})