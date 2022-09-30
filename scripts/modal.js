const body = document.querySelector('body')
const main = document.querySelector('main')
const modalContainer = document.createElement('div')
modalContainer.setAttribute('class', 'modal-container')

const botaoHeader = document.querySelector('.botaoHeader')

const closeModal = document.createElement('button')
closeModal.innerText = 'X'
closeModal.setAttribute('class', 'close-modal')

const registroDeValor = document.createElement('p')
registroDeValor.innerText = 'Registro de valor'
registroDeValor.setAttribute('class', 'registro-de-valor')


function criandoModal () {
    
    //close modal e registro de valor estao sendo criados no card
    // eles precisam ser criados no escopo global pra poder chamar na hora do evento cliick no botao
   

    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    
    const instrucoesRegistroDeValor = document.createElement('p')
    instrucoesRegistroDeValor.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    instrucoesRegistroDeValor.setAttribute('class', 'instrucoes-registro-de-valor')
    const inserirValor = document.createElement('form')
    inserirValor.setAttribute('class', 'inserir-valor')
   

    const labelValor = document.createElement('label')
    labelValor.innerText = 'Valor'
    labelValor.setAttribute('class', 'label-valor')
    labelValor.setAttribute('for', 'input-valor')
    const inputValor = document.createElement('input')
    inputValor.setAttribute('class', 'input-valor')
    inputValor.setAttribute('type', 'number')

    inputValor.setAttribute('required', 'precisa-declarar') 
    const divInputRadio = document.createElement('div')
    divInputRadio.setAttribute('class', 'input-radio')
    const botoesModalEnviarCancelar = document.createElement('div')
    botoesModalEnviarCancelar.setAttribute('class', 'botoes-modal-enviar-cancelar')

   
    const tipoDeValor = document.createElement('p')
    tipoDeValor.setAttribute('class', 'tipo-de-valor')
    tipoDeValor.innerText='Tipo de valor'

    const labelRadioEntrada = document.createElement('label')
    labelRadioEntrada.innerText = 'entrada'
    labelRadioEntrada.setAttribute('class', 'label-radio')
    labelRadioEntrada.setAttribute('for', 'entrada')
    const inputRadioEntrada = document.createElement('input')
    inputRadioEntrada.setAttribute('type','radio')
    inputRadioEntrada.setAttribute('name','escolha-entrada-saida')
    inputRadioEntrada.setAttribute('id', 'entrada')
    inputRadioEntrada.setAttribute('class','radio-button')
    inputRadioEntrada.setAttribute('value', 'entrada')
    const labelRadioSaida = document.createElement('label')
    labelRadioSaida.innerText = 'Saída'
    labelRadioSaida.setAttribute('class', 'label-radio')
    labelRadioSaida.setAttribute('for', 'saida')
    const inputRadioSaida = document.createElement('input')
    inputRadioSaida.setAttribute('type','radio')
    inputRadioSaida.setAttribute('name','escolha-entrada-saida')
    inputRadioSaida.setAttribute('id', 'saida')
    inputRadioSaida.setAttribute('class','radio-button')
    inputRadioSaida.setAttribute('value', 'saida')

   


    const botaoCancelarModal = document.createElement('button')
    botaoCancelarModal.setAttribute('class', 'botao-cancelar-modal')
    botaoCancelarModal.innerText = 'Cancelar'
    const botaoEnviarModal = document.createElement('button')
    botaoEnviarModal.setAttribute('class', 'botao-enviar-modal')
    botaoEnviarModal.setAttribute('type', 'submit')
    botaoEnviarModal.setAttribute('value', 'submit')
    botaoEnviarModal.innerText = 'Enviar'

   

    body.append(modalContainer, main)
    modalContainer.append(modal)
    modal.append(closeModal, registroDeValor, instrucoesRegistroDeValor, inserirValor)
    inserirValor.append(labelValor,inputValor,divInputRadio,botoesModalEnviarCancelar)
    divInputRadio.append(tipoDeValor,labelRadioEntrada,inputRadioEntrada,labelRadioSaida,inputRadioSaida)
    botoesModalEnviarCancelar.append(botaoCancelarModal,botaoEnviarModal)
    
    
}
criandoModal()



function adicionarEventoClick (){
   

    
    botaoHeader.addEventListener('click', function(e){
        const el = e.target
        console.log(el)
        if (el.classList.contains('botaoHeader')) {
            
            modalContainer.classList.toggle('show-modal')
            
            
        }
       
    })
    closeModal.addEventListener('click', function (e){
        const elm = e.target
        if (elm.classList.contains('close-modal')){
            modalContainer.classList.toggle('show-modal')
         
        }
    })
}
adicionarEventoClick()
