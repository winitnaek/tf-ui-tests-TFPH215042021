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
it('launch What-If Test from Config Page', function () {
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
it('launch What-IF from Fav Menu', function () {
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
 
 
//place add and edit employee
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
	 
      cy.wait(1000)
	// cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 
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
	  
 //	 cy.get("[name='empName']").invoke('attr','value').should('contain','EMPLOYEE 0001BSI')//Verify selection 
	 cy.wait(1000)
	  cy.get("[name='empCode']").invoke('attr','value').should('contain','0001BSI')//Verify selection 
	 cy.wait(1000)
	 cy.get("input[name='vacHours']").invoke('attr','value').should('contain','8')//Verify selection 
	 cy.wait(1000)
     cy.get('[name="prorationFreq"]').invoke('attr','value').should('contain','0')//Verify selection 
	 cy.wait(1000)
	 cy.get("[name='ytdPayPeriod']").invoke('attr','value').should('contain','0')//Verify selection 
	 cy.wait(1000)
	 cy.get('[name="payPeriodHours"]').invoke('attr','value').should('contain','40')//Verify selection 
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
//	 cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').clear()
})	

//place add taxes	 
it('Add taxes for Employee', () => {
	 cy.wait(1000)
	 cy.get('[tabindex="5"]').type('0001BSI')
   	 cy.wait(1000)
	 
	cy.get('[columnindex="7"] > #edit-0 > .fas').click({ force: true })
	cy.wait(5000)
	

cy.get('#addNew > a > .fas').click()
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("FED")
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("With")
cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("PCT")
cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get('[name="resicd"]').select("0 - Resident")

cy.wait(1000)
cy.get('[name="rndind"]').select("1 - Cents")

cy.wait(1000)
cy.get('[name="fymj"]').select("0,0 - 2019 or earlier Form W-4")

cy.wait(1000)
cy.get('[name="ppdwgs"]').clear()
cy.get('[name="ppdwgs"]').type('2500.00')

cy.wait(1000)
cy.get('[name="ytdwgs"]').clear()
cy.get('[name="ytdwgs"]').type('7500.00')

cy.wait(1000)
cy.get('[name="ytdtax"]').clear()
cy.get('[name="ytdtax"]').type('1500.00')

cy.wait(1000)
cy.get('[name="ytdtaxpws"]').clear()
cy.get('[name="ytdtaxpws"]').type('1500.00')

cy.wait(1000)
cy.get('[name="opttaxpws"]').clear()
cy.get('[name="opttaxpws"]').type('1150.00')

cy.wait(1000)
cy.get('[name="exprate"]').clear()
cy.get('[name="exprate"]').type('3')

cy.wait(1000)
cy.get('[name="maxwgovr"]').clear()
cy.get('[name="maxwgovr"]').type('10.00')

cy.wait(1000)
cy.get('[name="hrswrk"]').clear()
cy.get('[name="hrswrk"]').type('40')


cy.wait(1000)
cy.get('[name="addexmamt"]').clear()
cy.get('[name="addexmamt"]').type('25.00')

cy.wait(1000)
cy.get('[name="taxcredit"]').clear()
cy.get('[name="taxcredit"]').type('25.00')

cy.wait(1000)
cy.get('[name="aytdwgs"]').clear()
cy.get('[name="aytdwgs"]').type('7500.00')

cy.wait(1000)
cy.get('[name="ytdsubjwg"]').clear()
cy.get('[name="ytdsubjwg"]').type('7500.00')

cy.wait(1000)
cy.get('[name="ytdExmptWg"]').clear()
cy.get('[name="ytdExmptWg"]').type('0')

cy.wait(1000)
cy.get('[name="taxexpind"]').select("0 - Non Exempt")


cy.wait(1000)
cy.get('[name="selfadj"]').select("0 - Use Formula Default")

cy.wait(1000)
cy.get('[name="mart"]').select("1 - Single")

cy.wait(1000)
cy.get('[name="eicstsind"]').select("1 - Single or Married")

cy.wait(1000)
cy.get('[name="regex"]').clear()
cy.get('[name="regex"]').type('1')

cy.wait(1000)
cy.get('[name="prsex"]').clear()
cy.get('[name="prsex"]').type('1')
cy.wait(1000)

cy.get('[name="depex"]').clear()
cy.get('[name="depex"]').type('1')

cy.wait(1000)
cy.get('[name="regexmamt"]').clear()
cy.get('[name="regexmamt"]').type('25.00')
cy.wait(1000)
cy.get('[name="addex"]').clear()
cy.get('[name="addex"]').type('3')
cy.wait(1000)
cy.get('[name="calctax"]').clear()
cy.get('[name="calctax"]').type('0.00')
cy.wait(1000)
cy.get('[name="elcstind"]').select("0 - No")
cy.wait(1000)
cy.get('[name="taxeffdate"]').clear()
cy.get('[name="taxeffdate"]').type("2021-02-12")
cy.wait(1000)
cy.get('[name="estquargrosswages"]').clear()
cy.get('[name="estquargrosswages"]').type("7500.00")
cy.wait(1000)
cy.get('[name="addnwi"]').clear()
cy.get('[name="addnwi"]').type("0")
cy.wait(1000)
cy.get('[name="grossannp"]').clear()
cy.get('[name="grossannp"]').type("0")

cy.wait(1000)
cy.get('[name="pnd"]').clear()
cy.get('[name="pnd"]').type("3")

cy.wait(1000)
cy.get('[name="mnd"]').clear()
cy.get('[name="mnd"]').type("3")

cy.wait(1000)
cy.get('[name="qnd"]').clear()
cy.get('[name="qnd"]').type("3")
cy.wait(1000)
cy.get('[name="ynd"]').clear()
cy.get('[name="ynd"]').type("2021")

	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 
	  cy.wait(1000)
	// cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 
	 
	 cy.wait(1000)
//GA State Taxes added	 
cy.wait(1000)
cy.get('#addNew > a > .fas').click()
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("Georgia")
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("With")
cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("Per")
cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get('[name="resicd"]').select("3 - Live/Work")

cy.wait(1000)
cy.get('[name="rndind"]').select("1 - Cents")

cy.wait(1000)
cy.get('[name="fymj"]').select("0,0 - 2019 or earlier Form W-4")

cy.wait(1000)
cy.get('[name="ppdwgs"]').clear()
cy.get('[name="ppdwgs"]').type('2500.00')

cy.wait(1000)
cy.get('[name="ytdwgs"]').clear()
cy.get('[name="ytdwgs"]').type('7500.00')

cy.wait(1000)
cy.get('[name="ytdtax"]').clear()
cy.get('[name="ytdtax"]').type('1500.00')

cy.wait(1000)
cy.get('[name="ytdtaxpws"]').clear()
cy.get('[name="ytdtaxpws"]').type('1500.00')

cy.wait(1000)
cy.get('[name="opttaxpws"]').clear()
cy.get('[name="opttaxpws"]').type('1150.00')

cy.wait(1000)
cy.get('[name="exprate"]').clear()
cy.get('[name="exprate"]').type('3')

cy.wait(1000)
cy.get('[name="maxwgovr"]').clear()
cy.get('[name="maxwgovr"]').type('10.00')

cy.wait(1000)
cy.get('[name="hrswrk"]').clear()
cy.get('[name="hrswrk"]').type('40')


cy.wait(1000)
cy.get('[name="addexmamt"]').clear()
cy.get('[name="addexmamt"]').type('25.00')

cy.wait(1000)
cy.get('[name="taxcredit"]').clear()
cy.get('[name="taxcredit"]').type('25.00')

cy.wait(1000)
cy.get('[name="aytdwgs"]').clear()
cy.get('[name="aytdwgs"]').type('7500.00')

cy.wait(1000)
cy.get('[name="ytdsubjwg"]').clear()
cy.get('[name="ytdsubjwg"]').type('7500.00')

cy.wait(1000)
cy.get('[name="ytdExmptWg"]').clear()
cy.get('[name="ytdExmptWg"]').type('0')

cy.wait(1000)
cy.get('[name="taxexpind"]').select("0 - Non Exempt")


cy.wait(1000)
cy.get('[name="selfadj"]').select("0 - Use Formula Default")

cy.wait(1000)
cy.get('[name="mart"]').select("1 - Single")

cy.wait(1000)
cy.get('[name="eicstsind"]').select("1 - Single or Married")

cy.wait(1000)
cy.get('[name="regex"]').clear()
cy.get('[name="regex"]').type('1')

cy.wait(1000)
cy.get('[name="prsex"]').clear()
cy.get('[name="prsex"]').type('1')
cy.wait(1000)

cy.get('[name="depex"]').clear()
cy.get('[name="depex"]').type('1')

cy.wait(1000)
cy.get('[name="regexmamt"]').clear()
cy.get('[name="regexmamt"]').type('25.00')
cy.wait(1000)
cy.get('[name="addex"]').clear()
cy.get('[name="addex"]').type('0')
cy.wait(1000)
cy.get('[name="calctax"]').clear()
cy.get('[name="calctax"]').type('0.00')
cy.wait(1000)
cy.get('[name="elcstind"]').select("0 - No")
cy.wait(1000)
cy.get('[name="taxeffdate"]').clear()
cy.get('[name="taxeffdate"]').type("2021-02-12")
cy.wait(1000)
cy.get('[name="estquargrosswages"]').clear()
cy.get('[name="estquargrosswages"]').type("7500.00")
cy.wait(1000)
cy.get('[name="addnwi"]').clear()
cy.get('[name="addnwi"]').type("0")
cy.wait(1000)
cy.get('[name="grossannp"]').clear()
cy.get('[name="grossannp"]').type("0")

cy.wait(1000)
cy.get('[name="pnd"]').clear()
cy.get('[name="pnd"]').type("3")

cy.wait(1000)
cy.get('[name="mnd"]').clear()
cy.get('[name="mnd"]').type("3")

cy.wait(1000)
cy.get('[name="qnd"]').clear()
cy.get('[name="qnd"]').type("3")
cy.wait(1000)
cy.get('[name="ynd"]').clear()
cy.get('[name="ynd"]').type("2021")

	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 
	  cy.wait(1000)
	// cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 

}) 
//place wage details
it('Add wage details for Federal and Georgia', () => {

	 cy.wait(1000)
	 cy.get('[tabindex="6"]').type('Federal')
   	 cy.wait(1000)
	 
	cy.get('[columnindex="11"] > #edit-0 > .fas').click({ force: true })
	cy.wait(1000)
	cy.get('#addNew > a > .fas').click()
	cy.wait(1000)
	cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("DJCus")
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	
	
	cy.wait(1000)
    cy.get('[name="currentEarning"]').clear()
    cy.get('[name="currentEarning"]').type('2500.00')
	


	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	     cy.wait(1000)
	// cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 cy.wait(1000)
	 
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	 
	 cy.get('[tabindex="6"]').clear()
	 cy.wait(1000)
	// cy.get('[tabindex="6"]').type('Georgia')
   	 cy.wait(1000)
	 
	cy.get('[columnindex="11"] > #edit-1 > .fas').click({ force: true })
	cy.wait(1000)
	cy.get('#addNew > a > .fas').click()
	cy.wait(1000)
	cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("DJCus")
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	
	
	cy.wait(1000)
    cy.get('[name="currentEarning"]').clear()
    cy.get('[name="currentEarning"]').type('2500.00')
	


	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 
    cy.wait(1000)
	// cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 
	 
	  cy.get('#filter > .fas').click()
	   cy.wait(1000)
	 cy.get('#calculateTaxes').click()
       cy.wait(10000)	

	   cy.get('.modal-footer > .btn').click()
	 
	  cy.get('#filter > .fas').click()
	  
	  cy.wait(1000)
	  cy.get('[tabindex="5"]').clear()
	  	 cy.wait(1000)
})
it('Add Garnishment for Employee', () => {

	 
   	 cy.wait(1000)
	 
	cy.get('[columnindex="8"] > #edit-0 > .fas').click({ force: true })
	cy.wait(1000)
	

cy.get('#addNew > a > .fas').click()
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("FED")
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("505")
cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(2) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("Student")
cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
cy.wait(1000)
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')

cy.wait(1000)
cy.get('[name="caseid"]').type("00001")

cy.wait(1000)
cy.get('[name="docket"]').type("00001")
cy.wait(1000)
cy.get('[name="fstats"]').select("1 - Single")

cy.wait(1000)
cy.get('[name="nexem"]').clear()
cy.get('[name="nexem"]').type('1')

cy.wait(1000)
cy.get('[name="addded"]').clear()
cy.get('[name="addded"]').type('1')

cy.wait(1000)
cy.get('[name="family2"]').select("0 - No")

cy.wait(1000)
cy.get('[name="familyh"]').select("0 - No")

cy.wait(1000)
//cy.get('[name="ndeps"]').clear()
//cy.get('[name="ndeps"]').type('1')

cy.wait(1000)
//cy.get('[name="ndepchld"]').clear()
//cy.get('[name="ndepchld"]').type('1')

cy.wait(1000)
cy.get('[name="gduratn"]').select("0 - Continuing")


cy.wait(1000)
cy.get('[name="calcamnt"]').clear()
cy.get('[name="calcamnt"]').type('25.50')


cy.wait(1000)
cy.get('[name="pymtnmbr"]').clear()
cy.get('[name="pymtnmbr"]').type('12')


cy.wait(1000)
cy.get('[name="hassoe"]').select("0 - Not Filed")


cy.wait(1000)
cy.get('[name="priovrd"]').clear()
cy.get('[name="priovrd"]').type('0')

cy.wait(1000)
cy.get('[name="delinq"]').select("0 - No")

cy.wait(1000)

cy.get('[name="grcvddt"]').type('2021-02-12')

cy.wait(1000)
cy.get('[name="gstrtdt"]').type('2021-02-12')

cy.wait(1000)

cy.get('[name="genddt"]').type('2022-02-13')

cy.wait(1000)
cy.get('[name="dispern"]').clear()
cy.get('[name="dispern"]').type('225.00')

cy.wait(1000)
cy.get('[name="garnGross"]').clear()
cy.get('[name="garnGross"]').type('125.00')



	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 cy.wait(1000)
	// cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
})
it('Add Deduction and Benefits for Employee', () => {
	 cy.wait(1000)
	// cy.get('[tabindex="5"]').type('0001BSI')
   	// cy.wait(1000)
	 
	cy.get('[columnindex="10"] > #edit-0 > .fas').click({ force: true })
	cy.wait(1000)
	 cy.wait(1000)
	// cy.get('[tabindex="6"]').type('Federal')
   	 cy.wait(1000)
	 
//	cy.get('[columnindex="10"] > #edit-0 > .fas').click({ force: true })
	cy.wait(1000)
	cy.get('#addNew > a > .fas').click()
	cy.wait(1000)
	cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type("BSID002")
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{downarrow}')
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .input-group > .col > .rbt > .rbt-input-hint-container > .rbt-input-main').type('{enter}')
	
	
	cy.wait(1000)
    cy.get('[name="wamount"]').clear()
    cy.get('[name="wamount"]').type('250.00')
	
     cy.wait(1000)
     cy.get('[name="gwPriority"]').select("1 - Medical Support Preferred/System Selected")

	 cy.wait(1000)	 
  	 cy.get("[type='reset']").should('contain', 'Reset')// verify Reset button
	 cy.get('[type="button"]').should('contain', 'Cancel')// verify cancel button	
	 cy.get("[type='submit']").should('contain', 'Save')// verify save button*/
	 
	 //cy.get('[type="button"]').click(({ multiple: true, force: true }))// click cancel- using multiple because "button" used in several places
	 cy.get("[type='submit']").click()// click save button
	 
	 cy.wait(1000)
//	 cy.get('.modal-footer > .btn').click()	
	 cy.wait(1000)
	 
	 cy.get('#filter > .fas').click()
	 cy.wait(1000)
	 
     cy.get('#calculateTaxes').click()
	 cy.wait(10000)
	 cy.get('.modal-footer > .btn').click()
	 cy.wait(1000)
     cy.get('#filter > .fas').click()
	 cy.wait(1000)
	 
})
	




})