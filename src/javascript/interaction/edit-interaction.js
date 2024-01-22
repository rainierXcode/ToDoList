import { modifyContainer } from '../container/layout.js';
import { optionLimitAccessTogether } from './option-interaction.js';
import { modifyTaskListNameEvent } from './inputEvent.js';
import { updateListDescription, updateListName, updateDueDate, updateImportant} from '../index/modify.js';
import { importantButtonModifyEventListener } from './important-interaction.js';
import { getList } from '../index/modify.js';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { removeInImportantContainer } from './important-interaction.js';
import { getCurrentDate, isInThisWeek } from '../index/date.js';
import { addInImportantContainer, addInTodayContainer, addInWeekContainer } from '../container/all-container.js';
import { removeThisList} from './remove.js';

export function dueDateModifyEvent(dateStr) {
    const duedateText = document.querySelector(".duedate-textModify");
    const backToDefault = document.getElementById("backToDefaultModify")
    duedateText.textContent = dateStr;
    backToDefault.style.display = 'flex'
    backToDefault.addEventListener('click', (event) => {
        const duedate = document.getElementById("duedateModify")
        event.stopPropagation();
        backToDefault.style.display = 'none';
        duedate.value = ''
        duedateText.textContent = 'Due date';
    })
}



export function editEvent(list) {
    let id = list.getAttribute('data-id');
    const editButton = list.querySelector('.edit');

    editButton.addEventListener('click', () => {
        const listName = list.querySelector('.listName');
        const listDescription = list.querySelector('.list-description');
        const dueDate = list.querySelector('.duedate');
        const importantIcon = list.querySelector(".important-icon");
        const infoContainer = list.querySelector('.list-info-container');

        //Get Category
        const container = list.parentNode.parentNode;
        const categorytext = container.querySelector('.container-text').textContent
        
        infoContainer.style.display = 'none';

        const modifyContainerElement = modifyContainer(listName, listDescription, dueDate, importantIcon, categorytext);


        list.appendChild(modifyContainerElement);


        if (dueDate.textContent != '') {
            dueDateModifyEvent(dueDate.textContent)
        }



        flatpickr("#duedate-buttonModify", {
            dateFormat: "m/d/Y",
            minDate: 'today',
            mode: 'single',
            disableMobile: true,
            onChange: function (selectedDates, dateStr, instance) {
                dueDateModifyEvent(dateStr);
            }
        });

        let prevImportantResult = importantIcon.classList.contains('important-icon-true')
        let allList = getList()
        let listObject = allList.filter(list => {return list.id == id})[0]

        modifyTaskListNameEvent();
        importantButtonModifyEventListener()

        saveModify(listName, listDescription, dueDate, importantIcon, id, infoContainer, list, prevImportantResult);
        cancelModify(infoContainer, list)

    });
}

function showInfoContainer(infoContainer, list) {
    const modifyBox = document.querySelector('.modify-task-container');
    const optionContainer = list.querySelector('.option-container')
    list.removeChild(modifyBox);
    optionContainer.style.display = 'none'
    infoContainer.style.display = 'flex';
    optionLimitAccessTogether(false)
}

function cancelModify(infoContainer, list) {
    const cancel = document.querySelector('.cancel-buttonModify');
    cancel.addEventListener('click', () => {
        showInfoContainer(infoContainer, list);
    })
}

function ifSaveInTodayOrWeekOrImportant(prevDueDate, nowDueDate, prevImportantResult,nowImportantResult,id){
    const todayListContainer = document.querySelector('.today-list')
    const thisweekListContainer = document.querySelector('.thisweek-list')
    const todayListBox = todayListContainer.querySelector('[data-id="' + id +'"]')
    const thisweekListBox = thisweekListContainer.querySelector('[data-id="' + id +'"]')
    
    let allList = getList()
    let thisObject = allList.find(list => list.id == id)
    thisObject.duedate = nowDueDate

    nowImportantResult = (nowImportantResult == 'Due date') ? '' : nowImportantResult;
    thisObject.isImportant = nowImportantResult

    if(prevDueDate!=nowDueDate){
        if(prevDueDate == getCurrentDate()){
            if(todayListBox){
               removeThisList(todayListBox)
            }
        }

        else if(nowDueDate == getCurrentDate()){
            addInTodayContainer(thisObject)
        }

        if(isInThisWeek(new Date(prevDueDate)) && !isInThisWeek(new Date(nowDueDate))){
            if(thisweekListBox){
                removeThisList(thisweekListBox)
            }
        }
        else if(isInThisWeek(new Date(nowDueDate))){
            addInWeekContainer(thisObject)
        }
    }

    if (prevImportantResult != nowImportantResult) {
        updateImportant(nowImportantResult, id);
        if(!nowImportantResult){
          removeInImportantContainer(id)
        }
        else{
         addInImportantContainer(thisObject)
        }
     }
}

function saveModify(listName, listDescription, duedate, importantIcon,id, infoContainer, list, prevImportantResult) {
    const taskNameInput = document.getElementById('taskNameModify');
    const taskDescriptionInput = document.getElementById('taskDescriptionModify')
    const saveModify = document.querySelector(".saveModify")
    const duedateInput = document.querySelector(".duedate-textModify");

    saveModify.addEventListener('click', () => {
        const taskNameValue = taskNameInput.value.trim();
        const taskDescriptionValue = taskDescriptionInput.value.trim();

        if (listName.textContent != taskNameValue) {
            updateListName(taskNameValue, id)
            listName.textContent = taskNameValue;
        }

        if (listDescription.textContent != taskDescriptionValue) {
            updateListDescription(taskDescriptionValue, id)
            listDescription.textContent = taskDescriptionValue;
        }


        let prevDueDate = (duedate.textContent == '') ? 'Due date' : duedate.textContent
        let nowDueDate = duedateInput.textContent;
          nowDueDate = (nowDueDate == 'Due date') ? '' : nowDueDate
        if (prevDueDate != nowDueDate) {
            updateDueDate(nowDueDate, id)
            duedate.textContent = nowDueDate;
        }

        let nowImportantResult = document.getElementById("important-buttonModify").classList.contains('important')
        ifSaveInTodayOrWeekOrImportant(prevDueDate, nowDueDate,prevImportantResult,nowImportantResult, id)


        if(nowImportantResult){
            importantIcon.classList.add('important-icon-true')
        }
        else{
            importantIcon.classList.remove('important-icon-true')
        }


        showInfoContainer(infoContainer, list)
    });
}
