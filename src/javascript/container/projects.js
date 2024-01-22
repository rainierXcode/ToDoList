import { createListBoxContainer } from "./layout.js"
import { getList } from "../index/modify";
import { switchingNav } from "../interaction/switch-container.js";
import { plusButtonAddTask } from "../interaction/addtask-interaction.js";

function navProjectContainer(projectID, countNum, projectName) {
    const li = document.createElement('li');

    li.setAttribute('data-container', 'project' + projectID + '-container')

    const iconNameContainer = document.createElement('div')
    iconNameContainer.classList.add('icon-name-container')

    iconNameContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.885 10.23L12 3.463l4.115 6.769zm9.615 11q-1.567 0-2.65-1.08q-1.08-1.083-1.08-2.65t1.08-2.649q1.083-1.082 2.65-1.082t2.65 1.082q1.08 1.082 1.08 2.649t-1.081 2.65q-1.082 1.08-2.649 1.08m-13.73-.5v-6.46h6.46v6.46zm13.73-.5q1.146 0 1.938-.791q.793-.792.793-1.938q0-1.147-.792-1.94q-.792-.792-1.938-.792q-1.147 0-1.94.792q-.792.792-.792 1.938q0 1.147.792 1.94q.792.792 1.938.792m-12.73-.5h4.462v-4.462H4.769zm4.858-10.5h4.746L12 5.427zM17.5 17.5"/></svg>'

    const spanIconName = document.createElement('span')
    spanIconName.textContent = projectName
    iconNameContainer.appendChild(spanIconName);

    const count = document.createElement('div')
    count.classList.add('count')
    countNum = (countNum == 0) ? '' : countNum;
    count.textContent = countNum

    li.appendChild(iconNameContainer)
    li.appendChild(count)
    return li;
}

export function getProject() {
    let storageList = localStorage.getItem('projects')
    let projectList = JSON.parse(storageList);

    return projectList;
}

export function allNavProjectContainer() {
    const allProject = document.querySelector('.all-project')
    let allProjectList = getProject()
    allProjectList.forEach(project => {
        const projectID = project.projectID
        const count = project.projectCount
        const projectName = project.projectName
        allProject.appendChild(navProjectContainer(projectID, count, projectName))
    });
}

function projectContainer(projectID, projectName) {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('project' + projectID + '-container')
    projectContainer.classList.add('container')

    const projectText = document.createElement('div')
    projectText.textContent = projectName
    projectText.classList.add(projectName + '-text')
    projectText.classList.add('container-text')

    const projectList = document.createElement('ul')
    projectList.classList.add('project' + projectID + '-list')
    projectList.classList.add('list')

    let allList = getList()
    let allListInProject = allList.filter((list) => list.categoryID == projectID)
    allListInProject.forEach(list => [
        projectList.appendChild(createListBoxContainer(list))
    ])

    const addTaskContainer = document.createElement('div')
    addTaskContainer.classList.add('add-task-container')
    const addTaskButton = document.createElement('button')
    addTaskButton.classList.add('add-task-button');
  

    const addTaskButtonContainer = document.createElement('div')
    addTaskButtonContainer.classList.add('add-task-button-container');
    addTaskButtonContainer.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" stroke="#3E54D3" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'

    const addTaskText = document.createElement('span')
    addTaskText.classList.add('add-task-text')
    addTaskText.textContent = 'Add task'

    addTaskButton.appendChild(addTaskButtonContainer)
    addTaskButton.appendChild(addTaskText)
    addTaskContainer.appendChild(addTaskButton)

    projectContainer.appendChild(projectText)
    projectContainer.appendChild(projectList)
    projectContainer.appendChild(addTaskContainer)
    plusButtonAddTask(addTaskContainer)
    return projectContainer
}



export function allProjectContainer() {
    const article = document.querySelector('article')
    let allProjectList = getProject()
    allProjectList.forEach(project => {
        article.appendChild(projectContainer(project.projectID, project.projectName))
    })

}

function removeInputContainer() {
    document.querySelector(".add-project-container").style.display = 'none'
    document.getElementById("input-project").value = ''
}

function cancelInputProject() {
    const btn = document.getElementById("project-cancel-button")
    btn.addEventListener('click', () => {
        removeInputContainer()
    })
}

function projectInputListener() {
    const input = document.getElementById('input-project')
    const addBtn = document.getElementById('project-add-button')
    input.addEventListener('input', () => {
        if (input.value.trim() != 0) {
            addBtn.style.pointerEvents = 'auto'
            addBtn.style.opacity = 1
        }
        else {
            addBtn.style.pointerEvents = 'none'
            addBtn.style.opacity = 0.7
        }
    })
}


function projectPlusBtn() {
    const plusBtn = document.querySelector('.projectPlus')
    plusBtn.addEventListener('click', () => {
        document.querySelector(".add-project-container").style.display = 'block'
    })
}


function addProjectEvent() {
    const btn = document.getElementById('project-add-button')
    btn.addEventListener('click', () => {
        let projects = getProject();
        let projectID = parseInt(localStorage.getItem('idProjectCount'))    
        const projectInput = document.getElementById("input-project").value
        projects.push({ projectName: projectInput, projectCount: 0, projectID: projectID })
        localStorage.setItem('projects', JSON.stringify(projects))
        localStorage.setItem('idProjectCount', projectID + 1);
        document.querySelector('.all-project').appendChild(navProjectContainer(projectID, 0, projectInput))
        document.querySelector('article').appendChild(projectContainer(projectID, projectInput))
        
        removeInputContainer()
        switchingNav()
    })
}

export function allAddProjectEvent() {
    projectPlusBtn()
    projectInputListener()
    addProjectEvent()
    cancelInputProject()
}



export function projectsShowButtonEvent(){
    const showBtn = document.querySelector('.showBtn')
    const allProject = document.querySelector(".all-project")
    const inputContainer = document.querySelector(".add-project-container")
    showBtn.addEventListener('click', () =>{
        showBtn.classList.toggle('unShow')
        allProject.classList.toggle('unShow')
        inputContainer.style.display = 'none'
    })
}