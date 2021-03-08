///<reference types="cypress"/>

describe("Configuration and Taxes Unemployment Override", function ()
{
 it("Unemployment Override", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Unemployment Override', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(5) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(5) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.modal-body').should ('have.text', 'This tool allows the customer to enter information that will be processed by BSI TaxFactory. BSI excludes responsibility for any outcome resulting from customer - entered information.')
       cy.wait(1000) 
	 cy.get('.btn-success').click({force: true})
	 cy.wait(1000)
	  cy.get('.btn > .fas').click()
	  
})

it('launch Unemployment Override from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-unemploymentOverrides").click() // selecting Unemployment Override from favorite menu 
	  cy.wait(1000)
	  cy.get('.btn-success').click({force: true})
	 cy.wait(1000)
	  
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Unemployment Overrides")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Unemployment Overrides.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
	 
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('DJHNYWELL',{force: true} )
    // cy.get('[tabindex="5"]').click({force: true})
    // cy.get('[tabindex="5"]').type('{enter}')
	// cy.get('[tabindex="9"]').clear()
	// cy.get('[tabindex="9"]').type('2')
     //cy.get('[tabindex="9"]').type('{enter}')

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add an Unemployment Override
	
	 cy.wait(1000)
     cy.get("input[name='startDate']").type('2021-02-01')// enter start date
	 cy.wait(1000)
	 
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("0000")
	 cy.wait(2000)
	cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("employer u")
	 cy.wait(2000)
     cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("employer u")
	 cy.wait(2000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 
	 cy.wait(1000)
     cy.get("input[name='endDate']").type('2021-03-31')// enter end date
	 cy.wait(1000)
	 cy.get('[name="account"]').type('DJUnemp')
	 cy.wait(1000)
	 cy.get('[name="rate"]').clear()
	 cy.get('[name="rate"]').type('1.00')
	  cy.wait(1000)
	  cy.get('[name="maxWage"]').clear()
	  cy.get('[name="maxWage"]').type('2.00')
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
	// cy.get('[tabindex="5"]').clear()
})



it('Edit Original Added Code', () => {
	
	// cy.get('[tabindex="5"]').type('DJHNYWELL')
   //  cy.get('[tabindex="5"]').type('{enter}')
   
      cy.wait(1000)
   	 cy.get('.btn-success').click({force: true})
	 
   	// cy.get('[tabindex="9"]').clear()
	// cy.get('[tabindex="9"]').type('2')
   //  cy.get('[tabindex="9"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('BSI00000000')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Unemployment Override
	 cy.wait(1000)
     cy.get("input[name='startDate']").invoke('attr','value').should('contain','2021-02-01')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main') .invoke('attr','value').should('contain','BSI00000000')//Verify selection 

	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','010')//Verify selection 
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','1')//Verify selection
		 
	 cy.wait(1000)
      cy.get("input[name='endDate']").type('2021-01-13')// enter end date
	 cy.wait(1000)
	 cy.get('[name="account"]').invoke('attr','value').should('contain','DJUnemp')//Verify selection
     cy.wait(1000)	 
	 cy.get('[name="rate"]').invoke('attr','value').should('contain','1.000000000')//Verify selection
	 cy.get('[name="rate"]').clear()
	 cy.get('[name="rate"]').type('3.00')
	  cy.wait(1000)
	  cy.get('[name="maxWage"]').invoke('attr','value').should('contain','2')//Verify selection
	  cy.get('[name="maxWage"]').clear()
	  cy.get('[name="maxWage"]').type('7.00')
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
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
//	 cy.get('[tabindex="5"]').clear()
})
it('Delete Originally Added Code', () => {
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('DJHNYWELL')
    // cy.get('[tabindex="5"]').type('{enter}')
	   
      cy.wait(1000)
   	 cy.get('.btn-success').click({force: true})
	
	// cy.get('[tabindex="9"]').clear()
	// cy.get('[tabindex="9"]').type('2')
  //   cy.get('[tabindex="9"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	cy.get('[tabindex="5"]').type('BSI00000000')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Unemployment Override
	 cy.wait(1000)
    // cy.get("input[name='startDate']").invoke('attr','value').should('contain','2022-01-13')//Verify selection 
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container >.rbt-input-main') .invoke('attr','value').should('contain','BSI00000000')//Verify selection 

	 cy.wait(1000)
	 cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','010')//Verify selection 
	  
	  cy.wait(1000)
	 cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','1')//Verify selection
		 
	 cy.wait(1000)
     cy.get("input[name='endDate']").type('2021-01-14')// enter end date
	 cy.wait(1000)
	 cy.get('[name="account"]').invoke('attr','value').should('contain','DJUnemp')//Verify selection
     cy.wait(1000)	 
	 cy.get('[name="rate"]').invoke('attr','value').should('contain','3.000000000')//Verify selection

	  cy.wait(1000)
	  cy.get('[name="maxWage"]').invoke('attr','value').should('contain','7.00')//Verify selection

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
	 cy.get('[tabindex="5"]').clear() 
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})


})