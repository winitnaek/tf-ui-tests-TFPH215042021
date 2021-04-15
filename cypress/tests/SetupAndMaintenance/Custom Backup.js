///<reference types="cypress"/>

describe("Custom Data Backup", function ()
{
 it("Custom Data Backup", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Custom Data Backup', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.text-center > .btn > .fas').click()
	  
})

it('launch Custom Data Backup from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-custombackupRestore").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	  cy.get('h1', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get('h1').should( "have.text","Custom Data Backup")// verifying screen title
	  cy.wait(1000)
	  cy.get('#customdataBackup').click({force: true})
	  
  
})



it('Select Data Set', () => {
	
	  cy.wait(3000)	  
	
	  cy.get('#exitDataset').select('VINIT')
	  cy.wait(1000)
	  cy.get(':nth-child(2) > .justify-content-center > #customdataBackup').click({force: true})
	 
	  
})
it('View PDF ', () => {
	  cy.get('#viewPdf > .fa', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get('#viewPdf > .fa').click()
	  cy.wait(10000)
	  cy.get('.modal-footer > .btn').click()
})
it('Download Backup File ', () => {
	
	  cy.wait(3000)	  
	  cy.get('#downloadResult > .fa').click()
	  cy.wait(10000)
	  cy.get('.close > span').click()
})
})