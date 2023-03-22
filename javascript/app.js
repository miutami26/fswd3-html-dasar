// const form = document.querySelector(".form");
// const input = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");

// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// renderTodos();

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const text = input.value.trim();

//   if (text !== "") {
//     const todo = {
//       id: new Date().getTime(),
//       text,
//       completed: false,
//     };
//     todos.push(todo);
//     input.value = "";
//     saveTodos();
//     renderTodos();
//   }
// });

// todoList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("checkbox")) {
//     const todoId = parseInt(event.target.parentElement.getAttribute("data-id"));
//     const todo = todos.find((t) => t.id === todoId);
//     todo.completed = !todo.completed;
//     saveTodos();
//     renderTodos();
//   } else if (event.target.classList.contains("delete")) {
//     const todoId = parseInt(event.target.parentElement.getAttribute("data-id"));
//     todos = todos.filter((t) => t.id !== todoId);
//     saveTodos();
//     renderTodos();
//   }
// });

// function renderTodos() {
//   todoList.innerHTML = "";
//   todos.forEach((todo) => {
//     const li = document.createElement("li");
//     li.setAttribute("data-id", todo.id);
//     li.classList.add("todo-item");

//     const text = document.createElement("span");
//     text.classList.add("text");
//     text.innerHTML = todo.text;
//     li.appendChild(text);

//     const deleteButton = document.createElement("span");
//     deleteButton.classList.add("delete");
//     deleteButton.innerHTML = "&times;";
//     li.appendChild(deleteButton);

//     todoList.appendChild(li);
//   });
// }

// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

const form = document.querySelector(".form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

function addTodoItem(event) {
  event.preventDefault();
  const todoText = input.value;
  input.value = "";
  const todoItem = { text: todoText };

  fetch("https://crudcrud.com/api/1c0e0355ae2844d080ba6ce10bdefaf0/mahasiswa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoItem),
  })
    .then((response) => response.json())
    .then((data) => {
      const li = document.createElement("li");
      li.textContent = data.text;
      todoList.appendChild(li);
    })
    .catch((error) => console.error(error));
}
form.addEventListener("submit", addTodoItem);
