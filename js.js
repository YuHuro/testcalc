const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const sign = document.querySelector('#choose')
const button = document.querySelector('#mainBtn')
const block = document.querySelector('#mainBlock')

function calc(){
    let temp1 = parseInt(number1.value)
    let temp2 = parseInt(number2.value)

    if(sign.value === '+'){
        block.innerHTML = '<h1>'+'Результат: ' +  (temp1 + temp2) + '</h1>'
    }
    if(sign.value === '-'){
        block.innerHTML = '<h1>'+'Результат: ' +  (temp1 - temp2) + '</h1>'
    }
    if(sign.value === '*'){
        block.innerHTML = '<h1>'+'Результат: ' +  (temp1 * temp2) + '</h1>'
    }
    if(sign.value === '/'){
        block.innerHTML = '<h1>'+'Результат: ' +  (temp1 / temp2) + '</h1>'
    }
    if(sign.value === ''|| temp1 === ''|| temp2 === ''){
        block.innerHTML = '<h1>Заполните ячейки!</h1>'
    }
}

button.addEventListener('click', calc)