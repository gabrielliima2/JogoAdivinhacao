//_____________Variáveis_____________
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1


//_____________Eventos_____________
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
//--------(handleTryClick e handleResetClick)--------------função (addEventListener)
//função callback é uma função que é passada como argumento dentro de outra função.
//As funções(handleTryClick e handleResetClick) serão executadas após o event 'click'


//_____________função_____________
function toggleScreen(){
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

//_____________funções callback_____________
function handleTryClick(event) {
    //o padrão do evento de clicar em um button dentro de um formulario, é enviar o formulario.
    //o .preventDefault diz não faça o padrão desse evento.
    //com isso ao clicar no button, ele irá fazer o que o código está mandando.
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")//pega o elemento que tem o id inputNumber
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screenTwo.querySelector("h2").innerText = `acertou em ${attempts} tentativas`      
    }
    attempts++
    inputNumber.value = ""
}

function handleResetClick(){
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
}