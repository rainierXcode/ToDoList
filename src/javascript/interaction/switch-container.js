function removeAddContainerInSwitching(current){
    const addTaskBox = current.querySelector('.add-task-box-container')
    if(addTaskBox){
        addTaskBox.remove()
        const plusBtn = current.querySelector('.add-task-button');
        plusBtn.style.display = 'flex';
    }
}


export function switchingNav() {
    const nav = document.querySelectorAll('.navbar li, .all-project li')
    let current = document.querySelector(".current-nav")
    nav.forEach(n => {
        n.addEventListener('click', () => {
           //Update Current Nav
           if(current != n){
            nav.forEach( n =>{
                n.classList.remove('current-nav')
               })
               n.classList.add('current-nav')
               const containerData = n.getAttribute('data-container');
               const allContainer = document.querySelectorAll('.container');
               allContainer.forEach(box =>{
                box.style.display = 'none';
               })
               const container = document.querySelector('.' + containerData)
               container.style.display = 'block'

               const currentContainerData = current.getAttribute('data-container')
               const currentContainer = document.querySelector('.' + currentContainerData)
               removeAddContainerInSwitching(currentContainer)
           }
           current = n;
        })
    })
}