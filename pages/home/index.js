
const botaoTodos = document.querySelector('.todos')
const botaoEntradas = document.querySelector('.entradas')
const botaoSaidas = document.querySelector('.saidas')

const ulEntradas = document.querySelector('.ul-entradas')



function criandoValorSomaDeValores(){
    const somaDeValores = document.querySelector('.soma-de-valores')
    const valorSomaDeValortes = document.createElement('p')
    valorSomaDeValortes.setAttribute('class', 'valor-soma-de-valores')
}

criandoValorSomaDeValores()

function criandoCardEntradaSaida() {

    /* const {categoryID, value, id} = insertedValues */


    const botaoLixo = document.createElement('button')
    botaoLixo.setAttribute('class', 'excluir')

    const imglixo = document.createElement('img')
    imglixo.setAttribute('class', 'lixo')
    imglixo.setAttribute('src',"./pages/home/lixo.svg" )
    botaoLixo.appendChild(imglixo)

    const entradaSaida = document.createElement('p')
    entradaSaida.setAttribute('class', 'p-entrada')

    const botoesLista = document.createElement('div')
    botoesLista.setAttribute('class', 'botoes-lista')

    botoesLista.append(entradaSaida, botaoLixo)

    const listaEntradas = document.createElement('li')
    listaEntradas.setAttribute('class', 'lista-entradas')
    /* listaEntradas.setAttribute('id', id) */

    const valorEntrada = document.createElement('p')
    valorEntrada.setAttribute('class', 'valor-entrada')
    valorEntrada.innerText = `R$ 50,00`

    listaEntradas.append(valorEntrada,botoesLista)

    

    return listaEntradas
}
criandoCardEntradaSaida()
   

/* const renderCards = (valoresLista) => {
    let listaEntradasESaidas = {...criandoCardEntradaSaida}
    console.log(listaEntradasESaidas)
    valoresLista.forEach((elemento) => {
        
        elemento.forEach((dados) => {
            listaENtradasESaidas
        })
        
    });
}
renderCards(insertedValues) */

function displayMobile () {
    if ( window.innerWidth <= 500) {
        
    }
}
console.log(window.innerWidth )