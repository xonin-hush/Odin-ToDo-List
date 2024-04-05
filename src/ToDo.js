import { divide } from "lodash"
//todo global variables
var temp = ""
let counter = ""
let element = ""
//-----------------------
const todoDialog = document.querySelector(".todo-dialog")
const editTodoDialog=document.querySelector("#edit-todo-dialog")
const submit = todoDialog.querySelector("#submit")
const editSubmit=editTodoDialog.querySelector("#edit-submit")
var currentLocation = ""
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
export function showTodo() {
  //  function showTodo() {
  counter = 1
  window.addEventListener('click', (e) => {
    let toDo = e.target.getAttribute("class")
    if (toDo == "card") {
      const index = document.querySelector(".index")
      element = e.target.value
      // console.log(projects[element][0].priority)//this is how to get projects info 
      currentLocation = element
      index.innerHTML = ""
      const todoHeader = document.createElement("div")
      const myTodos = document.createElement("h1")
      const addButton = addTodoButton()
      myTodos.textContent = "My Todos"
      todoHeader.appendChild(myTodos)
      todoHeader.appendChild(addButton)
      projectInfoCard(element)
      index.appendChild(todoHeader)
      // index.appendChild(projectInfoCard)
    }
    if (e.target.getAttribute("class") == "card todo-card") {
      editTodoDialog.showModal()
      console.log("is this working")
      editTodo(e.target.value)
    }
    if (e.target.getAttribute("class") == "button add-todo-button") {
      todoDialog.showModal()
    }
  });
}
showTodo()
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
      projects[currentLocation].push(temp)
      // showTodo()
      appendTodo()
      todoDialog.close(todoDialog.value); // Have to send the select box value here.
    }
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

function appendTodo() {
  const index = document.querySelector(".index")
  const todoContainer = document.createElement("div")
  todoContainer.classList.add("cards")
  const todo = document.createElement("div")
  todo.value = counter
  counter++
  todo.classList.add("card")
  todo.classList.add("todo-card")
  if (temp != "") {
    todoCard(temp, todo)
    console.log("hhhhhhhhhhhhheeeelo")
    todoContainer.appendChild(todo)
    index.appendChild(todoContainer)
  }
}
function editTodo(todoCard) {
  editSubmit.addEventListener("click", (event) => {
  console.log("edit todo is working")
    event.preventDefault(); // We don't want to submit this fake form
    var todoTitle = document.querySelector("#edit-title-input")
    var todoDescription = document.querySelector("#edit-description-input")
    var todoDeadLine = document.querySelector("#edit-date-input")
    var todoPriority = document.querySelector("#edit-priority-input")
    console.log(todoTitle.value)
    console.log(todoDescription.value)
    console.log(todoDeadLine.value)
    console.log(todoPriority.value)

    if (todoTitle.value && todoDescription.value && todoDeadLine.value && todoPriority.value !== "") {
      temp = new ToDo(todoTitle.value, todoDescription.value, todoDeadLine.value, todoPriority.value)
      // this is setting the counter in the project array-->[projectinfo,counter]
      projects[element].splice(todoCard,1,temp)
      console.log(projects)
      console.log("thisthisthis")
      // showTodo()
      appendTodo()
      editTodoDialog.close(editTodoDialog.value); // Have to send the select box value here.
    }
  });
}
console.log(document.querySelector("#todo-title-edit"))
