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
/* harmony export */   viewTodo: () => (/* binding */ viewTodo)
/* harmony export */ });
//this module should be responsible for all is it about ToDos
window.projects = []//done
let i = 0
//creates project that we're going to put todo s in it
// class ToDo {
//     constructor(title, description, dueTime, priority) {
//         this.title = title
//         this.description = description
//         this.dueTime = dueTime
//         this.priority = priority
//     }
// }


// export function testing() {
//     // window.addEventListener('click', (e) => {
//     //     let toDo = e.target.getAttribute("class")
//     //     if (toDo == "card") {
//     //         const index = document.querySelector(".index")
//     //         // index.innerHTML = ""
//     //         console.log(e.target.description)
//     //         viewTodo()
//     //     }
//     // });
// }
// testing()

//let test = new ToDo("Xonin", "description3", "dueTime1", "priority2")//done


function viewTodo(projectTitle,projectDescription,projectDueTime,projectPriority) {
    // const projectTitle = document.querySelector("project-title")
    // const projectDescription = document.querySelector("description")
    // let projectDueTime = e.getAttribute("dueTime")
    // let projectPriority = e.getAttribute("priority")
    console.log(projectTitle, projectDescription, projectDueTime, projectPriority)
    // console.log(projectAttribute,projectDescription)
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsWindow: () => (/* binding */ projectsWindow)
/* harmony export */ });
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");

