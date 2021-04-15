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
	//remove Optional/Unemployment Rate Override Backup from Fav links		
	    cy.get(':nth-child(6) > .fav-icon').click()	
	  cy.wait(1000)
	  //remove Optional/Unemployment Rate Override Backup from Fav links		
	   cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  cy.wait(1000)
	   //remove Message to Suppress from Fav links		
	   cy.get(':nth-child(2) > :nth-child(3) > .fav-icon').click()		
	  cy.wait(1000)
	    //remove DataSets from Fav links		
	  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .fav-icon').click()
	  cy.wait(1000)
	   //remove Login and Permission from Fav links		
	   cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
	    //remove Custom Restore from Fav links		
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .fav-icon').click()	
	  cy.wait(1000)
	      //remove Custom Restore Status from Fav links		
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > .fav-icon').click()	
	  cy.wait(1000)
	  //remove Custom Backup from Fav links		
	    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .fav-icon').click()		
	  cy.wait(1000)
	   //remove Audit Viewer from Fav links		
        cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .fav-icon').click()	
	  
})
})