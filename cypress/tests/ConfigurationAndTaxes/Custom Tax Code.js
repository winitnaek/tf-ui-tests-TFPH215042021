///<reference types="cypress"/>

describe("Configuration and Taxes Custom Tax Codes", function ()
{
 it("Custom Tax Codes", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Custom Tax Codes from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Tax Codes from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customTaxCodes").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
	  cy.wait(1000)
      cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Tax Codes")// verifying screen title
       cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All  
	  cy.wait(1000)


})
it('Add Custom Tax Code', () => {
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(1000)
	 cy.get('[name = "taxCode"]').type("0_01BSI")//Custom Tax Code
	 cy.wait(1000)
     cy.get("[name='name']").type('BSI Automation')// enter Custom Tax Name
	 cy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 cy.wait(1000)	  
     cy.get('.modal-footer > .btn').click()
	// cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	cy.get("[type='submit']").click()// click save button
		  cy.wait(1000)	  
      cy.get('.modal-footer > .btn').click() 
})
it('Edit newly added Custom Tax Code', () => {
	// cy.wait(1000)
	// cy.get("#jumpto-customTaxCodes").click() // selecting Custom Tax from favorite menu
	// cy.wait(1000)
	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 
 
	//  cy.get('[name = "taxCode"]').invoke('attr','value').should('contain','0_01BSI')//Verify selection 
	  cy.wait(1000)
  //	  cy.get("[name='name']").invoke('attr','value').should('contain','BSI Automation')//Verify selection 
	  cy.wait(1000)
	 cy.get("[name='name']").clear()
	 cy.get("[name='name']").type('BSI Automation2')
	 cy.wait(1000)
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	//cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(1000)	  
     cy.get('.modal-footer > .btn').click()
})
 it('Delete newly added Custom Tax Code', () => {	
     cy.wait(1000)
  
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  
	 cy.wait(1000)
	 cy.get("[name='name']").invoke('attr','value').should('contain','BSI Automation2')//Verify selection 
		 //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	  cy.wait(1000)	  
      cy.get('.modal-footer > .btn').click()  

   //verify delete
     cy.wait(1000)
     cy.get('[tabindex="5"]').clear()
	 cy.get('[tabindex="5"]').type('0_01BSI')
     cy.get('[tabindex="5"]').type('{enter}')
     cy.get('[tabindex="8"]').should("have.text","No data to display")	 
 })	
})