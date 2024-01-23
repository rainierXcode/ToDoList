export function navBtn(){
   const btn = document.querySelector(".navBtn")
   const aside = document.querySelector('aside')
   const article = document.querySelector('article')
   btn.addEventListener('click', () =>{
    aside.classList.toggle('unShow')
    article.classList.toggle('unShow')
   })
}