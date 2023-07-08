<<<<<<< Updated upstream
=======
//// UPDATED JS


class ToDoManager {
    constructor(){
        this.#taskArray = [];
        this.#taskList = document.querySelector('#tasks');
    }

    get taskArray(){
        return this.#taskArray;
    }

    get taskList(){
        return this.#taskList;
    }
}


class TaskItem {
    constructor(){
        this.#taskName = taskName;
        this.#taskDone = false;
        
       
    }

    get taskName(){
        return this.#taskName;
    }

    get taskDone(){
        return this.#taskDone;
    }

    addTaskItem(){
        const taskInput = document.querySelector('#task-input');
        taskName = taskInput.value;
    }

    markChecked(){
        this.#taskDone = true;
        
    }

    
            
        

       
    }

    deleteTaskItem(task){
        this.#thisArray.removeChild(task)
        const deleteButton = document.querySelector('#delete');
        deleteButton.innerText = 'DELETE';
        taskItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteTaskItem) 

    }
}




// const toDo = new ToDoManager();
// const newTask = new TaskItem()

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        alert("Please Enter a Task");
    } else {
        const newTask = document.createElement('li')
        newTask.innerText = input.value;
        // newTask.classList.add('div'); //CSS styling
        taskList.appendChild(newTask);
        input.value = "";

        const newTaskActions = document.querySelector('ul'); //creates and stores task actions(delete, edit buttons)
        // newTaskActions.classList.add('actions'); // CSS styling
        newTaskActions.appendChild(newTask);


        // creating DELETE button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        newTask.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteTask) 

        // function that executes DELETE
        function deleteTask(){
            taskList.removeChild(newTask);
            
        }  

        // creating EDIT button
        const editButton = document.createElement('button');
        editButton.innerText = 'EDIT';
        newTask.appendChild(editButton);
        let inputTask;
        editButton.addEventListener('click', () => {
            if(editButton.innerText === 'EDIT'){
                editButton.innerText = 'SAVE' 
                inputTask = document.createElement('input');
                newTask.appendChild(inputTask) 
                } else {
                    if(editButton.innerText === 'SAVE'){
                        if (inputTask.value.trim() === "") {
                            alert("Please edit a Task");
                        } else{
                            console.log(inputTask.value);
                            newTask.innerText = inputTask.value;
                            inputTask.remove();
                            editButton.innerText = 'EDIT'; 
                            newTask.appendChild(deleteButton);
                            newTask.appendChild(editButton);
                        }   
                    }
                }
                               
             }) 
                    
}

})



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
>>>>>>> Stashed changes
