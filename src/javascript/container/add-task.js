export function addTaskBoxContainer(containerText){
    
    const addTaskBoxContainer = document.createElement('div');
    addTaskBoxContainer.classList.add('add-task-box-container')

    const div1 = document.createElement('div');
    const taskName = document.createElement('input');
    taskName.autocomplete = 'off'
    taskName.placeholder = 'What is to be done?'
    taskName.setAttribute('id', 'taskName')
    div1.appendChild(taskName)
    
    
    const div2 = document.createElement('div');
    const taskDescription = document.createElement('input');
    taskDescription.autocomplete = 'off'
    taskDescription.placeholder = 'Description'
    taskDescription.setAttribute('id', 'taskDescription')
    div2.appendChild(taskDescription);

    const additionalInformationButtons = document.createElement('div');
    additionalInformationButtons.classList.add('additional-information-buttons')


    const dueDateButton = document.createElement('div')
    dueDateButton.setAttribute('id', 'duedate-button')
    const span1 = document.createElement('span');
    span1.innerHTML = ' <span><svg width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.15 5.81836C11.4 5.97852 11.6229 6.16016 11.8188 6.36328C12.0146 6.56641 12.1833 6.78906 12.325 7.03125C12.4667 7.27344 12.5708 7.5293 12.6375 7.79883C12.7042 8.06836 12.7417 8.34375 12.75 8.625C12.75 9.08984 12.6563 9.52734 12.4688 9.9375C12.2813 10.3477 12.0229 10.7051 11.6938 11.0098C11.3646 11.3145 10.9833 11.5547 10.55 11.7305C10.1167 11.9062 9.65 11.9961 9.15 12C8.77083 12 8.40417 11.9473 8.05 11.8418C7.69583 11.7363 7.37083 11.584 7.075 11.3848C6.77917 11.1855 6.51667 10.9473 6.2875 10.6699C6.05833 10.3926 5.88125 10.0859 5.75625 9.75H0.75V0.75H2.35V0H3.15V0.75H8.75V0H9.55V0.75H11.15V5.81836ZM1.55 1.5V3H10.35V1.5H9.55V2.25H8.75V1.5H3.15V2.25H2.35V1.5H1.55ZM5.56875 9C5.55625 8.87891 5.55 8.75391 5.55 8.625C5.55 8.16016 5.64375 7.72266 5.83125 7.3125C6.01875 6.90234 6.27708 6.54492 6.60625 6.24023C6.93542 5.93555 7.31667 5.69531 7.75 5.51953C8.18333 5.34375 8.65 5.25391 9.15 5.25C9.56667 5.25 9.96667 5.31445 10.35 5.44336V3.75H1.55V9H5.56875ZM9.15 11.25C9.5375 11.25 9.9 11.1816 10.2375 11.0449C10.575 10.9082 10.8708 10.7207 11.125 10.4824C11.3792 10.2441 11.5792 9.9668 11.725 9.65039C11.8708 9.33398 11.9458 8.99219 11.95 8.625C11.95 8.26172 11.8771 7.92188 11.7313 7.60547C11.5854 7.28906 11.3854 7.01172 11.1313 6.77344C10.8771 6.53516 10.5813 6.34766 10.2438 6.21094C9.90625 6.07422 9.54167 6.00391 9.15 6C8.7625 6 8.4 6.06836 8.0625 6.20508C7.725 6.3418 7.42917 6.5293 7.175 6.76758C6.92083 7.00586 6.72083 7.2832 6.575 7.59961C6.42917 7.91602 6.35417 8.25781 6.35 8.625C6.35 8.98828 6.42292 9.32812 6.56875 9.64453C6.71458 9.96094 6.91458 10.2383 7.16875 10.4766C7.42292 10.7148 7.71875 10.9023 8.05625 11.0391C8.39375 11.1758 8.75833 11.2461 9.15 11.25ZM9.55 8.25H10.75V9H8.75V6.75H9.55V8.25Z" fill="#6D6C6C"/> </svg>'

    const span2 = document.createElement('span')
    span2.textContent = 'Due date'
    span2.classList.add('add-info-text')
    span2.classList.add('duedate-text')
    
    const backToDefault = document.createElement('div');
    backToDefault.setAttribute('id','backToDefault')
    backToDefault.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

   
    const dueDateModify = document.createElement('input')
    dueDateModify.setAttribute('id', 'duedate' )
    dueDateModify.type = 'hidden';

    dueDateButton.appendChild(span1);
    dueDateButton.appendChild(span2);
    dueDateButton.appendChild(backToDefault);
    dueDateButton.appendChild(dueDateModify);

    const settingImportantButton = document.createElement('button');
    settingImportantButton.setAttribute('id', 'setting-important-button');
   
    const span3 = document.createElement('span');
    span3.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" stroke="#6D6C6C" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'

    const span4 = document.createElement('span');
    span4.classList.add('add-info-text');
    span4.textContent = 'Important';

    const isImportant = document.createElement('input');
    isImportant.setAttribute('id','isImportant')
    isImportant.type = 'hidden'
    settingImportantButton.appendChild(span3);
    settingImportantButton.appendChild(span4)
    settingImportantButton.appendChild(isImportant);

    additionalInformationButtons.appendChild(dueDateButton);
    additionalInformationButtons.appendChild(settingImportantButton);

    const categoryAndCancelAddContainer = document.createElement('div')
    categoryAndCancelAddContainer.classList.add('category-and-cancel-add-container')

    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const btn = document.createElement('button')

    const btnSpan1 = document.createElement('span');
    btnSpan1.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" stroke="#3E54D3" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>'

    const btnSpan2  = document.createElement('span');
    btnSpan2.classList.add("category-text")
    btnSpan2.textContent = containerText

    btn.appendChild(btnSpan1);
    btn.appendChild(btnSpan2);

    categoryContainer.appendChild(btn)

    const cancelAddContainer = document.createElement('div');
    cancelAddContainer.classList.add('cancel-add-container');

    const cancel = document.createElement('button')
    cancel.classList.add('cancel-button')
    cancel.textContent = 'Cancel'; 

    const addTask = document.createElement('button')
    addTask.classList.add('setting-add-task')
    addTask.textContent = 'Add task'; 

  

    cancelAddContainer.appendChild(cancel);
    cancelAddContainer.appendChild(addTask)

    categoryAndCancelAddContainer.appendChild(categoryContainer)
    categoryAndCancelAddContainer.appendChild(cancelAddContainer)
    addTaskBoxContainer.appendChild(div1);
    addTaskBoxContainer.appendChild(div2);
    addTaskBoxContainer.appendChild(additionalInformationButtons);
    addTaskBoxContainer.appendChild(categoryAndCancelAddContainer);
    return addTaskBoxContainer;
}
