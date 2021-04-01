///<reference types="cypress"/>

describe("Custom Data Restore", function ()
{
 it("Custom Data Restore", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Custom Data Restore', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.btn > .fas').click()
	  
})

it('launch Custom Data Restore from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customdataRestore").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	  cy.get("#pageContainer > div > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div > div:nth-child(1) > h1").should( "have.text","Custom Data Restore")// verifying screen title
  
})

it('Process File', () => {
	
	  cy.wait(3000)	  
	 cy.get('.form-control-file').attachFile('vinitBR_1617043689718_VINIT.xml')
	  cy.wait(1000)
	  cy.get('[style="display: flex; margin-top: -3px; margin-left: -7px; align-items: center;"] > .btn').click({force: true})
	 
	  
})
it('Select Data Set', () => {
	
	  cy.wait(3000)	  
	 cy.get('#delData').click()
	  cy.wait(1000)
	  cy.get('#exitDataset').select('DEBORAH')
	  cy.wait(1000)
	  cy.get('#process').click({force: true})
	 
	  
})
})