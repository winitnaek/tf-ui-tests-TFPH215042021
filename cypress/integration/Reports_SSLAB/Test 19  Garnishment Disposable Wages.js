///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Garnishment Disposable Wages", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
     // cy.visit(Cypress.env('sslaburl')) //Opens the URL
    //  cy.get("#appAreaSideMenu > li > a").click()
	  
	  //All Authority Code
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(17) > .d-block').click()// clicking the Garnishment Disposable Wages Report link
	  cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('ALL')
	  cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','ALL')
	  cy.get("[type='submit']").click()// Click view buttons
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Disposable Wages")// verifying screen title
	  cy.wait(3000)
	  

	  //00040000 AR Authority Code
	  cy.get('.text-center > .btn > .fas').click()
	  cy.get(".btn-link").contains("Garnishment Disposable Wages").click()// clicking the Garnishment Disposable Wages Report link
	  cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('00040000')
	  cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','00040000 - ARIZONA')
	 
	  
	  cy.wait(1000)
	  //507 Tax Type
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('507')
	  cy.wait(1000)
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','507 - CREDITOR GARNISHMENT')
	   cy.get("[type='submit']").click()// Click view buttons
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Disposable Wages")// verifying screen title
	  cy.get('.mt-2 > :nth-child(1) > .mr-1').should("have.text", "00040000")
	  cy.get(':nth-child(2) > .mr-1').should("have.text", "507")
	  
	  
	  cy.wait(3000)
      cy.get('.text-center > .btn > .fas').click()
	  
	  
	  
  });
});