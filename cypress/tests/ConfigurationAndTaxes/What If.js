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
	  cy.wait(2000)
	//  cy.get('.btn > .fas').click() 
	cy.get('.fas.fa-caret-down').click()
	
	 
	  
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
  
}) 
 
 
it('Adding Employee', ()=> { 
	  
	 cy.get("#addNew > a > i").click()//add button
	 cy.wait(1000)	 
	 cy.get("input[name='checkDate']").type('2020-03-13')
	 cy.wait(1000)
	 cy.get("input[name='empCode']").type('0001BSI') 
	 cy.wait (1000)
     cy.get('[name="empGroup"]').select("DJEMPWhatIF- (DJEMP)")
	  cy.wait(1000)
	  cy.get('[name="companyCode"]').select("Dj Honeyell- (DJHNYWELL)")
	  cy.wait(1000)
	  cy.get('[name="paymentType"]').select("0 - Regular")
	  cy.wait(1000)
	  cy.get("input[name='vacHours']").clear()
	  cy.get("input[name='vacHours']").type('8') 
	  cy.wait(1000)
	  cy.get('[name="prorationFreq"]').clear()
	  cy.get('[name="prorationFreq"]').type('0')
	  cy.wait(1000)
	  cy.get('[name="ytdPayPeriod"]').clear()
	  cy.get('[name="ytdPayPeriod"]').type('0')	  
	  cy.wait(1000)
       cy.get('[name="payPeriodHours"]').clear()
	  cy.get('[name="payPeriodHours"]').type('40')	  
	  cy.wait(1000)
       cy.get('[name="payPeriodHours"]').clear()
	  cy.get('[name="payPeriodHours"]').type('40')	  
	  cy.wait(1000)
    //  cy.get('[name="grossUpInd"]').select('2 - Garnishment Gross-Up') 
	  cy.wait(1000)
	  cy.get('[name="netWages"]').clear()
	  cy.get('[name="netWages"]').type('2500.00')
	  cy.wait(1000)
	  cy.get('[name="estAnnualGrossAmt"]').clear()
	  cy.get('[name="estAnnualGrossAmt"]').type('82000.63')
	  
	  cy.wait(1000)
	    cy.get('[name="grossWages"]').clear()
	  cy.get('[name="grossWages"]').type('2506.06')
	    
	  cy.wait(1000)
	   cy.get('[name="avgWkGross"]').clear()
	  cy.get('[name="avgWkGross"]').type('1255.05')
	   cy.wait(1000)
	  cy.get('[name="garnishment"]').select('0 - Do not Process Garnishments')  
	  	 cy.wait(1000)
	     cy.get('[name="calcType"]').select('1 - Wage Assessment And Taxes')
	  cy.wait(1000)
	 
	 	  //verify buttons
  	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button
     // cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places  
	  cy.get(".btn-success").click()
	 
     
})
it('Edit newly Recipient Code', () => {
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
	 
	cy.get('[columnindex="6"] > #edit-0 > .fas').click({ force: true })
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
	 cy.get("input[name='vacHours']").invoke('attr','value').should('contain','8')//Verify selection 
	 cy.wait(1000)
     cy.get('[name="prorationFreq"]').invoke('attr','value').should('contain','0')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='ytdPayPeriod']").invoke('attr','value').should('contain','0')//Verify selection 
	 cy.wait(1000)
	 cy.get('[name="payPeriodHours"]').invoke('attr','value').should('contain','0')//Verify selection 
	 cy.wait(1000)
	cy.get('[name="netWages"]').invoke('attr','value').should('contain','2500')//Verify selection 
	 cy.wait(1000)
	 cy.get('[name="estAnnualGrossAmt"]').invoke('attr','value').should('contain','82000.63')//Verify selection 
	 cy.wait(1000)
	  cy.get('[name="grossWages"]').invoke('attr','value').should('contain','2506.06')//Verify selection 
	 cy.wait(1000)
	cy.get('[name="avgWkGross"]').invoke('attr','value').should('contain','1255.05')//Verify selection 
	 cy.wait(1000)	 
     
	 cy.get('[name="payPeriodHours"]').clear()
	 cy.get('[name="payPeriodHours"]').type("37.5")

	  
	  //verifying buttons
	  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	
	  cy.get("[type='submit']").should('contain', 'Save')// verify save button*
	  cy.get("[type='submit']").click()
	 
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
	  
})	



}) 
	