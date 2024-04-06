import { todoWindow } from "./ToDo"
import { format, compareAsc } from "date-fns";
import { showProjects } from "./projects";
const projectsButton=document.querySelector("#projects-button")
const projectsSideBar=document.querySelector("#projects-sidebar")
projectsButton.addEventListener('click', () => {
    showProjects()
});
projectsSideBar.addEventListener('click', () => {
    console.log(projectsSideBar)
    showProjects()
});

