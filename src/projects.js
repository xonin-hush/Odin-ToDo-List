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

//takes info from "projects" and loops though it
//handles projects on the DOM
export function projectsWindow() {
  const index = document.querySelector(".index")
  index.innerHTML = ""
  const myProjects = document.createElement("h1")
  myProjects.textContent = "My Projects"
  index.appendChild(myProjects)
  const projectsDiv = document.createElement("div")
  let counter = 0
  for (let projectIndex of projects) {
    for (let projectProperty of projectIndex) {
      if (typeof projectProperty != "number") {
        console.log(projectProperty)
        const project = document.createElement("div")
        project.classList.add("card")
        projectsDiv.classList.add("cards")
        // project.innerHTML = `<input type="checkbox" id="project" name="project" value="project${counter}">`
        priorityColor(project,projectProperty.priority)
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

function getProjectInfo() {
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
