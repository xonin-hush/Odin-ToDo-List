//this module should be responsible for all is it about ToDos
window.projects = []//done
let i=0
//creates project that we're going to put todo s in it
class ToDo {
    constructor(title, description, dueTime, priority) {
        this.title = title
        this.description = description
        this.dueTime = dueTime
        this.priority = priority
    }    
}

window.addEventListener('click', (e) => {
    let element = e.target.getAttribute("class")
    if(element=="card"){
        const index=document.querySelector(".index")
        // index.innerHTML=""
    }
    console.log(test)
    console.log(e.target.value)
  });
export function testing() {
    // let test = new ToDo("test", "this is a test idk man", "tmrw?", "important")
    // test.consoleLog()
}
//creates project and adds it to projects, this should be useful when hitting the create new project button
function createProject(Todo) {
    const project = []
    project[0]=i
    project.push(Todo)
    projects.push(project)
    i++
}
let test = new ToDo("Xonin", "description3", "dueTime1", "priority2")//done

// createProject(test)//value=0
// createProject(test)//value=1
// createProject(test)//value=2
// createProject(test)//value=3
function viewTodo(){

}