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
//creates project that we're going to put todo s in it
// class ToDo {
//     constructor(title, description, dueTime, priority) {
//         this.title = title
//         this.description = description
//         this.dueTime = dueTime
//         this.priority = priority
//     }
// }

function viewTodo(projectProperty) {
    window.addEventListener('click', (e) => {
        let toDo = e.target.getAttribute("class")
        if (toDo == "card") {
          const index = document.querySelector(".index")
          index.innerHTML = ""
          console.log(e.target)
          console.log("this is working")
          console.log(projectProperty.title,projectProperty.description,projectProperty.dueTime,projectProperty.priority)

        }
      });
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
//checks if the element clicked is it's a card then do something about it
window.addEventListener('click', (e) => {
  let element = e.target.getAttribute("class")
  if (element == "card") {
    if (e.target.classList == "card")
      console.log(e.target)
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
        // viewTodo(projectProperty) come back to this
        const project = document.createElement("div")
        project.classList.add("card")
        projectsDiv.classList.add("cards")
        // project.innerHTML = `<input type="checkbox" id="project" name="project" value="project${counter}">`
        priorityColor(project, projectProperty.priority)
        projectCard(projectProperty, project)
        projectsDiv.appendChild(project)
        index.appendChild(projectsDiv)
      }

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


      project.push(temp)
      //this is setting the counter in the project array-->[projectinfo,counter]
      project.push(counter)
      counter++
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxRQUFRO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNuSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDVztBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdGhpcyBtb2R1bGUgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgaXMgaXQgYWJvdXQgVG9Eb3NcbndpbmRvdy5wcm9qZWN0cyA9IFtdLy9kb25lXG4vL2NyZWF0ZXMgcHJvamVjdCB0aGF0IHdlJ3JlIGdvaW5nIHRvIHB1dCB0b2RvIHMgaW4gaXRcbi8vIGNsYXNzIFRvRG8ge1xuLy8gICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlVGltZSwgcHJpb3JpdHkpIHtcbi8vICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4vLyAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuLy8gICAgICAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lXG4vLyAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdUb2RvKHByb2plY3RQcm9wZXJ0eSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCB0b0RvID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICAgICAgaWYgKHRvRG8gPT0gXCJjYXJkXCIpIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIilcbiAgICAgICAgICBpbmRleC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHdvcmtpbmdcIilcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0UHJvcGVydHkudGl0bGUscHJvamVjdFByb3BlcnR5LmRlc2NyaXB0aW9uLHByb2plY3RQcm9wZXJ0eS5kdWVUaW1lLHByb2plY3RQcm9wZXJ0eS5wcmlvcml0eSlcblxuICAgICAgICB9XG4gICAgICB9KTtcbn1cbiIsImltcG9ydCB7IHZpZXdUb2RvIH0gZnJvbSBcIi4vVG9Eb1wiXG4vL3RoaXMgbW9kdWxlIHNob3VsZCBiZSByZXNwb25zaWJsZSBmb3IgYWxsIGlzIGl0IGFib3V0IFByb2plY3RzXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxuY29uc3Qgc3VibWl0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpXG5sZXQgY291bnRlciA9IDBcbmNsYXNzIFByb2plY3RJbmZvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxufVxuLy9jaGVja3MgaWYgdGhlIGVsZW1lbnQgY2xpY2tlZCBpcyBpdCdzIGEgY2FyZCB0aGVuIGRvIHNvbWV0aGluZyBhYm91dCBpdFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICBpZiAoZWxlbWVudCA9PSBcImNhcmRcIikge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJjYXJkXCIpXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgfVxufSk7XG5cblxuLy90YWtlcyBpbmZvIGZyb20gXCJwcm9qZWN0c1wiIGFuZCBsb29wcyB0aG91Z2ggaXRcbi8vaGFuZGxlcyBwcm9qZWN0cyBvbiB0aGUgRE9NXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNXaW5kb3coKSB7XG4gIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleFwiKVxuICBpbmRleC5pbm5lckhUTUwgPSBcIlwiXG4gIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgbXlQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIlxuICBpbmRleC5hcHBlbmRDaGlsZChteVByb2plY3RzKVxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgZm9yIChsZXQgcHJvamVjdEluZGV4IG9mIHByb2plY3RzKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdFByb3BlcnR5IG9mIHByb2plY3RJbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9qZWN0UHJvcGVydHkgIT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0UHJvcGVydHkpXG4gICAgICAgIC8vIHZpZXdUb2RvKHByb2plY3RQcm9wZXJ0eSkgY29tZSBiYWNrIHRvIHRoaXNcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKVxuICAgICAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIilcbiAgICAgICAgLy8gcHJvamVjdC5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCIgdmFsdWU9XCJwcm9qZWN0JHtjb3VudGVyfVwiPmBcbiAgICAgICAgcHJpb3JpdHlDb2xvcihwcm9qZWN0LCBwcm9qZWN0UHJvcGVydHkucHJpb3JpdHkpXG4gICAgICAgIHByb2plY3RDYXJkKHByb2plY3RQcm9wZXJ0eSwgcHJvamVjdClcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICAgICAgaW5kZXguYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpXG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2plY3RDYXJkKHByb2plY3RQcm9wZXJ0eSwgcHJvamVjdCkgeyAvL3RoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGNhcmRcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkudGl0bGVcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkuZGVzY3JpcHRpb25cbiAgY29uc3QgcHJvamVjdER1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2plY3REdWVUaW1lLnRleHRDb250ZW50ID0gcHJvamVjdFByb3BlcnR5LmR1ZVRpbWVcbiAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0UHJvcGVydHkucHJpb3JpdHlcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REdWVUaW1lKVxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSlcbn1cbnByb2plY3RzV2luZG93KClcblxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZm8oKSB7IC8vdGFrZXMgaW5mbyBmcm9tIGRpYWxvZyBmb3JtIGFuZCBzZW5kcyBpdCB0byBwcm9qZWN0c1dpbmRvd1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gc3VibWl0IHRoaXMgZmFrZSBmb3JtXG4gICAgY29uc3QgcHJvamVjdCA9IFtdXG4gICAgdmFyIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtaW5wdXRcIilcbiAgICB2YXIgdGVtcCA9IHByb2plY3RUaXRsZS52YWx1ZVxuICAgIHZhciBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLWlucHV0XCIpXG4gICAgdmFyIHByb2plY3REZWFkTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKVxuICAgIHZhciBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWlucHV0XCIpXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUsIHByb2plY3REZWFkTGluZS52YWx1ZSwgcHJvamVjdFByaW9yaXR5LnZhbHVlKVxuICAgIGlmIChwcm9qZWN0VGl0bGUudmFsdWUgJiYgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlICYmIHByb2plY3REZWFkTGluZS52YWx1ZSAmJiBwcm9qZWN0UHJpb3JpdHkudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRlbXAgPSBuZXcgUHJvamVjdEluZm8ocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUsIHByb2plY3REZWFkTGluZS52YWx1ZSwgcHJvamVjdFByaW9yaXR5LnZhbHVlLCBcIm9uXCIpXG5cblxuICAgICAgcHJvamVjdC5wdXNoKHRlbXApXG4gICAgICAvL3RoaXMgaXMgc2V0dGluZyB0aGUgY291bnRlciBpbiB0aGUgcHJvamVjdCBhcnJheS0tPltwcm9qZWN0aW5mbyxjb3VudGVyXVxuICAgICAgcHJvamVjdC5wdXNoKGNvdW50ZXIpXG4gICAgICBjb3VudGVyKytcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgcHJvamVjdHNXaW5kb3coKVxuICAgICAgZGlhbG9nLmNsb3NlKGRpYWxvZy52YWx1ZSk7IC8vIEhhdmUgdG8gc2VuZCB0aGUgc2VsZWN0IGJveCB2YWx1ZSBoZXJlLlxuICAgIH1cbiAgfSk7XG59XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpYWxvZy5zaG93TW9kYWwoKVxufSk7XG5nZXRQcm9qZWN0SW5mbygpXG5mdW5jdGlvbiBwcmlvcml0eUNvbG9yKHByb2plY3QsIHByb2plY3RQcmlvcml0eSkge1xuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHkxXCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgI2ZmMTcxN1wiXG4gIH1cbiAgaWYgKHByb2plY3RQcmlvcml0eSA9PSBcInByaW9yaXR5MlwiKSB7XG4gICAgcHJvamVjdC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkICNmZmU4MTdcIlxuICB9XG4gIGlmIChwcm9qZWN0UHJpb3JpdHkgPT0gXCJwcmlvcml0eTNcIikge1xuICAgIHByb2plY3Quc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCAjYWVmZjE3XCJcbiAgfVxuICBpZiAocHJvamVjdFByaW9yaXR5ID09IFwicHJpb3JpdHk0XCIpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgIzE3YmRmZlwiXG4gIH1cblxufVxuXG4vLyBmdW5jdGlvbiBkb1N0dWZmKCkge1xuLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gIH1cbi8vICBzZXRJbnRlcnZhbChkb1N0dWZmLCA1MDAwKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdmlld1RvZG8gfSBmcm9tIFwiLi9Ub0RvXCJcbmltcG9ydCB7Zm9ybWF0LCBjb21wYXJlQXNjfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IERpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==