export function DisplayProjects() {
    const index = document.querySelector(".index")
    const projectsDiv = document.createElement("div")
    for (let i of projects) {
        for (let j of i) {
            if (typeof j != "number") {
                console.log(j)
                const project = document.createElement("div")
                project.classList.add("card")
                projectsDiv.classList.add("cards")
                // project.textContent = j.title
                projectCard(j,project)
                projectsDiv.appendChild(project)
                index.appendChild(projectsDiv)

            }
        }
    }
}
function projectCard(project, projectCard) {
    const projectTitle = document.createElement("div")
    projectTitle.textContent = project.title
    const projectDescription = document.createElement("div")
    projectDescription.textContent = project.description
    const projectDueTime = document.createElement("div")
    projectDueTime.textContent = project.dueTime
    const projectPriority = document.createElement("div")
    projectPriority.textContent = project.priority
    projectCard.appendChild(projectTitle)
    projectCard.appendChild(projectDescription)
    projectCard.appendChild(projectDueTime)
    projectCard.appendChild(projectPriority)
}
DisplayProjects()
// function doStuff() {
// console.log(projects);
//  }
//  setInterval(doStuff, 5000);