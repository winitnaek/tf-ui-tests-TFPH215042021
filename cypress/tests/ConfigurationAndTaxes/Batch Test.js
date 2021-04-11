///<reference types="cypress"/>

describe("Batch Test", function ()
{
 it("Batch Test", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Batch Test', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.text-center > .btn > .fas').click()
	  
})

it('launch Optional/Unemployment Rate Override Restore from Fav Menu', function () {
	  cy.wait(1000)
      cy.get('#jumpto-batchTest').click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	  cy.get("#pageContainer > div > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div > div:nth-child(1) > h1").should( "have.text","Batch Test")// verifying screen title
  
})

it('Process File', () => {
	
	cy.get('.active').click()
	cy.wait(1000)
	cy.get('#whatifCheckbox').click()
	cy.wait(1000)
	cy.get('#extendedCheckbox').click()
	cy.wait(1000)
	cy.get('#summaryCheckbox').click()
	cy.wait(3000)	  
	cy.get('.form-control-file').attachFile('MSG1005.tst')
	cy.wait(1000)
	cy.get('[style="display: flex; margin-left: -15px; margin-top: 10px; align-items: flex-start;"] > .btn > .fas').click({force: true})
	  
})
it('Download Result', () => {
	cy.wait(1000)
    cy.get(":nth-child(1) > #downloadResult > .btn", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	cy.get(':nth-child(1) > #downloadResult > .btn').click()
	cy.wait(5000)
	  
})
 it('View Result', () => {
	cy.wait(1000)
    cy.get(':nth-child(1) > #viewPdf > .btn').click()
	cy.wait(10000)
	cy.get('.modal-footer > .btn').click()
	cy.wait(1000)
	  
})
 it('Download Summary', () => {
	cy.wait(1000)
    cy.get(':nth-child(2) > #downloadResult > .btn').click()
	cy.wait(5000)
})
 it('View Result', () => {
	cy.wait(1000)
    cy.get(':nth-child(2) > #viewPdf > .btn').click()
	cy.wait(10000)
	cy.get('.modal-footer > .btn').click()
	cy.wait(1000)
})
 it('Download Err Report', () => {
	cy.wait(1000)
    cy.get(':nth-child(3) > #downloadResult > .btn').click()
	cy.wait(5000)
})
 it('View Err Report', () => {
	cy.wait(1000)
    cy.get(':nth-child(3) > #viewPdf > .btn').click()
	cy.wait(10000)
	cy.get('.modal-footer > .btn').click()
	cy.wait(1000)
})
 it('Message Viewer', () => {
	cy.wait(1000)
    cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong').should( "have.text","Open Message Viewer for details")// verifying screen title
	cy.wait(1000)
	cy.get('strong > a').click()
	cy.wait(1000)
	cy.get("h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get("h1").should( "have.text","Message Viewer")// verifying screen title
	cy.wait(5000)
})
})