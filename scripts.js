const convertButton = document.querySelector('.convert-button')
const segundoSelect = document.querySelector('.segundo-select')
const primeiroSelect = document.querySelector('.primeiro-select')


function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 5.2
  


  if (segundoSelect.value == 'dolar' && primeiroSelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)

  }

  if (primeiroSelect.value == 'dolar' && segundoSelect.value == 'real') {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * 4.78) // valor de 4.78 equivale a um dolar com cada moeda o real terá valor diferente 
    
  }



  // currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // }).format(inputCurrencyValue)
  
function formatCurrency() {

  switch (primeiroSelect.value) {
      case 'dolar':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(inputCurrencyValue);

        break;
      case 'real':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(inputCurrencyValue);
        break;

      default:
        break;
    }
}
 formatCurrency()
}





function changeCurrency() {
  const nomeMoeda2 = document.getElementById('nome-moeda-select-2')
  const nomeMoeda1 = document.getElementById('nome-moeda-select-1')
  const currencyImage = document.querySelector('.currency-img')
  const imagemPrimeiroSelect = document.querySelector('.imagem-primeiro-select')
  

  if (segundoSelect.value == 'real') {
    nomeMoeda2.innerHTML = 'Real Brasileiro'
    currencyImage.src = './assets/real.png'
  }

  if (primeiroSelect.value == 'real') {
    nomeMoeda1.innerHTML = 'Real Brasileiro'
    imagemPrimeiroSelect.src = './assets/real.png'
  }

  if (segundoSelect.value == 'dolar') {
    nomeMoeda2.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/dolar.png'
  }

  if (primeiroSelect.value == 'dolar') {
    nomeMoeda1.innerHTML = 'Dólar americano'
    imagemPrimeiroSelect.src = './assets/dolar.png'
  }


  convertValues()
}
primeiroSelect.addEventListener('change', changeCurrency)
segundoSelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
