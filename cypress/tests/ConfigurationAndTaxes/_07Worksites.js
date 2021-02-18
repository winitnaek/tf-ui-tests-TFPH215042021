///<reference types="cypress"/>

describe("Configuration and Taxes Companies", function ()
{
 it("Worksites", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Worksites from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(6) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(6) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.fas.fa-caret-down').click()

	  
})

it('launch Custom Tax Codes from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-worksites").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Worksites")// verifying screen title
  
})

it('Add Worksites', () => {
	
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true })
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="location"]').type("GA-000001")	  
	  cy.wait(1000)	  
	  cy.get('input[name="street1"]').type("155 Technology Pkwy")	  
	  cy.wait(1000)	  
	  cy.get('input[name="street2"]').type("Suite A")	  
	  cy.wait(1000)
	  cy.get('input[name="city"]').type("Norcross")
	  cy.wait(1000)
	  cy.get('input[name="county"]').type("Gwinnett")
	  cy.wait(1000)
	  cy.get('[name="state"]').select("GA - GEORGIA")
	  cy.wait(1000)
	 cy.get('input[name="zip"]').type('30092')
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	   cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
//edit 0001BSI
 it('Edit newly added Company', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Worksites")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').type('Suite A')
	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  
	 cy.get('input[name="street2"]').clear()
	 cy.get('input[name="street2"]').type("Suite B")
	 cy.wait(1000)
	 cy.get(".btn-success").click()
	 cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Worksites")// verifying screen title
	 cy.wait(1000)
     cy.get('[tabindex="7"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').type('Suite A')
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').type('{enter}')
	 cy.get('[tabindex="13"]').should("have.text","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').clear()
	 cy.get('[tabindex="7"]').type('Suite B')
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').type('{enter}')
	 cy.wait(1000)	 
  	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="street2"]').invoke('attr','value').should('contain','Suite B')//Verify selection 
	  cy.wait(1000)	   

//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	   cy.get("[type='submit']").click()
	   cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	   cy.wait(1000)
	 cy.get('[tabindex="7"]').clear()
 }) 
 
 
it('Delete newly added Company', () => {	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Worksites")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').clear()
	 cy.wait(1000)

     cy.get('[tabindex="7"]').clear()
	 cy.get('[tabindex="7"]').type('Suite B')
	 cy.wait(1000)
	 cy.get('[tabindex="7"]').type('{enter}')
	 cy.wait(1000)	 
  	 cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="street2"]').invoke('attr','value').should('contain','Suite B')//Verify selection 
	
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
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Worksites")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)	 
      cy.get('[tabindex="7"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0002BSI')
	 cy.wait(1000)	
     cy.get('[tabindex="13"]').should("have.text","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 
})
it('reAdd Worksites', () => {
	
	
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="location"]').type("GA-000001")	  
	  cy.wait(1000)	  
	  cy.get('input[name="street1"]').type("155 Technology Pkwy")	  
	  cy.wait(1000)	  
	  cy.get('input[name="street2"]').type("Suite A")	  
	  cy.wait(1000)
	  cy.get('input[name="city"]').type("Norcross")
	  cy.wait(1000)
	  cy.get('input[name="county"]').type("Gwinnett")
	  cy.wait(1000)
	  cy.get('[name="state"]').select("GA - GEORGIA")
	  cy.wait(1000)
	 cy.get('input[name="zip"]').type('30092')
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
})