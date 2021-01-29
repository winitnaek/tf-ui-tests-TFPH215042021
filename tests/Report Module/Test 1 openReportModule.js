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
	  cy.visit(Cypress.env('url')) //Opens the URL
	  
	  cy.get("#appAreaSideMenu > li > a").click()
	  
	  
	  

	
	   
	
  });
});