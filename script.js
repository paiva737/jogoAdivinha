const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 100 + 1)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector( "#btnReset")
let xAttempts = 1



btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

function exibirDicaNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}


function handleTryClick(event){
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value < 0 || inputNumber.value > 100){
        alert('Apenas numeros entre 0 e 100')
    }

if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    let palavraTentativa = xAttempts > 1 ? 'Tentativas' : 'Tentativa'
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} ${palavraTentativa}`
} else{
if(inputNumber.value > randomNumber){
    exibirDicaNaTela('p', 'O numero secreto é menor')
}else{
    exibirDicaNaTela('p', 'O numero secreto é maior')
}

}
inputNumber.value = ""
  xAttempts++
 
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 100 + 1)
}




function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

