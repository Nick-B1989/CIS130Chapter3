/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: NIck Baum
      Date: 10/21/2024  

      Filename: project03-01.js
*/

// Declare a variable named menuItems containing the collection of HTML elements
let menuItems = document.getElementsByClassName("menuItem");

// Create a for loop that loops through the contents of the menuItems collection with a counter variable that starts with a value of 0 and ends with a value less than the length of the menuItems collection.
      for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", calcTotal);
      }

// Create a function to calculate the total cost of the order given the selected menu items.
function calcTotal() {
      // Declare the variable, setting it to 0
      let orderTotal = 0;

      // Create a for loop that loop through the contents of the menuItems collection.
      for (let i = 0; i < menuItems.length; i++) {

            // Apply an if statement that tests whether the item has been checked.
            if (menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value);
            }
      }

      // Change the innerHTML property of the element with the id "billTotal" to the value returned by the formatCurrency function with a parameter of orderTotal.
      document.getElementById ("billTotal").innerHTML = formatCurrency(orderTotal);
}


 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }