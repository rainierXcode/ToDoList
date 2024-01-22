
import {inboxMakeList, todayMakeList, thisWeekMakeList, importantMakeList, overdueMakeList} from '../container/all-container.js'
import { plusButtonAddTask } from '../interaction/addtask-interaction.js';
import { monitorAllCount } from './modify.js';
import { allNavProjectContainer, allProjectContainer, projectsShowButtonEvent} from '../container/projects.js';
import { importantButton } from '../interaction/important-interaction.js';
import { switchingNav } from '../interaction/switch-container.js';
import { checkboxEventListener } from '../interaction/checkbox-interaction.js';
import { options } from '../interaction/option-interaction.js';
import { editEvent } from '../interaction/edit-interaction.js';
import { allAddProjectEvent } from '../container/projects.js';
import { navBtn } from '../interaction/nav.js';
import '../../css/style.css';



export function list(id,listName, description, duedate, isImportant, categoryID, isDone){
    return{
        id,
        listName,
        description,
        duedate,
        isImportant,
        categoryID,
        isDone
    }
}


function initialList(){
let list1 =  list (1, 'cooking', 'prepare a delicious meal', '01/19/2024', true, 2, false)
let list2 = list(2, 'studying', 'along with my friends', '01/20/2024', false, 1, false)
let list3 = list(3, 'shopping', 'groceries', '02/15/2024', true, 2, false);
let list4 = list(4, 'coding', 'work on a project', '03/10/2024', false, 3 , false);
let list5 = list (5, 'writing', 'work on writing project', '03/05/2024', false, 3, false);
let list6 = list(6, 'read emails', 'respond to important emails', '02/05/2024', true, 0 , false);
let list7 = list(7, 'pay bills', 'utility bills and rent', '02/10/2024', false, 0, false);
let list8 = list(8, 'meeting', 'attend team meeting', '02/08/2024', false, 3, false);
let list9 = list(9, 'inbox task', 'complete inbox tasks', '02/15/2024', true, 0, false);
let list10 = list(10, 'reading', 'read a book', '03/01/2024', false, 2, false);

let listArray = [list1, list2, list3, list4, list5, list6, list7, list8, list9, list10]

localStorage.setItem('list', JSON.stringify(listArray));
localStorage.setItem('idCounter', 11);
let initialProject = [
  {projectName : 'School', projectCount:  1, projectID: 1}, 
  {projectName:'Personal', projectCount:  3, projectID: 2}, 
  {projectName: 'Work', projectCount: 3, projectID: 3}]
localStorage.setItem('projects', JSON.stringify(initialProject))
localStorage.setItem('idProjectCount', 4);
}

function initial(){
if(!localStorage.getItem('list')){
  initialList();
}
}

function makeList(){
  inboxMakeList();
  todayMakeList();
  thisWeekMakeList()
  overdueMakeList()
  importantMakeList()
  monitorAllCount()
}

export function eventListener(element) {
  checkboxEventListener(element);
  importantButton(element);
  options(element);
  editEvent(element);
}

function setupEventListeners() {
  const allListBoxes = document.querySelectorAll('.list li');
  allListBoxes.forEach(list => {
    eventListener(list);
  });
}

initial();
allNavProjectContainer()
allProjectContainer()
switchingNav()
makeList();
setupEventListeners();
allAddProjectEvent()
plusButtonAddTask(document.querySelector('.add-task-container'))
projectsShowButtonEvent()
navBtn()