// DOM Elements
var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var targetEl = document.querySelector("#target");
var xEl = document.querySelector("#x");
var yEl = document.querySelector("#y");
var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var statusEl = document.querySelector("#status")

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

eventType.addEventListener("change", toggleDisplay);

document.addEventListener("click", function(event) {
  console.log(event);
  targetEl.textContent = event.target.textContent
  xEl.textContent = event.x;
  yEl.textContent = event.y;
});

document.addEventListener("keydown", function(event) {
  console.log(event);
  keyEl.textContent = event.key;
  codeEl.textContent = event.code;
  statusEl.textContent = "KEYDOWN event";
});