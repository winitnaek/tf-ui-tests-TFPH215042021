///<reference types="cypress"/>
//<reference types="cypress"/>

  it("Garnishment Groups", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})
it('fails to visit website 1', ()=> {
	 cy.visit(Cypress.env('url')) //Opens the URL
     cy.get("#appAreaSideMenu > li > a").click() // Clicking on Configuration and Taxes
})
  
 it('fails to visit website 2', ()=> {
	
	  cy.get('.d-inline-block').click() //Clicking on the arrow next Reporting next to Search box
	  cy.get("#jumpto-whatifEmp").click() // selecting What-if from favorite menu
	  
  
}) 