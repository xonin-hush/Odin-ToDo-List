//takes info from "projects" and loops though it
export function DisplayProjects() {
    const index = document.querySelector(".index")
    const projectsDiv = document.createElement("div")
    let counter = 0
    for (let projectIndex of projects) {
        for (let projectProperty of projectIndex) {
            if (typeof projectProperty != "number") {
                console.log(projectProperty)
                const project = document.createElement("div")
                project.classList.add("card")
                projectsDiv.classList.add("cards")
                project.innerHTML = `<input type="checkbox" id="project" name="project" value="project${counter}">`
                projectCard(projectProperty, project)
                projectsDiv.appendChild(project)
                index.appendChild(projectsDiv)

            }
            counter++
        }
    }
}
//handles projects on the DOM
function projectCard(projectProperty, project) {
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
DisplayProjects()
// function doStuff() {
// console.log(projects);
//  }
//  setInterval(doStuff, 5000);