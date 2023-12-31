class ToDoManager {
    constructor(){
        this.taskArray = [];
        this.taskList = document.querySelector('#task-list');
        this.form = document.querySelector('#task-form');
        this.input = document.querySelector('#task-input');
        this.form.addEventListener('submit', this.addTask.bind(this));  
        this.taskList.addEventListener('click', this.handleTasks.bind(this));
        this.loadTasks(); // load tasks from local storage
    }


loadTasks() {
        // Get the tasks from localStorage and convert it to an array
        const storeTaskItems = localStorage.getItem('tasks')
        if (storeTaskItems !== null){
            this.taskArray = JSON.parse(storeTaskItems);
            // console.log(this.taskArray);
            this.taskArray.forEach(task => {
                const newTaskTemplate = `<li>
                    <div class = "taskElement">${task.taskName}</div>
                    <button class = "edit-button">Edit</button>
                    <button class = "delete-button">Delete</button>
                    <input type = "checkbox"</>
                    </li>`
            this.taskList.innerHTML += newTaskTemplate;
            });
        } 
}


addTask(event){
    event.preventDefault();
    if (this.input.value.trim() === "") {
        alert("Please Enter a Task");
    } else {
        const newTaskTemplate = `<li>
        <div class = "taskElement">${this.input.value}</div>
        <button class = "edit-button">Edit</button>
        <button class = "delete-button">Delete</button>
        <input type = "checkbox"</>
        </li>`
        this.taskList.innerHTML += newTaskTemplate;
        const toDoItem = new TaskItem(this.input.value);
        this.taskArray.push(toDoItem); // insert the task to the array
        this.input.value = "";

        const jsonTaskArray = JSON.stringify(this.taskArray);   	
        localStorage.setItem('tasks', jsonTaskArray);       
    };
}

handleTasks(event){
    const target = event.target;
    if (target.classList.contains('delete-button')) {
        target.parentNode.remove();
    } else if (target.classList.contains('edit-button')){
        this.editTask(target)
    }
}


editTask(target){
    const taskElement = target.parentNode.querySelector('.taskElement')
    const newTaskName = prompt('Enter new task name!', taskElement.textContent.trim())
    if (newTaskName !== null){
        taskElement.textContent = newTaskName;
        const jsonTaskArray = JSON.stringify(this.taskArray);
        localStorage.setItem('tasks', jsonTaskArray);
        }
    }
}


class TaskItem{
    constructor(taskName){
        this.taskName = taskName;
    }

  editTask(value){
    this.taskName = value;
  }
};


const toDo = new ToDoManager();
// const newTask = new TaskItem()








// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if (input.value.trim() === "") {
//         alert("Please Enter a Task");
//     } else {
//         const newTask = document.createElement('li')
//         newTask.innerText = input.value;
//         // newTask.classList.add('div'); //CSS styling
//         taskList.appendChild(newTask);
//         input.value = "";

//         const newTaskActions = document.querySelector('ul'); //creates and stores task actions(delete, edit buttons)
//         // newTaskActions.classList.add('actions'); // CSS styling
//         newTaskActions.appendChild(newTask);


//         // creating DELETE button
//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'DELETE';
//         newTask.appendChild(deleteButton);
//         deleteButton.addEventListener('click', deleteTask) 

//         // function that executes DELETE
//         function deleteTask(){
//             taskList.removeChild(newTask);
            
//         }  

//         // creating EDIT button
//         const editButton = document.createElement('button');
//         editButton.innerText = 'EDIT';
//         newTask.appendChild(editButton);
//         let inputTask;
//         editButton.addEventListener('click', () => {
//             if(editButton.innerText === 'EDIT'){
//                 editButton.innerText = 'SAVE' 
//                 inputTask = document.createElement('input');
//                 newTask.appendChild(inputTask) 
//                 } else {
//                     if(editButton.innerText === 'SAVE'){
//                         if (inputTask.value.trim() === "") {
//                             alert("Please edit a Task");
//                         } else{
//                             console.log(inputTask.value);
//                             newTask.innerText = inputTask.value;
//                             inputTask.remove();
//                             editButton.innerText = 'EDIT'; 
//                             newTask.appendChild(deleteButton);
//                             newTask.appendChild(editButton);
//                         }   
//                     }
//                 }
                               
//              }) 
                    
// }

// })



// const checkbox = document.querySelectorAll('.checkbox');

//             	let unchecked = true;

//                 checkbox.forEach((checkbox)=>{
//                 checkbox.addEventListener("click", ()=>{
//                      if (unchecked){checkbox.src = "imgs/square-check-regular.svg";
//                     } else {
//                      checkbox.src = "imgs/square-regular.svg"
//                      }
//                      unchecked = !unchecked
//         });
//         });


        // paragraph.addEventListener('click', () => {
        //     paragraph.style.textDecoration = 'line-through';
        // })


        // paragraph.addEventListener('dblclick', () => {
        //     task.removeChild(paragraph);
        // })