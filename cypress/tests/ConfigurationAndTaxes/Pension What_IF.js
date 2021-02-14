///<reference types="cypress"/>

describe("Configuration and Taxes Pension What-If", function ()
{
 it("Pension What-If", function()
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
	  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .fav-icon').click({force: true})//got by using cypress ui test app
	  cy.wait(1000)
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .d-block').click()
	  cy.wait(1000)
	  cy.get('.btn > .fas').click(1000)
	  
})

it('launch Pension What-IF from Fav Menu', function () {
	  cy.wait(1000)
      cy.get('#jumpto-pensionWhatIfTest').click() // selecting Custom Tax from favorite menu
	  cy.wait(1000)
})
it('Verify Page Title', () => {
		  
	  cy.wait(1000)
	   cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
	  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","Pension What-If Test")// verifying screen title
	  cy.wait(2000)
	  cy.get('#unselectAll-0').click()// Select All
	  cy.wait(2000)
	  cy.get('#selectAll-0').click()//Unselect All
  
})

it('Add Pension What IF Test', () => {	 
	  
	  cy.wait(1000)
	  cy.get('#addNew > a > .fas').click()
	  cy.wait(1000)	  
	  cy.get('[name="empCode"]').type("0001BSI")
	  cy.wait(1000)
	  cy.get('[name="empGroup"]').select("DJEMPWhatIF- (DJEMP)")
	  cy.wait(1000)
	  cy.get('[name="companyCode"]').select("Dj Honeyell- (DJHNYWELL)")
	  cy.wait(1000)
  	  cy.get('[name="paymentType"]').select("Regular")
	  cy.wait(1000)
	  cy.get('[name="payFreq"]').type("12")
	  cy.wait(1000)
	  cy.get('[name="ytdPayPeriod"]').type("12")
	  cy.wait(1000)
	  cy.get('[name="estAnnualGrossAmt"]').type("123.00")
	  cy.wait(1000)
	  cy.get('[name="grossUpInd"]').select("Perform Gross up")
	  cy.wait(1000)
	  cy.get('[name="rollOverElg"]').select("Eligible")
	  cy.wait(1000)
	   cy.get('[name="rollOverMonths"]').type("11")
	  cy.wait(1000)
	  cy.get('[name="companyPlan"]').select("Yes")
	  cy.wait(1000)
	  cy.get('[name="netWages"]').type("100.00")
	  cy.wait(1000)
	   cy.get('[name="disburseDate"]').type("2021-05-12")
	  cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button
     // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	  cy.get(".btn-success").click()
	  cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
})

it('Edit newly Recipient Code', () => {
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
	 
	cy.get('[columnindex="16"] > #edit-0 > .fas').click({ force: true })
	cy.wait(1000)
	
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)
	  
 	 cy.get("[name='empName']").invoke('attr','value').should('contain','EMPLOYEE 0001BSI')//Verify selection 
	 cy.wait(1000)
	  cy.get("[name='empCode']").invoke('attr','value').should('contain','0001BSI')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='payFreq']").invoke('attr','value').should('contain','12')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='ytdPayPeriod']").invoke('attr','value').should('contain','12')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='estAnnualGrossAmt']").invoke('attr','value').should('contain','12')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='rollOverMonths']").invoke('attr','value').should('contain','11')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='netWages']").invoke('attr','value').should('contain','100')//Verify selection 
	 cy.wait(1000)
	  cy.get("[name='disburseDate']").invoke('attr','value').should('contain','2021-05-12')//Verify selection 
	 cy.wait(1000)
	 cy.get('[name="estAnnualGrossAmt"]').clear()
	 cy.get('[name="estAnnualGrossAmt"]').type("153.00")
	 cy.wait(1000)	 
     cy.get('[name="disburseDate"]').clear()
	 cy.get('[name="disburseDate"]').type("2021-06-12")
	 cy.wait(1000)
	 

	  
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  cy.get("[type='submit']").click()
	 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	  
})	
it('add taxes to newly Recipient Code', () => {
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
     cy.get('[columnindex="17"] > #edit-0 > .fas').click({force: true})
	 cy.wait(1000)
	 cy.get('#addNew > a > .fas').click()
	 cy.wait(1000)
// taxes	 
	 cy.get('.rbt-input-main').type("00010000")
	 cy.wait(1000)
	 cy.get('.rbt-input-main').type('{downarrow}')// select the downarrow 
	 cy.wait(1000)
	 cy.get('.rbt-input-main').type('{enter}') // selecting the enter key. ending of selecting from dropdown
	 cy.wait(1000)
     cy.get('[name="taxTypeUserTaxType"]').select("070 - PENSION PERIODIC WITHHOLDING")
	 cy.wait(1000)
	 cy.get('[name="pensionFormula"]').select("1 - WITHHOLDING FORMULA-FED REG")
	 cy.wait(1000)
	  cy.get('[name="residency"]').select("Resident")
	 cy.wait(1000)
	 cy.get('[name="taxExempt"]').select("Non Exempt")
	 cy.wait(1000)
	 cy.get('[name="selfAdjust"]').select("Use Formula Default")
	 cy.wait(1000)
 	 cy.get('[name="withholdingForm"]').select("1,1-  2020 Form W-4, Multiple Jobs not checked")
	 cy.wait(1000)
	 cy.get('[name="payPeriodWage"]').type("2")
	 cy.wait(1000)
	 cy.get('[name="yearToDateWage"]').type("1")
	 cy.wait(1000)
	 cy.get('[name="yearToDateTax"]').type("1")
	 cy.wait(1000)
	 cy.get('[name="actualYearToDateWages"]').type("1")
	 cy.wait(1000)
  	 cy.get('[name="maritalStatus"]').select("Civil Union")
	 cy.wait(1000)
	 cy.get('[name="exemptions"]').type("1")
	 cy.wait(1000)
	 cy.get('[name="personalExemptions"]').type("1")
	 cy.wait(1000)
	  cy.get('[name="dependentExemptions"]').type("1")
	 cy.wait(1000)
	 cy.get('[name="exemptionAmount"]').type("2")
	 cy.wait(1000)
	 cy.get('[name="numberOfAdditionalExemptions"]').type("3")
	 cy.wait(1000)
	 cy.get('[name="additionalExemptionAmount"]').type("3")
	 cy.wait(1000)
	 cy.get('[name="taxCreditAmount"]').type("1")
	 cy.wait(1000)
	 //not including tax Effective date because it uses the current date.
 	 cy.get('[name="additionalNonwageIncome"]').type("1")
	 cy.wait(1000)
	 // Additional Taxes
	 //Voluntary
  	 cy.get('[name="additionalTax"]').select("None")
	 cy.wait(1000)
	 cy.get('[name="additionalAmount"]').type("1.00")
	 cy.wait(1000)
	 cy.get('[name="additionalTaxRate"]').type("0.500000000")
	 cy.wait(1000)
	//Supplemental 
	 cy.get('[name="supplementalCode"]').select("Rate Table")
	 cy.wait(1000)
	 cy.get('[name="baseWages"]').type("2")
	 cy.wait(1000)
	 //Pay Period
	 cy.get('[name="payPeriodTax"]').type("1.00")
	 cy.wait(1000)
 	 cy.get('[name="payPeriodToDateWages"]').type("1.00")
	 cy.wait(1000)
	 cy.get('[name="monthToDateWages"]').type("1.00")
	 cy.wait(1000)
	 cy.get('[name="monthToDateTax"]').type("1.00")
	 cy.wait(1000)
	 cy.get('[name="quarterToDateWages"]').type("1.00")
	 cy.wait(1000)
	 cy.get('[name="quarterToDateTax"]').type("3.00")
	 cy.wait(1000)
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button
     // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	  cy.get(".btn-success").click()
 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	  cy.get('[tabindex="5"]').clear()
	 
})	
it('edit taxes to newly Recipient Code', () => {
     cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
     cy.get('[columnindex="17"] > #edit-0 > .fas').click({ force: true })
	 cy.wait(1000)
	   cy.get('[tabindex="6"]').type('ALABAMA')
	  cy.wait(1000)
     cy.get('#edit-0 > .fas').click({ force: true })
   	 cy.wait(1000)
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)
	// taxes	 
	 cy.get('.rbt-input-main').invoke('attr','value').should('contain','00010000')//Verify selection 
	 cy.wait(1000)
  //   cy.get('[name="taxTypeUserTaxType"]').select("070 - PENSION PERIODIC WITHHOLDING")
//	 cy.wait(1000)
	// cy.get('[name="pensionFormula"]').select("1 - WITHHOLDING FORMULA-FED REG")
	 cy.wait(1000)
	  cy.get('[name="residency"]').select("Resident")
	 cy.wait(1000)
	 cy.get('[name="taxExempt"]').select("Non Exempt")
	 cy.wait(1000)
	 cy.get('[name="selfAdjust"]').select("Use Formula Default")
	 cy.wait(1000)
 	 cy.get('[name="withholdingForm"]').select("1,1-  2020 Form W-4, Multiple Jobs not checked")
	 cy.wait(1000)
	 cy.get('[name="payPeriodWage"]').invoke('attr','value').should('contain','2')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="yearToDateWage"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="yearToDateTax"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="actualYearToDateWages"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
  	 cy.get('[name="maritalStatus"]').select("Civil Union")
	 cy.wait(1000)
	 cy.get('[name="exemptions"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="personalExemptions"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="dependentExemptions"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="exemptionAmount"]').invoke('attr','value').should('contain','2')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="numberOfAdditionalExemptions"]').invoke('attr','value').should('contain','3')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="additionalExemptionAmount"]').invoke('attr','value').should('contain','3')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="taxCreditAmount"]').type("1")
	 cy.wait(1000)
	 //not including tax Effective date because it uses the current date.
	 cy.get('[name="additionalNonwageIncome"]').invoke('attr','value').should('contain','1')//Verify selection
 	 cy.wait(1000)
	 // Additional Taxes
	 //Voluntary
  //	  cy.get('[name="additionalTax"]').invoke('attr','value').should('contain','None')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="additionalAmount"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="additionalTaxRate"]').invoke('attr','value').should('contain','0.5')//Verify selection
	 cy.wait(1000)
	//Supplemental 
	// cy.get('[name="supplementalCode"]').invoke('attr','value').should('contain','Rate Table')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="baseWages"]').invoke('attr','value').should('contain','2')//Verify selection
	 cy.wait(1000)
	 //Pay Period
	 cy.get('[name="payPeriodTax"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
 	cy.get('[name="payPeriodToDateWages"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="monthToDateWages"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="monthToDateTax"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="quarterToDateWages"]').invoke('attr','value').should('contain','1')//Verify selection
	 cy.wait(1000)
	 cy.get('[name="quarterToDateTax"]').invoke('attr','value').should('contain','3')//Verify selection
	 cy.wait(1000)
	 
	 // editing
	// cy.get('[name="quarterToDateTax"]').clear()
	//  cy.get('[name="quarterToDateTax"]').type("4.00")
	 
	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button
     // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	  cy.get("[type='submit']").click()
	 cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	  cy.get('[tabindex="5"]').clear()
	  cy.wait(1000)
	  
})

it('Delete newly added taxes', () => {

	  
     cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
     cy.get('[columnindex="17"] > #edit-0 > .fas').click({ force: true })
	 cy.wait(1000)
	   cy.get('[tabindex="6"]').type('ALABAMA')
	  cy.wait(1000)
     cy.get('#edit-0 > .fas').click({ force: true })
   	 cy.wait(1000)
	 
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)
	
	// cy.get('[name="quarterToDateTax"]').invoke('attr','value').should('contain','4')//Verify selection

	  
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get(".btn-danger").should('contain', 'Delete')
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  
	  cy.get(".btn-danger").click()
  		  cy.wait(1000)
	 cy.get('.modal-footer > .btn').click()
	  cy.wait(1000)
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	  cy.get('#filter > .fas').click()
	 cy.wait(1000)

})
it('Delete Pension What-If Test', () => {
   	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
	 
	cy.get('[columnindex="16"] > #edit-0 > .fas').click({ force: true })
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
	 cy.get('[tabindex="5"]').clear()
	 cy.wait(1000)

})

})
