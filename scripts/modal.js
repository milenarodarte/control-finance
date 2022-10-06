const body = document.querySelector('body')
const main = document.querySelector('main')
const modalContainer = document.querySelector('.modal-container')
const botaoHeader = document.querySelector('.botaoHeader')
const closeModal = document.querySelector('.close-modal')
const registroDeValor = document.querySelector('.registro-de-valor')
const botaoEnviarModal = document.querySelector('.botao-enviar-modal')
const nenhumValor = document.querySelector('.nenhum-valor')
const pNenhumValorCadastrado = document.querySelector('.p-nenhum-valor-cadastrado')
const pRegistrarNovoValor = document.querySelector('.p-registrar-novo-valor')


function aparecendoModalEEventos() {    

    document.addEventListener('click', function (e){
        const el = e.target 
        
        
        if (el.classList.contains('botao-cancelar-modal')) {
            modalContainer.classList.toggle('show-modal')                
        }
        if (el.classList.contains('botaoHeader' )) {
            
            modalContainer.classList.toggle('show-modal')            
        }
        if (el.classList.contains('nenhum-valor' )) {
            
            modalContainer.classList.toggle('show-modal')            
        }
        if (el.classList.contains('p-nenhum-valor-cadastrado')){
            modalContainer.classList.toggle('show-modal')
        }
        if (el.classList.contains('p-registrar-novo-valor')){
            modalContainer.classList.toggle('show-modal')
        }
        if (el.classList.contains('close-modal')){
            modalContainer.classList.toggle('show-modal')
         
        }
    })

}
aparecendoModalEEventos()

 