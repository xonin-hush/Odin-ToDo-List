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
      index.appendChild(todoHeader)
      // index.appendChild(projectInfoCard)
      projectInfoCard(element)
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
    projectInfoTitle.textContent = projects[element][0].title
    const projectInfoDescription = document.createElement("div")
    projectInfoDescription.textContent = projects[element][0].description
    projectInfoCard.appendChild(projectInfoTitle)
    projectInfoCard.appendChild(projectInfoDescription)
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
      // temp = new ProjectInfo(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value)
      temp = new ProjectInfo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUMxRzZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDVztBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdGhpcyBtb2R1bGUgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgaXMgaXQgYWJvdXQgVG9Eb3NcbndpbmRvdy5wcm9qZWN0cyA9IFtdLy9kb25lXG4vL2NyZWF0ZXMgcHJvamVjdCB0aGF0IHdlJ3JlIGdvaW5nIHRvIHB1dCB0b2RvIHMgaW4gaXRcbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZVRpbWUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG59XG5jb25zdCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRpYWxvZ1wiKVxuY29uc3Qgc3VibWl0ID0gdG9kb0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2RvKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCB0b0RvID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICBpZiAodG9EbyA9PSBcImNhcmRcIikge1xuICAgICAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4XCIpXG4gICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAvLyBwcm9qZWN0SW5mb0NhcmQoZWxlbWVudClcblxuICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2VsZW1lbnRdWzBdLnByaW9yaXR5KS8vdGhpcyBpcyBob3cgdG8gZ2V0IHByb2plY3RzIGluZm8gXG4gICAgICBpbmRleC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgY29uc3QgbXlUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgICAgY29uc3QgYWRkQnV0dG9uID0gYWRkVG9kb0J1dHRvbigpXG4gICAgICBteVRvZG9zLnRleHRDb250ZW50ID0gXCJNeSBUb2Rvc1wiXG4gICAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKG15VG9kb3MpXG4gICAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICAgIGluZGV4LmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpXG4gICAgICAvLyBpbmRleC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mb0NhcmQpXG4gICAgICBwcm9qZWN0SW5mb0NhcmQoZWxlbWVudClcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGFkZC10b2RvLWJ1dHRvblwiKSB7XG4gICAgICB0b2RvRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgfVxuICB9KTtcbn1cbnNob3dUb2RvKClcbmZ1bmN0aW9uIGFkZFRvZG9CdXR0b24oKSB7XG4gIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKVxuICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idXR0b25cIilcbiAgYWRkVG9kby50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIlxuICByZXR1cm4gYWRkVG9kb1xuXG59XG5mdW5jdGlvbiBnZXRUb2RvSW5mbygpIHsgLy90YWtlcyBpbmZvIGZyb20gZGlhbG9nIGZvcm0gYW5kIHNlbmRzIGl0IHRvIHByb2plY3RzV2luZG93XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdWJtaXQgdGhpcyBmYWtlIGZvcm1cbiAgICB2YXIgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1pbnB1dFwiKVxuICAgIHZhciB0ZW1wID0gdG9kb1RpdGxlLnZhbHVlXG4gICAgdmFyIHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24taW5wdXRcIilcbiAgICB2YXIgdG9kb0RlYWRMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpXG4gICAgdmFyIHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktaW5wdXRcIilcbiAgICBpZiAodG9kb1RpdGxlLnZhbHVlICYmIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSAmJiB0b2RvRGVhZExpbmUudmFsdWUgJiYgdG9kb1ByaW9yaXR5LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB0ZW1wID0gbmV3IFByb2plY3RJbmZvKHByb2plY3RUaXRsZS52YWx1ZSwgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlLCBwcm9qZWN0RGVhZExpbmUudmFsdWUsIHByb2plY3RQcmlvcml0eS52YWx1ZSlcbiAgICAgIC8vIHRlbXAgPSBuZXcgVG9EbyhcInByb2plY3RUaXRsZS52YWx1ZVwiLCBcInByb2plY3REZXNjcmlwdGlvbi52YWx1ZVwiLCBcInByb2plY3REZWFkTGluZS52YWx1ZVwiLCBcInByb2plY3RQcmlvcml0eS52YWx1ZVwiKVxuICAgICAgLy8gdGhpcyBpcyBzZXR0aW5nIHRoZSBjb3VudGVyIGluIHRoZSBwcm9qZWN0IGFycmF5LS0+W3Byb2plY3RpbmZvLGNvdW50ZXJdXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgIHNob3dUb2RvKClcbiAgICAgIHRvZG9DYXJkKClcbiAgICAgIHRvZG9EaWFsb2cuY2xvc2UodG9kb0RpYWxvZy52YWx1ZSk7IC8vIEhhdmUgdG8gc2VuZCB0aGUgc2VsZWN0IGJveCB2YWx1ZSBoZXJlLlxuICAgIH1cbiAgfSk7XG59XG5nZXRUb2RvSW5mbygpXG5cbmZ1bmN0aW9uIHRvZG9DYXJkKHByb2plY3QpIHtcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkudGl0bGVcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkuZGVzY3JpcHRpb25cbiAgY29uc3QgdG9kb0R1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHRvZG9EdWVUaW1lLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LmR1ZVRpbWVcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkucHJpb3JpdHlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvZG9EdWVUaW1lKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSlcblxufVxuZnVuY3Rpb24gcHJvamVjdEluZm9DYXJkKGVsZW1lbnQpIHtcbiAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4XCIpXG4gIGNvbnN0IHByb2plY3RJbmZvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgaWYgKHByb2plY3RzW2VsZW1lbnRdWzBdKSB7XG4gICAgcHJvamVjdEluZm9DYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpXG4gICAgY29uc3QgcHJvamVjdEluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0SW5mb1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbZWxlbWVudF1bMF0udGl0bGVcbiAgICBjb25zdCBwcm9qZWN0SW5mb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RJbmZvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c1tlbGVtZW50XVswXS5kZXNjcmlwdGlvblxuICAgIHByb2plY3RJbmZvQ2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mb1RpdGxlKVxuICAgIHByb2plY3RJbmZvQ2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mb0Rlc2NyaXB0aW9uKVxuICB9XG4gIGluZGV4LmFwcGVuZENoaWxkKHByb2plY3RJbmZvQ2FyZClcblxufVxuLy9jaGVja3MgaWYgdGhlIGVsZW1lbnQgY2xpY2tlZCBpcyBpdCdzIGEgY2FyZCB0aGVuIGRvIHNvbWV0aGluZyBhYm91dCBpdFxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vIGxldCBlbGVtZW50ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcbi8vIGlmIChlbGVtZW50ID09IFwiY2FyZFwiKSB7XG4vLyBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ID09IFwiY2FyZFwiKVxuLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4vLyB9XG4vLyB9KTsiLCJpbXBvcnQgeyB2aWV3VG9kbyB9IGZyb20gXCIuL1RvRG9cIlxuLy90aGlzIG1vZHVsZSBzaG91bGQgYmUgcmVzcG9uc2libGUgZm9yIGFsbCBpcyBpdCBhYm91dCBQcm9qZWN0c1xuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKVxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIilcbmNvbnN0IHN1Ym1pdCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxuY2xhc3MgUHJvamVjdEluZm8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZVRpbWUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleFwiKVxuICBpbmRleC5pbm5lckhUTUwgPSBcIlwiXG4gIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgbXlQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIlxuICBpbmRleC5hcHBlbmRDaGlsZChteVByb2plY3RzKVxubGV0IGNvdW50ZXIgPSAwXG4gIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudFswXS50aXRsZSlcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcImNhcmRcIilcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIilcbiAgICBwcmlvcml0eUNvbG9yKHByb2plY3QsIGVsZW1lbnRbMF0ucHJpb3JpdHkpXG4gICAgcHJvamVjdENhcmQoZWxlbWVudFswXSwgcHJvamVjdClcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgIHByb2plY3QudmFsdWU9Y291bnRlclxuICAgIGluZGV4LmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKVxuICAgIGNvdW50ZXIrK1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdENhcmQocHJvamVjdFByb3BlcnR5LCBwcm9qZWN0KSB7IC8vdGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgY2FyZFxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS50aXRsZVxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS5kZXNjcmlwdGlvblxuICBjb25zdCBwcm9qZWN0RHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgcHJvamVjdER1ZVRpbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkuZHVlVGltZVxuICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS5wcmlvcml0eVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdER1ZVRpbWUpXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5KVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5mbygpIHsgLy90YWtlcyBpbmZvIGZyb20gZGlhbG9nIGZvcm0gYW5kIHNlbmRzIGl0IHRvIHByb2plY3RzV2luZG93XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdWJtaXQgdGhpcyBmYWtlIGZvcm1cbiAgICBjb25zdCBwcm9qZWN0ID0gW11cbiAgICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1pbnB1dFwiKVxuICAgIHZhciB0ZW1wID0gcHJvamVjdFRpdGxlLnZhbHVlXG4gICAgdmFyIHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24taW5wdXRcIilcbiAgICB2YXIgcHJvamVjdERlYWRMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpXG4gICAgdmFyIHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktaW5wdXRcIilcbiAgICBpZiAocHJvamVjdFRpdGxlLnZhbHVlICYmIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSAmJiBwcm9qZWN0RGVhZExpbmUudmFsdWUgJiYgcHJvamVjdFByaW9yaXR5LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAvLyB0ZW1wID0gbmV3IFByb2plY3RJbmZvKHByb2plY3RUaXRsZS52YWx1ZSwgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlLCBwcm9qZWN0RGVhZExpbmUudmFsdWUsIHByb2plY3RQcmlvcml0eS52YWx1ZSlcbiAgICAgIHRlbXAgPSBuZXcgUHJvamVjdEluZm8oXCJwcm9qZWN0VGl0bGUudmFsdWVcIiwgXCJwcm9qZWN0RGVzY3JpcHRpb24udmFsdWVcIiwgXCJwcm9qZWN0RGVhZExpbmUudmFsdWVcIiwgXCJwcm9qZWN0UHJpb3JpdHkudmFsdWVcIilcbiAgICAgIHByb2plY3QucHVzaCh0ZW1wKVxuICAgICAgLy8gdGhpcyBpcyBzZXR0aW5nIHRoZSBjb3VudGVyIGluIHRoZSBwcm9qZWN0IGFycmF5LS0+W3Byb2plY3RpbmZvLGNvdW50ZXJdXG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgIHNob3dQcm9qZWN0cygpXG4gICAgICBkaWFsb2cuY2xvc2UoZGlhbG9nLnZhbHVlKTsgLy8gSGF2ZSB0byBzZW5kIHRoZSBzZWxlY3QgYm94IHZhbHVlIGhlcmUuXG4gICAgfVxuICB9KTtcbn1cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlhbG9nLnNob3dNb2RhbCgpXG59KTtcbmdldFByb2plY3RJbmZvKClcbmZ1bmN0aW9uIHByaW9yaXR5Q29sb3IocHJvamVjdCwgcHJvamVjdFByaW9yaXR5KSB7XG4gIGlmIChwcm9qZWN0UHJpb3JpdHkgPT0gXCJwcmlvcml0eTFcIikge1xuICAgIHByb2plY3Quc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCAjZmYxNzE3XCJcbiAgfVxuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHkyXCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgI2ZmZTgxN1wiXG4gIH1cbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5M1wiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICNhZWZmMTdcIlxuICB9XG4gIGlmIChwcm9qZWN0UHJpb3JpdHkgPT0gXCJwcmlvcml0eTRcIikge1xuICAgIHByb2plY3Quc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCAjMTdiZGZmXCJcbiAgfVxuXG59XG5cbi8vIGZ1bmN0aW9uIGRvU3R1ZmYoKSB7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyAgfVxuLy8gIHNldEludGVydmFsKGRvU3R1ZmYsIDUwMDApO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB2aWV3VG9kbyB9IGZyb20gXCIuL1RvRG9cIlxuaW1wb3J0IHtmb3JtYXQsIGNvbXBhcmVBc2N9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgRGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9