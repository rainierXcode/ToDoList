import { list, eventListener} from "../index/index.js";
import { createListBoxContainer } from "../container/layout.js";
import {getCurrentDate, isInThisWeek} from '../index/date.js'
import { addInImportantContainer, addInTodayContainer, addInWeekContainer } from "../container/all-container.js";
import { getProject } from "../container/projects.js";
import { isBefore } from "date-fns";


export function getList(){
    
let allListJSON = localStorage.getItem('list');
let allList;
try {
    allList = JSON.parse(allListJSON);
} catch (error) {
    console.error('Error parsing JSON:', error);
}

return allList;
}

export function updateCheckBox(result, idNum){
    let allList = getList()
    let thisObject = allList.find((list) => list.id == idNum)
    thisObject.isDone = result;
    localStorage.setItem('list', JSON.stringify(allList));
}

export function updateIsImportant(result, idNum){
    let allList = getList()
    let thisObject = allList.find((list) => list.id == idNum)
    thisObject.isImportant = result;
    localStorage.setItem('list', JSON.stringify(allList));
}

export function updateListName(result, idNum){
    let allList = getList()
    let thisObject = allList.find((list) => list.id == idNum)
    thisObject.listName = result;
    localStorage.setItem('list', JSON.stringify(allList));
}

export function updateListDescription(result, idNum){
    let allList = getList()
    let thisObject = allList.find((list) => list.id == idNum)
    thisObject.description = result;
    localStorage.setItem('list', JSON.stringify(allList));
}

export function updateDueDate(result, idNum){
    let allList = getList()
    let thisObject = allList.find((list) => list.id == idNum)
    thisObject.duedate = result;
    localStorage.setItem('list', JSON.stringify(allList));
}

export function updateImportant(result, idNum){
    let allList = getList();
    allList.forEach(list =>{
        if(list.id == idNum){
            list.isImportant = result;
            localStorage.setItem('list', JSON.stringify(allList));
        }
    })
}

export function addTaskInStorage(listName, description, duedate, isImportant,categoryID)
{
    let allList = getList();
    let listContainer = null;
    if(categoryID == 0){
        listContainer = document.querySelector(".inbox-list"); 
    }
    else{
        listContainer = document.querySelector('.project' + categoryID + '-list')
        let projects = getProject()
        let projectObject = projects.find(project => project.projectID == categoryID)
        projectObject.projectCount++;
        localStorage.setItem('projects', JSON.stringify(projects))
    }
   let currentId = parseInt(localStorage.getItem('idCounter')); 
   let newList = list(currentId,listName, description, duedate, isImportant, categoryID, false);
   allList.push(newList)
   localStorage.setItem('idCounter', currentId+1)
   localStorage.setItem('list', JSON.stringify(allList));
   let listBox = createListBoxContainer(newList)
   listContainer.appendChild(listBox)
   
   if(newList.isImportant){
    addInImportantContainer(newList)
   }
   if(newList.duedate == getCurrentDate()){
    addInTodayContainer(newList)
   }

   if(isInThisWeek(new Date(newList.duedate))){
    addInWeekContainer(newList)
   }
   eventListener(listBox)
   monitorAllCount();
}

export function removeListInStorage(id){
    let allList = getList()
    let newList = allList.filter( list => list.id != id);
    localStorage.setItem('list', JSON.stringify(newList));
}

function monitorInboxCount(allList){
    let inboxCount = allList.filter( (li) => li.categoryID == 0).length;
    const count = document.querySelector('.inbox .count');
    inboxCount = (inboxCount == 0) ? '': inboxCount;
    count.textContent = inboxCount;
}

function monitorTodayCount(allList){
    const count = document.querySelector('.today .count');
    let todayCount = allList.filter((li) =>{return li.duedate == getCurrentDate()}).length;
    if(todayCount == 0){
        todayCount = ''
    }
    else{
         count.classList.add('count-alertedlvl2')
    }
    count.textContent = todayCount;
}

function monitorThisWeekCount(allList){
    const count = document.querySelector('.thisweek .count');
    let thisWeekCount = allList.filter((li) =>{return isInThisWeek(li.duedate) }).length;
    if(thisWeekCount == 0){
        thisWeekCount = ''
    }
    else{
         count.classList.add('count-alertedlvl1')
    }
    count.textContent =thisWeekCount;
}

function monitorOverdueCount(allList){
    const count = document.querySelector('.overdue .count');
    const overdue = document.querySelector(".overdue")
    let overdueCount =  allList.filter( li =>{return isBefore(new Date(li.duedate), getCurrentDate()) && li.isDone}).length;
    if(overdueCount == 0){
        overdueCount = ''
    }
    else{
        overdue.classList.add('alertedlvl3')
    }
    count.textContent = overdueCount;
}

function monitorImportantCount(allList){
    const count = document.querySelector('.important-li .count');
    let importantCount = allList.filter(li => {return li.isImportant}).length;
    if(importantCount == 0){
        importantCount = ''
    }
    else{
        count.classList.add('count-importantlvl')
    }
    count.textContent = importantCount;
}

function projectsMonitorCount(){
    let projects = getProject();
    projects.forEach(project =>{
        const count = document.querySelector(`[data-container="project${project.projectID}-container"] .count`); 
        let countNum = (project.projectCount == 0) ? '': project.projectCount
        count.textContent = countNum
    })
}

export function monitorAllCount(){
    let allList = getList();
    monitorInboxCount(allList)
    monitorTodayCount(allList)
    monitorThisWeekCount(allList)
    monitorOverdueCount(allList)
    monitorImportantCount(allList)
    projectsMonitorCount()
}


