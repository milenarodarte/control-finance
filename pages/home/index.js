const botaoTodos = document.querySelector('.todos')
const botaoEntradas = document.querySelector('.entradas')
const botaoSaidas = document.querySelector('.saidas')
const valorSomaDeValores = document.querySelector('.valor-soma-de-valores')
valorSomaDeValores.innerText = `R$ ${adicionandoSomaDosValores()}`

let entrada = []
let saida = []
let todos = []


const ulEntradas = document.querySelector('.ul-entradas')


function separandoEntradaESaida (array) {
    entrada = []
    saida = []
    todos = []

    array.forEach((parametro) => {
        if (parametro.categoryID == 1) {

            entrada.push(parametro)
            todos.push(parametro)
            
        }
        else { saida.push(parametro)
            
        todos.push(parametro)}
    })
   
}

separandoEntradaESaida(insertedValues)


// tem que chamar pra renderizar a entrada e a saida 


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
        
        separandoEntradaESaida(insertedValues)
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
       
    } else { nenhumValor.classList.remove('show')}
}
removendoNenhumValor()






    
    






let novoObjeto = {}

function adicionarNovaEntradaSaida ( ){
    const inputValor = document.querySelector('.input-valor')
    const botaoEntradaSaida = document.querySelectorAll('.botao-entrada-saida')
     
    document.addEventListener('click', function (e){
        const el = e.target
        
        if (el.classList.contains('botao-entrada-saida')){
           
            let tipoDoBotao = 1 
            if (el.id == "2") {
                tipoDoBotao = 2
            }

            novoObjeto = {
                id: `${insertedValues.length + 1}`,
                value: Number(inputValor.value),
                categoryID: tipoDoBotao,
            }
        }   
        
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


