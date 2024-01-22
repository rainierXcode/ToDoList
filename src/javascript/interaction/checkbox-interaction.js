import {  updateCheckBox } from "../index/modify.js";
import { monitorAllCount } from "../index/modify.js";
import checkboxSound from '/src/sound/checkbox.mp3';
const audio = new Audio(checkboxSound);



export function checkboxEventListener(list){
    const checkbox = list.querySelector('.checkbox');
    checkbox.addEventListener('click', () =>{
        let id = list.getAttribute('data-id');
        const sameListBoxes = document.querySelectorAll('[data-id="' + id + '"]');
        sameListBoxes.forEach( element =>{
            const checkbox = element.querySelector('.checkbox')
            const listName = element.querySelector('.listName')

            if(!checkbox.classList.contains('checked')){
                checkbox.classList.add('checked')
                listName.classList.add('checked')
                updateCheckBox(true, id)
            }
            else{
                checkbox.classList.remove('checked')
                listName.classList.remove('checked')
                updateCheckBox(false, id)
            }
        })
        audio.play();
        monitorAllCount()
    })

}

