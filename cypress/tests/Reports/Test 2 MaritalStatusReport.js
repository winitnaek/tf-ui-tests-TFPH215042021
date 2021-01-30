///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Marital Status Report", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
      cy.visit(Cypress.env('reportsurl')) //Opens the URL

	  
	  cy.get("#appAreaSideMenu > li > a").click()
	  
	
	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .d-block').click()// clicking the marital status report link. Got Selector from Cypress Playground
	  
	  cy.get("input[name='startDate']").type('2020-11-13')
	  
	  cy.get(".btn-success").click()// click Generate File
	  
	  cy.wait(3000)
	  
	  cy.get("#exportToCsv > i").click()
	  
	  cy.get('h1',{ timeout: 40000 }).should('be.visible'); //Waiting 30 secs to have screen to load)

	  cy.get('h1').should( "have.text","Marital Status Report") 

	  

  });
});