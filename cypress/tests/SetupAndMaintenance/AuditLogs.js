///<reference types="cypress"/>

describe("Configuration and Taxes Audit Login Viewer", function ()
{
 it("Companies", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Audit Log Viewer from Config Page', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
        cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	    cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.text-center > .btn > .fas').click()
	  
})

it('launch Audit Log Viewer from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-auditLogViewer").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Audit Log Viewer")// verifying screen title
  
})

it('Verify Delete All Button', () => {
	
	  cy.wait(3000)	  
	  cy.get('#deleteAll').click()
	  cy.wait(1000)
	  cy.get('.modal-title').should('have.text', 'Warning!')
	  cy.wait(1000)
	  cy.get('.btn-secondary').click()
	  cy.wait(1000)
	    cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Audit Log Viewer")// verifying screen title
   
	  
})
})