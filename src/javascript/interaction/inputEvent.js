export function modifyTaskListNameEvent(){
    const saveModify = document.querySelector(".saveModify");
    const inputTaskNameModify = document.getElementById('taskNameModify');
    
    inputTaskNameModify.addEventListener('input', () => {
        const value = inputTaskNameModify.value.trim();
        
        if (value.length !== 0) {
            saveModify.style.opacity = 1;
            saveModify.style.pointerEvents = 'auto';
            saveModify.removeAttribute('disabled'); 
        } else {
            saveModify.style.opacity = 0.75;
            saveModify.style.pointerEvents = 'none';
            saveModify.setAttribute('disabled', 'true'); 
        }
    });
    
}

export function addTaskListNameEvent(){
    
const inputTaskName = document.getElementById('taskName');
const addTask = document.querySelector('.setting-add-task')
    inputTaskName.addEventListener('input', () =>{
        let value = inputTaskName.value;
        if(value.trim().length != 0){
            addTask.style.opacity = 1;
            addTask.style.pointerEvents = 'auto'
        }
        else{
            addTask.style.opacity = 0.75;
            addTask.style.pointerEvents = 'none'
        }
    })
}

