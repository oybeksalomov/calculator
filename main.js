const calcInput = document.querySelector('.calcInput'),
    buttonBox = document.getElementsByClassName('.buttonBox'),
    numberButtons = document.getElementsByClassName('numberButton'),
    deleteButton = document.querySelector('.deleteButton'), 
    plusButton = document.querySelector('.plusButton'),  
    minusButton = document.querySelector('.minusButton'),
    multiplyButton = document.querySelector('.multiplyButton'),
    divideButton = document.querySelector('.divideButton'),
    equalButton = document.querySelector('.equalButton'),
    resetButton = document.querySelector('.resetButton')    

let firstValue
let operatorType
let secondValue
let result

for(let numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calcInput.textContent += numberButton.innerText
    })
}

const deleteNumber = function() {
    let inputValue = calcInput.innerText
    calcInput.textContent = inputValue.slice(0, -1)
}

const saveFirstValue = function(value) {
    if(calcInput.innerText) {
        firstValue = calcInput.innerText
  
    } else {
        firstValue = 0
    }
    calcInput.textContent = ''
    operatorType = value.target.innerText
}

const calculate = function() {
    secondValue = calcInput.innerText
    if(operatorType === '+') {
        result = Number(firstValue) + Number(secondValue)
    } else if(operatorType === '-') {
        result = Number(firstValue) - Number(secondValue)
    } else if(operatorType === '/') {
        result = Number(firstValue) / Number(secondValue)
    } else if(operatorType === '*') {
        result = Number(firstValue) * Number(secondValue)
    }
    calcInput.textContent = result
}

const reset = function() {
    firstValue = ''
    secondValue = ''
    calcInput.textContent = ''
}

deleteButton.addEventListener('click', deleteNumber)
plusButton.addEventListener('click', saveFirstValue)
equalButton.addEventListener('click', calculate)
minusButton.addEventListener('click', saveFirstValue)
multiplyButton.addEventListener('click', saveFirstValue)
divideButton.addEventListener('click', saveFirstValue)
resetButton.addEventListener('click', reset)


