///<reference types="cypress"/>

describe("Configuration and Taxes Tax Locator", function ()
{
 it("Tax Locator", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Tax Locator', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
     cy.get(':nth-child(3) > :nth-child(1) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	
	
	 cy.wait(1000)
	 cy.get('.text-center > .btn > .fas').click()
	  
})

it('launch Tax Locator from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-taxLocator").click() // selecting Disposable Override from favorite menu 
	
	 cy.wait(1000)
	  
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","TaxLocator")// verifying screen title
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
      cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	  
      cy.get('[name="employeeCode"]').type('_001BSI')
	  cy.wait(1000)	  
      cy.get('[name="employeeClass"]').select('Regular Employee')
	  cy.wait(1000)	  
      cy.get('[name="eicCode"]').select('Not Applicable')
	  cy.wait(1000)	  
      cy.get('[name="taxFilter"]').select('Federal, State and Locals')
	   cy.wait(1000)	  
      cy.get('[name="privateSectorRetirementPlanIndicator"]').select('No PS Member')
	  cy.wait(1000)	  
      cy.get('[name="dataVersion"]').select('Use Version 1')
	  cy.wait(1000)	  
      cy.get('[name="selectedState"]').select('GEORGIA')
	  cy.wait(1000)	  
      cy.get('[name="selectedStateIndicator"]').select('Return UI in all states')
      cy.wait(1000)	  
      cy.get('[name="fedWthForEeLive"]').select('Return Federal Withholding')
	  cy.wait(1000)	  
      cy.get('[name="companyCode"]').select('BSI Automation1- (0001BSI)')
	  cy.wait(1000)	  
      cy.get('[name="paidBy"]').select('Employee Only')
	   cy.wait(1000)	  
      cy.get('[name="railRoadCode"]').select('Not RailRoad Employee')
	   cy.wait(1000)	  
      cy.get('[name="grossAmount"]').type('75000.00')
	    cy.wait(1000)	  
      cy.get('[name="returnAllStates"]').select('Normal')
	  cy.wait(1000)	  
      cy.get('[name="residentCountry"]').select('USA') 
	    cy.wait(1000)	  
      cy.get('[name="employmentType"]').select('Active Employee') 
	  	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
it('Manage Live Locations Code', () => {
	cy.wait(1000)
	cy.get('[columnindex="7"] > #edit-0 > .fas').click({force: true})
	 cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Manage Locations")// veManage Locationsrifying screen title
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
	    cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	
	  cy.get('[name="state"]').select('GEORGIA')
	  cy.wait(1000)	  
      cy.get('[name="county"]').type('Dekalb')
	  cy.wait(1000)	  
      cy.get('[name="city"]').type('Decatur')
	  cy.wait(1000)	
	  cy.get('[name="liveWork"]').select('Live')
	  cy.wait(1000)	  
      cy.get('[name="zip"]').type('30032')
	  cy.wait(1000)	  
      cy.get('[name="street1"]').type('3342 York Place')
	  cy.wait(1000)	  
	  cy.get('[name="eicCode"]').select('Not Applicable')
	  cy.wait(1000)
	  cy.wait
	  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  
})	
it('Manage Work Locations Code', () => {
	
	 cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Manage Locations")// veManage Locationsrifying screen title
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
	    cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(1000)	
	  cy.get('[name="state"]').select('GEORGIA')
	  cy.wait(1000)	  
      cy.get('[name="county"]').type('Gwinnett')
	  cy.wait(1000)	  
      cy.get('[name="city"]').type('Norcross')
	  cy.wait(1000)	
	  cy.get('[name="liveWork"]').select('Work')
	  cy.wait(1000)	  
      cy.get('[name="zip"]').type('30092')
	  cy.wait(1000)	  
      cy.get('[name="street1"]').type('155 Technology Pkwy')
	  cy.wait(1000)	  
	  cy.get('[name="eicCode"]').select('Not Applicable')
	  cy.wait(1000)
	  cy.wait
	  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
      cy.wait(1000)
      cy.get('#runLocatorService').click(0)
	  cy.wait(5000)
	//  cy.get('#body > div:nth-child(155) > div > div.modal.fade.show > div > div > div.modal-header > button.close').click({force: true})
	cy.get('.close > span').click({force: true})
})
})