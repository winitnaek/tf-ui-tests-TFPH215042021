///<reference types="cypress"/>

describe("Locating Elements", function ()
{
  it("Verify types of locators", function()
  {
	  cy.visit("https://demo.nopcommerce.com/") //Opens the URL
	  
	  cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //typing information in the search box
	  
	  cy.get("[type='submit']").click() //click on the search button
	  
	  cy.get(".product-box-add-to-cart-button[value='Add to cart']").click() 
	  
	  cy.get("#product_enteredQuantity_4").clear().type("2") // Entering new Quanity
	  
	  cy.get("#add-to-cart-button-4").click() //clicking add to cart after updating quanity
	  
	  cy.wait(5000) //sleep or pause 5 secs
	  
	  cy.get("#topcartlink > a > span.cart-label").click() //shopping cart link 
	  
	  cy.wait (3000)//sleep or pause 3 secs
	  
	  cy.get(".product-unit-price").contains("$1,800.00") //validating point
  });
});