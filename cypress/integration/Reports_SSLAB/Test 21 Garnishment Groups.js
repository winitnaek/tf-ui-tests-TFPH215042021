///<reference types="cypress"/>

describe("Report Module", function ()
{
  it("Garnishment Groups", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  
})
       //cy.visit(Cypress.env('sslaburl')) //Opens the URL
       //cy.get("#appAreaSideMenu > li > a").click()
	   
	   
      //Testing ALL Group Code
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .d-block').click()// clicking the Garnishment Groups Report link. Selector selected with Cypress playground.
	  cy.wait(1000)
	   cy.get("[type='submit']").click()// Click view buttons
	  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Groups")// verifying screen title
	  cy.wait(3000)
	  
	  // Testing RG1_Garnishmentdsds Group Name
	  
	  cy.get('.text-center > .btn > .fas').click()
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .d-block').click()// clicking the Garnishment Groups Report link
	  cy.get('.rbt-input-main').type('RG1')
      cy.wait(1000)	  
	  cy.get('.rbt-input-main').type('{downarrow}')
	  cy.get('.rbt-input-main').type('{enter}')
	  cy.get('.rbt-input-main').invoke('attr','value').should('contain','RG1_Garnishmentdsds- (RG1_GG)')
	  cy.wait(1000)
	  cy.get("[type='submit']").click()// Click view buttons
      cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
      cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Groups")// verifying screen title
	  cy.wait(1000)
	  cy.get("#pageContainer > div.mt-2.mb-3.row > span:nth-child(1) > span.mr-1.badge.badge-dark").should("have.text","RG1_GG")//verify Group code
	
	   
	  cy.wait(3000)
      cy.get('.text-center > .btn > .fas').click() 
	  
	
  });
});