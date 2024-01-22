
import flatpickr from "flatpickr";

export function duedateButton(){
    flatpickr("#duedate-button", {
        dateFormat: "m/d/Y",
        minDate: 'today',
        mode: 'single',
        disableMobile: true,
        onChange: function(selectedDates, dateStr, instance){
            const backToDefault = document.getElementById("backToDefault");
            const addInfoTextElement = document.querySelector('.duedate-text');
            const duedate = document.getElementById('duedate')
            addInfoTextElement.textContent = dateStr;
            duedate.value = dateStr;
            backToDefault.style.display = 'flex'
            backToDefaultEventListener()
        }
      });
}

export function backToDefaultEventListener(){
    const addInfoTextElement = document.querySelector('.duedate-text');
    const duedate = document.getElementById('duedate')
    const backToDefault = document.getElementById("backToDefault");
    backToDefault.addEventListener('click', (event) =>{
        event.stopPropagation();
        backToDefault.style.display = 'none';
        duedate.value = ''
        addInfoTextElement.textContent = 'Due date';
    })
}
