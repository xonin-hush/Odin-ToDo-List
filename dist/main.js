/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTodo: () => (/* binding */ showTodo)
/* harmony export */ });
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
const todoDialog = document.querySelector(".todo-dialog")
const submit = todoDialog.querySelector("#submit")
function showTodo() {
  window.addEventListener('click', (e) => {
    let toDo = e.target.getAttribute("class")
    if (toDo == "card") {
      const index = document.querySelector(".index")
      let element = e.target.value
      // projectInfoCard(element)

      console.log(element)
      console.log(projects[element][0].priority)//this is how to get projects info 
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
    var todoTitle = document.querySelector("#title-input")
    var temp = todoTitle.value
    var todoDescription = document.querySelector("#description-input")
    var todoDeadLine = document.querySelector("#date-input")
    var todoPriority = document.querySelector("#priority-input")
    if (todoTitle.value && todoDescription.value && todoDeadLine.value && todoPriority.value !== "") {
      temp = new ProjectInfo(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value)
      // temp = new ToDo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value")
      // this is setting the counter in the project array-->[projectinfo,counter]
      console.log(projects)
      showTodo()
      todoCard()
      todoDialog.close(todoDialog.value); // Have to send the select box value here.
    }
  });
}
getTodoInfo()

function todoCard(project) {
  const todoTitle = document.createElement("div")
  todoTitle.textContent = projectProperty.title
  const todoDescription = document.createElement("div")
  todoDescription.textContent = projectProperty.description
  const todoDueTime = document.createElement("div")
  todoDueTime.textContent = projectProperty.dueTime
  const todoPriority = document.createElement("div")
  todoPriority.textContent = projectProperty.priority
  project.appendChild(todoTitle)
  project.appendChild(todoDescription)
  project.appendChild(todoDueTime)
  project.appendChild(todoPriority)

}
function projectInfoCard(element) {
  const index = document.querySelector(".index")
  const projectInfoCard = document.createElement("div")
  if (projects[element][0]) {
    projectInfoCard.classList.add("card")
    const projectInfoTitle = document.createElement("div")
    projectInfoTitle.textContent ="Project: "+ projects[element][0].title
    const projectInfoDescription = document.createElement("div")
    projectInfoDescription.textContent ="Description: "+ projects[element][0].description
    const projectInfoDueTime= document.createElement("div")
    projectInfoDueTime.textContent="Dead Line: "+ projects[element][0].dueTime
    projectInfoCard.appendChild(projectInfoTitle)
    projectInfoCard.appendChild(projectInfoDescription)
    projectInfoCard.appendChild(projectInfoDueTime)
    projectInfoCard.classList.add("project-info-card")
  }
  index.appendChild(projectInfoCard)

}
//checks if the element clicked is it's a card then do something about it
// window.addEventListener('click', (e) => {
// let element = e.target.getAttribute("class")
// if (element == "card") {
// if (e.target.classList == "card")
// console.log(e.target.value)
// }
// });

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showProjects: () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");

//this module should be responsible for all is it about Projects
const dialog = document.querySelector("dialog")
const addProject = document.querySelector("#add-project")
const submit = dialog.querySelector("#submit")
class ProjectInfo {
  constructor(title, description, dueTime, priority) {
    this.title = title
    this.description = description
    this.dueTime = dueTime
    this.priority = priority
  }
}

function showProjects() {
  const index = document.querySelector(".index")
  index.innerHTML = ""
  const myProjects = document.createElement("h1")
  myProjects.textContent = "My Projects"
  index.appendChild(myProjects)
let counter = 0
  projects.forEach(element => {
    console.log(element[0].title)
    const projectsContainer = document.createElement("div")
    const project = document.createElement("div")
    project.classList.add("card")
    projectsContainer.classList.add("cards")
    priorityColor(project, element[0].priority)
    projectCard(element[0], project)
    projectsContainer.appendChild(project)
    project.value=counter
    index.appendChild(projectsContainer)
    counter++
  });
}

function projectCard(projectProperty, project) { //this function creates a card
  const projectTitle = document.createElement("div")
  projectTitle.textContent = projectProperty.title
  const projectDescription = document.createElement("div")
  projectDescription.textContent = projectProperty.description
  const projectDueTime = document.createElement("div")
  projectDueTime.textContent = projectProperty.dueTime
  const projectPriority = document.createElement("div")
  projectPriority.textContent = projectProperty.priority
  project.appendChild(projectTitle)
  project.appendChild(projectDescription)
  project.appendChild(projectDueTime)
  project.appendChild(projectPriority)
}

function getProjectInfo() { //takes info from dialog form and sends it to projectsWindow
  submit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    const project = []
    var projectTitle = document.querySelector("#title-input")
    var temp = projectTitle.value
    var projectDescription = document.querySelector("#description-input")
    var projectDeadLine = document.querySelector("#date-input")
    var projectPriority = document.querySelector("#priority-input")
    if (projectTitle.value && projectDescription.value && projectDeadLine.value && projectPriority.value !== "") {
      temp = new ProjectInfo(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value)
      // temp = new ProjectInfo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value")
      project.push(temp)
      // this is setting the counter in the project array-->[projectinfo,counter]
      projects.push(project)
      console.log(projects)
      showProjects()
      dialog.close(dialog.value); // Have to send the select box value here.
    }
  });
}
addProject.addEventListener("click", () => {
  dialog.showModal()
});
getProjectInfo()
function priorityColor(project, projectPriority) {
  if (projectPriority == "priority1") {
    project.style.borderLeft = "10px solid #ff1717"
  }
  if (projectPriority == "priority2") {
    project.style.borderLeft = "10px solid #ffe817"
  }
  if (projectPriority == "priority3") {
    project.style.borderLeft = "10px solid #aeff17"
  }
  if (projectPriority == "priority4") {
    project.style.borderLeft = "10px solid #17bdff"
  }

}

