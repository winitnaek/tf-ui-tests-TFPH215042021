///<reference types="cypress"/>

describe("Favorite Links", function ()
{
 it("FavLink Companies", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Companies from Fav', function () {
	  cy.visit(Cypress.env('url')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // Clicking on Module	  
	  cy.get(".fa-caret-down").click() //Clicking on the arrow next Module next to Search box	 
	  cy.get("#jumpto-company").click() // selecting Companies from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
  
})

it('Add Company', () => {
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
	  cy.get('input[name="company"]').type("Honeywell")	  
	  cy.wait(1000)	  
	  cy.get('input[name="companyName"]').type("AerospaceX")	  
	  cy.wait(1000)	  
	  cy.get('input[name="fein"]').type("012345678")	  
	  cy.wait(1000)
	  cy.get('input[name="courtesy"]').click()
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
})
//edit HONEYWELL
 it('Edit newly added Company', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('Honeywell')
	 cy.wait(1000)
	 cy.get('#edit-15 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  
	 cy.get('input[name="companyName"]').clear()
	 cy.get('input[name="companyName"]').type("AerospaceB")
	 cy.wait(1000)
	 cy.get(".btn-success").click()
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('AerospaceX')
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('{enter}')
	 cy.get('[tabindex="10"]').should("have.text","No data to display")
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.get('[tabindex="6"]').type('AerospaceB')
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('{enter}')
	 cy.wait(1000)	 
  	 cy.get('#edit-15 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="company"]').invoke('attr','value').should('contain','HONEYWELL')//Verify selection 
	  cy.wait(1000)	   
	  cy.get('input[name="companyName"]').invoke('attr','value').should('contain','AerospaceB')//Verify selection 	  
	  cy.wait(1000)	  	
	  cy.get('input[name="fein"]').invoke('attr','value').should('contain','012345678')//Verify selection 	
	  cy.wait(1000)

//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	   cy.get("[type='submit']").click()
 }) 
 
 
it('Delete newly added Company', () => {	
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)

     cy.get('[tabindex="6"]').clear()
	 cy.get('[tabindex="6"]').type('AerospaceB')
	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('{enter}')
	 cy.wait(1000)	 
  	 cy.get('#edit-15 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  	 
	 
//verify data saved	 
	   cy.get('input[name="company"]').invoke('attr','value').should('contain','HONEYWELL')//Verify selection 
	  cy.wait(1000)	   
	  cy.get('input[name="companyName"]').invoke('attr','value').should('contain','AerospaceB')//Verify selection 	  
	  cy.wait(1000)	  	
	  cy.get('input[name="fein"]').invoke('attr','value').should('contain','012345678')//Verify selection 	
	  cy.wait(1000)


	 
//verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	  cy.get(".btn-danger").click()
	  
//Verify Deletion
     cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Companies")// verifying screen title
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)	 
      cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('Honeywell')
	 cy.wait(1000)	
     cy.get('[tabindex="10"]').should("have.text","No data to display")	 
})
})