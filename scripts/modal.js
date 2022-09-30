const body = document.querySelector('body')
const modalContainer = document.createElement('div')
modalContainer.setAttribute('class', 'mnodal-container')

function criandoModal () {

    //close modal e registro de valor estao sendo criados no card
    // eles precisam ser criados no escopo global pra poder chamar na hora do evento cliick no botao
    const closeModal = document.createElement('close-modal')
    closeModal.innerText = 'X'
    closeModal.setAttribute('class', 'close-modal')
    const registroDeValor = document.createElement('p')
    registroDeValor.innerText = 'Registro de valor'
    registroDeValor.setAttribute('class', 'registro-de-valor')
    const instrucoesRegistroDeValor = document.createElement('p')
    instrucoesRegistroDeValor.setAttribute('class', 'instrucoes-registro-de-valor')
    const inserirValor = document.createElement('form')
    inserirValor.setAttribute('class', 'inserir-valor')
    body.append(modalContainer, closeModal,registroDeValor,inserirValor,inserirValor)

    const labelValor = document.createElement('label')
    labelValor.innerText = 'Valor'
    labelValor.setAttribute('class', 'label-valor')
    labelValor.setAttribute('for', 'input-valor')
    const inputValor = document.createElement('input')
    inputValor.setAttribute('class', 'input-valor')
    inputValor.setAttribute('type', 'number')
    inputValor.setAttribute('required') 
    const divInputRadio = document.createElement('div')
    divInputRadio.setAttribute('class', 'input-radio')
    const botoesModalEnviarCancelar = document.createElement('div')
    botoesModalEnviarCancelar.setAttribute('class', 'botoes-modal-enviar-cancelar')

    inserirValor.append(labelValor,inputValor,divInputRadio,botoesModalEnviarCancelar)

    const tipoDeValor = document.createElement('p')
    tipoDeValor.innerText='Tipo de valor'
    tipoDeValor.setAttribute('class', 'tipo-de-valor')

    const labelRadioEntrada = document.createElement('label')
    labelRadioEntrada.innerText = 'entrada'
    labelRadioEntrada.setAttribute('class', 'label-radio')
    labelRadioEntrada.setAttribute('for', 'entrada')
    const inputRadioEntrada = document.createElement('input')
    inputRadioEntrada.setAttribute('type','radio')
    inputRadioEntrada.setAttribute('name','escolha-entrada-saida')
    inputRadioEntrada.setAttribute('id', 'entrada')
    inputRadioEntrada.setAttribute('class','radio-button')
    inputRadioSaida.setAttribute('value', 'entrada')
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

    divInputRadio.append(labelRadioEntrada,inputRadioEntrada,labelRadioSaida,inputRadioSaida)


    const botaoCancelarModal = document.createElement('button')
    botaoCancelarModal.setAttribute('class', 'botao-cancelar-modal')
    botaoCancelarModal.innerText = 'Cancelar'
    const botaoEnviarModal = document.createElement('button')
    botaoEnviarModal.setAttribute('class', 'botao-enviar-modal')
    botaoEnviarModal.setAttribute('type', 'submit')
    botaoEnviarModal.setAttribute('value', 'submit')
    botaoEnviarModal.innerText = 'Enviar'

    botoesModalEnviarCancelar.append(botaoCancelarModal,botaoEnviarModal)

    body.appendChild(modalContainer)

}

criandoModal()

function adicionarEventoClick (e){
    const el = e.target
    botaoHeader.addEventListener('click', function(){
        if (el.classList.contains('buttonHeader')) {
            modalContainer.classList.toggle('show-modal')
            


        }
       
    })
}
adicionarEventoClick()