// function doStuff() {
// console.log(projects);
//  }
//  setInterval(doStuff, 5000);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQzlHNkI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNXO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9Ub0RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy90aGlzIG1vZHVsZSBzaG91bGQgYmUgcmVzcG9uc2libGUgZm9yIGFsbCBpcyBpdCBhYm91dCBUb0Rvc1xud2luZG93LnByb2plY3RzID0gW10vL2RvbmVcbi8vY3JlYXRlcyBwcm9qZWN0IHRoYXQgd2UncmUgZ29pbmcgdG8gcHV0IHRvZG8gcyBpbiBpdFxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlVGltZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gIH1cbn1cbmNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGlhbG9nXCIpXG5jb25zdCBzdWJtaXQgPSB0b2RvRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RvZG8oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IHRvRG8gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIGlmICh0b0RvID09IFwiY2FyZFwiKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIilcbiAgICAgIGxldCBlbGVtZW50ID0gZS50YXJnZXQudmFsdWVcbiAgICAgIC8vIHByb2plY3RJbmZvQ2FyZChlbGVtZW50KVxuXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbZWxlbWVudF1bMF0ucHJpb3JpdHkpLy90aGlzIGlzIGhvdyB0byBnZXQgcHJvamVjdHMgaW5mbyBcbiAgICAgIGluZGV4LmlubmVySFRNTCA9IFwiXCJcbiAgICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBjb25zdCBteVRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICBjb25zdCBhZGRCdXR0b24gPSBhZGRUb2RvQnV0dG9uKClcbiAgICAgIG15VG9kb3MudGV4dENvbnRlbnQgPSBcIk15IFRvZG9zXCJcbiAgICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQobXlUb2RvcylcbiAgICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgICAgcHJvamVjdEluZm9DYXJkKGVsZW1lbnQpXG4gICAgICBpbmRleC5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKVxuICAgICAgLy8gaW5kZXguYXBwZW5kQ2hpbGQocHJvamVjdEluZm9DYXJkKVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJidXR0b24gYWRkLXRvZG8tYnV0dG9uXCIpIHtcbiAgICAgIHRvZG9EaWFsb2cuc2hvd01vZGFsKClcbiAgICB9XG4gIH0pO1xufVxuc2hvd1RvZG8oKVxuZnVuY3Rpb24gYWRkVG9kb0J1dHRvbigpIHtcbiAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpXG4gIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWJ1dHRvblwiKVxuICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCJBZGQgVG9kb1wiXG4gIHJldHVybiBhZGRUb2RvXG5cbn1cbmZ1bmN0aW9uIGdldFRvZG9JbmZvKCkgeyAvL3Rha2VzIGluZm8gZnJvbSBkaWFsb2cgZm9ybSBhbmQgc2VuZHMgaXQgdG8gcHJvamVjdHNXaW5kb3dcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBXZSBkb24ndCB3YW50IHRvIHN1Ym1pdCB0aGlzIGZha2UgZm9ybVxuICAgIHZhciB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWlucHV0XCIpXG4gICAgdmFyIHRlbXAgPSB0b2RvVGl0bGUudmFsdWVcbiAgICB2YXIgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1pbnB1dFwiKVxuICAgIHZhciB0b2RvRGVhZExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtaW5wdXRcIilcbiAgICB2YXIgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1pbnB1dFwiKVxuICAgIGlmICh0b2RvVGl0bGUudmFsdWUgJiYgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlICYmIHRvZG9EZWFkTGluZS52YWx1ZSAmJiB0b2RvUHJpb3JpdHkudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRlbXAgPSBuZXcgUHJvamVjdEluZm8ocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUsIHByb2plY3REZWFkTGluZS52YWx1ZSwgcHJvamVjdFByaW9yaXR5LnZhbHVlKVxuICAgICAgLy8gdGVtcCA9IG5ldyBUb0RvKFwicHJvamVjdFRpdGxlLnZhbHVlXCIsIFwicHJvamVjdERlc2NyaXB0aW9uLnZhbHVlXCIsIFwicHJvamVjdERlYWRMaW5lLnZhbHVlXCIsIFwicHJvamVjdFByaW9yaXR5LnZhbHVlXCIpXG4gICAgICAvLyB0aGlzIGlzIHNldHRpbmcgdGhlIGNvdW50ZXIgaW4gdGhlIHByb2plY3QgYXJyYXktLT5bcHJvamVjdGluZm8sY291bnRlcl1cbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgc2hvd1RvZG8oKVxuICAgICAgdG9kb0NhcmQoKVxuICAgICAgdG9kb0RpYWxvZy5jbG9zZSh0b2RvRGlhbG9nLnZhbHVlKTsgLy8gSGF2ZSB0byBzZW5kIHRoZSBzZWxlY3QgYm94IHZhbHVlIGhlcmUuXG4gICAgfVxuICB9KTtcbn1cbmdldFRvZG9JbmZvKClcblxuZnVuY3Rpb24gdG9kb0NhcmQocHJvamVjdCkge1xuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS50aXRsZVxuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS5kZXNjcmlwdGlvblxuICBjb25zdCB0b2RvRHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgdG9kb0R1ZVRpbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkuZHVlVGltZVxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS5wcmlvcml0eVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvZG9UaXRsZSlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb0R1ZVRpbWUpXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KVxuXG59XG5mdW5jdGlvbiBwcm9qZWN0SW5mb0NhcmQoZWxlbWVudCkge1xuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIilcbiAgY29uc3QgcHJvamVjdEluZm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBpZiAocHJvamVjdHNbZWxlbWVudF1bMF0pIHtcbiAgICBwcm9qZWN0SW5mb0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIilcbiAgICBjb25zdCBwcm9qZWN0SW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RJbmZvVGl0bGUudGV4dENvbnRlbnQgPVwiUHJvamVjdDogXCIrIHByb2plY3RzW2VsZW1lbnRdWzBdLnRpdGxlXG4gICAgY29uc3QgcHJvamVjdEluZm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0SW5mb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cIkRlc2NyaXB0aW9uOiBcIisgcHJvamVjdHNbZWxlbWVudF1bMF0uZGVzY3JpcHRpb25cbiAgICBjb25zdCBwcm9qZWN0SW5mb0R1ZVRpbWU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0SW5mb0R1ZVRpbWUudGV4dENvbnRlbnQ9XCJEZWFkIExpbmU6IFwiKyBwcm9qZWN0c1tlbGVtZW50XVswXS5kdWVUaW1lXG4gICAgcHJvamVjdEluZm9DYXJkLmFwcGVuZENoaWxkKHByb2plY3RJbmZvVGl0bGUpXG4gICAgcHJvamVjdEluZm9DYXJkLmFwcGVuZENoaWxkKHByb2plY3RJbmZvRGVzY3JpcHRpb24pXG4gICAgcHJvamVjdEluZm9DYXJkLmFwcGVuZENoaWxkKHByb2plY3RJbmZvRHVlVGltZSlcbiAgICBwcm9qZWN0SW5mb0NhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mby1jYXJkXCIpXG4gIH1cbiAgaW5kZXguYXBwZW5kQ2hpbGQocHJvamVjdEluZm9DYXJkKVxuXG59XG4vL2NoZWNrcyBpZiB0aGUgZWxlbWVudCBjbGlja2VkIGlzIGl0J3MgYSBjYXJkIHRoZW4gZG8gc29tZXRoaW5nIGFib3V0IGl0XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gbGV0IGVsZW1lbnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuLy8gaWYgKGVsZW1lbnQgPT0gXCJjYXJkXCIpIHtcbi8vIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJjYXJkXCIpXG4vLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbi8vIH1cbi8vIH0pOyIsImltcG9ydCB7IHZpZXdUb2RvIH0gZnJvbSBcIi4vVG9Eb1wiXG4vL3RoaXMgbW9kdWxlIHNob3VsZCBiZSByZXNwb25zaWJsZSBmb3IgYWxsIGlzIGl0IGFib3V0IFByb2plY3RzXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxuY29uc3Qgc3VibWl0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpXG5jbGFzcyBQcm9qZWN0SW5mbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlVGltZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4XCIpXG4gIGluZGV4LmlubmVySFRNTCA9IFwiXCJcbiAgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICBteVByb2plY3RzLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiXG4gIGluZGV4LmFwcGVuZENoaWxkKG15UHJvamVjdHMpXG5sZXQgY291bnRlciA9IDBcbiAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdLnRpdGxlKVxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKVxuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiKVxuICAgIHByaW9yaXR5Q29sb3IocHJvamVjdCwgZWxlbWVudFswXS5wcmlvcml0eSlcbiAgICBwcm9qZWN0Q2FyZChlbGVtZW50WzBdLCBwcm9qZWN0KVxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgcHJvamVjdC52YWx1ZT1jb3VudGVyXG4gICAgaW5kZXguYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpXG4gICAgY291bnRlcisrXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2FyZChwcm9qZWN0UHJvcGVydHksIHByb2plY3QpIHsgLy90aGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBjYXJkXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LnRpdGxlXG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LmRlc2NyaXB0aW9uXG4gIGNvbnN0IHByb2plY3REdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0RHVlVGltZS50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS5kdWVUaW1lXG4gIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LnByaW9yaXR5XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbilcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RHVlVGltZSlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpXG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmZvKCkgeyAvL3Rha2VzIGluZm8gZnJvbSBkaWFsb2cgZm9ybSBhbmQgc2VuZHMgaXQgdG8gcHJvamVjdHNXaW5kb3dcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBXZSBkb24ndCB3YW50IHRvIHN1Ym1pdCB0aGlzIGZha2UgZm9ybVxuICAgIGNvbnN0IHByb2plY3QgPSBbXVxuICAgIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWlucHV0XCIpXG4gICAgdmFyIHRlbXAgPSBwcm9qZWN0VGl0bGUudmFsdWVcbiAgICB2YXIgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1pbnB1dFwiKVxuICAgIHZhciBwcm9qZWN0RGVhZExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtaW5wdXRcIilcbiAgICB2YXIgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1pbnB1dFwiKVxuICAgIGlmIChwcm9qZWN0VGl0bGUudmFsdWUgJiYgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlICYmIHByb2plY3REZWFkTGluZS52YWx1ZSAmJiBwcm9qZWN0UHJpb3JpdHkudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRlbXAgPSBuZXcgUHJvamVjdEluZm8ocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUsIHByb2plY3REZWFkTGluZS52YWx1ZSwgcHJvamVjdFByaW9yaXR5LnZhbHVlKVxuICAgICAgLy8gdGVtcCA9IG5ldyBQcm9qZWN0SW5mbyhcInByb2plY3RUaXRsZS52YWx1ZVwiLCBcInByb2plY3REZXNjcmlwdGlvbi52YWx1ZVwiLCBcInByb2plY3REZWFkTGluZS52YWx1ZVwiLCBcInByb2plY3RQcmlvcml0eS52YWx1ZVwiKVxuICAgICAgcHJvamVjdC5wdXNoKHRlbXApXG4gICAgICAvLyB0aGlzIGlzIHNldHRpbmcgdGhlIGNvdW50ZXIgaW4gdGhlIHByb2plY3QgYXJyYXktLT5bcHJvamVjdGluZm8sY291bnRlcl1cbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgc2hvd1Byb2plY3RzKClcbiAgICAgIGRpYWxvZy5jbG9zZShkaWFsb2cudmFsdWUpOyAvLyBIYXZlIHRvIHNlbmQgdGhlIHNlbGVjdCBib3ggdmFsdWUgaGVyZS5cbiAgICB9XG4gIH0pO1xufVxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaWFsb2cuc2hvd01vZGFsKClcbn0pO1xuZ2V0UHJvamVjdEluZm8oKVxuZnVuY3Rpb24gcHJpb3JpdHlDb2xvcihwcm9qZWN0LCBwcm9qZWN0UHJpb3JpdHkpIHtcbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5MVwiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICNmZjE3MTdcIlxuICB9XG4gIGlmIChwcm9qZWN0UHJpb3JpdHkgPT0gXCJwcmlvcml0eTJcIikge1xuICAgIHByb2plY3Quc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCAjZmZlODE3XCJcbiAgfVxuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHkzXCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgI2FlZmYxN1wiXG4gIH1cbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5NFwiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICMxN2JkZmZcIlxuICB9XG5cbn1cblxuLy8gZnVuY3Rpb24gZG9TdHVmZigpIHtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vICB9XG4vLyAgc2V0SW50ZXJ2YWwoZG9TdHVmZiwgNTAwMCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHZpZXdUb2RvIH0gZnJvbSBcIi4vVG9Eb1wiXG5pbXBvcnQge2Zvcm1hdCwgY29tcGFyZUFzY30gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBEaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=