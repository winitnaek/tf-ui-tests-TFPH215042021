///<reference types="cypress"/>

describe("Configuration and Taxes Employee Group", function ()
{
 it("Employee Groups", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Employee Groups from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Employee Groups from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-employeeGroup").click() // selecting Custom Tax from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Employee Groups")// verifying screen title
  
})
it('Add Employee Groups', function () {
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="id"]').type("001BSI")
	  cy.wait(1000)
	  cy.get('input[name="groupName"]').type("BSI Automation Test")
	//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	id
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	   cy.get("[type='submit']").click()  
	   	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	
})
it('Edit newly added Employee Groups', () => {
	  cy.wait(1000)
    //  cy.get("#jumpto-employeeGroup").click() // selecting Custom Tax from favorite menu
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Employee Groups")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('001BSI')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
      cy.get('[name = "groupName"]').invoke('attr','value').should('contain','BSI Automation Test')//Verify selection 
	 cy.wait(1000)
//Edit Data
	 cy.get('input[name="groupName"]').clear()
	cy.get('input[name="groupName"]').type("BSI Automation2")
     cy.wait(1000)
	 	//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	  cy.get("[type='submit']").click()  
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
it('Delete newly added Employee Groups', () => {
	  cy.wait(1000)
 //     cy.get("#jumpto-employeeGroup").click() // selecting Custom Tax from favorite menu	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Employee Groups")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)

    cy.get('[tabindex="5"]').type('001BSI')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="groupName"]').invoke('attr','value').should('contain','BSI Automation2')//Verify selection 
	  cy.wait(1000)	   
	


	 
//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  
//Verify Deletion
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Employee Groups")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('001BSI')
	 cy.wait(1000)	
     cy.get('[tabindex="8"]').should("have.text","No data to display")	 
})

it('Add Employee Groups', function () {
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="id"]').type("001BSI")
	  cy.wait(1000)
	  cy.get('input[name="groupName"]').type("BSI Automation Test")
	//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	id
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	   cy.get("[type='submit']").click()  
	   cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	
})
})
