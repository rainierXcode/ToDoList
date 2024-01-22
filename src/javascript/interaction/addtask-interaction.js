import { addTaskInStorage } from "../index/modify.js";
import { addTaskBoxContainer } from "../container/add-task.js";
import { setImportantButtonEventListener } from "./important-interaction.js";
import { addTaskListNameEvent } from "./inputEvent.js";
import { duedateButton} from "./calendar-event.js";
import { getProject } from "../container/projects.js";



function cancelButtonEventListener(container){
    const addTaskBoxContainer = container.querySelector('.add-task-box-container')
    const cancelButton  = container.querySelector('.cancel-button')
    const plusBtn = container.querySelector('.add-task-button');
    cancelButton.addEventListener('click', () =>{
        container.removeChild(addTaskBoxContainer)
        plusBtn.style.display = 'flex';
    })
}


export function addTaskClickEventListener(container){
    const plusBtn = container.querySelector('.add-task-button');
    const addTaskButton = container.querySelector(".setting-add-task")
    addTaskButton.addEventListener('click', () =>{
        const taksName = document.getElementById("taskName");
        const taskDescription = document.getElementById('taskDescription')
        const duedate = document.querySelector(".duedate-text")
        const importantBtn = document.getElementById("setting-important-button")
        const categoryTxt = document.querySelector('.category-text')

        let duedateValue = duedate.textContent == 'Due date' ? '' : duedate.textContent
        let importantBtnValue = importantBtn.classList.contains('important')
        let allProject =getProject()
        let categoryID = allProject.find((project) => project.projectName == categoryTxt.textContent)
        if(categoryID == undefined){
            categoryID = 0;
        }
        else{
            categoryID = categoryID.projectID
        }
        addTaskInStorage(taksName.value , taskDescription.value , duedateValue,importantBtnValue, categoryID )
        const addTaskBoxContainer = container.querySelector('.add-task-box-container')
        container.removeChild(addTaskBoxContainer)
        plusBtn.style.display = 'flex';
        
        taksName.value = '';
        taskDescription.value = ''
        importantBtn.classList.remove('important')
        duedate.textContent = 'Due date'

    })
}

export function plusButtonAddTask(container){
const plusBtn = container.querySelector('.add-task-button');
plusBtn.addEventListener('click', () =>{
    const containerText = container.parentNode.querySelector('.container-text').textContent
    plusBtn.style.display = 'none';
    container.appendChild(addTaskBoxContainer(containerText))
    eventListener();
    duedateButton()
    cancelButtonEventListener(container);
    addTaskClickEventListener(container);
})
}

function eventListener(){
    setImportantButtonEventListener();
    addTaskListNameEvent();
}