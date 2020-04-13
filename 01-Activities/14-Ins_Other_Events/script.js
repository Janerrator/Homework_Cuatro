// DOM Elements
var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

// Data
var elements = [
  h1El, h2El, h3El, pEl
];
var typeface;

// User Inputs 
typefaceEl.addEventListener("change", function(event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector(".container").style.fontFamily = typeface;
});

textAreaEl.addEventListener("keydown", function(event) {
  // updating data
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // updating display
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      element.textContent += event.key;
    });
  }
});

clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });
});