import { removeThisList } from "./remove.js";
import { monitorAllCount, removeListInStorage } from "../index/modify.js";

export function optionLimitAccessTogether(hasShowOne){
    const allOptionBtn = document.querySelectorAll('.option-button');
    allOptionBtn.forEach( btn =>{
        if(hasShowOne){
            btn.style.pointerEvents = 'none'
        }
        else{
            btn.style.pointerEvents = 'auto'
        }
    })
}

function deleteList(list,id){
    const btn = list.querySelector('.delete')
        btn.addEventListener('click', () =>{
           removeThisList(list)
           removeListInStorage(id)
           optionLimitAccessTogether(false)
           monitorAllCount()
        }) 
}


export function options(list){
    let id = list.getAttribute('data-id');
    let isShow = false;
        const optionButton = list.querySelector('.option-button');
        optionButton.addEventListener('click', () =>{
           const optionContainer = list.querySelector('.option-container');
           if(!isShow){
            optionContainer.style.display = 'flex';
            deleteList(list, id);
            isShow = true;
            optionLimitAccessTogether(optionButton, true)
            optionButton.style.pointerEvents = 'auto'
           }

           else{
            optionContainer.style.display = 'none';
            isShow = false;
            optionLimitAccessTogether(false)
           }
        })
}


