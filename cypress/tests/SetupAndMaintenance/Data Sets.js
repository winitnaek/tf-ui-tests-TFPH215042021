///<reference types="cypress"/>

describe("Data Sets", function ()
{
 it("Data Sets", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Data Sets', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
     cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.text-center > .btn > .fas').click()
	  
})

it('launch Custom Data Backup from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-dataSets").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	  cy.get('h1', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get('h1').should( "have.text","Data Sets")// verifying screen title
       cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All  
	  cy.wait(1000)
	  
  
})



it('Add Data Set', () => {
	
	  cy.wait(3000)	  
	
	  cy.get('#addNew > a > .fas').click()
	  cy.wait(1000)
	  cy.get('#dataset').type("_001BSI")
	  cy.wait(1000)
	  cy.get('#descript').type('_BSI Automation')  	

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
it('Edit Data Sets ', () => {
	cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#dataset').invoke('attr','value').should('contains','_001BSI')//Verify selection 
     cy.wait(1000)
	 cy.get('#descript').invoke('attr','value').should('contains','_BSI Automation') 	
      cy.wait(1000)
	  cy.get('#descript').clear()
      cy.wait(1000)
	  cy.get('#descript').type('_BSI Automation2') 	  
  
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
	 cy.get('.btn > .fas').click()
	 cy.wait(1000)
})
it('Delete Data Sets ', () => {
	cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#dataset').invoke('attr','value').should('contains','_001BSI')//Verify selection 
     cy.wait(1000)
	 cy.get('#descript').invoke('attr','value').should('contains','_BSI Automation2') 	
      cy.wait(1000) 	  
  
	  //verify buttons
  	 cy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 cy.wait(1000)
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
   	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
     cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
})
})