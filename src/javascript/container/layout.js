export function modifyContainer(listName, listDescription, dueDate, importantIcon, category){
    
    const modifyTaskContainer = document.createElement('div');
    modifyTaskContainer.classList.add('modify-task-container')

    const div1 = document.createElement('div');
    const taskNameModify = document.createElement('input');
    taskNameModify.autocomplete = 'off'
    taskNameModify.value = listName.textContent;
    taskNameModify.setAttribute('id', 'taskNameModify')
    div1.appendChild(taskNameModify)
    
    
    const div2 = document.createElement('div');
    const taskDescriptionModify = document.createElement('input');
    taskDescriptionModify.autocomplete = 'off'
    taskDescriptionModify.placeholder = 'Description'
    taskDescriptionModify.value = listDescription.textContent;
    taskDescriptionModify.setAttribute('id', 'taskDescriptionModify')
    div2.appendChild(taskDescriptionModify);

    const additionalInformationButtons = document.createElement('div');
    additionalInformationButtons.classList.add('additional-information-buttons')


    const dueDateButton = document.createElement('div')
    dueDateButton.setAttribute('id', 'duedate-buttonModify')
    const span1 = document.createElement('span');
    span1.innerHTML = ' <span><svg width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.15 5.81836C11.4 5.97852 11.6229 6.16016 11.8188 6.36328C12.0146 6.56641 12.1833 6.78906 12.325 7.03125C12.4667 7.27344 12.5708 7.5293 12.6375 7.79883C12.7042 8.06836 12.7417 8.34375 12.75 8.625C12.75 9.08984 12.6563 9.52734 12.4688 9.9375C12.2813 10.3477 12.0229 10.7051 11.6938 11.0098C11.3646 11.3145 10.9833 11.5547 10.55 11.7305C10.1167 11.9062 9.65 11.9961 9.15 12C8.77083 12 8.40417 11.9473 8.05 11.8418C7.69583 11.7363 7.37083 11.584 7.075 11.3848C6.77917 11.1855 6.51667 10.9473 6.2875 10.6699C6.05833 10.3926 5.88125 10.0859 5.75625 9.75H0.75V0.75H2.35V0H3.15V0.75H8.75V0H9.55V0.75H11.15V5.81836ZM1.55 1.5V3H10.35V1.5H9.55V2.25H8.75V1.5H3.15V2.25H2.35V1.5H1.55ZM5.56875 9C5.55625 8.87891 5.55 8.75391 5.55 8.625C5.55 8.16016 5.64375 7.72266 5.83125 7.3125C6.01875 6.90234 6.27708 6.54492 6.60625 6.24023C6.93542 5.93555 7.31667 5.69531 7.75 5.51953C8.18333 5.34375 8.65 5.25391 9.15 5.25C9.56667 5.25 9.96667 5.31445 10.35 5.44336V3.75H1.55V9H5.56875ZM9.15 11.25C9.5375 11.25 9.9 11.1816 10.2375 11.0449C10.575 10.9082 10.8708 10.7207 11.125 10.4824C11.3792 10.2441 11.5792 9.9668 11.725 9.65039C11.8708 9.33398 11.9458 8.99219 11.95 8.625C11.95 8.26172 11.8771 7.92188 11.7313 7.60547C11.5854 7.28906 11.3854 7.01172 11.1313 6.77344C10.8771 6.53516 10.5813 6.34766 10.2438 6.21094C9.90625 6.07422 9.54167 6.00391 9.15 6C8.7625 6 8.4 6.06836 8.0625 6.20508C7.725 6.3418 7.42917 6.5293 7.175 6.76758C6.92083 7.00586 6.72083 7.2832 6.575 7.59961C6.42917 7.91602 6.35417 8.25781 6.35 8.625C6.35 8.98828 6.42292 9.32812 6.56875 9.64453C6.71458 9.96094 6.91458 10.2383 7.16875 10.4766C7.42292 10.7148 7.71875 10.9023 8.05625 11.0391C8.39375 11.1758 8.75833 11.2461 9.15 11.25ZM9.55 8.25H10.75V9H8.75V6.75H9.55V8.25Z" fill="#6D6C6C"/> </svg>'

    const span2 = document.createElement('span')
    let duedate = (dueDate.textContent == '') ? 'Due date' : dueDate.textContent;
    span2.textContent = duedate;
    span2.classList.add('add-info-text')
    span2.classList.add('duedate-textModify')
    
    const backToDefault = document.createElement('div');
    backToDefault.setAttribute('id','backToDefaultModify')
    backToDefault.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

   
    const dueDateModify = document.createElement('input')
    dueDateModify.setAttribute('id', 'duedateModify' )
    dueDateModify.type = 'hidden';

    dueDateButton.appendChild(span1);
    dueDateButton.appendChild(span2);
    dueDateButton.appendChild(backToDefault);
    dueDateButton.appendChild(dueDateModify);

    const importantButtonModify = document.createElement('button');
    importantButtonModify.setAttribute('id', 'important-buttonModify');
    if(importantIcon.classList.contains('important-icon-true')){
        importantButtonModify.classList.add('important')
    }


    const span3 = document.createElement('span');
    span3.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" stroke="#6D6C6C" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'

    const span4 = document.createElement('span');
    span4.classList.add('add-info-text');
    span4.textContent = 'Important';

    const isImportantModify = document.createElement('input');
    isImportantModify.setAttribute('id','isImportantModify')
    isImportantModify.type = 'hidden'
    importantButtonModify.appendChild(span3);
    importantButtonModify.appendChild(span4)
    importantButtonModify.appendChild(isImportantModify);

    additionalInformationButtons.appendChild(dueDateButton);
    additionalInformationButtons.appendChild(importantButtonModify);

    const categoryAndCancelAddContainer = document.createElement('div')
    categoryAndCancelAddContainer.classList.add('category-and-cancel-add-container')

    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const btn = document.createElement('button')

    const btnSpan1 = document.createElement('span');
    btnSpan1.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" stroke="#3E54D3" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>'

    const btnSpan2  = document.createElement('span');
    btnSpan2.textContent = category

    btn.appendChild(btnSpan1);
    btn.appendChild(btnSpan2);

    categoryContainer.appendChild(btn)

    const cancelAddContainer = document.createElement('div');
    cancelAddContainer.classList.add('cancel-add-container');

    const cancelButtonModify = document.createElement('button')
    cancelButtonModify.classList.add('cancel-buttonModify')
    cancelButtonModify.textContent = 'Cancel'; 

    const saveModify = document.createElement('button')
    saveModify.classList.add('saveModify')
    saveModify.textContent = 'Save'; 

  

    cancelAddContainer.appendChild(cancelButtonModify);
    cancelAddContainer.appendChild(saveModify)

    categoryAndCancelAddContainer.appendChild(categoryContainer)
    categoryAndCancelAddContainer.appendChild(cancelAddContainer)
    modifyTaskContainer.appendChild(div1);
    modifyTaskContainer.appendChild(div2);
    modifyTaskContainer.appendChild(additionalInformationButtons);
    modifyTaskContainer.appendChild(categoryAndCancelAddContainer);
    return modifyTaskContainer;
}






