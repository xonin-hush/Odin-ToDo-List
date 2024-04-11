import { todoWindow } from "./ToDo"
//this module should be responsible for all is it about Projects
const projectDialog = document.querySelector("#project-dialog")
const addProject = document.querySelector("#add-project")
const submit = document.querySelector("#submit")
class Project {
  constructor(title, description, dueTime, priority, type) {
    this.title = title
    this.description = description
    this.dueTime = dueTime
    this.priority = priority
    this.type = type
  }
}

export function projectsWindow() {
  // function projectsWindow() {
  const index = document.querySelector(".index")
  index.innerHTML = ""
  const myProjects = document.createElement("h1")
  myProjects.textContent = "My Projects"
  index.appendChild(myProjects)
  let counter = 0
  projects.forEach(element => {
    const projectsContainer = document.createElement("div")
    const project = document.createElement("div")
    project.classList.add("card")
    projectsContainer.classList.add("cards")
    priorityColor(project, element[0].priority)
    projectCard(element[0], project)
    projectsContainer.appendChild(project)
    project.value = counter
    index.appendChild(projectsContainer)
    counter++
  });
}
projectsWindow()
function projectCard(projectProperty, project) { //this function creates a card
  const projectTitle = document.createElement("div")
  projectTitle.textContent = "Title: "+projectProperty.title
  const projectDescription = document.createElement("div")
  projectDescription.textContent = "Description: "+projectProperty.description
  const projectDueTime = document.createElement("div")
  projectDueTime.textContent = "DeadLine: "+projectProperty.dueTime
  // const projectPriority = document.createElement("div")
  // projectPriority.textContent = projectProperty.priority
  project.appendChild(projectTitle)
  project.appendChild(projectDescription)
  project.appendChild(projectDueTime)
  // project.appendChild(projectPriority)
}

function getProjectInfo() { //takes info from dialog form and sends it to projectsWindow
  submit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    const project = []
    var projectTitle = document.querySelector("#project-title-input")
    var projectDescription = document.querySelector("#project-description-input")
    var projectDeadLine = document.querySelector("#project-date-input")
    var projectPriority = document.querySelector("#project-priority-input")
    var elementType = "project"
    if (projectTitle.value && projectDescription.value && projectDeadLine.value && projectPriority.value !== "") {
      var temp = new Project(projectTitle.value, projectDescription.value, projectDeadLine.value, projectPriority.value, elementType)
      // temp = new ProjectInfo("projectTitle.value", "projectDescription.value", "projectDeadLine.value", "projectPriority.value")
      project.push(temp)
      // this is setting the counter in the project array-->[projectinfo,counter]
      projects.push(project)
      projectsWindow()
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
