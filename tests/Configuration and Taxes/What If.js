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
it('Launch What-If Test', function () {
	  cy.visit(Cypress.env('url')) //Opens the URL
	  cy.get("#appAreaSideMenu > li > a").click() // Clicking on Configuration and Taxes
	  cy.get('.d-inline-block').click() //Clicking on the arrow next Reporting next to Search box
	  cy.get("#jumpto-whatifEmp").click() // selecting What-if from favorite menu
})
 it('Verify Page Title', ()=> {
  cy.wait(1000)
  cy.get("#pageContainer > div:nth-child(1) > h1", { timeout: 30000 }).should('be.visible'); //Waiting 30 secs to have screen to load
  cy.get("#pageContainer > div:nth-child(1) > h1").should( "have.text","What-If Test")// verifying screen title
  cy.wait(1000) 
 })	 
 
 
it('Adding Employee', ()=> { 
	  
	 cy.get("#addNew > a > i").click()//add button
	 cy.wait(1000)	 
	 cy.get("input[name='checkDate']").type('2020-11-13')
	 cy.wait(1000)
	 cy.get("input[name='empCode']").type('DJONES_TEST') 
	 cy.wait (1000)
	  cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("Test Employee Group ")
	  cy.wait(2000)
	  cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.get(':nth-child(4) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')	  
	  cy.get('#myform > div > div > div > div > div.col > div > div.rbt-input-hint-container > input').invoke('attr','value').should('contain','Test Employee Group Info- (TESTEG)') //Verify selection
	  
	  cy.wait (1000)
	  cy.get(':nth-child(5) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("DJones_Test")
	  cy.wait(2000)
	  cy.get(':nth-child(5) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
	  cy.get(':nth-child(5) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')  
	  cy.get(':nth-child(5) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').invoke('attr','value').should('contain','DJones_Test_Company- (DJONES_TEST)') //Verify selection
	  
	   cy.wait(1000)
	  cy.get(':nth-child(6) > .col > .form-control').select('3 - Vacation')
	  
	  cy.wait(1000)
	 // cy.get('[placeholder="Enter Pay Frequency"]').clear()
	//  cy.get('[placeholder="Enter Pay Frequency"]').type('48')	
	//  cy.get('[placeholder="Enter Pay Frequency"]').invoke('attr','value').should('contain','48')//Verify selection
	  
	  cy.wait(1000)
     cy.get('[name="prorationFreq"]').clear()
	  cy.get('[name="prorationFreq"]').type('0')
	  cy.get('[name="prorationFreq"]').invoke('attr','value').should('contain','0')//Verify selection
 
	  

	  cy.wait(1000)
	  cy.get('[name="ytdPayPeriod"]').clear()
	  cy.get('[name="ytdPayPeriod"]').type('0')
	  cy.wait(1000)
	  cy.get('[name="ytdPayPeriod"]').invoke('attr','value').should('contain','0')//Verify selection
	  
     cy.get('[name="payPeriodHours"]').clear()
	  cy.get('[name="payPeriodHours"]').type('40')
	  cy.get('[name="payPeriodHours"]').invoke('attr','value').should('contain','40')//Verify selection
	  

	  cy.wait(1000)
	  cy.get('[name="grossUpInd"]').select('2 - Garnishment Gross-Up')
	  
	  cy.wait(1000)
       cy.get('[name="netWages"]').clear()
	  cy.get('[name="netWages"]').type('2500.00')
	  cy.wait(1000)
	  cy.get('[name="netWages"]').invoke('attr','value').should('contain','2500.00')//Verify selection
	  
	 cy.wait(1000)
      cy.get('[name="estAnnualGrossAmt"]').clear()
	  cy.get('[name="estAnnualGrossAmt"]').type('82000.63')
	  cy.wait(1000)
	  cy.get('[name="estAnnualGrossAmt"]').invoke('attr','value').should('contain','82000.63')//Verify selection
     

	 cy.wait(1000)
	  cy.get('[name="contribAlloc"]').select('0 - Do not Override')
	 
	
	  cy.wait(1000)
	  cy.get('[placeholder="Enter Resident State"]').clear()
	  cy.get('[placeholder="Enter Resident State"]').type('GA')	
	  cy.wait(1000)
	  cy.get('[placeholder="Enter Resident State"]').type('{downarrow}')
	  cy.get('[placeholder="Enter Resident State"]').invoke('attr','value').should('contain','GA - GEORGIA')//Verify selection
	
	  cy.wait(1000)
	  cy.get('[name="grossWages"]').clear()
	  cy.get('[name="grossWages"]').type('2506.06')
	  cy.wait(1000)
	  cy.get('[name="grossWages"]').invoke('attr','value').should('contain','2506.06')//Verify selection
	  
	  cy.wait(1000)
	  cy.get('[name="avgWkGross"]').clear()
	  cy.get('[name="avgWkGross"]').type('1255.05')
	  cy.wait(1000)
	  cy.get('[name="avgWkGross"]').invoke('attr','value').should('contain','1255.05')//Verify selection
	  
	 cy.wait(1000)
	  cy.get('[name="garnishment"]').select('1 - Do Garnishments and Tax Calculation')
	
	  
	   cy.wait(1000)
	  cy.get('[placeholder="Enter Principal State of Employment"]').clear()
	  cy.get('[placeholder="Enter Principal State of Employment"]').type('GA')	
	  cy.wait(1000)
	  cy.get('[placeholder="Enter Principal State of Employment"]').type('{downarrow}')
	  cy.get('[placeholder="Enter Principal State of Employment"]').invoke('attr','value').should('contain','GA - GEORGIA')//Verify selection
	  
      cy.wait(1000)
	  cy.get('[name="calcType"]').select('1 - Wage Assessment And Taxes')
	  cy.wait(1000)
	  
	   cy.get('[name="wageProcCode"]').select('0 - Assess Earnings And Contributions')
	  cy.wait(1000)
	  
	   cy.get('[name="estSpousalIncome"]').clear()
	  cy.get('[name="estSpousalIncome"]').type('1550.00')
	  cy.wait(1000)
	  cy.get('[name="estSpousalIncome"]').invoke('attr','value').should('contain','1550.00')//Verify selection 
	  
	   cy.wait(1000)
	  
	cy.get('[name="empType"]').select('0 - N/A')
	  cy.wait(1000)
	  
      cy.get('[name="emplType"]').select('0 - Active Regular Employee')
	  cy.wait(1000)
	  
      //  cy.get("input[name='birthDate']").clear()
	//  cy.get("input[name='birthDate']").type('1988-11-13')
	 // cy.wait(1000)
	  
	  cy.get("[name='calculatedLocalTaxIn']").select('2 - Resident Tax Records win tie')
	  cy.wait(1000)
	  
	  //cy.get("input[name='formulaEffectiveDateYYYYMMDD']").clear()
	 //  cy.get("input[name='formulaEffectiveDateYYYYMMDD']").type('2020-12-01')
	  cy.wait(1000)
	  
	    cy.get("[name='statEEInd']").select('2 - FICA/FUTA')
	  cy.wait(1000)
	  
	   cy.get("[name='foreignEarnedIncome']").select('0 - No')
	  cy.wait(1000)
	  
	  cy.get('[placeholder="Exempt Military Location"]').clear()
	  cy.get('[placeholder="Exempt Military Location"]').type('GA')	
	  cy.wait(2000)
	  cy.get('[placeholder="Exempt Military Location"]').type('{downarrow}')
	  cy.get('[placeholder="Exempt Military Location"]').invoke('attr','value').should('contain','GA - GEORGIA')//Verify selection */
	  
	  
	//  cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	//  cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel')// verify cancel button	 
	 //  cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	   
	   cy.wait(2000)
	 cy.get("[type='submit']").click()// verify save button
	// cy.get('.modal-footer > [type="button"]').should('contain', 'Cancel').click()// verify cancel button
     cy.wait(1000)
     
})


it('Edit Employee Code Taxes', ()=> { 

cy.get('[columnindex="6"] > #edit-5>').click({ force: true })

	 
 
 })
}) 
	