export function createListBoxContainer(list){
    const li = document.createElement('li');
    li.setAttribute('data-id', list.id)

    const listInformationContainer = document.createElement('div');
    listInformationContainer.classList.add('list-info-container');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const leftContentContainer = document.createElement('div');
    leftContentContainer.classList.add('left-content-container');

    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox')
    checkbox.innerHTML = '<svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.77499 8.99999L1.92499 6.14999L2.63749 5.43749L4.77499 7.57499L9.36249 2.98749L10.075 3.69999L4.77499 8.99999Z" fill="#2C2C2C"/></svg>    '

    const listName = document.createElement('div');
    listName.classList.add('listName')

    listName.textContent = list.listName;

    if(list.isDone){
        checkbox.classList.add('checked')
        listName.classList.add('checked')
    }

    leftContentContainer.appendChild(checkbox);
    leftContentContainer.appendChild(listName);

    const rightContentContainer = document.createElement('div');
    rightContentContainer.classList.add('right-content-container');

    const dueDate = document.createElement('div');
    dueDate.classList.add('duedate');
    dueDate.textContent = list.duedate;

    const importantIcon = document.createElement('div');
    importantIcon.classList.add('important-icon')
    if(list.isImportant){
        importantIcon.classList.add('important-icon-true');
    }
    importantIcon.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="#2C2C2C" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'

    const optionIcon = document.createElement('div');
    optionIcon.classList.add('option-icon');

    const optionButton = document.createElement('button');
    optionButton.classList.add('option-button')

    optionButton.innerHTML = '<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 2C4.5 1.60444 4.3827 1.21776 4.16294 0.888859C3.94318 0.55996 3.63082 0.303615 3.26537 0.15224C2.89992 0.000864267 2.49778 -0.0387425 2.10982 0.0384281C1.72186 0.115598 1.36549 0.306081 1.08579 0.585786C0.806082 0.865491 0.615601 1.22186 0.53843 1.60982C0.46126 1.99778 0.500867 2.39991 0.652242 2.76537C0.803617 3.13082 1.05996 3.44318 1.38886 3.66294C1.71776 3.8827 2.10444 4 2.5 4C3.03025 3.9994 3.53861 3.7885 3.91356 3.41355C4.2885 3.03861 4.49941 2.53025 4.5 2ZM1.5 2C1.5 1.80222 1.55865 1.60888 1.66853 1.44443C1.77841 1.27998 1.93459 1.15181 2.11732 1.07612C2.30004 1.00043 2.50111 0.980628 2.69509 1.01921C2.88907 1.0578 3.06726 1.15304 3.20711 1.29289C3.34696 1.43274 3.4422 1.61093 3.48079 1.80491C3.51937 1.99889 3.49957 2.19996 3.42388 2.38268C3.34819 2.56541 3.22002 2.72159 3.05557 2.83147C2.89112 2.94135 2.69778 3 2.5 3C2.23488 2.9997 1.98069 2.89425 1.79322 2.70678C1.60575 2.51931 1.5003 2.26512 1.5 2ZM11.5 2C11.5 2.39556 11.6173 2.78224 11.8371 3.11114C12.0568 3.44004 12.3692 3.69638 12.7346 3.84776C13.1001 3.99913 13.5022 4.03874 13.8902 3.96157C14.2781 3.8844 14.6345 3.69392 14.9142 3.41421C15.1939 3.13451 15.3844 2.77814 15.4616 2.39018C15.5387 2.00222 15.4991 1.60008 15.3478 1.23463C15.1964 0.86918 14.94 0.556823 14.6111 0.33706C14.2822 0.117297 13.8956 -9.53674e-07 13.5 -9.53674e-07C12.9698 0.000594616 12.4614 0.211499 12.0864 0.586443C11.7115 0.961386 11.5006 1.46975 11.5 2ZM14.5 2C14.5 2.19778 14.4414 2.39112 14.3315 2.55557C14.2216 2.72002 14.0654 2.84819 13.8827 2.92388C13.7 2.99957 13.4989 3.01937 13.3049 2.98078C13.1109 2.9422 12.9327 2.84696 12.7929 2.70711C12.653 2.56725 12.5578 2.38907 12.5192 2.19509C12.4806 2.00111 12.5004 1.80004 12.5761 1.61732C12.6518 1.43459 12.78 1.27841 12.9444 1.16853C13.1089 1.05865 13.3022 0.999999 13.5 0.999999C13.7651 1.0003 14.0193 1.10575 14.2068 1.29322C14.3943 1.48069 14.4997 1.73487 14.5 2ZM6 2C6 2.39556 6.1173 2.78224 6.33706 3.11114C6.55682 3.44004 6.86918 3.69638 7.23463 3.84776C7.60009 3.99913 8.00222 4.03874 8.39018 3.96157C8.77814 3.8844 9.13451 3.69392 9.41421 3.41421C9.69392 3.13451 9.8844 2.77814 9.96157 2.39018C10.0387 2.00222 9.99914 1.60008 9.84776 1.23463C9.69639 0.86918 9.44004 0.556823 9.11114 0.33706C8.78224 0.117297 8.39556 -9.53674e-07 8 -9.53674e-07C7.46975 0.000594616 6.96139 0.211499 6.58645 0.586443C6.2115 0.961386 6.0006 1.46975 6 2ZM9 2C9 2.19778 8.94135 2.39112 8.83147 2.55557C8.72159 2.72002 8.56541 2.84819 8.38268 2.92388C8.19996 2.99957 7.99889 3.01937 7.80491 2.98078C7.61093 2.9422 7.43275 2.84696 7.29289 2.70711C7.15304 2.56725 7.0578 2.38907 7.01922 2.19509C6.98063 2.00111 7.00043 1.80004 7.07612 1.61732C7.15181 1.43459 7.27998 1.27841 7.44443 1.16853C7.60888 1.05865 7.80222 0.999999 8 0.999999C8.26513 1.0003 8.51931 1.10575 8.70678 1.29322C8.89425 1.48069 8.9997 1.73487 9 2Z" fill="#2C2C2C"/></svg>'

    optionIcon.appendChild(optionButton)
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('option-container');

    const edit = document.createElement('button');
    edit.classList.add('edit');

    const editSpan1 = document.createElement('span');
    editSpan1.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="#2c2c2c" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>'

    const editSpan2 = document.createElement('span');
    editSpan2.classList.add('edit-text');
    editSpan2.textContent = 'Edit';

    edit.appendChild(editSpan1);
    edit.appendChild(editSpan2);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');

    const deleteSpan1 = document.createElement('span');
    deleteSpan1.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="#E9083F" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>'

    const deleteSpan2 = document.createElement('span');
    deleteSpan2.classList.add('delete-text');
    deleteSpan2.textContent = 'Delete';

    deleteBtn.appendChild(deleteSpan1);
    deleteBtn.appendChild(deleteSpan2);

    optionContainer.appendChild(edit)
    optionContainer.appendChild(deleteBtn);
    optionIcon.appendChild(optionContainer);

    rightContentContainer.appendChild(dueDate);
    rightContentContainer.appendChild(importantIcon);
    rightContentContainer.appendChild(optionIcon);

    contentContainer.appendChild(leftContentContainer);
    contentContainer.appendChild(rightContentContainer);

    const listDescription = document.createElement('div');
    listDescription.classList.add('list-description');
    listDescription.textContent = list.description

    listInformationContainer.appendChild(contentContainer);
    listInformationContainer.appendChild(listDescription);
    li.appendChild(listInformationContainer);
      
    return li
}


