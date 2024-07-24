const USD = 5.63
const EUR = 6.11
const GBP = 7

const valueToConvert = document.querySelector('#amount');
const form = document.querySelector('form');
const select = document.querySelector('select');
const footer = document.querySelector('footer');
const description = document.querySelector('#description')
const result = document.querySelector('#result')


valueToConvert.addEventListener('input' ,() =>{
  const hasCh = /\D+/g
  valueToConvert.value = valueToConvert.value.replace(hasCh, "")

})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  switch (select.value) {
    case 'USD':
      convertCurrency(valueToConvert.value, USD, '$');
      break;
    case 'EUR':
      convertCurrency(valueToConvert.value, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(valueToConvert.value, GBP, '£');
      break;
    default:
      alert('Selecione uma moeda válida');
  }

})


function convertCurrency(amount, price,  symbol){
  try{
    footer.classList.add('show-result')
    description.textContent = `${symbol} 1 = ${convertToBRL(price)}`
    let total = amount*price

    if(isNaN(total)){
      return alert('Favor fornecer um número')
    }


    total = convertToBRL(total).replace('R$', "")
    result.textContent = `${total} Reais`
  }catch(error){

    footer.classList.remove('show-result')
    console.log(error)
    alert('erro ao converter')
  }
  
}

function convertToBRL(value){
  return Number(value).toLocaleString('pt-br', {
    style: "currency",
    currency: 'BRL'
  })
}