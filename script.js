const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

//Para cada elemento de cards criar um card
for(let card of cards){
    //Vai escutar o evento de click e quando tiver um click irá adicionar uma classe active
    card.addEventListener("click",function(){

        const videoid = card.getAttribute("id") //VAI PEGAR O ATRIBUTO ID DAS TAGS e atribuir a variavel videoid
        modalOverlay.classList.add('active') 

        /*irá selecionar o iframe dentro do documento html e a cada click irá inserir um video a id diferente de acordo com o card clicado */
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoid}`

        
    })
}

/*
Irá selecionar todos os elementos que possuem a classe especificada
irá escutar o evento de click, e quando acontecer irá remover da classe modal-overlay a classe active */
document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src =""
})

//Procurar o iframe para pudermos trocar os videos

