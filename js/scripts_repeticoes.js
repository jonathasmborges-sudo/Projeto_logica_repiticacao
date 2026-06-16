//ESTRUTURA DE REPETICAO FOR
const divFor= document.querySelector('#div-for')

for(i = 0;i < 10; i++){
    console.log (i, 'Amor')
    divFor.innerHTML += '$(i) - Amor <br>'
}

//Contador/Acumulador
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0 

btnNum.addEventListener('click', (evt)=>{
 let numDigitado = Number (inputNum.value) 
 
 cont++ 
 acum += numDigitado

 divContAcum.innerHTML = 'Total de Número Digitado é: ${cont} <br> A soma dos Números é'
 inputNum.value = ''

})