//this module should be responsible for all is it about Projects
const dialog = document.querySelector("dialog")
const addProject = document.querySelector("#add-project")
const submit = dialog.querySelector("#submit")
let counter = 0
class ProjectInfo {
  constructor(title, description, dueTime, priority) {
    this.title = title
    this.description = description
    this.dueTime = dueTime
    this.priority = priority
  }
}
window.addEventListener('click', (e) => {
  let element = e.target.getAttribute("class")
  if (element == "card") {
    if (e.target.classList == "card")
      console.log(e.target.getAttribute("counter"))
  }
});
//takes info from "projects" and loops though it
//handles projects on the DOM
function projectsWindow() {
  const index = document.querySelector(".index")
  index.innerHTML = ""
  const myProjects = document.createElement("h1")
  myProjects.textContent = "My Projects"
  index.appendChild(myProjects)
  const projectsDiv = document.createElement("div")
  for (let projectIndex of projects) {
    for (let projectProperty of projectIndex) {
      if (typeof projectProperty != "number") {
        console.log(projectProperty)

        window.addEventListener('click', (e) => {
          let toDo = e.target.getAttribute("class")
          if (toDo == "card") {
            const index = document.querySelector(".index")
            // index.innerHTML = ""
            console.log(e.target)
            ;(0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.viewTodo)(projectProperty.title,projectProperty.description,projectProperty.dueTime,projectProperty.priority)
          }
        });


        const project = document.createElement("div")
        if (!project.getAttribute("counter")) {
          project.setAttribute("counter", counter)
        }
        project.classList.add("card")
        projectsDiv.classList.add("cards")
        // project.innerHTML = `<input type="checkbox" id="project" name="project" value="project${counter}">`
        priorityColor(project, projectProperty.priority)
        projectCard(projectProperty, project)
        projectsDiv.appendChild(project)
        index.appendChild(projectsDiv)
      }
      counter++
    }
  }
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
projectsWindow()

function getProjectInfo() { //takes info from dialog form and sends it to projectsWindow
  submit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    const project = []
    var projectTitle = document.querySelector("#title-input")
    var temp = projectTitle.value
    var projectDescription = document.querySelector("#description-input")
    var projectDeadLine = document.querySelector("#date-input")
    var projectPriority = document.querySelector("#priority-input")
    console.log(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value)
    if (projectTitle.value && projectDescription.value && projectDeadLine.value && projectPriority.value !== "") {
      temp = new ProjectInfo(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value, "on")

      // var temp = new ProjectInfo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value", "on")

      project.push(temp)
      projects.push(project)
      console.log(projects)
      projectsWindow()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxRQUFRO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDVztBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdGhpcyBtb2R1bGUgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgaXMgaXQgYWJvdXQgVG9Eb3NcbndpbmRvdy5wcm9qZWN0cyA9IFtdLy9kb25lXG5sZXQgaSA9IDBcbi8vY3JlYXRlcyBwcm9qZWN0IHRoYXQgd2UncmUgZ29pbmcgdG8gcHV0IHRvZG8gcyBpbiBpdFxuLy8gY2xhc3MgVG9EbyB7XG4vLyAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuLy8gICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbi8vICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4vLyAgICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWVcbi8vICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB0ZXN0aW5nKCkge1xuLy8gICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgLy8gICAgIGxldCB0b0RvID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcbi8vICAgICAvLyAgICAgaWYgKHRvRG8gPT0gXCJjYXJkXCIpIHtcbi8vICAgICAvLyAgICAgICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleFwiKVxuLy8gICAgIC8vICAgICAgICAgLy8gaW5kZXguaW5uZXJIVE1MID0gXCJcIlxuLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGVzY3JpcHRpb24pXG4vLyAgICAgLy8gICAgICAgICB2aWV3VG9kbygpXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyB9KTtcbi8vIH1cbi8vIHRlc3RpbmcoKVxuXG4vL2xldCB0ZXN0ID0gbmV3IFRvRG8oXCJYb25pblwiLCBcImRlc2NyaXB0aW9uM1wiLCBcImR1ZVRpbWUxXCIsIFwicHJpb3JpdHkyXCIpLy9kb25lXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdUb2RvKHByb2plY3RUaXRsZSxwcm9qZWN0RGVzY3JpcHRpb24scHJvamVjdER1ZVRpbWUscHJvamVjdFByaW9yaXR5KSB7XG4gICAgLy8gY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInByb2plY3QtdGl0bGVcIilcbiAgICAvLyBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGVzY3JpcHRpb25cIilcbiAgICAvLyBsZXQgcHJvamVjdER1ZVRpbWUgPSBlLmdldEF0dHJpYnV0ZShcImR1ZVRpbWVcIilcbiAgICAvLyBsZXQgcHJvamVjdFByaW9yaXR5ID0gZS5nZXRBdHRyaWJ1dGUoXCJwcmlvcml0eVwiKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uLCBwcm9qZWN0RHVlVGltZSwgcHJvamVjdFByaW9yaXR5KVxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBdHRyaWJ1dGUscHJvamVjdERlc2NyaXB0aW9uKVxufSIsImltcG9ydCB7IHZpZXdUb2RvIH0gZnJvbSBcIi4vVG9Eb1wiXG4vL3RoaXMgbW9kdWxlIHNob3VsZCBiZSByZXNwb25zaWJsZSBmb3IgYWxsIGlzIGl0IGFib3V0IFByb2plY3RzXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxuY29uc3Qgc3VibWl0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpXG5sZXQgY291bnRlciA9IDBcbmNsYXNzIFByb2plY3RJbmZvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICBpZiAoZWxlbWVudCA9PSBcImNhcmRcIikge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJjYXJkXCIpXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb3VudGVyXCIpKVxuICB9XG59KTtcbi8vdGFrZXMgaW5mbyBmcm9tIFwicHJvamVjdHNcIiBhbmQgbG9vcHMgdGhvdWdoIGl0XG4vL2hhbmRsZXMgcHJvamVjdHMgb24gdGhlIERPTVxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzV2luZG93KCkge1xuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIilcbiAgaW5kZXguaW5uZXJIVE1MID0gXCJcIlxuICBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gIG15UHJvamVjdHMudGV4dENvbnRlbnQgPSBcIk15IFByb2plY3RzXCJcbiAgaW5kZXguYXBwZW5kQ2hpbGQobXlQcm9qZWN0cylcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGZvciAobGV0IHByb2plY3RJbmRleCBvZiBwcm9qZWN0cykge1xuICAgIGZvciAobGV0IHByb2plY3RQcm9wZXJ0eSBvZiBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvamVjdFByb3BlcnR5ICE9IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFByb3BlcnR5KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgbGV0IHRvRG8gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgIGlmICh0b0RvID09IFwiY2FyZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIilcbiAgICAgICAgICAgIC8vIGluZGV4LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgdmlld1RvZG8ocHJvamVjdFByb3BlcnR5LnRpdGxlLHByb2plY3RQcm9wZXJ0eS5kZXNjcmlwdGlvbixwcm9qZWN0UHJvcGVydHkuZHVlVGltZSxwcm9qZWN0UHJvcGVydHkucHJpb3JpdHkpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGlmICghcHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJjb3VudGVyXCIpKSB7XG4gICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJjb3VudGVyXCIsIGNvdW50ZXIpXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKVxuICAgICAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIilcbiAgICAgICAgLy8gcHJvamVjdC5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCIgdmFsdWU9XCJwcm9qZWN0JHtjb3VudGVyfVwiPmBcbiAgICAgICAgcHJpb3JpdHlDb2xvcihwcm9qZWN0LCBwcm9qZWN0UHJvcGVydHkucHJpb3JpdHkpXG4gICAgICAgIHByb2plY3RDYXJkKHByb2plY3RQcm9wZXJ0eSwgcHJvamVjdClcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICAgICAgaW5kZXguYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpXG4gICAgICB9XG4gICAgICBjb3VudGVyKytcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2plY3RDYXJkKHByb2plY3RQcm9wZXJ0eSwgcHJvamVjdCkgeyAvL3RoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGNhcmRcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkudGl0bGVcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkuZGVzY3JpcHRpb25cbiAgY29uc3QgcHJvamVjdER1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2plY3REdWVUaW1lLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LmR1ZVRpbWVcbiAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkucHJpb3JpdHlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REdWVUaW1lKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSlcbn1cbnByb2plY3RzV2luZG93KClcblxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZm8oKSB7IC8vdGFrZXMgaW5mbyBmcm9tIGRpYWxvZyBmb3JtIGFuZCBzZW5kcyBpdCB0byBwcm9qZWN0c1dpbmRvd1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gc3VibWl0IHRoaXMgZmFrZSBmb3JtXG4gICAgY29uc3QgcHJvamVjdCA9IFtdXG4gICAgdmFyIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtaW5wdXRcIilcbiAgICB2YXIgdGVtcCA9IHByb2plY3RUaXRsZS52YWx1ZVxuICAgIHZhciBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLWlucHV0XCIpXG4gICAgdmFyIHByb2plY3REZWFkTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKVxuICAgIHZhciBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWlucHV0XCIpXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUsIHByb2plY3REZWFkTGluZS52YWx1ZSwgcHJvamVjdFByaW9yaXR5LnZhbHVlKVxuICAgIGlmIChwcm9qZWN0VGl0bGUudmFsdWUgJiYgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlICYmIHByb2plY3REZWFkTGluZS52YWx1ZSAmJiBwcm9qZWN0UHJpb3JpdHkudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRlbXAgPSBuZXcgUHJvamVjdEluZm8ocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUsIHByb2plY3REZWFkTGluZS52YWx1ZSwgcHJvamVjdFByaW9yaXR5LnZhbHVlLCBcIm9uXCIpXG5cbiAgICAgIC8vIHZhciB0ZW1wID0gbmV3IFByb2plY3RJbmZvKFwicHJvamVjdFRpdGxlLnZhbHVlXCIsIFwicHJvamVjdERlc2NyaXB0aW9uLnZhbHVlXCIsIFwicHJvamVjdERlYWRMaW5lLnZhbHVlXCIsIFwicHJvamVjdFByaW9yaXR5LnZhbHVlXCIsIFwib25cIilcblxuICAgICAgcHJvamVjdC5wdXNoKHRlbXApXG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgIHByb2plY3RzV2luZG93KClcbiAgICAgIGRpYWxvZy5jbG9zZShkaWFsb2cudmFsdWUpOyAvLyBIYXZlIHRvIHNlbmQgdGhlIHNlbGVjdCBib3ggdmFsdWUgaGVyZS5cbiAgICB9XG4gIH0pO1xufVxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaWFsb2cuc2hvd01vZGFsKClcbn0pO1xuZ2V0UHJvamVjdEluZm8oKVxuZnVuY3Rpb24gcHJpb3JpdHlDb2xvcihwcm9qZWN0LCBwcm9qZWN0UHJpb3JpdHkpIHtcbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5MVwiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICNmZjE3MTdcIlxuICB9XG4gIGlmIChwcm9qZWN0UHJpb3JpdHkgPT0gXCJwcmlvcml0eTJcIikge1xuICAgIHByb2plY3Quc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCAjZmZlODE3XCJcbiAgfVxuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHkzXCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgI2FlZmYxN1wiXG4gIH1cbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5NFwiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICMxN2JkZmZcIlxuICB9XG5cbn1cblxuLy8gZnVuY3Rpb24gZG9TdHVmZigpIHtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vICB9XG4vLyAgc2V0SW50ZXJ2YWwoZG9TdHVmZiwgNTAwMCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHZpZXdUb2RvIH0gZnJvbSBcIi4vVG9Eb1wiXG5pbXBvcnQge2Zvcm1hdCwgY29tcGFyZUFzY30gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBEaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=