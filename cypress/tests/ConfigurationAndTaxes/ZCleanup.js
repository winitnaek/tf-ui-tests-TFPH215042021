///<reference types="cypress"/>

describe("Configuration and Taxes Clean up", function ()
{
 it("Clean up tests", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('Cleanup Worksite', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.wait(1000)
      cy.get(':nth-child(6) > .d-block').click()
      cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
      cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	  
})
it('Cleanup Garnishment Groups', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .d-block').click()
      cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
      cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})


it('Cleanup Custom Tax Codes', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
      cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})
it('Cleanup Employee Groups', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
   	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})
it('Cleanup Companies', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
   	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .d-block').click()
	  cy.wait(1000)
	  cy.get('#edit-0 > .fas').click({ force: true }) // clicking on search element. Using until I can figure out how to move scrollbars
	  cy.wait(1000)	  	 
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})
it('Cleanup Favorites Links', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.
	  // remove worksites from fav links
      cy.get(':nth-child(6) > .fav-icon').click({force: true})
	  cy.wait(1000)	
	  // remover what-if from favorites links	  
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(5) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)	
      //remove unemployment Override from Fav links		
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(5) > .fav-icon').click({force: true})
	  cy.wait(1000)		
	  //remove Tax Effective Rate Override from Fav links
	   cy.get(':nth-child(2) > :nth-child(3) > :nth-child(4) > .fav-icon').click({force: true})
	   cy.wait(1000)
	  // remover tax locator from favorites links	
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	    cy.wait(1000)
       //remove Pension What-If from Fav links		
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)
	    //remove optional rate Override from Fav links		
	  cy.get(':nth-child(6) > .fav-icon').click({force: true})
	  cy.wait(1000)
	   //remove Group Override from Fav links	
	  	  cy.get(':nth-child(1) > :nth-child(2) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
	     //remove Garnishment Groups from Fav links		
       cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)
	   //remove Garnishment Formula Override from Fav links		
     cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
	     //remove Employee Groups from Fav links		
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
	       //remove Disposable Overrides from Fav links		
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
	     //remove Custom Tax Codes from Fav links		
	  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
	 //remove Custom Payment Exemption from Fav links		
	  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
	  //remove Custom Nexus Data from Fav links		
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
	    //remove Custom Garnishment Formula from Fav links		
	  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
	   //remove Custom Garnishment from Fav links		
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
	    //remove Custom Formulas from Fav links		
	  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
	      //remove Companies from Fav links		
	 	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .fav-icon').click({force: true})
	  cy.wait(1000)
	  //remove Batch Test from Fav links		
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	  
})
})