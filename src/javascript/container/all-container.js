import { createListBoxContainer } from "./layout.js";
import { getList } from "../index/modify.js";
import {getCurrentDate, isInThisWeek} from '../index/date.js';
import { eventListener } from "../index/index.js";
import { isBefore } from "date-fns";


export  function addInTodayContainer(list){
    const todayList = document.querySelector('.today-list')
    let listBox = createListBoxContainer(list)
    todayList.appendChild(listBox)
    eventListener(listBox)
}

export  function addInWeekContainer(list){
    const thisweekList = document.querySelector('.thisweek-list')
    let listBox = createListBoxContainer(list)
    thisweekList.appendChild(listBox)
    eventListener(listBox)
}

export function addInImportantContainer(list){
    const importantList = document.querySelector('.important-list');
    let listBox = createListBoxContainer(list)
    importantList.appendChild(listBox)
    eventListener(listBox)
}


export function inboxMakeList(){
    let allList = getList()
    const inboxListContainer = document.querySelector(".inbox-list"); 
    let inboxListArray = allList.filter((li) =>{
        return li.categoryID == 0;
    })

   inboxListArray.forEach( list =>{
    inboxListContainer.appendChild(createListBoxContainer(list));
   })
  
}

export function todayMakeList(){
    let allList =getList();
    const todayListContainer = document.querySelector('.today-list');
    let todayListArray = allList.filter((li) =>{
        return li.duedate == getCurrentDate();
    })

    todayListArray.forEach(list =>{
        todayListContainer.appendChild(createListBoxContainer(list))
    })
}

export function thisWeekMakeList(){
    let allList =getList();
    const thisWeekListContainer = document.querySelector('.thisweek-list')
    let thisWeekListArray = allList.filter( (li) =>{
        return isInThisWeek(new Date(li.duedate))
    })
    thisWeekListArray.forEach(list =>{
        thisWeekListContainer.appendChild(createListBoxContainer(list))
    })
}

export function overdueMakeList(){
    let allList = getList()
    const overdueListContainer = document.querySelector(".overdue-list")
    let overListArray = allList.filter( li =>{
        return isBefore(new Date(li.duedate), getCurrentDate()) && li.isDone
    })
    overListArray.forEach(list =>{
        overdueListContainer.appendChild(createListBoxContainer(list))
    })
    
}

export function importantMakeList(){
    let allList = getList();
    const importantListContainer = document.querySelector('.important-list')
    let importantListArray = allList.filter((li) =>{
        return li.isImportant;
    })
    
    importantListArray.forEach( list =>{
        importantListContainer.appendChild(createListBoxContainer(list))
    })
}

