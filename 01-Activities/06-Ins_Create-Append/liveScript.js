// create an element
var h1Tag = document.createElement("h1");
var newElement = document.createElement("div");

// build up your element
newElement.style.padding = "40px";
newElement.setAttribute("style", "background: lemonchiffon");
newElement.textContent = "I'm a new element";

// place your element in the DOM
h1Tag.prepend(newElement);
document.body.appendChild(h1Tag);