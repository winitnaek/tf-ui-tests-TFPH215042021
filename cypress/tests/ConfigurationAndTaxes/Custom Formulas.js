///<reference types="cypress"/>

describe("Configuration and Taxes Custom Formulas", function ()
{
 it("Custom Formulas", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Custom Formulas ', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom formulas from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customFormulas").click() // selecting Custom Tax from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Formulas")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Custom Formulas.')//verifying the 
      cy.wait(1000)
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
	
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(1000)
	// cy.get('[name = "taxCode"]').invoke('attr','value').should('contain','RG1_CTC')//Verify selection 
	 cy.get('[name = "taxCode"]').invoke('attr','placeholder').should('contain','Enter Custom Tax Code')//Verify Custom Tax Code
	 cy.wait(1000)
     cy.get("input[name='startDate']").type('2021-01-12')// enter start date
	 cy.wait(1000)
     cy.get("input[name='rescind']").type('2022-12-31')// enter end date
	 cy.wait(1000)
	 cy.get('[name="calcMethod"]').select('07 Flat Amount, Max Wage')
     cy.wait(1000)
	 cy.get('[name = "taxRate"]').clear()
	 cy.get('[name = "taxRate"]').type("7.000000000")
	 cy.wait(1000)
	 cy.get('[name="rounding"]').select('4 - Round Down To Dollars')//select rounding methods
     cy.wait(1000)
	 cy.get('[name = "minWage"]').clear()
	 cy.get('[name = "minWage"]').type("7.00")//enter minimum wage
	 cy.wait(1000)
	 cy.get('[name = "maxWage"]').clear()
	 cy.get('[name = "maxWage"]').type("7.00")//enter maximum wage
	 cy.wait(1000)
	 cy.get('[name = "maxTax"]').clear()
	 cy.get('[name = "maxTax"]').type("7.00")//enter maximum tax
	 cy.wait(1000)
	 cy.get('[name = "flatAmount"]').clear()
	 cy.get('[name = "flatAmount"]').type("7.00")//enter flat amount
     cy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
})
it('Edit newly added Tax Code', () => {
	 cy.wait(1000)
	// cy.get("#jumpto-customFormulas").click() // selecting Companies from favorite menu
	// 	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('07 Flat Amount, Max Wage')
     cy.get('[tabindex="6"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	
	
	 cy.wait(1000)
	 //cy.get('[name = "taxCode"]').invoke('attr','value').should('contain','RG1_CTC')//Verify selection 
	// cy.get('[name = "taxCode"]').invoke('attr','placeholder').should('contain','Enter Custom Tax Code')//Verify Custom Tax Code
	 cy.wait(1000)
	 
   //  cy.get("[name='startDate']").type('2021-01-12')// enter start date
	 cy.get("[name='startDate']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
   //  cy.get("[name='rescind']").type('2021-12-31')// enter end date
	 cy.get("[name='rescind']").invoke('attr','value').should('contain','2022-12-31')//Verify selection 
	 cy.wait(1000)
	// cy.get('[name="calcMethod"]').select('07 Flat Amount, Max Wage')
	//  cy.get('[name="calcMethod"]').invoke('attr','option').should('contain','07 Flat Amount, Max Wage')//Verify selection 
     cy.wait(1000)
	
	   cy.get('[name = "taxRate"]').invoke('attr','value').should('contain','7')//Verify selection 
	 cy.wait(1000)
	
	// cy.get('[name="rounding"]').invoke('attr','value').should('contain','4 - Round Down To Dollars')//Verify selection 
     cy.wait(1000)

	cy.get('[name = "minWage"]').invoke('attr','value').should('contain','7')//Verify selection 
	 cy.wait(1000)

	cy.get('[name = "maxWage"]').invoke('attr','value').should('contain','7')//Verify selection 
	 cy.wait(1000)
	
	 cy.get('[name = "maxTax"]').invoke('attr','value').should('contain','7')//Verify selection 
	 cy.wait(1000)
	 
   	 cy.get('[name = "flatAmount"]').invoke('attr','value').should('contain','7')//Verify selection 
	 
	 cy.wait(1000)
	 cy.get('[name = "minWage"]').clear()
	 cy.get('[name = "minWage"]').type("8.00")//enter minimum wage
	 cy.wait(1000)
	 cy.get('[name = "maxWage"]').clear()
	 cy.get('[name = "maxWage"]').type("8.00")//enter maximum wage
	 cy.wait(1000)
	 cy.get('[name = "maxTax"]').clear()
	 cy.get('[name = "maxTax"]').type("8.00")//enter maximum tax
	 cy.wait(1000)
	 cy.get('[name = "flatAmount"]').clear()
	 cy.get('[name = "flatAmount"]').type("8.00")//enter flat amount
	 
	 
	 cy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 

	 
	// cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 	 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click()
})
it('Delete newly added Company', () => {	
     cy.wait(1000)
   
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('07 Flat Amount, Max Wage')
     cy.get('[tabindex="6"]').type('{enter}')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//verify tax code 
	//  cy.wait(1000)
	 // cy.get('[name = "taxCode"]').invoke('attr','value').should('contain','RG1_CTC')//Verify tax code  
	cy.wait(1000)  
	cy.get('[name = "minWage"]').invoke('attr','value').should('contain','8')//Verify selection 
	 cy.wait(1000)

	cy.get('[name = "maxWage"]').invoke('attr','value').should('contain','8')//Verify selection 
	 cy.wait(1000)
	
	 cy.get('[name = "maxTax"]').invoke('attr','value').should('contain','8')//Verify selection 
	 cy.wait(1000)
	 
   	 cy.get('[name = "flatAmount"]').invoke('attr','value').should('contain','8')//Verify selection 
	 //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	   	 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	  cy.get('[tabindex="5"]').clear()
	  cy.wait(1000)
	 cy.get('[tabindex="5"]').type('{enter}')
	 
})

})

