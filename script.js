const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
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

function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(inputNumber.value < 0 || inputNumber.value > 10){
        alert('Apenas numeros entre 0 e 10')
    }

if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
   
}
inputNumber.value = ""
  xAttempts++
 
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}




function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}