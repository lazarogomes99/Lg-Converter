const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

const inputValue = document.querySelector('#value-real')
const selectCurrency = document.querySelector('#currency')
const result = document.querySelector('#result')
let valueConverted = 0
let euro = 5.33
let dolar = 4.97

function handleSubmit(e) {
    e.preventDefault()

    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor válido.')
        return
    }else if (!selectCurrency.value) {
        alert('Escolha uma moeda para conversão!')
        return
    }
    converter()
}


function converter () {
    if(selectCurrency.value === 'eur') {
        valueConverted = inputValue.value / euro
        result.innerHTML = valueFormater('pt-BR', 'EUR')
        animateResult()

    } else if (selectCurrency.value === 'dol') {
        valueConverted = inputValue.value / dolar
        result.innerHTML = valueFormater('en-US', 'USD')
        animateResult()
    }

    inputValue.value = ''
    selectCurrency.value = ''
}


function valueFormater(locale, currency){
    const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`})
    return `<span>🤑</span> ${value} <span>🤑</span>`
}


function animateResult() {
    return result.animate([
        {transform: 'translateY(-110px)'},
        {transform: 'translateY(0px)'}
    ], {duration: 600})
}