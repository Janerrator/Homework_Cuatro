// DOM Elements
var billInput = document.querySelector("#bill-input");
var tipInput = document.querySelector("#tip-input");
var submitButton = document.querySelector("#submit");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");

// Starting data or placeholder

// functions
function addTip(event) {
  // don't reload
  event.preventDefault();
  // updated the data
  var tipPercentage = tipInput.value / 100;
  var totalBill = parseFloat(billInput.value);
  var tipAmount = totalBill * tipPercentage;
  var newTotal = totalBill + tipAmount;
  console.log(newTotal);
  // update the display of the data in the DOM
  tipAmountEl.textContent = "$"+tipAmount;
  newTotalEl.textContent = "$"+newTotal

}

// user input (listeners)
submitButton.addEventListener("click", addTip);