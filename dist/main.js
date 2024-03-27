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
const todoDialog = document.querySelector(".todo-dialog")
const submit = todoDialog.querySelector("#submit")

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
    var todoTitle = document.querySelector("#todo-title-input")
    console.log(todoTitle.value)
    var temp = todoTitle.value
    var todoDescription = document.querySelector("#description-input")
    var todoDeadLine = document.querySelector("#date-input")
    var todoPriority = document.querySelector("#priority-input")
    if (todoTitle.value && todoDescription.value && todoDeadLine.value && todoPriority.value !== "") {
      temp = new ToDo(todoTitle.value, todoDescription.value, todoDeadLine.value, todoPriority.value)
      // temp = new ToDo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value")
      // this is setting the counter in the project array-->[projectinfo,counter]
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
const projectDialog = document.querySelector("#project-dialog")
const addProject = document.querySelector("#add-project")
const submit = document.querySelector("#submit")
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
    var projectTitle = document.querySelector("#project-title-input")
    var projectDescription = document.querySelector("#project-description-input")
    var projectDeadLine = document.querySelector("#date-input")
    var projectPriority = document.querySelector("#priority-input")
    if (projectTitle.value && projectDescription.value && projectDeadLine.value && projectPriority.value !== "") {
      var temp = new ProjectInfo(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value)
      // temp = new ProjectInfo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value")
      project.push(temp)
      // this is setting the counter in the project array-->[projectinfo,counter]
      projects.push(project)
      console.log(projects)
      showProjects()
      projectDialog.close(projectDialog.value); // Have to send the select box value here.
    }
  });
}
addProject.addEventListener("click", () => {
  projectDialog.showModal()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUMvRzZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ1c7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRpYWxvZ1wiKVxuY29uc3Qgc3VibWl0ID0gdG9kb0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxuXG4vL3RoaXMgbW9kdWxlIHNob3VsZCBiZSByZXNwb25zaWJsZSBmb3IgYWxsIGlzIGl0IGFib3V0IFRvRG9zXG53aW5kb3cucHJvamVjdHMgPSBbXS8vZG9uZVxuLy9jcmVhdGVzIHByb2plY3QgdGhhdCB3ZSdyZSBnb2luZyB0byBwdXQgdG9kbyBzIGluIGl0XG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2RvKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCB0b0RvID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICBpZiAodG9EbyA9PSBcImNhcmRcIikge1xuICAgICAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4XCIpXG4gICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAvLyBwcm9qZWN0SW5mb0NhcmQoZWxlbWVudClcblxuICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2VsZW1lbnRdWzBdLnByaW9yaXR5KS8vdGhpcyBpcyBob3cgdG8gZ2V0IHByb2plY3RzIGluZm8gXG4gICAgICBpbmRleC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgY29uc3QgbXlUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgICAgY29uc3QgYWRkQnV0dG9uID0gYWRkVG9kb0J1dHRvbigpXG4gICAgICBteVRvZG9zLnRleHRDb250ZW50ID0gXCJNeSBUb2Rvc1wiXG4gICAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKG15VG9kb3MpXG4gICAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICAgIHByb2plY3RJbmZvQ2FyZChlbGVtZW50KVxuICAgICAgaW5kZXguYXBwZW5kQ2hpbGQodG9kb0hlYWRlcilcbiAgICAgIC8vIGluZGV4LmFwcGVuZENoaWxkKHByb2plY3RJbmZvQ2FyZClcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGFkZC10b2RvLWJ1dHRvblwiKSB7XG4gICAgICB0b2RvRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgfVxuICB9KTtcbn1cbnNob3dUb2RvKClcbmZ1bmN0aW9uIGFkZFRvZG9CdXR0b24oKSB7XG4gIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKVxuICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idXR0b25cIilcbiAgYWRkVG9kby50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIlxuICByZXR1cm4gYWRkVG9kb1xuXG59XG5mdW5jdGlvbiBnZXRUb2RvSW5mbygpIHsgLy90YWtlcyBpbmZvIGZyb20gZGlhbG9nIGZvcm0gYW5kIHNlbmRzIGl0IHRvIHByb2plY3RzV2luZG93XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdWJtaXQgdGhpcyBmYWtlIGZvcm1cbiAgICB2YXIgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlLWlucHV0XCIpXG4gICAgY29uc29sZS5sb2codG9kb1RpdGxlLnZhbHVlKVxuICAgIHZhciB0ZW1wID0gdG9kb1RpdGxlLnZhbHVlXG4gICAgdmFyIHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24taW5wdXRcIilcbiAgICB2YXIgdG9kb0RlYWRMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpXG4gICAgdmFyIHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktaW5wdXRcIilcbiAgICBpZiAodG9kb1RpdGxlLnZhbHVlICYmIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSAmJiB0b2RvRGVhZExpbmUudmFsdWUgJiYgdG9kb1ByaW9yaXR5LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB0ZW1wID0gbmV3IFRvRG8odG9kb1RpdGxlLnZhbHVlLCB0b2RvRGVzY3JpcHRpb24udmFsdWUsIHRvZG9EZWFkTGluZS52YWx1ZSwgdG9kb1ByaW9yaXR5LnZhbHVlKVxuICAgICAgLy8gdGVtcCA9IG5ldyBUb0RvKFwicHJvamVjdFRpdGxlLnZhbHVlXCIsIFwicHJvamVjdERlc2NyaXB0aW9uLnZhbHVlXCIsIFwicHJvamVjdERlYWRMaW5lLnZhbHVlXCIsIFwicHJvamVjdFByaW9yaXR5LnZhbHVlXCIpXG4gICAgICAvLyB0aGlzIGlzIHNldHRpbmcgdGhlIGNvdW50ZXIgaW4gdGhlIHByb2plY3QgYXJyYXktLT5bcHJvamVjdGluZm8sY291bnRlcl1cbiAgICAgIHNob3dUb2RvKClcbiAgICAgIHRvZG9DYXJkKCkgXG4gICAgICB0b2RvRGlhbG9nLmNsb3NlKHRvZG9EaWFsb2cudmFsdWUpOyAvLyBIYXZlIHRvIHNlbmQgdGhlIHNlbGVjdCBib3ggdmFsdWUgaGVyZS5cbiAgICB9XG4gIH0pO1xufVxuZ2V0VG9kb0luZm8oKVxuXG5mdW5jdGlvbiB0b2RvQ2FyZChwcm9qZWN0KSB7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LnRpdGxlXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LmRlc2NyaXB0aW9uXG4gIGNvbnN0IHRvZG9EdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICB0b2RvRHVlVGltZS50ZXh0Q29udGVudCA9IHByb2plY3RQcm9wZXJ0eS5kdWVUaW1lXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LnByaW9yaXR5XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbilcbiAgcHJvamVjdC5hcHBlbmRDaGlsZCh0b2RvRHVlVGltZSlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpXG5cbn1cbmZ1bmN0aW9uIHByb2plY3RJbmZvQ2FyZChlbGVtZW50KSB7XG4gIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleFwiKVxuICBjb25zdCBwcm9qZWN0SW5mb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGlmIChwcm9qZWN0c1tlbGVtZW50XVswXSkge1xuICAgIHByb2plY3RJbmZvQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKVxuICAgIGNvbnN0IHByb2plY3RJbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdEluZm9UaXRsZS50ZXh0Q29udGVudCA9XCJQcm9qZWN0OiBcIisgcHJvamVjdHNbZWxlbWVudF1bMF0udGl0bGVcbiAgICBjb25zdCBwcm9qZWN0SW5mb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RJbmZvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVwiRGVzY3JpcHRpb246IFwiKyBwcm9qZWN0c1tlbGVtZW50XVswXS5kZXNjcmlwdGlvblxuICAgIGNvbnN0IHByb2plY3RJbmZvRHVlVGltZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RJbmZvRHVlVGltZS50ZXh0Q29udGVudD1cIkRlYWQgTGluZTogXCIrIHByb2plY3RzW2VsZW1lbnRdWzBdLmR1ZVRpbWVcbiAgICBwcm9qZWN0SW5mb0NhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEluZm9UaXRsZSlcbiAgICBwcm9qZWN0SW5mb0NhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEluZm9EZXNjcmlwdGlvbilcbiAgICBwcm9qZWN0SW5mb0NhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEluZm9EdWVUaW1lKVxuICAgIHByb2plY3RJbmZvQ2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbmZvLWNhcmRcIilcbiAgfVxuICBpbmRleC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mb0NhcmQpXG5cbn1cbi8vY2hlY2tzIGlmIHRoZSBlbGVtZW50IGNsaWNrZWQgaXMgaXQncyBhIGNhcmQgdGhlbiBkbyBzb21ldGhpbmcgYWJvdXQgaXRcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyBsZXQgZWxlbWVudCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpXG4vLyBpZiAoZWxlbWVudCA9PSBcImNhcmRcIikge1xuLy8gaWYgKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSBcImNhcmRcIilcbi8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuLy8gfVxuLy8gfSk7IiwiaW1wb3J0IHsgdmlld1RvZG8gfSBmcm9tIFwiLi9Ub0RvXCJcbi8vdGhpcyBtb2R1bGUgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgaXMgaXQgYWJvdXQgUHJvamVjdHNcbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGlhbG9nXCIpXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIilcbmNsYXNzIFByb2plY3RJbmZvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIilcbiAgaW5kZXguaW5uZXJIVE1MID0gXCJcIlxuICBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gIG15UHJvamVjdHMudGV4dENvbnRlbnQgPSBcIk15IFByb2plY3RzXCJcbiAgaW5kZXguYXBwZW5kQ2hpbGQobXlQcm9qZWN0cylcbmxldCBjb3VudGVyID0gMFxuICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0udGl0bGUpXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpXG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpXG4gICAgcHJpb3JpdHlDb2xvcihwcm9qZWN0LCBlbGVtZW50WzBdLnByaW9yaXR5KVxuICAgIHByb2plY3RDYXJkKGVsZW1lbnRbMF0sIHByb2plY3QpXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICBwcm9qZWN0LnZhbHVlPWNvdW50ZXJcbiAgICBpbmRleC5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcilcbiAgICBjb3VudGVyKytcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDYXJkKHByb2plY3RQcm9wZXJ0eSwgcHJvamVjdCkgeyAvL3RoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGNhcmRcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkudGl0bGVcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkuZGVzY3JpcHRpb25cbiAgY29uc3QgcHJvamVjdER1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2plY3REdWVUaW1lLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LmR1ZVRpbWVcbiAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkucHJpb3JpdHlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REdWVUaW1lKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZm8oKSB7IC8vdGFrZXMgaW5mbyBmcm9tIGRpYWxvZyBmb3JtIGFuZCBzZW5kcyBpdCB0byBwcm9qZWN0c1dpbmRvd1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gc3VibWl0IHRoaXMgZmFrZSBmb3JtXG4gICAgY29uc3QgcHJvamVjdCA9IFtdXG4gICAgdmFyIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZS1pbnB1dFwiKVxuICAgIHZhciBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY3JpcHRpb24taW5wdXRcIilcbiAgICB2YXIgcHJvamVjdERlYWRMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpXG4gICAgdmFyIHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktaW5wdXRcIilcbiAgICBpZiAocHJvamVjdFRpdGxlLnZhbHVlICYmIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSAmJiBwcm9qZWN0RGVhZExpbmUudmFsdWUgJiYgcHJvamVjdFByaW9yaXR5LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB2YXIgdGVtcCA9IG5ldyBQcm9qZWN0SW5mbyhwcm9qZWN0VGl0bGUudmFsdWUsIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSwgcHJvamVjdERlYWRMaW5lLnZhbHVlLCBwcm9qZWN0UHJpb3JpdHkudmFsdWUpXG4gICAgICAvLyB0ZW1wID0gbmV3IFByb2plY3RJbmZvKFwicHJvamVjdFRpdGxlLnZhbHVlXCIsIFwicHJvamVjdERlc2NyaXB0aW9uLnZhbHVlXCIsIFwicHJvamVjdERlYWRMaW5lLnZhbHVlXCIsIFwicHJvamVjdFByaW9yaXR5LnZhbHVlXCIpXG4gICAgICBwcm9qZWN0LnB1c2godGVtcClcbiAgICAgIC8vIHRoaXMgaXMgc2V0dGluZyB0aGUgY291bnRlciBpbiB0aGUgcHJvamVjdCBhcnJheS0tPltwcm9qZWN0aW5mbyxjb3VudGVyXVxuICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICBzaG93UHJvamVjdHMoKVxuICAgICAgcHJvamVjdERpYWxvZy5jbG9zZShwcm9qZWN0RGlhbG9nLnZhbHVlKTsgLy8gSGF2ZSB0byBzZW5kIHRoZSBzZWxlY3QgYm94IHZhbHVlIGhlcmUuXG4gICAgfVxuICB9KTtcbn1cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKVxufSk7XG5nZXRQcm9qZWN0SW5mbygpXG5mdW5jdGlvbiBwcmlvcml0eUNvbG9yKHByb2plY3QsIHByb2plY3RQcmlvcml0eSkge1xuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHkxXCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgI2ZmMTcxN1wiXG4gIH1cbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5MlwiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICNmZmU4MTdcIlxuICB9XG4gIGlmIChwcm9qZWN0UHJpb3JpdHkgPT0gXCJwcmlvcml0eTNcIikge1xuICAgIHByb2plY3Quc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCAjYWVmZjE3XCJcbiAgfVxuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHk0XCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgIzE3YmRmZlwiXG4gIH1cblxufVxuXG4vLyBmdW5jdGlvbiBkb1N0dWZmKCkge1xuLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gIH1cbi8vICBzZXRJbnRlcnZhbChkb1N0dWZmLCA1MDAwKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdmlld1RvZG8gfSBmcm9tIFwiLi9Ub0RvXCJcbmltcG9ydCB7Zm9ybWF0LCBjb21wYXJlQXNjfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IERpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==