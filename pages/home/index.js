const botaoTodos = document.querySelector('.todos')
const botaoEntradas = document.querySelector('.entradas')
const botaoSaidas = document.querySelector('.saidas')
const valorSomaDeValores = document.querySelector('.valor-soma-de-valores')
valorSomaDeValores.innerText = `R$ ${adicionandoSomaDosValores()}`

let entrada = []
let saida = []
let todos = []

const ulEntradas = document.querySelector('.ul-entradas')


function separandoEntradaESaida () {
    insertedValues.forEach((parametro) => {
        if (parametro.categoryID == 1) {
            entrada.push(parametro)
            todos.push(parametro)
        }
        else { saida.push(parametro)
        todos.push(parametro)}
    })
}
separandoEntradaESaida()
function renderizandoEntradaSaida(array) {
    ulEntradas.innerHTML = ""
   array.forEach((valor) => {  
    
    const botaoLixo = document.createElement('button')
    botaoLixo.setAttribute('class', 'excluir')

    const imglixo = document.createElement('img')
    imglixo.setAttribute('class', 'lixo')
    imglixo.setAttribute('src',"./pages/home/lixo.svg" )
    botaoLixo.appendChild(imglixo)
    imglixo.id = valor.id

    const entradaSaida = document.createElement('p')
    entradaSaida.setAttribute('class', 'p-entrada')
    if (valor.categoryID == 1 ){ entradaSaida.innerText = `Entrada`}
    else { entradaSaida.innerText = 'Saída'}

    const botoesLista = document.createElement('div')
    botoesLista.setAttribute('class', 'botoes-lista')


    const listaEntradas = document.createElement('li')
    listaEntradas.setAttribute('class', 'lista-entradas')
    listaEntradas.id = valor.id

    const valorEntrada = document.createElement('p')
    valorEntrada.setAttribute('class', 'valor-entrada')
    valorEntrada.innerText = `R$ ${valor.value}`

    botoesLista.append(entradaSaida, botaoLixo)
    listaEntradas.append(valorEntrada,botoesLista)
    ulEntradas.appendChild(listaEntradas)
    
});
}
renderizandoEntradaSaida(insertedValues)


function retirandoValores () {

    document.addEventListener('click', function (e) {
        const el = e.target

        if (el.classList.contains('excluir') || el.classList.contains('lixo')) {

            let arrayFiltrada = insertedValues.filter((incluir) => {
        
                return incluir.id != el.id
            })

            insertedValues = arrayFiltrada
            renderizandoEntradaSaida(insertedValues)
            removendoNenhumValor()
        } 
        if (el.id == "todos") {renderizandoEntradaSaida(todos)}
        if (el.id == "entradas") {renderizandoEntradaSaida(entrada)}
        if (el.id == "saidas"){renderizandoEntradaSaida(saida)}
        const valorSomaDeValores = document.querySelector('.valor-soma-de-valores')
        valorSomaDeValores.innerText = `R$ ${adicionandoSomaDosValores()}`
    })


}
retirandoValores()

function removendoNenhumValor () {
   
    if (insertedValues.length == 0) {
        nenhumValor.classList.add('show')
        console.log(nenhumValor)
    } else { nenhumValor.classList.remove('show')}
}
removendoNenhumValor()



function adicionarNovaEntradaSaida ( ){
    const inputValor = document.querySelector('.input-valor')
    const botaoEntradaSaida = document.querySelectorAll('.botao-entrada-saida')
    console.log(botaoEntradaSaida)
    

    document.addEventListener('click', function (e) {
       const modalContainer = document.querySelector('.modal-container')
        
        const el = e.target 
        let tipoDoBotao = 1
        console.log(el.id)

        if (el.id == "saida") {
            tipoDoBotao = 2
        }
        let novoObjeto = {
            id: `${insertedValues.length + 1}`,
            value: Number(inputValor.value),
            categoryID: tipoDoBotao,
        }
        console.log(novoObjeto)

        if (el.classList.contains('botao-enviar-modal')){
            if ( Number(inputValor.value) > 0 ) {
                e.preventDefault()
            insertedValues.push(novoObjeto)
            renderizandoEntradaSaida(insertedValues)
            valorSomaDeValores.innerText = `R$ ${adicionandoSomaDosValores()}`
            modalContainer.classList.toggle('show-modal')
            } 
            else { alert('É preciso inserir um número maior que 0')}
        }
            
    })
    console.log(insertedValues)
   

}
adicionarNovaEntradaSaida()

function adicionandoSomaDosValores () {
    let somaDeValores = 0

    insertedValues.forEach((parametro) => {

        somaDeValores += parametro.value

    })
    
    return somaDeValores
}
adicionandoSomaDosValores()


