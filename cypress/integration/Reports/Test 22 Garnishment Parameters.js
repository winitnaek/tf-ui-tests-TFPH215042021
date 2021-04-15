///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Garnishment Parameters", function()
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
	  
	
	  
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .d-block').click()// clicking the Garnishment Parameters Report link. Selector selected with Cypress Playground
	  
	  cy.wait(1000)
	  
	  
	   cy.get("[type='submit']").click()// Click view buttons
	   
	
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Parameters")// verifying screen title
	
	  cy.wait(3000)
	  
	  cy.get('.btn > .fas').click()
	   cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .d-block').click()// clicking the Garnishment Parameters Report link
	  cy.wait(1000)
	  //test Authority Code
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('00130000')
	  cy.wait(1000)
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')	  
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','00130000 - GEORGIA')
      //test Tax Type
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('600')
	  cy.wait(1000)
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.wait(1000)
	  cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','600 - TOTAL SUPPORT')
	  cy.get("[type='submit']").click()// Click view buttons
	  cy.wait(1000)
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Parameters")// verifying screen title
	  
	  cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","00130000")//verify Authority code
	  cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(2) > span.mr-1.badge.badge-dark").should("have.text","600")//verify Tax Type
		
	  cy.wait(3000)	
	  
  });
});