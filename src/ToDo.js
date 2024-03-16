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


export function viewTodo(projectTitle,projectDescription,projectDueTime,projectPriority) {
    // const projectTitle = document.querySelector("project-title")
    // const projectDescription = document.querySelector("description")
    // let projectDueTime = e.getAttribute("dueTime")
    // let projectPriority = e.getAttribute("priority")
    console.log(projectTitle, projectDescription, projectDueTime, projectPriority)
    // console.log(projectAttribute,projectDescription)
}