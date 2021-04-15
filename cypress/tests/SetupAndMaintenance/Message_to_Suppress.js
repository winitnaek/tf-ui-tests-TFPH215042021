///<reference types="cypress"/>

describe("Message to Suppress", function ()
{
 it("Batch Test", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Batch test', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
   //   cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .d-block').click({force: true})
	  cy.wait(1000)
	//  cy.get('.text-center > .btn > .fas').click()
	  
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
 it('Message Viewer', () => {
	cy.wait(1000)
    cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong').should( "have.text","Open Message Viewer for details")// verifying screen title
	cy.wait(1000)
	cy.get('strong > a').click()
	cy.wait(1000)
	cy.get("h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get("h1").should( "have.text","Message Viewer")// verifying screen title
	cy.wait(3000)
})
it('launch Message to Suppress Viewer from Config Page', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
        cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(3) > .fav-icon').click()	
	    cy.wait(1000)
	  cy.get(':nth-child(2) > :nth-child(3) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.text-center > .btn > .fas').click()
	 
})
it('launch Message to Suppress Viewer from Fav Menu', function () {
	  cy.wait(1000)
     cy.get('#jumpto-messageToSuppress').click() // selecting Custom Tax from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	  cy.get("#pageContainer > div > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div > div:nth-child(1) > h1").should( "have.text","Messages to Suppress")// verifying screen title
  })
it('Enter message number', () => {
		  
	  cy.wait(1000)
	  cy.get('input[id="0"]').clear()
	  cy.get('input[id="0"]').type('1005')
	 cy.get('.btn-warning').should('contain', 'Reset')
	 cy.get('.btn-success').should('contain', 'Save')
	 cy.get('.btn-success').click()
	 
  })
  
  it('launch Batch Test suppressed', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
   //   cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .d-block').click({force: true})
	  cy.wait(1000)
	//  cy.get('.text-center > .btn > .fas').click()
	  
})
it('Process File Suppressed', () => {
	
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
	cy.wait(1000)
	cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong').should( "have.text","Open Message Viewer for details")// verifying screen title
	cy.wait(1000)
	cy.get('strong > a').click()
	cy.wait(1000)
	cy.get("h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get("h1").should( "have.text","Message Viewer")// verifying screen title
	cy.wait(3000)
})
it('launch Message to Suppress Viewer from Set', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
   cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
 	
	 cy.wait(1000)
 	 cy.get(':nth-child(2) > :nth-child(3) > .d-block').click({force: true})
	cy.wait(1000)
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	  cy.get("#pageContainer > div > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div > div:nth-child(1) > h1").should( "have.text","Messages to Suppress")// verifying screen title
  })
it('Enter message number', () => {
		  
     cy.wait(1000)
	 // cy.get('input[id="0"]').clear()
	 cy.get('.btn-warning').should('contain', 'Reset')
	 cy.get('.btn-success').should('contain', 'Save')
	// cy.get('.btn-success').click()
	 cy.get('.btn-warning').click()
	 cy.get('.btn-success').click()
  })
    it('launch Batch Test suppressed', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
      cy.wait(1000)
   //   cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .d-block').click({force: true})
	  cy.wait(1000)
	//  cy.get('.text-center > .btn > .fas').click()
	  
})
it('Process File Suppressed', () => {
	
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
	cy.wait(1000)
	cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong', { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get('[style="margin-left: 0px; margin-top: 10px;"] > strong').should( "have.text","Open Message Viewer for details")// verifying screen title
	cy.wait(1000)
	cy.get('strong > a').click()
	cy.wait(1000)
	cy.get("h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
    cy.get("h1").should( "have.text","Message Viewer")// verifying screen title
	cy.wait(3000)
})
it('launch Message to Suppress Viewer from Setup', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	
	  cy.wait(1000)
    	  cy.get(':nth-child(2) > :nth-child(3) > .d-block').click({force: true})
	  cy.wait(1000)
	  cy.get('.text-center > .btn > .fas').click()
	 
})
})