const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

//Para cada elemento de cards criar um card
for(let card of cards){
    //Vai escutar o evento de click e quando tiver um click irá adicionar uma classe active
    card.addEventListener("click",function(){
        modalOverlay.classList.add('active')
    })
}

/*
Irá selecionar todos os elementos que possuem a classe especificada
irá escutar o evento de click, e quando acontecer irá remover da classe modal-overlay a classe active */
document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
})