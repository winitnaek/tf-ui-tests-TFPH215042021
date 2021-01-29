///<reference types="cypress"/>

describe("Configuration and Taxes Optional Rate Override", function ()
{
 it("Optional Rate Override", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Optional Rate Override', function () {
	  cy.visit(Cypress.env('url')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Optional Rate Override from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-optionalRateOverrides").click() // selecting Optional Rate Override from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Optional Rate Overrides")// verifying screen title
	  cy.get('p').should('have.text','Click the magnifying glass in the view column on the appropriate row to manage the formula')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
	 
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('DJHNYWELL')
   //  cy.get('[tabindex="5"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(1000)
	//Add an Optional Rate Override
	
	 cy.wait(1000)
     cy.get("input[name='startDateDspl']").type('2021-01-12')// enter start date
	 cy.wait(1000)
	 
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("0000")
	 cy.wait(2000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("EMPLOYEE")
	 cy.wait(2000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("EMPLOYEE")
	 cy.wait(2000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 
	 cy.wait(1000)
     cy.get(':nth-child(5) > .col > .form-control').type('2021-12-31')// enter end date
	 cy.wait(1000)
	 cy.get('[name="account"]').type('Jones1')
	 cy.wait(1000)
	 cy.get('[name="exprateDspl"]').clear()
	 cy.get('[name="exprateDspl"]').type('1.00')
	  cy.wait(1000)
	  cy.get('[name="maxwage"]').clear()
	  cy.get('[name="maxwage"]').type('7.00')
	 cy.wait(1000)
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
	 cy.get('[tabindex="5"]').clear()
})
it('Edit to add additional Rate', () => {
	// cy.wait(1000)
	// cy.get("#jumpto-customFormulas").click() // selecting Companies from favorite menu
	 	 cy.get('[tabindex="6"]').clear()
	// cy.wait(1000)
	// cy.get('#filter > .fas').click()
	
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('DJHNYWELL')
    // cy.get('[tabindex="5"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit- 0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)

	
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get("#saveAsNew").click()// click save button
	 
	 cy.wait(1000)
     cy.get("input[name='startDateDspl']").type('2022-01-13')// enter start date
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').clear()
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("0013")
	 cy.wait(2000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','00130000- (BSI00130000- GEORGIA)')//Verify selection 
	 
	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').clear()
	  cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("EMPLOYEE")
	 cy.wait(2000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','EMPLOYEE RETIREMENT PLAN-S.S')//Verify selection 
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').clear() 
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("EMPLOYEE")
	 cy.wait(2000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','EMPLOYEE RETIREMENT PLAN-S.S')//Verify selection 
	
	 
	 cy.wait(1000)
     cy.get(':nth-child(5) > .col > .form-control').type('2022-02-28')// enter end date
	 cy.wait(1000)
	 cy.get('[name="account"]').type('Jones2')
	 cy.wait(1000)
	 cy.get('[name="exprateDspl"]').clear()
	 cy.get('[name="exprateDspl"]').type('2.00')
	  cy.wait(1000)
	  cy.get('[name="maxwage"]').clear()
	  cy.get('[name="maxwage"]').type('2.00')
	 cy.wait(1000)
	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(2000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()

})
it('Edit Original Added Code', () => {
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('DJHNYWELL')
   //  cy.get('[tabindex="5"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('[tabindex="11"]').type('Jones1')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	 cy.wait(1000)
     cy.get("input[name='startDateDspl']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main') .invoke('attr','value').should('contain','BSI00000000')//Verify selection 

	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','003')//Verify selection 
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','1')//Verify selection
		 
	 cy.wait(1000)
    cy.get(':nth-child(5) > .col > .form-control').type('2021-02-28')// enter end date
	 cy.wait(1000)
	 cy.get('[name="account"]').invoke('attr','value').should('contain','Jones')//Verify selection
     cy.wait(1000)	 
	 cy.get('[name="exprateDspl"]').invoke('attr','value').should('contain','1.000000000')//Verify selection
	 cy.get('[name="exprateDspl"]').clear()
	 cy.get('[name="exprateDspl"]').type('3.00')
	  cy.wait(1000)
	  cy.get('[name="maxwage"]').invoke('attr','value').should('contain','7')//Verify selection
	  cy.get('[name="maxwage"]').clear()
	  cy.get('[name="maxwage"]').type('7.00')
	 cy.wait(1000)
	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(2000)
	 cy.get('[tabindex="11"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})
it('Delete Originally Added Code', () => {
	 cy.wait(1000)
	 //cy.get('[tabindex="5"]').type('DJHNYWELL')
   //  cy.get('[tabindex="5"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	// cy.get('[tabindex="11"]').type('Jones2')
	 cy.wait(1000)
	 cy.get('#edit-1 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	 cy.wait(1000)
     cy.get("input[name='startDateDspl']").invoke('attr','value').should('contain','2022-01-13')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main') .invoke('attr','value').should('contain','BSI00130000')//Verify selection 

	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','061')//Verify selection 
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','1')//Verify selection
		 
	 cy.wait(1000)
     cy.get(':nth-child(5) > .col > .form-control').invoke('attr','value').should('contain','2022-02-28')//Verify selection 
	 cy.wait(1000)
	 cy.get('[name="account"]').invoke('attr','value').should('contain','Jones2')//Verify selection
     cy.wait(1000)	 
	 cy.get('[name="exprateDspl"]').invoke('attr','value').should('contain','2.000000000')//Verify selection

	  cy.wait(1000)
	  cy.get('[name="maxwage"]').invoke('attr','value').should('contain','2')//Verify selection

	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	 cy.get('[tabindex="11"]').clear() 
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})
it('Delete Newly Added Code', () => {
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('DJHNYWELL')
   //  cy.get('[tabindex="5"]').type('{enter}')
	 cy.wait(1000)
	// cy.get('#edit-12 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	// cy.get('[tabindex="11"]').type('Jones1')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	 cy.wait(1000)
     cy.get("input[name='startDateDspl']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main') .invoke('attr','value').should('contain','BSI00000000')//Verify selection 

	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','003')//Verify selection 
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','1')//Verify selection
		 
	 cy.wait(1000)
     cy.get(':nth-child(5) > .col > .form-control').invoke('attr','value').should('contain','2021-02-28')//Verify selection 
	 cy.wait(1000)
	 cy.get('[name="account"]').invoke('attr','value').should('contain','Jones1')//Verify selection
     cy.wait(1000)	 
	 cy.get('[name="exprateDspl"]').invoke('attr','value').should('contain','3.000000000')//Verify selection

	  cy.wait(1000)
	  cy.get('[name="maxwage"]').invoke('attr','value').should('contain','7')//Verify selection

	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	 cy.get('[tabindex="11"]').clear() 
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})
it('Delete Originally Added Code', () => {
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('DJHNYWELL')
     cy.get('[tabindex="5"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-12 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	//cy.get('[tabindex="11"]').type('Jones')
	// cy.wait(2000)
	cy.get('[tabindex="15"]').invoke('attr','value').should('contain','No data to display')//Verify selection
	cy.wait(1000)
	// cy.get('[tabindex="11"]').clear() 
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})	

})