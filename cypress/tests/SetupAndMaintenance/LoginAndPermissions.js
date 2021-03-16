///<reference types="cypress"/>

describe("Configuration and Taxes Companies", function ()
{
 it("Companies", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Companies from Config Page', function () {
	  cy.visit(Cypress.env('setupmaintenanceurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Tax Codes from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-logins").click() // selecting Custom Tax from favorite menu
})

it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Logins")// verifying screen title
  
})

it('Add Company', () => {
	
	 
	  
	  cy.wait(1000)
	  cy.get("#addNew > a > i").click()
	  cy.wait(3000)	  
	  cy.get('input[name="loginName"]').type("_0001BSI")	  
	  cy.wait(1000)	  
	  cy.get('input[name="password"]').type("bsi")	  
	  cy.wait(1000)	  
	  cy.get('input[name="confirmPassword"]').type("bsi")	  
	  cy.wait(1000)	  
	  cy.get('[name="manageLogins"]').select('Yes')	  
	  cy.wait(1000)
	  cy.get('[name="manageDatasets"]').select('Yes')
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	  cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
})
//edit 0001BSI
it('Incorrect Password', () => {
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Logins")// verifying screen title
	 cy.wait(1000)
	 cy.get('[columnindex="3"] > #edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)	  
	 cy.get('input[name="loginName"]').invoke('attr','value').should('contains','_0001BSI')
	 cy.wait(1000)	 
	 cy.get('input[name="password"]').type("bsi")	  
	  cy.wait(1000)	  
	  cy.get('input[name="confirmPassword"]').type("Bsi")	
	 
	 cy.get(".btn-success").click()
	 cy.wait(1000)
	 cy.get('.modal-title',{ timeout: 30000 }).should('be.visible')
	 cy.wait(1000) 
	// cy.get('body > div:nth-child(53) > div > div.modal.fade.show > div > div > div.modal-body').invoke('attr','value').should('contains','The provided passwords do not match.')
	 cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Logins")// verifying screen title
 }) 
 it('Manage Permissions', () => {

	 cy.wait(1000)
	 cy.get('[columnindex="4"] > #edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)
	 cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	 cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Permissions")// verifying screen title
	 cy.wait(1000)	  
	 cy.get('#checkAll').click()
	 cy.wait(1000)	 
	 cy.get('#resetDefaultLogin > .fas').click()	 
	   cy.wait(1000)	  
	 cy.get('#checkAll').click()
	  cy.wait(1000)
	  cy.get('#saveCheck').click()
 	 cy.wait(1000)	 
	 cy.get('#resetDefaultLogin > .fas').click()
	    cy.wait(1000)	  
	 cy.get('#uncheckAll').click()
	  cy.wait(1000)
	  cy.get('.justify-content-center > :nth-child(4)').click({ multiple: true, force: true })
	  cy.wait(10000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  cy.get('#filter > .fas').click()

 }) 
 
})