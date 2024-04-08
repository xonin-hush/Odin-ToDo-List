import { divide } from "lodash"
//todo global variables
var temp = ""
let counter = ""
let element = ""
var currentTodoLocation = ""

//-----------------------
const todoContainer = document.createElement("div")
todoContainer.classList.add("cards")
const todoDialog = document.querySelector(".todo-dialog")
const editTodoDialog = document.querySelector("#edit-todo-dialog")
const submit = todoDialog.querySelector("#submit")
const editSubmit = editTodoDialog.querySelector("#edit-submit")
//this module should be responsible for all is it about ToDos
window.projects = []//done
//creates project that we're going to put todo s in it
class ToDo {
  constructor(title, description, dueTime, priority) {
    this.title = title
    this.description = description
    this.dueTime = dueTime
    this.priority = priority
  }
}
export function todoWindow() {
  window.addEventListener('click', (e) => {
    let toDo = e.target.getAttribute("class")
    if (toDo == "card") {
      const index = document.querySelector(".index")
      element = e.target.value
      // console.log(projects[element][0].priority)//this is how to get projects info 
      index.innerHTML = ""
      const todoHeader = document.createElement("div")
      const myTodos = document.createElement("h1")
      const addButton = addTodoButton()
      myTodos.textContent = "My Todos"
      todoHeader.appendChild(myTodos)
      todoHeader.appendChild(addButton)
      projectInfoCard(element)
      index.appendChild(todoHeader)
      renderTodo()
    }
    if (e.target.getAttribute("class") == "card todo-card") {
      editTodoDialog.showModal()
      currentTodoLocation = e.target.value
      console.log(currentTodoLocation)
      console.log(projects[element][currentTodoLocation].title)
      var todoTitle = document.querySelector("#edit-title-input")
      var todoDescription = document.querySelector("#edit-description-input")
      var todoDeadLine = document.querySelector("#edit-date-input")
      var todoPriority = document.querySelector("#edit-priority-input")
      todoTitle.value = projects[element][currentTodoLocation].title
      todoDescription.value = projects[element][currentTodoLocation].description
      todoDeadLine.value = projects[element][currentTodoLocation].dueTime
      todoPriority.value = projects[element][currentTodoLocation].priority
      editTodo(currentTodoLocation)

    }
    if (e.target.getAttribute("class") == "button add-todo-button") {
      todoDialog.showModal()
    }
  });
}

function renderTodo() {
  const index = document.querySelector(".index")
  while (todoContainer.firstChild)//prevent cards from duplicating
  {
    todoContainer.removeChild(todoContainer.lastChild);
    todoContainer.classList.add('cards')
  }
  counter = 0
  projects[element].forEach(todo => {
    if (!todo.type) {
      counter++
      const todoElement = document.createElement("div")
      todoElement.value = counter
      todoElement.classList.add("card")
      todoElement.classList.add("todo-card")
      if (todo != "") {
        todoCard(todo, todoElement)
        priorityColor(todoElement,todo.priority)
        todoContainer.appendChild(todoElement)
        index.appendChild(todoContainer)
      }
    }
  });
}
todoWindow()
function addTodoButton() {
  const addTodo = document.createElement("button")
  addTodo.classList.add("button")
  addTodo.classList.add("add-todo-button")
  addTodo.textContent = "Add Todo"
  return addTodo

}
function getTodoInfo() { //takes info from dialog form and sends it to projectsWindow
  submit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    var todoTitle = document.querySelector("#todo-title-input")
    var todoDescription = document.querySelector("#todo-description-input")
    var todoDeadLine = document.querySelector("#todo-date-input")
    var todoPriority = document.querySelector("#todo-priority-input")
    if (todoTitle.value && todoDescription.value && todoDeadLine.value && todoPriority.value !== "") {
      temp = new ToDo(todoTitle.value, todoDescription.value, todoDeadLine.value, todoPriority.value)
      // this is setting the counter in the project array-->[projectinfo,counter]
      projects[element].push(temp)
      // todoWindow()
      todoDialog.close(todoDialog.value); // Have to send the select box value here.
    }
    renderTodo()

  });

}
getTodoInfo()

function todoCard(todoInfo, todo) {
  const todoTitle = document.createElement("div")
  todoTitle.textContent = todoInfo.title
  const todoDescription = document.createElement("div")
  todoDescription.textContent = todoInfo.description
  const todoDueTime = document.createElement("div")
  todoDueTime.textContent = todoInfo.dueTime
  const todoPriority = document.createElement("div")
  todoPriority.textContent = todoInfo.priority
  const todoCheckbox = document.createElement("div")
  todoCheckbox.innerHTML = '<label class="checkbox-btn"><label for="checkbox"></label><input id="checkbox" type="checkbox"><span class="checkmark"></span></label>'
  todo.appendChild(todoCheckbox)
  todo.appendChild(todoTitle)
  todo.appendChild(todoDescription)
  todo.appendChild(todoDueTime)
  todo.appendChild(todoPriority)
}



function editTodo(todoCard) {
  editSubmit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    var todoTitle = document.querySelector("#edit-title-input")
    var todoDescription = document.querySelector("#edit-description-input")
    var todoDeadLine = document.querySelector("#edit-date-input")
    var todoPriority = document.querySelector("#edit-priority-input")
    if (todoTitle.value && todoDescription.value && todoDeadLine.value && todoPriority.value !== "") {
      temp = new ToDo(todoTitle.value, todoDescription.value, todoDeadLine.value, todoPriority.value)
      // this is setting the counter in the project array-->[projectinfo,counter]
      projects[element].splice(todoCard, 1, temp)
      console.log(projects)
      editTodoDialog.close(editTodoDialog.value); // Have to send the select box value here.
      renderTodo()
    }
  }, { once: true })
}

function projectInfoCard(element) {
  const index = document.querySelector(".index")
  const projectInfoCard = document.createElement("div")
  if (projects[element][0]) {
    projectInfoCard.classList.add("card")
    const projectInfoTitle = document.createElement("div")
    projectInfoTitle.textContent = "Project: " + projects[element][0].title
    const projectInfoDescription = document.createElement("div")
    projectInfoDescription.textContent = "Description: " + projects[element][0].description
    const projectInfoDueTime = document.createElement("div")
    projectInfoDueTime.textContent = "Dead Line: " + projects[element][0].dueTime
    projectInfoCard.appendChild(projectInfoTitle)
    projectInfoCard.appendChild(projectInfoDescription)
    projectInfoCard.appendChild(projectInfoDueTime)
    projectInfoCard.classList.add("project-info-card")
  }
  index.appendChild(projectInfoCard)

}
function priorityColor(todo, todoPriority) {
  if (todoPriority == "priority1") {
    todo.style.borderLeft = "10px solid #ff1717"
  }
  if (todoPriority == "priority2") {
    todo.style.borderLeft = "10px solid #ffe817"
  }
  if (todoPriority == "priority3") {
    todo.style.borderLeft = "10px solid #aeff17"
  }
  if (todoPriority == "priority4") {
    todo.style.borderLeft = "10px solid #17bdff"
  }

}