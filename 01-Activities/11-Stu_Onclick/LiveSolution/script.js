// Connect to DOM elements
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var countElement = document.getElementById("count");

// starting data
var count = parseInt(countElement.textContent);

// click handlers
function handleIncrement() {
  // update the count data
  count++;
  // update the count display
  countElement.textContent = count;
}

function handleDecrement() {
    // is the count more than 0?
    if (count > 0) {
      // yes?
      // update the count data
      count--;
    }

  // update the count display
  countElement.textContent = count;
}

// get user input
incrementButton.addEventListener("click", handleIncrement)
decrementButton.addEventListener("click", handleDecrement)