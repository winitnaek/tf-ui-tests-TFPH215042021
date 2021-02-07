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
	  cy.get('[name="empCode"]').type("DJTest")
	  cy.wait(1000)
	  cy.get('[name="empGroup"]').select("DJEMPWhatIF- (DJEMP)")
	  cy.wait(1000)
	  cy.get('[name="companyCode"]').select("ALL")
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
	 
})

it('Edit newly added Tax Code', () => {
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('DJTEST')
   	 cy.wait(1000)
	 
	cy.get('#edit-2 > .fas').click({ force: true })
	cy.wait(1000)
	
	  cy.get('.modal-footer > :nth-child(4)').should('contain', 'PDF')
      cy.get('.modal-footer > :nth-child(4)').click()
	  
	  cy.wait(10000)
	  
	  cy.get('.modal-content > .modal-footer > .btn').click({force: true})
	  
	  cy.wait(1000)
	  
 	 cy.get("[name='empName']").invoke('attr','value').should('contain','EMPLOYEE DJTest')//Verify selection 
	 cy.wait(1000)
	  cy.get("[name='empCode']").invoke('attr','value').should('contain','DJTEST')//Verify selection 
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
	 cy.get('[tabindex="5"]').clear()
	  
})	

})