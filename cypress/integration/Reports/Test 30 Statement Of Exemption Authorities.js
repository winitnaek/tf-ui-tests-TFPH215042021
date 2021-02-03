///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Statement Of Exemption Authorities", function()
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
	  
	
	  
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(11) > .d-block').click()// clicking the Statement Of Exemption Authorities Report link. Selector selected with cypress playground
	  
	  cy.wait(1000)
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Statement Of Exemption Authorities")
	  
	  cy.wait(3000)
	
  });
});