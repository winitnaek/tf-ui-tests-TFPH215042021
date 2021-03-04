///<reference types="cypress"/>

describe("Configuration and Taxes Custom Garnishments Formulas", function ()
{
 it("Custom Garnishments Formulas", function()
  {
	  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
})

it('launch Custom Garnishments Formulas ', function () {
	  cy.visit(Cypress.env('configntaxesurl')) //Opens the URL	 
	  cy.get("#appAreaSideMenu > li > a").click() // using force:true to click the Hidden fav icon.	  
	  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3) > .fav-icon').click({force: true})
	  cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Custom Garnishments formulas from Fav Menu', function () {
	  cy.wait(1000)
      cy.get("#jumpto-customGarnishmentFormulas").click() // selecting Custom Tax from favorite menu
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Custom Garnishment Formulas")// verifying screen title
	  cy.get('p').should('have.text','Create and manage Custom Garnishments Formulas.')//verifying the 
      cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
})
it('Add Tax Code', () => {

	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(1000)
	//Enter Garnishment Formulas 
	cy.get('.rbt-input-main').type('00_1BSI')
	cy.wait(1000)
	cy.get('.rbt-input-main').type('{downarrow}')// select the downarrow 
	cy.wait(1000)
	cy.get('.rbt-input-main').type('{enter}') // selecting the enter key. ending of selecting from dropdown
	cy.wait(1000)
	 cy.wait(1000)
	 cy.wait(1000)
     cy.get("input[name='startDate']").type('2021-01-12')// enter start date
	 cy.wait(1000)
     cy.get("input[name='endDate']").type('2022-12-31')// enter end date
	 //Input Section
	 cy.wait(1000)
	 cy.get('[name="inputMethod"]').select('4- Use Gross Wages API Amount Reduced by Higher Priority Garnishments')
     cy.wait(1000)
	 cy.get("input[name='inputFlatAmount']").clear()
	 cy.get("input[name='inputFlatAmount']").type("7.000000000")
	 cy.wait(1000)
	 cy.get("input[name='inputPercent']").clear()
	 cy.get("input[name='inputPercent']").type("7.000000000")
	 cy.wait(1000)
     cy.get("input[name='inputPriority']").clear()
     cy.get("input[name='inputPriority']").type("1")
	 cy.wait(1000)
	 //Exemption
	  cy.get('[name="exemptionMethod"]').select('2- Subtract Exemption Amount')
	  cy.wait(1000)
    cy.get("input[name='exemptionFlatAmount']").clear()
	cy.get("input[name='exemptionFlatAmount']").type("7.00")//enter minimum wage
	 cy.wait(1000)
	 cy.get("input[name='exemptionAmount']").clear()
	cy.get("input[name='exemptionAmount']").type("7.00")//enter maximum wage
	 cy.wait(1000)
	cy.get("input[name='exemptionDependentAmount']").clear()
    cy.get("input[name='exemptionDependentAmount']").type("7.00")//enter maximum tax
	 cy.wait(1000)
	  cy.get('[name="stmtOfException"]').select('Required')
	  //Calculation Section
	 cy.get('[name="calculationMethod"]').select('2- Take Greater of Calculation Amount or Calculation Percent')
	 cy.wait(1000)
	 cy.get("input[name='calculationPercent']").clear()
	 cy.get("input[name='calculationPercent']").type("7.00")//enter flat amount
     cy.wait(1000)
     cy.get("input[name='calculationAmount']").clear()
	 cy.get("input[name='calculationAmount']").type("7.00")//enter flat amount
     cy.wait(1000)
      cy.get("input[name='calculationLimit']").clear()
	  cy.get("input[name='calculationLimit']").type("7.00")//enter flat amount
     cy.wait(1000)	 	

     //Deduction Section
	 cy.get('[name="deductionMethod"]').select('1- Subtract Deduction Flat Amount')
	 cy.wait(1000)
	 // cy.get("input[name='deductionFlatAmount']").clear()
	//cy.get("input[name='deductionFlatAmount']").type("7.00")//enter flat amount
    // cy.wait(1000)
     cy.get("input[name='deductionFlatAmount']").clear()
	cy.get("input[name='deductionFlatAmount']").type("7.00")//enter  amount
     cy.wait(1000)
     cy.get("input[name='deductionAmount']").clear()
     cy.get("input[name='deductionAmount']").type("7.00")//enter amount
     cy.wait(1000)	 
     cy.get("input[name='deductionDependentAmount']").clear()
     cy.get("input[name='deductionDependentAmount']").type("7.00")//enter amount
     cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
     cy.wait(1000)	  
     cy.get('.modal-footer > .btn').click()
	
	 cy.get('#filter > .fas').click
	 
})
it('Edit newly added Tax Code', () => {
	// cy.wait(1000)
	// cy.get("#jumpto-customFormulas").click() // selecting Companies from favorite menu
	 	 cy.get('[tabindex="6"]').clear()
	// cy.wait(1000)
	// cy.get('#filter > .fas').click()
	


	 cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)

	// cy.get('[tabindex="7"]').type('1/12/2021')
   //  cy.get('[tabindex="7"]').type('{enter}')
	// cy.wait(1000)
	// cy.get('#edit-0 > .fas').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	
	

	 
   //  cy.get("[name='startDate']").type('2021-01-12')// enter start date
	 cy.get("[name='startDate']").invoke('attr','value').should('contain','2021-01-12')//Verify selection 
	 cy.wait(1000)
   //  cy.get("[name='rescind']").type('2021-12-31')// enter end date
	 cy.get("[name='endDate']").invoke('attr','value').should('contain','2022-12-31')//Verify selection 
	 cy.wait(1000)
    cy.get("input[name='deductionAmount']").invoke('attr','value').should('contain','7.00')//Verify selection
	  cy.wait(1000)
	   cy.get("input[name='deductionDependentAmount']").clear()
      cy.get("input[name='deductionDependentAmount']").type("8.00")//enter amount
     cy.wait(1000)
	 
	 cy.wait(1000) 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 

	 
	// cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	   cy.wait(1000)	  
     cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)	  
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()

})
it('Delete newly added Company', () => {
	cy.wait(1000)
	 cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars	
	 cy.wait(1000)
     cy.get('#edit-0 > i').click({ multiple: true, force: true })  // clicking on search element. Using until I can figure out how to move scrollbars
	 cy.wait(1000)
     cy.wait(1000)
     cy.get("input[name='deductionDependentAmount']").invoke('attr','value').should('contain','8.00')//Verify selection 
	  cy.wait(1000)
	

      cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	
	 cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
	     cy.wait(1000)	  
     cy.get('.modal-footer > .btn').click()
})


})

