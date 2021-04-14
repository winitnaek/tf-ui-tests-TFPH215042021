///<reference types="cypress"/>

describe("Configuration and Taxes Address Overrides", function ()
{
 it("Address Overrides", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Address Overrides', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
     cy.get(':nth-child(2) > :nth-child(3) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Address Overrides from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-addressOverrides").click() // selecting Optional Rate Override from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Address Overrides")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Address Overrides.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
	   cy.wait(1000)
})
it('Add Tax Code', () => {
	
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add a Address Overrides
	

	 cy.wait(1000)
	 cy.get('#snt').select('Numeric')
	 cy.wait(1000)
     cy.get('#fpre').select('E')
	 cy.wait(1000)
	 
	 //Input Section
	cy.get('#fname').clear()
	cy.get('#fname').type('BSI')
	 cy.wait(1000)

	 cy.get('#ftype').select('LN')
	  cy.wait(1000)

	 cy.get('#fpost').select('SE')
	 cy.wait(1000)
	 cy.get('#fadd').clear()
	 cy.get('#fadd').type('0')
	
	
	 cy.wait(1000)
	 cy.get('#fadd').clear()
	 cy.get('#fadd').type('12')
	 cy.wait(1000)
	 cy.get('[name="tadd"]').clear()
	 cy.get('[name="tadd"]').type('12')
	 cy.wait(1000)
	 cy.get('#fzip').clear()
	 cy.get('#fzip').type('43351')
	 
	 cy.wait(1000)
	 cy.get('#parity').select('BOTH')
	 cy.wait(1000)
	 cy.get('#sunit').clear()
	 cy.get('#sunit').type('qwe 123')
	 cy.wait(1000)
	
	 cy.get('#state').select('OH')
	 cy.wait(1000)
	 cy.get('#countyName').select('169- (WAYNE)')
	 cy.wait(1000)
	  
	 cy.get(':nth-child(16) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("T1 | 82320 | WAYNE")
	 cy.wait(2000)
	 cy.get(':nth-child(16) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(16) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
     cy.wait(1000)
	 
     cy.get(':nth-child(17) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("AMANDA-CLEARCREEK LSD | BSI00391899 | FAIRFIELD")
	 cy.wait(5000)
     cy.get(':nth-child(17) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(17) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
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
	




})
it('Edit Original Added Code', () => {
	cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)

	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	 cy.wait(1000)
     cy.get("input[name='startDate']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
	  cy.get('[name="calcAmt"]').invoke('attr','value').should('contain','10.00')//Verify selection 
     cy.wait(1000)
      cy.get('[name="calcAmt"]').clear()
	  cy.get('[name="calcAmt"]').type('50.00')
	 cy.wait(1000)
	
	 cy.get("[type='submit']").click()// click save button
	  cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)  
      cy.get('.modal-footer > .btn').click()
	  
	 cy.wait(1000)

	
})

it('Delete Newly Added Code', () => {

	

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)
	 
     cy.wait(1000)
	  cy.get('[name="calcAmt"]').invoke('attr','value').should('contain','50.00')//Verify selection 

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
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 

})


})