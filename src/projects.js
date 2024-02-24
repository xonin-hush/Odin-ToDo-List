export function DisplayProjects() {
    const index = document.querySelector(".index")
    const projectsDiv = document.createElement("div")
    for (let i of projects) {
        for (let j of i) {
            if (typeof j != "number") {
                console.log(j)
                const project = document.createElement("div")
                // project.textContent = j.title
                projectCard(j,projectsDiv)
                index.appendChild(projectsDiv)
            }
        }
    }
}
function projectCard(project,projectsDiv){
const projectTitle=document.createElement("div")
projectTitle.textContent=project.title
const projectDescription=document.createElement("div")
projectDescription.textContent=project.description
const projectDueTime=document.createElement("div")
projectDueTime.textContent=project.dueTime
const projectPriority=document.createElement("div")
projectPriority.textContent=project.priority
projectsDiv.appendChild(projectTitle)
projectsDiv.appendChild(projectDescription)
projectsDiv.appendChild(projectDueTime)
projectsDiv.appendChild(projectPriority)
}
DisplayProjects()
// function doStuff() {
// console.log(projects);
//  }
//  setInterval(doStuff, 5000);