export function navBtn(){
   const btn = document.querySelector(".navBtn")
   const aside = document.querySelector('aside')
   const article = document.querySelector('article')
   const titleContainer = document.querySelector(".title-container")
   const headerContainer = document.querySelector(".header-container")
   btn.addEventListener('click', () =>{
    aside.classList.toggle('unShow')
    article.classList.toggle('unShow')
    titleContainer.classList.toggle('unShow')
    headerContainer.classList.toggle('unShow')
   })
}