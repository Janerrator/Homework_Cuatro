var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    // container.setAttribute("class", "light");
    container.classList.remove("dark");
    container.classList.add("light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});