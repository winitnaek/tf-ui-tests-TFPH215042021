///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Open Report Module", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
 
})
	  cy.visit(Cypress.env('sslaburl')) //Opens the URL
	  
	  //cy.get("#appAreaSideMenu > li > a").click()
	  
	  //Login
	  
	  cy.get("#inputUsername ").clear()
	  cy.get("#inputUsername ").type("vinit")
	  cy.wait(1000)
	  cy.get("#inputPassword ").clear()
	  cy.get("#inputPassword ").type("bsi")
	  cy.wait(1000)
	   cy.get("[type='submit']").click()
  });
  it('Start Reports', () => {
   cy.get(':nth-child(2) > .text-light',{ timeout: 30000 }).should('be.visible' )
	  
  cy.get(':nth-child(2) > #renderTFHome > .fa').click()
  cy.wait(1000)
  cy.get(".d-inline-block", { timeout: 60000 }).should('be.visible'); //Waiting 30 secs to have screen to load
 // cy.get(".d-inline-block").should( "have.text","Reports")
	
    cy.wait(5000)
	
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(8) > .d-block').click()// clicking the Companies Report link. Selector selected with Cypress Playground
	  
	  cy.wait(5000)
	  
	  
	   cy.get("[type='submit']").click()// Click view buttons
 
   cy.wait(5000)
   
   cy.get('.text-center > .btn > .fas').click()
 
  })
});