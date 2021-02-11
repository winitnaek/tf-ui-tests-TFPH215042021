///<reference types="cypress"/>

describe("Favorite Links What IF", function ()
{
  it("FavLink What-if test", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('launch Pension What-If Test from Config Page', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.
      cy.wait(1000)	  
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(5) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(5) > .d-block').click()
	  cy.wait(1000)
      cy.get('.text-center > .btn > .fas').click()
	  
})
it('launch Pension What-IF from Fav Menu', function () {
	  cy.wait(1000)
      cy.get('#jumpto-whatifEmp').click() // selecting Custom Tax from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","What-If Test")// verifying screen title
	  cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
	  
	  cy.wait(1000)
	 
cy.get('[columnindex="8"] > #edit-8 > .fas').click({force: true })	 
  
}) 

})