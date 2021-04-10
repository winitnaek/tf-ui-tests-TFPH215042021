///<reference types="cypress"/>

describe("Configuration and Taxes Disposable Overrides", function ()
{
 it("Unemployment Override", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Disposable Overrides', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .d-block').click()
	  cy.wait(1000)
	
	
	 cy.wait(1000)
	  cy.get('.btn > .fas').click()
	  
})

it('launch Disposable Overrides from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-disposableRateOverrides").click() // selecting Disposable Override from favorite menu 
	
	 cy.wait(1000)
	  
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Disposable Overrides")// verifying screen title
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	  cy.get("#addNew > a > .fas", { timeout: 30000 }).should('be.visible')
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add an Disposable Override
	
	 cy.wait(1000)
  // cy.get("input[name='startDate']").type('2021-02-01')// enter start date
	 cy.wait(1000)
	 
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("BSI000000")
	 cy.wait(2000)
	cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("505")
	 cy.wait(2000)
     cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("DJCUSPAY")
	 cy.wait(2000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 
	 cy.wait(1000)
 //    cy.get("input[name='endDate']").type('2999-03-31')// enter end date
	 cy.wait(1000)
	 cy.get('[name="dateCodeVal"]').select('Use if Prior To Order')
	 cy.wait(1000)
	 cy.get('[name="processCodeVal"]').select('Not Disposable')
	 cy.wait(1000)
	 cy.get('[name="minAmount"]').clear()
	 cy.get('[name="minAmount"]').type('1.00')
	  cy.wait(1000)
	  cy.get('[name="maxAmount"]').clear()
	  cy.get('[name="maxAmount"]').type('100.00')
	  	 cy.wait(1000)
	 cy.get('[name="minPercent"]').clear()
	 cy.get('[name="minPercent"]').type('.1')
	  cy.wait(1000)
	  cy.get('[name="maxPercent"]').clear()
	  cy.get('[name="maxPercent"]').type('.05')
	 cy.wait(1000)
	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
     cy.get("#_viewAllBtnId").should('contain', 'View All Disposables')
	 cy.wait(1000)
	// cy.get("#_viewAllBtnId").click()
	 cy.wait(5000)
	// cy.get(':nth-child(89) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-header > .close').click()
	
	 cy.wait(1000)
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
     cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
it('Edit to Disposable Override', () => {

	 cy.wait(1000)

	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	
//	 cy.get("input[name='startDate']").invoke('attr','value').should('contain','2021-02-01')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main').invoke('attr','value').should('contain','BSI00000000')//Verify selection 
     cy.wait(1000)
	  cy.get('[name="minAmount"]').invoke('attr','value').should('contain','1')//Verify selection 
	 cy.get('[name="minAmount"]').clear()
	 cy.get('[name="minAmount"]').type('5.00')
	  cy.wait(1000)
	   cy.get('[name="maxAmount"]').invoke('attr','value').should('contain','100')//Verify selection 
	  cy.get('[name="maxAmount"]').clear()
	  cy.get('[name="maxAmount"]').type('50.00')
	  	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	cy.get("[type='submit']").click()
	cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})	

it('Delete Originally Added Code', () => {

	
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Verify Changes
	   cy.wait(1000)
	  cy.get('[name="minAmount"]').invoke('attr','value').should('contain','5')//Verify selection 
	 cy.get('[name="minAmount"]').clear()
	 cy.get('[name="minAmount"]').type('5.00')
	  cy.wait(1000)
	   cy.get('[name="maxAmount"]').invoke('attr','value').should('contain','50')//Verify selection 
	
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

})


})