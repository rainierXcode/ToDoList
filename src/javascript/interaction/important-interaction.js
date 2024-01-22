import {updateIsImportant,monitorAllCount} from '../index/modify.js'
import { removeThisList } from './remove.js'
import { addInImportantContainer } from '../container/all-container.js'
import { getList } from '../index/modify.js'



export function removeInImportantContainer(id){
    const importantListContainer = document.querySelector('.important-list')
    const thisListBox = importantListContainer.querySelector('[data-id="' + id +'"]')
    if(thisListBox){
       removeThisList(thisListBox)
    }
}


// inbox
export function importantButton(list){
    const importantBtn = list.querySelector('.important-icon')
    importantBtn.addEventListener('click', () =>{
        let id = list.getAttribute('data-id');
        let allList = getList()
        let thisObject = allList.find(list => list.id == id)
        const allSameImportant = document.querySelectorAll('[data-id="' + id + '"] .important-icon')
        if(importantBtn.classList.contains('important-icon-true')){
            allSameImportant.forEach(btn =>{
                btn.classList.remove('important-icon-true')
            })
            updateIsImportant(false, id);
            removeInImportantContainer(id)
        }
        else{
            allSameImportant.forEach(btn =>{
                btn.classList.add('important-icon-true')
            })
            updateIsImportant(true, id);
            thisObject.isImportant = true
            addInImportantContainer(thisObject)
        }
        monitorAllCount()
    })  
}

//add task
export function setImportantButtonEventListener(){
    const setImportantButton =  document.getElementById('setting-important-button');
const isImportant = document.getElementById('isImportant');
    let isSetImportant = false;
    setImportantButton.addEventListener('click', () =>{
        if(!isSetImportant){
            setImportantButton.classList.add('important');
            isSetImportant = true;
            isImportant.value = 'true';
        }
        else{
            setImportantButton.classList.remove('important');
            isSetImportant = false;
            isImportant.value = 'false';
        }

    })
}


//modify
export function importantButtonModifyEventListener(){
    const btn = document.getElementById("important-buttonModify");
    btn.addEventListener('click', () =>{
        if(!btn.classList.contains('important')){
            btn.classList.add('important')
        }
        else{
            btn.classList.remove('important')
        }
    })
}


