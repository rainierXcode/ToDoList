export function navBtn(){
   const btn = document.querySelector(".navBtn")
   const aside = document.querySelector('aside')
   const mainContainer = document.querySelector(".main-container")
   const headerContainer = document.querySelector(".header-container")
   btn.addEventListener('click', () =>{
    aside.classList.toggle('unShow')
    mainContainer.classList.toggle('unShow')
    headerContainer.classList.toggle('unShow')
   })
}