///<reference types="cypress"/>

describe("Configuration and Taxes, Tax Effective Rate Override", function ()
{
 it("Tax Effective Rate Override", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Tax Effective Rate Override', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(3) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(3) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Tax Effective Rate Override from Fav Menu', function () {
	  cy.wait(1000)
      cy.get('#jumpto-taxEffectiveDateOverrides').click() // selecting Payment Override from favorite menu
})
it('Verify Page Title', () => {
	cy.wait(1000)
	cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Tax Effective Date Overrides")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Tax Effective Date Overrides.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add an Tax Effective Rate Override
	
	 cy.wait(1000)
	 
	 cy.get(':nth-child(1) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("FEDERAL")
	 cy.wait(3000)
	 cy.get(':nth-child(1) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(2000)
	 cy.get(':nth-child(1) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(2) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type("001")
	 cy.wait(3000)
	 cy.get(':nth-child(2) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	 
	 cy.wait(1000)
     cy.get('[name="effecDate"]').type('2021-01-01')// enter end date
	 cy.wait(1000)
     cy.get('[name="startDate"]').type('2021-01-01')// enter end date
	 cy.wait(1000)
     cy.get('[name="endDate"]').type('2999-12-31')// enter end date
	 

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
	cy.get('.modal-footer > .btn').click()
})

it('Edit Original Added Code', () => {
	
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	 
	 cy.get(':nth-child(1) > .pl-0 > .input-group > .m-0 > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','00000000')//Verify selection
	  cy.wait(1000)
	 cy.get('[name="endDate"]').type('2999-11-30')// enter end date

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
	 cy.get('.modal-footer > .btn').click()
	
})
it('Delete Originally Added Code', () => {
	 cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	
	//Add an Payment Override
	 cy.wait(1000)
	cy.get('[name="endDate"]').invoke('attr','value').should('contain','2999-11-30')//Verify selection

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