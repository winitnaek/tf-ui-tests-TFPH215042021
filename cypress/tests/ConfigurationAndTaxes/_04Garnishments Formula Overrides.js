///<reference types="cypress"/>

describe("Configuration and Taxes Garnishment Formula Overrides", function ()
{
 it("Garnishment Formula Overrides", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Garnishment Formula Overrides', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > .fav-icon').click({force: true})
	  cy.wait(1000)
     cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Garnishment Formula Overrides from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-garnishmentFormulasOverride").click() // selecting Optional Rate Override from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Garnishment Formula Overrides")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Garnishments Formula Overrides.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {
	 
	 cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(2000)
	//Add a Garnishment Formula Overrides
	
	 cy.wait(1000)

	 
	 cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("00000")
	 cy.wait(2000)
	 cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	  cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("STUDENT")
	 cy.wait(2000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	 cy.wait(1000)
	 cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  
	 cy.wait(1000)
	 cy.get("input[name='startDate']").type('2021-01-12')// enter start date
	 cy.wait(1000)
     cy.get("input[name='endDate']").type('2021-12-31')// enter end date
	 cy.wait(1000)
	 
	 //Input Section
	 cy.get('[name="inputMethod"]').select('0- Use Flat Amount')
	 cy.wait(1000)
	 cy.get('[name="inputFlatAmt"]').clear()
	 cy.get('[name="inputFlatAmt"]').type('100.00')
	  cy.wait(1000)
	  cy.get('[name="percent"]').clear()
	  cy.get('[name="percent"]').type('0.5000000')
	 cy.wait(1000)
	 cy.get('[name="priority"]').clear()
	  cy.get('[name="priority"]').type('1')
	   cy.wait(1000)
	  //Exemption Section
	 cy.get('[name="exemptionMethod"]').select('0- No Exemptions')
	 cy.wait(1000)
	 cy.get('[name="exemptionFlatAmt"]').clear()
	 cy.get('[name="exemptionFlatAmt"]').type('10.00')
	  cy.wait(1000)
	  cy.get('[name="exemptionAmt"]').clear()
	  cy.get('[name="exemptionAmt"]').type('1.0')
	 cy.wait(1000)
	 cy.get('[name="exemptionDependentAmt"]').clear()
	  cy.get('[name="exemptionDependentAmt"]').type('0.0')
	  cy.wait(1000)
	 cy.get('[name="stmtOfExemptions"]').select('Required')
	 
	 cy.wait(1000)
	 //Calculation Section
	 	 cy.get('[name="calculationMethod"]').select('1- Take Calculation Percent')
	 cy.wait(1000)
	 cy.get('[name="calcPercent"]').clear()
	 cy.get('[name="calcPercent"]').type('0.500000')
	  cy.wait(1000)
	  cy.get('[name="calcAmt"]').clear()
	  cy.get('[name="calcAmt"]').type('10.00')
	 cy.wait(1000)
	 cy.get('[name="calcLimit"]').clear()
	  cy.get('[name="calcLimit"]').type('100.00')
	  
	  //Deduction Section
	 cy.get('[name="deductionMethod"]').select('0- No Deductions')
	 cy.wait(1000)
	 cy.get('[name="deductionFlatAmt"]').clear()
	 cy.get('[name="deductionFlatAmt"]').type('10.00')
	  cy.wait(1000)
	  cy.get('[name="deductionAmt"]').clear()
	  cy.get('[name="deductionAmt"]').type('10.00')
	 cy.wait(1000)
	 cy.get('[name="deductionDependentAmt"]').clear()
	  cy.get('[name="deductionDependentAmt"]').type('100.00')
	 
	 cy.wait(1000)

	 
	 //verify buttons
	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(1000)	  
      cy.get('.modal-footer > .btn').click()
	  
	 cy.wait(1000)
	




})
it('Edit Original Added Code', () => {
	cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	 cy.wait(1000)
     cy.get("input[name='startDate']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
	  cy.get('[name="calcAmt"]').invoke('attr','value').should('contain','10.00')//Verify selection 
     cy.wait(1000)
      cy.get('[name="calcAmt"]').clear()
	  cy.get('[name="calcAmt"]').type('50.00')
	 cy.wait(1000)
	
	 cy.get("[type='submit']").click()// click save button
	  cy.wait(1000)	  
      cy.get('.modal-footer > .btn').click()
	  
	 cy.wait(1000)

	
})

it('Delete Newly Added Code', () => {

	

	 cy.wait(1000)
	 cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	//Add an Optional Rate Override
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)
	 
     cy.wait(1000)
	  cy.get('[name="calcAmt"]').invoke('attr','value').should('contain','50.00')//Verify selection 

	 cy.wait(1000)
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	  cy.wait(1000)
	  
      cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click({force: true})
	 cy.wait(1000)
	 

})


})