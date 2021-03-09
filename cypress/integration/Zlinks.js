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
	  // remover tax locator from favorites links	
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	    cy.wait(1000)
       //remove Pension What-If from Fav links		
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)
	    //remove optional rate Override from Fav links		
	  cy.get(':nth-child(6) > .fav-icon').click({force: true})
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
	  
})

})