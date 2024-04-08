const panels = document.querySelectorAll('.panel')

panels.forEach((items)=>{
    items.addEventListener('click', ()=>{
        removeActiveClasses()
        items.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}