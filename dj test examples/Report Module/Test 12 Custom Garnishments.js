///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Custom Garnishments", function()
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
	  
	
	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(10) > .d-block').click()// clicking the Custom Garnishments Report link. Selector selected with Cypress Playground.
	  cy.wait(1000)
	   cy.get("[type='submit']").click()// Click view buttons
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishments")// verifying screen title
	  cy.wait(3000)
	  
	  
	  
      cy.get(".btn-link").click()
	  cy.wait(1000)  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(10) > .d-block').click()// clicking the Custom Garnishments Report link
	  cy.wait(1000)
	  cy.get('.rbt-input-main').type("RG1")
	  cy.wait(1000)
	  cy.get('.rbt-input-main').type('{downarrow}')
	  cy.get('.rbt-input-main').type('{enter}')
	  cy.get(1000)
	  cy.get('.rbt-input-main').invoke('attr','value').should('contain','RG1_CustomGarnishment') //Verify selection
	  cy.wait(1000)
	  cy.get("[type='submit']").click()// Click view buttons
	 
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishments")// verifying screen title
	  cy.get('.mb-1 > .mr-1').should('have.text','RG1_CG')//verify select Company code
	  
	  
	  
  });
});