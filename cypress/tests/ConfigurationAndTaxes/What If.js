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
	  cy.get('.btn > .fas').click(1000)
	  
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
	 cy.get("input[name='empCode']").type('DJONES_TEST') 
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
	//	cy.get('[name="reciprocalCode"]').click()
		cy.wait(1000)
    //  cy.get('[name="contribAlloc"]').select('0 - Do not Override')
	  cy.wait(1000)
	 
	//  cy.get(':nth-child(17) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('GA - GEORGIA')
	  cy.wait(1000)	  
	//  cy.get(':nth-child(17) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.wait(1000)
	//  cy.get(':nth-child(17) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.wait(1000)
	  
	//  cy.get('[name="ytdPayPeriod"]').invoke('attr','value').should('contain','0')//Verify selection
	 // cy.get('[name="payPeriodHours"]').invoke('attr','value').should('contain','40')//Verify selection
	
	//  cy.get('[name="netWages"]').invoke('attr','value').should('contain','2500.00')//Verify selection
	//   cy.get('[name="estAnnualGrossAmt"]').invoke('attr','value').should('contain','82000.63')//Verify selection
	 cy.wait(1000)
	  cy.get('[name="grossWages"]').clear()
	  cy.get('[name="grossWages"]').type('2506.06')
      
	  cy.wait(1000)
	   cy.get('[name="avgWkGross"]').clear()
	  cy.get('[name="avgWkGross"]').type('1255.05')
     cy.wait(1000)
	  cy.get('[name="garnishment"]').select('0 - Do not Process Garnishments')  
	 cy.wait(1000)
	// cy.get('[name="garnishmentGrp"]').select('DJGARN2- (GARN2)')  
	 cy.wait(1000)
	//  cy.get(':nth-child(22) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('GA - GEORGIA')
	  cy.wait(1000)	  
	// cy.get(':nth-child(22) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.wait(1000)
	//  cy.get(':nth-child(22) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	  cy.wait(1000)
	   cy.get('[name="calcType"]').select('1 - Wage Assessment And Taxes')
	  cy.wait(1000)
	  cy.get('[name="wageProcCode"]').select('0 - Assess Earnings And Contributions')
	  cy.wait(1000)
	  cy.get('[name="estSpousalIncome"]').clear()
	  cy.get('[name="estSpousalIncome"]').type('1550.00')	   
	  cy.wait(1000)
	  cy.get('[name="empType"]').select('0 - N/A')
	  cy.wait(1000)
	  cy.get('[name="emplType"]').select('0 - Active Regular Employee')
	  cy.wait(1000)
	  cy.get("[name='calculatedLocalTaxIn']").select('2 - Resident Tax Records win tie')
	  cy.wait(1000)
	   cy.get("[name='foreignEarnedIncome']").select('0 - No')
	  cy.wait(1000)
	
	// cy.get(':nth-child(36) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('GA')	
	  cy.wait(2000)
	//  cy.get(':nth-child(36) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.wait(1000)
	// cy.get(':nth-child(36) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	cy.wait(1000)
	 cy.get("[type='submit']").click()// verify save button
	// cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel').click()// verify cancel button
     cy.wait(1000)
     
})



}) 
	