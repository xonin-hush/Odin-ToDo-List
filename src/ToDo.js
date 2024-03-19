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

export function viewTodo(projectProperty) {
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


//checks if the element clicked is it's a card then do something about it
window.addEventListener('click', (e) => {
  let element = e.target.getAttribute("class")
  if (element == "card") {
    if (e.target.classList == "card")
      console.log(e.target)
  }
});