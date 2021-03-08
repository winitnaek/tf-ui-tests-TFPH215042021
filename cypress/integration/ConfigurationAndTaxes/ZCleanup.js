///<reference types="cypress"/>

describe("Configuration and Taxes Clean up", function ()
{
 it("Clean up tests", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('Cleanup Worksite', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.wait(1000)
      cy.get(':nth-child(6) > .d-block').click()
      cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
      cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  
})
it('Cleanup Garnishment Groups', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .d-block').click()
      cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
      cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})

it('Cleanup Custom Tax Codes', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
      cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})
it('Cleanup Employee Groups', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
   	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})
it('Cleanup Companies', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
   	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})

})