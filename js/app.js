const menu = document.getElementById("menu");
const closed = document.getElementById("close");
const card = document.getElementById('card')

//show menu
menu.addEventListener('click',()=>{
    if(window.innerWidth<769){
        menu.classList.toggle('hidden')
        closed.classList.toggle('show')
        card.classList.toggle('show')
        
    }
})
//hide menu
closed.addEventListener('click',()=>{
    if(window.innerWidth<769){
        menu.classList.toggle('hidden')
        closed.classList.toggle('show')
        card.classList.toggle('show')
    }
})

