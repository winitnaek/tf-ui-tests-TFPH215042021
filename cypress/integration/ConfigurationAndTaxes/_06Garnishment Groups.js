///<reference types="cypress"/>

describe("Configuration and Taxes Garnishment Group", function ()
{
 it("Garnishment Group", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Garnishment Groups from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Tax Codes from Fav Menu', function () {
	  cy.wait(1000)
      cy.get('#jumpto-garnishmentGroup').click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Groups")// verifying screen title
	  cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
  
})

it('Add Company', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get('#addNew > a > .fas').click()
	  cy.wait(1000)	  
	  cy.get('input[name="code"]').type("0001BSI")	  
	  cy.wait(1000)	  
	  cy.get('input[name="name"]').type("BSI Automation Test")	  
	  cy.wait(1000)	  
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button
     // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	  cy.get(".btn-success").click()
	  cy.wait(1000)	
      cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
      cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})

it('Edit newly added Company', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Groups")// verifying screen title
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 

//verify data saved	 
	   cy.get('input[name="code"]').invoke('attr','value').should('contain',('0001BSI'))//Verify selection 
	  cy.wait(1000)	   
	  cy.get('input[name="name"]').invoke('attr','value').should('contain',"BSI Automation Test")//Verify selection 	  
	  cy.wait(1000)	  	
// Edit data
	 cy.get('input[name="name"]').clear()
	 cy.get('input[name="name"]').type("BSI Automation2")
	 cy.wait(1000)
    // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	
	 cy.wait(1000)
	 //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
   cy.get("[type='submit']").click()
	// cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
     cy.wait(1000)	
    cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('BSI Automation Test')
	 cy.wait(1000)
	 cy.get('[tabindex="8"]').should("have.text","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)


 }) 

it('Delete newly added Garnishment Group', () => {
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars	
	 cy.wait(1000)
     cy.get('input[name="name"]').invoke('attr','value').should('contain',"BSI Automation2")//Verify selection 
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
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)

})
it('ReAdd Group', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get('#addNew > a > .fas').click()
	  cy.wait(1000)	  
	  cy.get('input[name="code"]').type("0001BSI")	  
	  cy.wait(1000)	  
	  cy.get('input[name="name"]').type("BSI Automation Test")	  
	  cy.wait(1000)	  
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button
     // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	  cy.get(".btn-success").click()
	  cy.wait(1000)	
     cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')	
	 cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})


})