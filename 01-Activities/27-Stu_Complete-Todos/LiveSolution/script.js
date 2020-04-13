var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.textContent = todo;
    todoList.appendChild(li);
    var button = document.createElement("button");
    button.innerHTML = "Complete";
    li.appendChild(button);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

todoList.addEventListener("click", function(event) {
  var todo = event.target;

  if (todo.matches("button")) {
    // get the index
    var index = todo.parentElement.getAttribute("data-index");
    // remove the todo at that index
    todos.splice(index, 1);
    // update the display with new data
    renderTodos();
  }
});