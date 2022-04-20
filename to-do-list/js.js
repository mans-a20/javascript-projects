const toDoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");

//Add button
addButton.addEventListener("click", addToDo);

//Add button function
function addToDo(e) {
  e.preventDefault();

  //make a div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  //make a li
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoLi.innerText = toDoInput.value;
  if (toDoInput.value == "") {
    alert("The input field is empty! Please type something");
  } else {
    //append li to div
    todoDiv.appendChild(todoLi);

    //make a edit button inside the div
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(editButton);
    // check button function
    editButton.addEventListener(
      "click",
      () => (todoLi.style.textDecoration = "line-through")
    );

    //make a trash button inside the div
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    //trash button function
    trashButton.addEventListener("click", () =>
      todoDiv.parentNode.removeChild(todoDiv)
    );

    todoDiv.appendChild(trashButton);

    toDoList.appendChild(todoDiv);

    toDoInput.value = "";
  }
}
