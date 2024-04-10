import { todoWindow } from "./ToDo"
import { format, compareAsc } from "date-fns";
import { projectsWindow } from "./projects";
const projectsButton=document.querySelector("#projects-button")
const projectsSideBar=document.querySelector("#projects-sidebar")
projectsButton.addEventListener('click', () => {
    projectsWindow()
});
projectsSideBar.addEventListener('click', () => {
    console.log(projectsSideBar)
    projectsWindow()
});

