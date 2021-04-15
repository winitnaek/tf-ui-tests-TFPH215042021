///<reference types="cypress"/>

describe("Configuration and Taxes Reciprocal Override", function ()
{
 it("Reciprocal Override", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Reciprocal Override', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(5) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(5) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Reciprocal Override from Fav Menu', function () {
	  cy.wait(1000)
      cy.get('#jumpto-reciprocalOverrides').click() // selecting Reciprocal Override from favorite menu
})
it('Verify Page Title', () => {
		cy.wait(1000)
	cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Reciprocal Overrides")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Reciprocal Override.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Local Reciprocal Override', () => {
	

	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add an Reciprocal Override
	cy.get('#ovrType').select('Local')
	cy.wait(1000)
     cy.get('[name="startDate"]').type('2021-01-01')// enter end date
	 
	 
	 cy.get(':nth-child(3) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("00010001")
	 cy.wait(2000)
	 cy.get(':nth-child(3) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(3) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	 cy.wait(1000)
	 cy.get('#residentTaxTypelocal').select('051 - 051 - EMPLOYEE OCCUPATION TAX')
	 
     cy.wait(1000)
	 cy.get(':nth-child(5) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("00010002")
	 cy.wait(2000)
	cy.get(':nth-child(5) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(5) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 
	 cy.wait(1000)
	 cy.get('#nonresidentTaxTypelocal').select('051 - 051 - EMPLOYEE OCCUPATION TAX')
	 cy.wait(1000)
     cy.get('[name="endDate"]').type('2999-12-31')// enter end date
	cy.wait(1000)
	 cy.get('#calculationMthd').select('N-Do not tax nonresident wages in the resident authority')
	 cy.wait(1000)
	 cy.get('#rate').clear()
	 cy.get('#rate').type('1.00')

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
	  cy.get('#filter > .fas').click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()

})
it('Add State Reciprocal Override', () => {
	cy.wait(1000)
	cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	cy.wait(1000)
	cy.get('#addNew > a > .fas', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add an Reciprocal Override
	cy.get('#ovrType').select('State')
	cy.wait(1000)
     cy.get('[name="startDate"]').type('2021-01-02')// enter end date
	 
	 cy.get(':nth-child(3) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("BSI00080000")
	 cy.wait(1000)
	 cy.get(':nth-child(3) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(2000)
	 cy.get(':nth-child(3) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	 cy.wait(1000)
	 cy.get('#residentTaxType').select('001 - 001 - WITHHOLDING TAX')
     cy.wait(1000)
	 cy.get(':nth-child(5) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("BSI00130000")
	 cy.wait(1000)
	cy.get(':nth-child(5) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(5) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 
	 cy.wait(1000)
	 cy.get('#nonresidentTaxType').select('001 - 001 - WITHHOLDING TAX')
	 
     cy.get('[name="endDate"]').type('2999-12-31')// enter end date
	cy.wait(1000)
//	cy.get('#calculationMethod').select('Do NOT override calculation method')
	 cy.wait(1000)
	 cy.get('#rate').clear()
	 cy.get('#rate').type('1.00')
     cy.wait(1000)
//	 cy.get('#wageReportingMethod').select('Do NOT override wage reporting method')
	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  cy.get('#filter > .fas').click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  
})

it('Edit Original local', () => {
	 cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#edit-1 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	  cy.get('#rate').invoke('attr','value').should('contain','1.00')//Verify selection
	  cy.wait(1000)
	  cy.get('#rate').clear()
	 cy.get('#rate').type('0.00')
	 

	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button

	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	cy.wait(1000)
	cy.get('.modal-footer > .btn').click()
	
})
it('Edit Original State', () => {
	 cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	  cy.get('#rate').invoke('attr','value').should('contain','1.00')//Verify selection
	  cy.wait(1000)
	  cy.get('#rate').clear()
	 cy.get('#rate').type('0.00')
	 

	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button

	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	cy.wait(1000)
	cy.get('.modal-footer > .btn').click()
	
})
it('Delete Originally Local', () => {

     cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#edit-1 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	// cy.get('[name="endDate"]').invoke('attr','value').should('contain','3999-12-31')//Verify selection
	  cy.wait(1000)
	 	  cy.get('#rate').invoke('attr','value').should('contain','0.00')//Verify selection
	 
	   
	  cy.wait(1000)
	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	  cy.wait(1000)

	 cy.get('#filter > .fas').click({force: true})
	cy.wait(1000)
	cy.get('.modal-footer > .btn').click()

})
it('Delete Originally State', () => {

     cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	// cy.get('[name="endDate"]').invoke('attr','value').should('contain','3999-12-31')//Verify selection
	  cy.wait(1000)
	 
	 
	   
	  cy.wait(1000)
	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	  cy.wait(1000)

	 cy.get('#filter > .fas').click({force: true})
	cy.wait(1000)
	cy.get('.modal-footer > .btn').click()

})

})