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
registroDeValor.setAttribute('placeholder', '00,00')



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
    const divInputBotoes = document.createElement('div')
    divInputBotoes.setAttribute('class', 'escolher-valor')
    const botoesModalEnviarCancelar = document.createElement('div')
    botoesModalEnviarCancelar.setAttribute('class', 'botoes-modal-enviar-cancelar')

   
    const tipoDeValor = document.createElement('p')
    tipoDeValor.setAttribute('class', 'tipo-de-valor')
    tipoDeValor.innerText='Tipo de valor'

    const buttonEntrada = document.createElement('button')
    buttonEntrada.innerText = 'Entrada'
    buttonEntrada.setAttribute('class', 'botao-entrada')
    buttonEntrada.setAttribute('name', 'escolha-entrada-saida')
    buttonEntrada.setAttribute('id', 'entrada')
    buttonEntrada.setAttribute('value', 'entrada')

    const buttonSaida = document.createElement('button')
    buttonSaida.innerText = 'Saída'
    buttonSaida.setAttribute('class', 'botao-saida')
    buttonSaida.setAttribute('name', 'escolha-entrada-saida')
    buttonSaida.setAttribute('id', 'saida')
    buttonSaida.setAttribute('value', 'saida')


/* 
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
    inputRadioSaida.setAttribute('value', 'saida') */

   


    const botaoCancelarModal = document.createElement('button')
    botaoCancelarModal.setAttribute('class', 'botao-cancelar-modal')
    botaoCancelarModal.innerText = 'Cancelar'

    
    const botaoEnviarModal = document.createElement('button')
    botaoEnviarModal.setAttribute('class', 'botao-enviar-modal')
    botaoEnviarModal.setAttribute('type', 'submit')
    botaoEnviarModal.setAttribute('value', 'submit')
    botaoEnviarModal.innerText = 'Inserir valor'

   

    body.append(modalContainer, main)
    modalContainer.append(modal)
    modal.append(closeModal, registroDeValor, instrucoesRegistroDeValor, inserirValor,  botaoCancelarModal)
    inserirValor.append(labelValor,inputValor,divInputBotoes,botoesModalEnviarCancelar)
    divInputBotoes.append(tipoDeValor,buttonEntrada, buttonSaida)
    botoesModalEnviarCancelar.appendChild(botaoEnviarModal)
    
    botaoEnviarModal.addEventListener ('click', function (e){
        const el = e.target 
        
        if ( el.classList.contains('botao-enviar-modal')){
            let listaFormadoraEntradaSaida = criandoCardEntradaSaida()
            listaFormadoraEntradaSaida.classList.toggle('show-modal')
            console.log(listaFormadoraEntradaSaida)
        }
        
    })
    botaoCancelarModal.addEventListener('click', function (e) {
        const el= e.target
        if (el.classList.contains('botao-cancelar-modal')) {
            modalContainer.classList.toggle('show-modal')
            
        }
    })
    
}
criandoModal()


function adicionarEventoClick (){
   
    const nenhumValor = document.querySelector('.nenhum-valor')
    const pNenhumValorCadastrado = document.querySelector('.p-nenhum-valor-cadastrado')
    const pRegistrarNovoValor = document.querySelector('.p-registrar-novo-valor')

    
    botaoHeader.addEventListener('click', function(e){
        const el = e.target
        console.log(el)
        if (el.classList.contains('botaoHeader' )) {
            
            modalContainer.classList.toggle('show-modal')
            
            
        }
       
    })
    

    nenhumValor.addEventListener('click', function (e){
        const elemento = e.target
        console.log(elemento)
        if (elemento.classList.contains('nenhum-valor' )) {
            
            modalContainer.classList.toggle('show-modal')
            
        }
        
    })

    pNenhumValorCadastrado.addEventListener('click', function (e){
        const el = e.target
        if (el.classList.contains('p-nenhum-valor-cadastrado')){
            modalContainer.classList.toggle('show-modal')
        }
    })
    pRegistrarNovoValor.addEventListener('click', function (e){
        const el = e.target
        if (el.classList.contains('p-registrar-novo-valor')){
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

